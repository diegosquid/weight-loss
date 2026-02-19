import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MedicalReviewBadge } from "@/components/eeat/MedicalReviewBadge";
import { AuthorBio } from "@/components/eeat/AuthorBio";
import { JsonLd, generateArticleSchema, generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { getArticleBySlug, getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://metabolichealthauthority.com/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.description,
    url: `https://metabolichealthauthority.com/articles/${article.slug}`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    author: { name: article.author.name },
    medicalReviewer: article.medicalReviewer
      ? {
          name: article.medicalReviewer.name,
          credentials: article.medicalReviewer.credentials || "",
        }
      : undefined,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://metabolichealthauthority.com" },
    { name: "Articles", url: "https://metabolichealthauthority.com/articles" },
    { name: article.title, url: `https://metabolichealthauthority.com/articles/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Header />
      
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link
                href="/articles"
                className="inline-flex items-center gap-1 text-sm text-[var(--gray-700)] hover:text-[var(--primary)] mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Link>

              {/* Header */}
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--primary-light)] text-sm font-medium text-[var(--primary)]">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-sm font-medium text-amber-700">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--gray-900)] mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-lg text-[var(--gray-700)] mb-6">{article.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--gray-700)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Published {formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readingTime} min read</span>
                  </div>
                  {article.updatedAt && (
                    <div className="flex items-center gap-1">
                      <RefreshCw className="w-4 h-4" />
                      <span>Updated {formatDate(article.updatedAt)}</span>
                    </div>
                  )}
                </div>
              </header>

              {/* Medical Review Badge */}
              {article.medicalReviewer && (
                <div className="mb-8">
                  <MedicalReviewBadge
                    reviewerName={article.medicalReviewer.name}
                    reviewerCredentials={article.medicalReviewer.credentials}
                    reviewDate={formatDate(article.updatedAt || article.publishedAt)}
                  />
                </div>
              )}

              {/* Content */}
              <div
                className="article-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Author Bio */}
              <div className="mt-12">
                <h2 className="text-xl font-bold text-[var(--gray-900)] mb-4">About the Author</h2>
                <AuthorBio author={article.author} />
              </div>

              {/* Medical Reviewer Bio */}
              {article.medicalReviewer && (
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-[var(--gray-900)] mb-4">Medical Reviewer</h2>
                  <AuthorBio author={article.medicalReviewer} />
                </div>
              )}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[var(--gray-300)]">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[var(--gray-100)] text-sm text-[var(--gray-700)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
