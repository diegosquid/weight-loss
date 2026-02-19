import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MedicalReviewBadge } from "@/components/eeat/MedicalReviewBadge";
import { AuthorBio } from "@/components/eeat/AuthorBio";
import { JsonLd, generateArticleSchema, generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { getArticleBySlug, getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, RefreshCw, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({
    category: a.categorySlug,
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Metabolic Health Authority`,
    description: article.description,
    alternates: {
      canonical: `https://metabolichealthauthority.com/${category}/${slug}`,
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
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) notFound();

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.description,
    url: `https://metabolichealthauthority.com/${category}/${slug}`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    author: { name: article.author.name },
    medicalReviewer: article.medicalReviewer
      ? { name: article.medicalReviewer.name, credentials: article.medicalReviewer.credentials || "" }
      : undefined,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://metabolichealthauthority.com" },
    { name: article.category, url: `https://metabolichealthauthority.com/${category}` },
    { name: article.title, url: `https://metabolichealthauthority.com/${category}/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <div className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
              <span>/</span>
              <span className="hover:text-blue-700 transition-colors capitalize">
                {category.replace(/-/g, " ")}
              </span>
              <span>/</span>
              <span className="text-gray-700 font-medium line-clamp-1">{article.title}</span>
            </nav>
          </div>
        </div>

        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-700 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Link>

            {/* Article header */}
            <header className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wide">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700 uppercase tracking-wide">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Published {formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{article.readingTime} min read</span>
                </div>
                {article.updatedAt && (
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-gray-400" />
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

            {/* Article body */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50
                prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-li:my-1
                prose-hr:border-gray-200"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Written By</p>
              <AuthorBio author={article.author} />
            </div>

            {/* Medical Reviewer */}
            {article.medicalReviewer && (
              <div className="mt-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Medical Reviewer</p>
                <AuthorBio author={article.medicalReviewer} />
              </div>
            )}

            {/* Editorial note */}
            <div className="mt-10 p-5 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Editorial Standards</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    This article follows our{" "}
                    <Link href="/editorial-policy" className="text-blue-700 hover:underline font-medium">
                      strict editorial guidelines
                    </Link>
                    . All content is based on peer-reviewed research and reviewed by medical professionals.
                    This information is for educational purposes only — always consult your healthcare provider before making medical decisions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}
