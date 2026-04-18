import type { MetadataRoute } from "next";
import { getAllArticles, getAllCategories } from "@/lib/content";

const BASE_URL = "https://metabolicscience.org";

export const dynamic = "force-static";

const STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "",                    priority: 1.0, changeFrequency: "weekly" },
  { path: "articles",            priority: 0.8, changeFrequency: "weekly" },
  { path: "glp-1",               priority: 0.8, changeFrequency: "weekly" },
  { path: "metabolism",          priority: 0.8, changeFrequency: "weekly" },
  { path: "supplements",         priority: 0.8, changeFrequency: "weekly" },
  { path: "medications",         priority: 0.8, changeFrequency: "weekly" },
  { path: "tools",               priority: 0.7, changeFrequency: "monthly" },
  { path: "calculators",         priority: 0.7, changeFrequency: "monthly" },
  { path: "calculators/bmi",     priority: 0.6, changeFrequency: "monthly" },
  { path: "calculators/calorie", priority: 0.6, changeFrequency: "monthly" },
  { path: "calculators/macro",   priority: 0.6, changeFrequency: "monthly" },
  { path: "calculators/body-fat",priority: 0.6, changeFrequency: "monthly" },
  { path: "about",               priority: 0.5, changeFrequency: "monthly" },
  { path: "editorial-policy",    priority: 0.3, changeFrequency: "monthly" },
  { path: "privacy",             priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articles = getAllArticles();
  const categories = getAllCategories();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: page.path ? `${BASE_URL}/${page.path}` : `${BASE_URL}/`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const knownStatic = new Set(STATIC_PAGES.map((p) => p.path));
  const extraCategoryEntries: MetadataRoute.Sitemap = categories
    .filter((slug) => !knownStatic.has(slug))
    .map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/${article.categorySlug}/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...extraCategoryEntries, ...articleEntries];
}
