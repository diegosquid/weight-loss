import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "marked";
import markedFootnote from "marked-footnote";
import { Article, Author, FAQ } from "@/types";
import { authors, editorialAuthor } from "@/lib/authors";
import { isAffiliateOffer } from "@/lib/affiliate";

const markdown = new Marked().use(markedFootnote());

export { authors };

const ARTICLES_DIR = path.join(process.cwd(), "content");

function parseArticleFile(categorySlug: string, slug: string): Article | undefined {
  const extensions = [".mdx", ".md"];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const candidate = path.join(ARTICLES_DIR, categorySlug, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const htmlContent = markdown.parse(content) as string;

  const author = authors[data.author as string] ?? editorialAuthor;
  const medicalReviewer = data.medicalReviewer
    ? authors[data.medicalReviewer as string]
    : undefined;

  const wordCount = content.split(/\s+/).length;
  const readingTime = data.readingTime ?? Math.ceil(wordCount / 200);

  const rawFaqs = data.faqs as unknown;
  const faqs: FAQ[] | undefined = Array.isArray(rawFaqs)
    ? (rawFaqs as Array<Record<string, unknown>>)
        .map((f) => ({
          question: String(f.question ?? "").trim(),
          answer: String(f.answer ?? "").trim(),
        }))
        .filter((f) => f.question && f.answer)
    : undefined;

  return {
    slug,
    categorySlug,
    title: data.title as string,
    description: data.description as string,
    content: htmlContent,
    publishedAt: data.publishedAt as string,
    updatedAt: data.updatedAt as string | undefined,
    author,
    medicalReviewer,
    category: data.category as string,
    tags: (data.tags as string[]) ?? [],
    featured: (data.featured as boolean) ?? false,
    readingTime,
    faqs: faqs && faqs.length > 0 ? faqs : undefined,
    affiliateOffer: isAffiliateOffer(data.affiliateOffer) ? data.affiliateOffer : undefined,
  };
}

let productionArticles: Article[] | undefined;
export function getAllArticles(): Article[] {
  if (process.env.NODE_ENV === "production" && productionArticles) return productionArticles;
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const categories = fs.readdirSync(ARTICLES_DIR).filter((name) => {
    return fs.statSync(path.join(ARTICLES_DIR, name)).isDirectory();
  });

  const articles: Article[] = [];

  for (const categorySlug of categories) {
    const categoryDir = path.join(ARTICLES_DIR, categorySlug);
    const files = fs
      .readdirSync(categoryDir)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(/\.mdx?$/, "");
      const article = parseArticleFile(categorySlug, slug);
      if (article) articles.push(article);
    }
  }

  const sorted = articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  if (process.env.NODE_ENV === "production") productionArticles = sorted;
  return sorted;
}

export function getArticleBySlug(categorySlug: string, slug: string): Article | undefined {
  return parseArticleFile(categorySlug, slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug);
}

export function getAllCategories(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((name) => {
    return fs.statSync(path.join(ARTICLES_DIR, name)).isDirectory();
  });
}

export interface NavChild {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  key: string; // used to map icons in the client component
  children: NavChild[];
  totalArticles: number; // total count (children may be truncated)
}

const NAV_MAX_CHILDREN = 4;

/** Build navigation items dynamically from content + static pages */
export function getNavItems(): NavItem[] {
  const categoryMeta: Record<string, { label: string; key: string }> = {
    "glp-1":        { label: "GLP-1",        key: "glp-1" },
    "medications":  { label: "Medications",  key: "medications" },
    "metabolism":   { label: "Metabolism",   key: "metabolism" },
    "supplements":  { label: "Supplements",  key: "supplements" },
  };

  const categories = getAllCategories();
  const items: NavItem[] = [];

  for (const cat of categories) {
    const meta = categoryMeta[cat];
    if (!meta) continue;

    const articles = getArticlesByCategory(cat);
    const children: NavChild[] = articles.slice(0, NAV_MAX_CHILDREN).map((a) => ({
      label: a.title,
      href: `/${a.categorySlug}/${a.slug}/`,
      description: a.description.length > 60 ? a.description.slice(0, 57) + "..." : a.description,
    }));

    items.push({ label: meta.label, href: `/${cat}/`, key: meta.key, children, totalArticles: articles.length });
  }

  items.push({ label: "Resources", href: "/resources/", key: "resources", totalArticles: 2, children: [
    { label: "Product assessments", href: "/resources/", description: "Costs, limitations and free alternatives" },
  ] });

  // Static: Tools
  items.push({
    label: "Tools",
    href: "/tools/",
    key: "tools",
    totalArticles: 4,
    children: [
      { label: "BMI Calculator",     href: "/calculators/bmi/",      description: "Body Mass Index" },
      { label: "Calorie Calculator",  href: "/calculators/calorie/",  description: "Daily calorie needs" },
      { label: "Macro Calculator",    href: "/calculators/macro/",    description: "Macronutrient targets" },
      { label: "Body Fat %",          href: "/calculators/body-fat/", description: "Estimate body composition" },
    ],
  });

  return items;
}

/** @deprecated use getArticleBySlug(categorySlug, slug) */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}

/** Compact, client-safe per-article record used to power the header search. */
export interface SearchIndexEntry {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

/**
 * Build a search index for the client-side header search.
 * Called from the root layout (server component) — the result is serialized
 * into the SearchBar as a prop. No /search route is ever created; filtering
 * is pure in-browser so we never expose query-string URLs to crawlers.
 */
export function getSearchIndex(): SearchIndexEntry[] {
  return getAllArticles().map((a) => ({
    slug: a.slug,
    categorySlug: a.categorySlug,
    title: a.title,
    description: a.description,
    category: a.category,
    tags: a.tags,
  }));
}

/** A same-category reading sequence plus tag matches; excludes paid assessments from clinical recommendations. */
export function getRelatedArticles(article: Article): Article[] {
  const all = getAllArticles();
  if (article.affiliateOffer) {
    const slugs = article.affiliateOffer === "plantbc" ? ["supplements-for-weight-loss", "natural-thermogenics"] : ["muscle-and-metabolism", "boosting-metabolism"];
    return slugs.map(slug => all.find(a => a.slug === slug)).filter((a): a is Article => !!a);
  }
  const peers = all.filter(a => a.categorySlug === article.categorySlug && !a.affiliateOffer);
  const index = peers.findIndex(a => a.slug === article.slug);
  const next = index >= 0 && peers.length > 1 ? peers[(index + 1) % peers.length] : undefined;
  const tags = new Set(article.tags.map(t => t.toLowerCase()));
  const ranked = peers.filter(a => a.slug !== article.slug && a.slug !== next?.slug)
    .map(a => ({ article: a, score: a.tags.filter(t => tags.has(t.toLowerCase())).length }))
    .sort((a, b) => b.score - a.score).slice(0, next ? 2 : 3).map(a => a.article);
  return next ? [next, ...ranked] : ranked;
}
