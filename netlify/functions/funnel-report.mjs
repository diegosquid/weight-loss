import { getStore } from "@netlify/blobs";
import { authenticated, summarize, validDay } from "../lib/funnel.mjs";
export default async (request) => {
  if (request.method !== "GET") return new Response(null, { status: 405 });
  if (!authenticated(request)) return new Response(null, { status: 401, headers: { "Cache-Control": "no-store" } });
  const query = new URL(request.url).searchParams;
  const from = query.get("from") || ""; const to = query.get("to") || "";
  const span = Date.parse(to) - Date.parse(from);
  if (![from, to].every(validDay) || !Number.isFinite(span) || span < 0 || span > 90 * 86400000) return new Response(null, { status: 400 });
  const qa = query.get("qa") === "1";
  const { blobs } = await getStore({ name: "metabolic-funnel-v1", consistency: "strong" }).list({ prefix: qa ? "qa/" : "events/" });
  return Response.json({ from, to, timezone: "America/Sao_Paulo", qa, rows: summarize(blobs.map(x => x.key), { from, to, qa }), note: "Counts of actions, not unique people. Bot traffic and repeat visits may be included; browser blocking may omit events. Sales are reconciled separately in ClickBank by TID." }, { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } });
};
export const config = { path: "/api/funnel-report/" };
