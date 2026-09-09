import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const root = "dist"; const origin = "https://metabolicscience.org";
const urls = [...fs.readFileSync(`${root}/sitemap.xml`, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
const errors = []; const titlePages = new Map(); const internalTargets = new Set();
for (const url of urls) {
  const route = new URL(url).pathname;
  const file = path.join(root, route, "index.html");
  if (!fs.existsSync(file)) { errors.push(`${url}: no export`); continue; }
  const html = fs.readFileSync(file, "utf8");
  const canonicals = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  if (canonicals.length !== 1 || canonicals[0][1] !== url || !url.endsWith("/")) errors.push(`${url}: canonical mismatch`);
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${url}: H1 count`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title || titlePages.has(title)) errors.push(`${url}: missing/duplicate title (${titlePages.get(title)})`);
  titlePages.set(title, url);
  for (const name of ['property="og:title"','property="og:description"','name="twitter:title"','name="description"']) if (!html.includes(name)) errors.push(`${url}: missing ${name}`);
  if (!html.includes(`property="og:url" content="${url}"`)) errors.push(`${url}: incorrect OG URL`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) { try { JSON.parse(match[1]); } catch { errors.push(`${url}: invalid JSON-LD`); } }
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  if (/\[\^\d+\^?\]/.test(visible)) errors.push(`${url}: unrendered footnote`);
  for (const [, raw] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const destination = new URL(raw.replace(/&amp;/g, "&"), url);
    if (destination.origin !== origin) continue;
    internalTargets.add(destination.pathname);
    if (!fs.existsSync(path.join(root, destination.pathname)) && !fs.existsSync(path.join(root, destination.pathname, "index.html"))) errors.push(`${url}: broken link ${destination.pathname}`);
    if (destination.pathname === route && destination.hash) {
      const id = decodeURIComponent(destination.hash.slice(1));
      if (!html.includes(`id="${id}"`)) errors.push(`${url}: broken fragment ${id}`);
    }
  }
}
assert(fs.statSync(`${root}/og-image.jpg`).size > 5000, "Social image is missing or empty");
for (const url of urls) if (url !== origin + "/" && !internalTargets.has(new URL(url).pathname)) errors.push(`${url}: no incoming navigation link`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`SEO export verified: ${urls.length} canonical pages; unique titles, one H1, matching social metadata, valid JSON-LD, rendered footnotes and no broken internal links.`);
