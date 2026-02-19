import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/content";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles",
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
        <section className="py-16 lg:py-24 bg-[var(--primary-light)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-4">Articles</h1>
              <p className="text-lg text-[var(--gray-700)]">
                Expert-reviewed guides on weight loss, metabolism, and GLP-1 medications
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white rounded-xl border border-[var(--gray-300)] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 rounded-full bg-[var(--primary-light)] text-xs font-medium text-[var(--primary)]">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--gray-500)]">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>
                    
                    <h2 className="text-lg font-bold text-[var(--gray-900)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-sm text-[var(--gray-700)] line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[var(--gray-900)]">
                          {article.author.name}
                        </span>
                        {article.author.credentials && (
                          <span className="text-xs text-[var(--gray-500)]">
                            {article.author.credentials}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--gray-500)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                    </div>

                    {article.medicalReviewer && (
                      <div className="mt-3 pt-3 border-t border-[var(--gray-300)]">
                        <span className="text-xs text-[var(--secondary)]">
                          Medically reviewed by {article.medicalReviewer.name}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
