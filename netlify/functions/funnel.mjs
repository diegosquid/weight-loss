import { getStore } from "@netlify/blobs";
import { validEvent, eventKey, origin } from "../lib/funnel.mjs";
export default async (request) => {
  if (request.method !== "POST") return new Response(null, { status: 405, headers: { Allow: "POST" } });
  if (request.headers.get("origin") !== origin || !request.headers.get("content-type")?.startsWith("application/json")) return new Response(null, { status: 403 });
  if (Number(request.headers.get("content-length")) > 1024) return new Response(null, { status: 413 });
  // Streaming bound also covers chunked bodies without Content-Length.
  const reader = request.body?.getReader();
  if (!reader) return new Response(null, { status: 400 });
  let bytes = 0; const chunks = [];
  while (true) { const { done, value } = await reader.read(); if (done) break; bytes += value.length; if (bytes > 1024) { await reader.cancel(); return new Response(null, { status: 413 }); } chunks.push(value); }
  let data; try { data = JSON.parse(Buffer.concat(chunks).toString()); } catch { return new Response(null, { status: 400 }); }
  if (!validEvent(data)) return new Response(null, { status: 400 });
  await getStore("metabolic-funnel-v1").set(eventKey(data), "1");
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
};
export const config = { path: "/api/funnel/", rateLimit: { action: "rate_limit", aggregateBy: "domain", windowSize: 60, windowLimit: 300 } };
