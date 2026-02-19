import { getAllArticles } from "@/lib/content";

export async function GET() {
  const articles = getAllArticles();
  const baseUrl = "https://metabolichealthauthority.com";

  const staticPages = [
    "",
    "about",
    "editorial-policy",
    "articles",
    "calculators",
    "calculators/bmi",
    "calculators/calorie",
    "calculators/macro",
    "calculators/body-fat",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>
  `
    )
    .join("")}
  ${articles
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${article.updatedAt || article.publishedAt}</lastmod>
    <priority>0.7</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
