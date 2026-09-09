import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
const origin = "https://metabolicscience.org";
const commit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const get = url => fetch(url, { redirect: "manual", signal: AbortSignal.timeout(30000) });
const release = await get(`${origin}/release.json?check=${Date.now()}`);
if (!release.ok || (await release.json()).commit !== commit) throw new Error("Latest commit is not deployed");
const sitemapResponse = await get(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error("Public sitemap unavailable");
const urls = [...(await sitemapResponse.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
const localUrls = [...fs.readFileSync("dist/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
if (JSON.stringify([...urls].sort()) !== JSON.stringify([...localUrls].sort())) throw new Error("Public/local sitemap mismatch");
let cursor = 0; const results = [];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    try {
      const response = await get(url); const html = await response.text();
      const local = fs.readFileSync(path.join("dist", new URL(url).pathname, "index.html"), "utf8");
      const title = value => value.match(/<title>([^<]+)<\/title>/)?.[1];
      results.push({ url, status: response.status, verified: response.status === 200 && html.includes(`rel="canonical" href="${url}"`) && title(html) === title(local) && (html.match(/<h1\b/g) || []).length === 1 });
    } catch (error) { results.push({ url, verified: false, error: error.message }); }
  }
}));
const image = await get(`${origin}/og-image.jpg`);
const unauthorized = await get(`${origin}/api/funnel-report/`);
const unknown = await get(`${origin}/metabolic-audit-page-that-does-not-exist/`);
const redirects = [];
for (const line of fs.readFileSync("public/_redirects", "utf8").trim().split("\n")) {
  const [from, to] = line.split(/\s+/); const response = await get(origin + from);
  const location = response.headers.get("location"); redirects.push({ from, to, status: response.status, verified: response.status === 301 && new URL(location || "", origin).href === origin + to });
}
const report = { checkedAt: new Date().toISOString(), commit, total: urls.length, pagesPassed: results.filter(x => x.verified).length, socialImage: image.status === 200 && image.headers.get("content-type")?.startsWith("image/"), privateReportProtected: unauthorized.status === 401, unknownPage404: unknown.status === 404, redirects, failures: results.filter(x => !x.verified) };
fs.mkdirSync("docs/reports", { recursive: true });fs.writeFileSync("docs/reports/production-verification-2026-09-09.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
if (report.failures.length || !report.socialImage || !report.privateReportProtected || !report.unknownPage404 || redirects.some(x => !x.verified)) process.exit(1);
