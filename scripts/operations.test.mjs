import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { sign } from "node:crypto";
import { homedir } from "node:os";
import { validEvent, eventKey, summarize, authenticated, validDay } from "../netlify/lib/funnel.mjs";
import collector from "../netlify/functions/funnel.mjs";
import report from "../netlify/functions/funnel-report.mjs";
import { taskForDay, brtDay, assertPublicationDay } from "./editorial-job.mjs";
import config from "../config/funnel.json" with { type: "json" };
const view = { event: "view", page: "pb_review", offer: "plantbc", entry: "sg", placement: "context" };
test("strict event contract rejects health data, free text, cross-offer attribution and prototype keys", () => {
  assert.equal(validEvent(view), true);
  for (const patch of [{ weight: 82 }, { url: "https://example.test/?email=private" }, { entry: "mm" }, { offer: "__proto__" }, { offer: ["plantbc"] }, { offer: {} }, { event: "search" }, { page: "bmi" }, { placement: "unknown" }]) assert.equal(validEvent({ ...view, ...patch }), false);
  assert.equal(validEvent({ event: "review_click", page: "home", offer: "fitin56", entry: "direct", placement: "home" }), true);
  assert.equal(validEvent({ ...view, event: "offer_click", placement: "summary" }), true);
});
test("event keys are collision-free and QA is isolated from real counts", () => {
  const now = new Date("2026-09-10T01:00:00Z");
  const keys = Array.from({ length: 1000 }, () => eventKey(view, now));
  assert.equal(new Set(keys).size, 1000);
  keys.push(eventKey({ ...view, qa: true }, now), eventKey(view, new Date("2026-08-01T15:00:00Z")));
  assert.equal(summarize(keys, { from: "2026-09-09", to: "2026-09-09" })[0].count, 1000);
  assert.equal(summarize(keys, { from: "2026-09-09", to: "2026-09-09", qa: true })[0].count, 1);
});
test("report endpoint requires an unexpired path-bound signature", async () => {
  const url = "https://metabolicscience.org/api/funnel-report/?from=2026-09-09&to=2026-09-09";
  assert.equal((await report(new Request(url))).status, 401);
  assert.equal(authenticated(new Request(url)), false);
  // Local-only signature proof; CI without the private key still tests rejection.
  let key; try { key = readFileSync(`${homedir()}/.config/metabolic-science/funnel-report-key.pem`); } catch { return; }
  const timestamp = Date.now().toString(); const path = new URL(url).pathname + new URL(url).search;
  const signature = sign(null, Buffer.from(`${timestamp}\nGET\n${path}`), key).toString("base64");
  const headers = { "x-report-time": timestamp, "x-report-signature": signature };
  assert.equal(authenticated(new Request(url, { headers })), true);
  assert.equal(authenticated(new Request(url + "&qa=1", { headers })), false);
  assert.equal(authenticated(new Request(url, { headers }), Number(timestamp) + 300001), false);
});
test("collector rejects oversized, invalid and cross-origin requests before storage", async () => {
  const request = (body, origin = "https://metabolicscience.org") => new Request("https://metabolicscience.org/api/funnel/", { method: "POST", headers: { origin, "content-type": "application/json" }, body });
  assert.equal((await collector(request(JSON.stringify(view), "https://other.test"))).status, 403);
  assert.equal((await collector(request(JSON.stringify({ ...view, weight: 82 })))).status, 400);
  assert.equal((await collector(request("x".repeat(2000)))).status, 413);
  assert.equal((await collector(new Request("https://metabolicscience.org/api/funnel/"))).status, 405);
  assert.equal(validDay("2026-99-99"), false); assert.equal(validDay("2026-02-30"), false); assert.equal(validDay("2026-09-09"), true);
});
test("editorial calendar observes BRT, bounded cadence and preserved publication dates", () => {
  assert.equal(brtDay(new Date("2026-09-14T01:00:00Z")), "2026-09-13");
  assert.equal(taskForDay("2026-09-09"), null);
  assert.equal(taskForDay("2026-09-14").kind, "new");
  assert.equal(taskForDay("2026-09-15").kind, "review");
  assert.equal(taskForDay("2026-09-19"), null);
  assert.equal(taskForDay("2026-10-12"), null);
  assert.throws(() => assertPublicationDay({ publishedAt: "2026-09-13" }, "2026-09-14"));
});
test("client and server use the same reviewed source allowlists", async () => {
  const ts = await import("typescript");
  const js = ts.default.transpileModule(readFileSync("lib/affiliate.ts", "utf8"), { compilerOptions: { module: ts.default.ModuleKind.ESNext } }).outputText;
  const { affiliateOffers } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
  for (const [offer, values] of Object.entries(config.offers)) assert.deepEqual([...affiliateOffers[offer].sources].sort(), [...values.sources].sort());
});
