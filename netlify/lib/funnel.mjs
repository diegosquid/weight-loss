import { randomUUID, verify } from "node:crypto";
import config from "../../config/funnel.json" with { type: "json" };
import publicKey from "../../config/funnel-report-public-key.json" with { type: "json" };

export const origin = "https://metabolicscience.org";
export const dayInBrazil = (date = new Date()) => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
const pages = Object.values(config.pages);
export function validEvent(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const keys = Object.keys(data).sort().join(",");
  if (keys !== "entry,event,offer,page,placement" && keys !== "entry,event,offer,page,placement,qa") return false;
  if ("qa" in data && data.qa !== true) return false;
  const { event, page, offer, entry, placement } = data;
  if (![event, page, offer, entry, placement].every(value => typeof value === "string")) return false;
  if (!pages.includes(page) || !config.placements.includes(placement)) return false;
  const product = Object.hasOwn(config.offers, offer) ? config.offers[offer] : null;
  if (event === "view") return placement === "context" && (product ? product.page === page && product.sources.includes(entry) : offer === "none" && !Object.values(config.offers).some(x => x.page === page) && entry === "direct");
  if (event === "review_click") return !!product && product.sources.includes(page) && page !== "direct" && entry === "direct" && placement === (["home", "resources"].includes(page) ? page : "context");
  if (event === "offer_click") return !!product && product.page === page && product.sources.includes(entry) && ["summary", "end"].includes(placement);
  return false;
}
export function eventKey(data, now = new Date()) {
  return `${data.qa ? "qa" : "events"}/${dayInBrazil(now)}/${data.event}/${data.page}/${data.offer}/${data.entry}/${data.placement}/${randomUUID()}`;
}
export function authenticated(request, now = Date.now()) {
  const timestamp = request.headers.get("x-report-time") || "";
  const signature = request.headers.get("x-report-signature") || "";
  if (!/^\d{13}$/.test(timestamp) || Math.abs(now - Number(timestamp)) > 300000) return false;
  const url = new URL(request.url);
  try { return verify(null, Buffer.from(`${timestamp}\n${request.method}\n${url.pathname}${url.search}`), publicKey.pem, Buffer.from(signature, "base64")); } catch { return false; }
}
export function summarize(keys, { from, to, qa = false }) {
  const totals = {};
  for (const key of keys) {
    const [kind, day, event, page, offer, entry, placement] = key.split("/");
    if (kind !== (qa ? "qa" : "events") || day < from || day > to) continue;
    const group = [day, event, page, offer, entry, placement].join("|");
    totals[group] = (totals[group] || 0) + 1;
  }
  return Object.entries(totals).sort().map(([group, count]) => {
    const [day, event, page, offer, entry, placement] = group.split("|");
    return { day, event, page, offer, entry, placement, count };
  });
}

export function validDay(value) { const time = Date.parse(value); return /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value; }
