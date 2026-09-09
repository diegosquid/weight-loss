import { getStore } from "@netlify/blobs";
import { dayInBrazil } from "../lib/funnel.mjs";
export default async () => {
  const store = getStore("metabolic-funnel-v1");
  const cutoff = dayInBrazil(new Date(Date.now() - 90 * 86400000));
  const qaCutoff = dayInBrazil(new Date(Date.now() - 7 * 86400000));
  for await (const { blobs } of store.list({ paginate: true })) {
    for (const { key } of blobs) {
      const [kind, day] = key.split("/");
      if ((kind === "events" && day < cutoff) || (kind === "qa" && day < qaCutoff)) await store.delete(key);
    }
  }
  return new Response(null, { status: 204 });
};
export const config = { schedule: "15 5 * * *" };
