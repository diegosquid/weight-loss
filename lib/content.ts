import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Article, Author } from "@/types";

const ARTICLES_DIR = path.join(process.cwd(), "content");

export const authors: Record<string, Author> = {
  "sarah-mitchell": {
    name: "Dr. Sarah Mitchell",
    slug: "sarah-mitchell",
    title: "Medical Director",
    credentials: "MD, FACP",
    bio: "Dr. Sarah Mitchell is a board-certified internist specializing in metabolic medicine and weight management. With over 15 years of clinical experience, she has helped thousands of patients achieve sustainable weight loss through evidence-based approaches.",
    specialties: ["Internal Medicine", "Obesity Medicine", "Metabolic Health"],
    affiliations: ["American College of Physicians", "Obesity Medicine Association"],
  },
  "james-chen": {
    name: "Dr. James Chen",
    slug: "james-chen",
    title: "Endocrinologist",
    credentials: "MD, PhD, FACE",
    bio: "Dr. James Chen is a fellowship-trained endocrinologist with expertise in diabetes, metabolism, and hormone-related weight disorders. His research on GLP-1 receptor agonists has been published in leading medical journals.",
    specialties: ["Endocrinology", "Diabetes", "Metabolic Disorders"],
    affiliations: ["American Association of Clinical Endocrinologists", "Endocrine Society"],
  },
  "emily-rodriguez": {
    name: "Emily Rodriguez",
    slug: "emily-rodriguez",
    title: "Senior Medical Writer",
    credentials: "MPH, RD",
    bio: "Emily Rodriguez is a registered dietitian and public health specialist. She translates complex medical research into accessible, actionable content for patients and healthcare providers.",
    specialties: ["Nutrition", "Public Health", "Medical Writing"],
    affiliations: ["Academy of Nutrition and Dietetics"],
  },
};

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

  const htmlContent = marked(content) as string;

  const author = authors[data.author as string] ?? authors["sarah-mitchell"];
  const medicalReviewer = data.medicalReviewer
    ? authors[data.medicalReviewer as string]
    : undefined;

  const wordCount = content.split(/\s+/).length;
  const readingTime = data.readingTime ?? Math.ceil(wordCount / 200);

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
  };
}

export function getAllArticles(): Article[] {
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

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
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

/** @deprecated use getArticleBySlug(categorySlug, slug) */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
