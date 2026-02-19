import { getAllArticles, getAllCategories } from "@/lib/content";

const BASE_URL = "https://metabolicscience.org";

const STATIC_PAGES = [
  { path: "",                  priority: "1.0", changefreq: "weekly" },
  { path: "about",             priority: "0.5", changefreq: "monthly" },
  { path: "editorial-policy",  priority: "0.3", changefreq: "monthly" },
  { path: "privacy",           priority: "0.3", changefreq: "monthly" },
  { path: "articles",          priority: "0.8", changefreq: "weekly" },
  { path: "glp-1",             priority: "0.8", changefreq: "weekly" },
  { path: "metabolism",        priority: "0.8", changefreq: "weekly" },
  { path: "supplements",       priority: "0.8", changefreq: "weekly" },
  { path: "tools",             priority: "0.7", changefreq: "monthly" },
  { path: "calculators",       priority: "0.7", changefreq: "monthly" },
  { path: "calculators/bmi",   priority: "0.6", changefreq: "monthly" },
  { path: "calculators/calorie", priority: "0.6", changefreq: "monthly" },
  { path: "calculators/macro",   priority: "0.6", changefreq: "monthly" },
  { path: "calculators/body-fat", priority: "0.6", changefreq: "monthly" },
];

export async function GET() {
  const articles = getAllArticles();
  const today = new Date().toISOString().split("T")[0];

  const staticEntries = STATIC_PAGES.map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("");

  const articleEntries = articles.map(
    (article) => `
  <url>
    <loc>${BASE_URL}/${article.categorySlug}/${article.slug}</loc>
    <lastmod>${article.updatedAt || article.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticEntries}
  ${articleEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
