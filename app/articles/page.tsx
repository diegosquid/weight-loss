import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/content";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles | Metabolic Health Authority",
  description:
    "Expert-reviewed articles on weight loss medications, GLP-1 therapies, metabolism, and metabolic health.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/articles",
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <Header />

      <main className="flex-1">

        {/* Page header */}
        <section className="bg-white border-b border-gray-200 py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
                Evidence-Based Library
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Articles on Metabolic Health
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Expert-written and medically-reviewed guides on GLP-1 medications, metabolism, weight loss science, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category + time */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-xs font-semibold text-blue-700 border border-blue-100">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{article.author.name}</p>
                        {article.author.credentials && (
                          <p className="text-[11px] text-gray-400 font-medium">{article.author.credentials}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {article.medicalReviewer && (
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle className="w-3 h-3" />
                            MD Reviewed
                          </span>
                        )}
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <p className="text-lg font-medium">No articles yet.</p>
                <p className="text-sm mt-1">Check back soon — new content is published weekly.</p>
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
