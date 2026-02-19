import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, generateOrganizationSchema } from "@/components/seo/JsonLd";
import { getAllArticles } from "@/lib/content";
import { ArrowRight, Calculator, BookOpen, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Metabolic Health Authority | Evidence-Based Weight Loss",
  description:
    "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies. Medically accurate, evidence-based health guidance.",
  alternates: {
    canonical: "https://metabolichealthauthority.com",
  },
};

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--primary-light)] to-white py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary-light)] border border-[var(--secondary)] mb-6">
                <Shield className="w-4 h-4 text-[var(--secondary)]" />
                <span className="text-sm font-medium text-[var(--secondary-dark)]">
                  Medically Reviewed Content
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--gray-900)] mb-6 leading-tight">
                Evidence-Based Weight Loss Information You Can Trust
              </h1>

              <p className="text-lg sm:text-xl text-[var(--gray-700)] mb-8 leading-relaxed">
                Expert-reviewed guidance on GLP-1 medications, metabolism, and sustainable weight management. 
                Backed by medical professionals and the latest research.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Browse Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculators"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary-light)] transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Try Calculators
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-[var(--gray-100)] border border-[var(--gray-300)]">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">Medically Reviewed</h3>
                <p className="text-[var(--gray-700)]">
                  Every article is reviewed by board-certified physicians to ensure accuracy and safety.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--gray-100)] border border-[var(--gray-300)]">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-light)] flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[var(--secondary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">Evidence-Based</h3>
                <p className="text-[var(--gray-700)]">
                  Our content is based on peer-reviewed research and clinical guidelines.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--gray-100)] border border-[var(--gray-300)]">
                <div className="w-12 h-12 rounded-lg bg-[var(--lavender)]/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[var(--lavender)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">Patient-Focused</h3>
                <p className="text-[var(--gray-700)]">
                  Complex medical information explained in clear, accessible language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 lg:py-24 bg-[var(--gray-100)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--gray-900)]">Featured Articles</h2>
                <p className="text-[var(--gray-700)] mt-2">
                  Latest evidence-based guides on weight loss medications
                </p>
              </div>
              <Link
                href="/articles"
                className="hidden sm:inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                      <span className="text-xs text-[var(--gray-500)]">
                        {article.readingTime} min read
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[var(--gray-900)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--gray-700)] line-clamp-2">
                      {article.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-sm font-medium text-[var(--gray-900)]">
                        {article.author.name}
                      </span>
                      {article.author.credentials && (
                        <span className="text-xs text-[var(--gray-500)]">
                          {article.author.credentials}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-medium"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Calculators CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--primary)] rounded-2xl p-8 lg:p-12 text-center">
              <Calculator className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Free Health Calculators</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Calculate your BMI, daily calorie needs, optimal macros, and body fat percentage 
                with our easy-to-use tools.
              </p>
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-[var(--primary)] font-semibold hover:bg-[var(--gray-100)] transition-colors"
              >
                Explore Calculators
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
