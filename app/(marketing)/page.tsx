import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, generateOrganizationSchema } from "@/components/seo/JsonLd";
import { getAllArticles } from "@/lib/content";
import {
  ArrowRight,
  Calculator,
  BookOpen,
  ShieldCheck,
  FlaskConical,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Metabolic Health Authority | Evidence-Based Weight Loss",
  description:
    "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies. Medically accurate, evidence-based health guidance.",
  alternates: {
    canonical: "https://metabolichealthauthority.com",
  },
};

const stats = [
  { value: "50+",    label: "Evidence-Based Articles" },
  { value: "5+",     label: "Board-Certified Reviewers" },
  { value: "100%",   label: "Peer-Reviewed Sources" },
  { value: "Weekly", label: "Content Updates" },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    title: "Medically Reviewed",
    body:
      "Every article is reviewed by board-certified physicians before publication to ensure clinical accuracy and patient safety.",
  },
  {
    icon: FlaskConical,
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "Evidence-Based Only",
    body:
      "Our content cites peer-reviewed journals, randomized controlled trials, and clinical guidelines — never anecdote.",
  },
  {
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    title: "Plain-Language Clarity",
    body:
      "Complex metabolic science translated into clear, actionable information that patients and caregivers can actually use.",
  },
];

const categories = [
  { label: "GLP-1 Medications", href: "/glp1",        color: "bg-blue-700" },
  { label: "Metabolism Science", href: "/metabolism",   color: "bg-emerald-600" },
  { label: "Supplements",        href: "/supplements",  color: "bg-purple-600" },
  { label: "Tools & Calculators",href: "/calculators",  color: "bg-amber-500" },
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <Header />

      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative bg-white overflow-hidden">
          {/* Subtle grid background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #eff6ff 0%, #ffffff 60%, #f0fdf4 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(29,78,216,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(5,150,105,0.07) 0%, transparent 60%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div className="max-w-2xl mx-auto text-center">
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                Peer-Reviewed Medical Content
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight text-balance">
                Weight Loss Science{" "}
                <span className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
                Expert-reviewed guides on GLP-1 medications, metabolic health, and sustainable weight management — backed by the latest clinical research.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-md text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Browse Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculators"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  Free Calculators
                </Link>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white px-6 py-5 text-center">
                  <p className="text-2xl font-bold text-blue-700">{value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust Pillars ─────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Our Standards</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Why This Source Is Different
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {trustPillars.map(({ icon: Icon, color, bg, border, title, body }) => (
                <div key={title} className={`p-7 rounded-2xl bg-white border ${border} shadow-sm`}>
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Browse by Topic ────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Browse by Topic</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Our Coverage</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map(({ label, href, color }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className={`w-2 h-8 rounded-full ${color} mb-4`} />
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {label}
                  </p>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-2" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Articles ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Latest Research</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Articles</h2>
              </div>
              <Link
                href="/articles"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
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
                  className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Color accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category + read time */}
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
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {article.description}
                    </p>

                    {/* Author row */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{article.author.name}</p>
                        {article.author.credentials && (
                          <p className="text-[11px] text-gray-400 font-medium">{article.author.credentials}</p>
                        )}
                      </div>
                      {article.medicalReviewer && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle className="w-3 h-3" />
                          MD Reviewed
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile view-all link */}
            <div className="mt-8 text-center sm:hidden">
              <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Calculators CTA ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D1B2A] to-[#1B3A6B] p-10 lg:p-14 text-center">
              {/* Decoration */}
              <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10% 90%, rgba(5,150,105,0.4) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(29,78,216,0.4) 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-5">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Free Health Calculators
                </h2>
                <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                  Calculate your BMI, daily calorie needs, ideal macros, and body fat percentage with our clinically-grounded tools.
                </p>
                <Link
                  href="/calculators"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors shadow-md text-sm"
                >
                  Explore Calculators
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial Promise ──────────────────────────────────────────────── */}
        <section className="py-12 bg-blue-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Editorial Promise</h3>
                <p className="text-blue-200 text-sm max-w-xl">
                  Every article on this site is written by qualified health professionals and reviewed by board-certified physicians before publication.
                </p>
              </div>
              <Link
                href="/editorial-policy"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/20 transition-colors text-sm"
              >
                Read Our Policy
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
