"use client";

import { motion, Variants } from "framer-motion";
import { Clock, Calendar, Shield, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featuredArticle = {
  id: 1,
  title: "The Complete Guide to GLP-1 Medications: From Ozempic to Wegovy",
  excerpt: "Everything you need to know about semaglutide, tirzepatide, and other GLP-1 receptor agonists. How they work, side effects, and what to expect.",
  image: "/images/glp1-guide.jpg",
  category: "GLP-1",
  categoryColor: "blue",
  readTime: "12 min read",
  date: "Feb 15, 2026",
  medicalReviewed: true,
  slug: "complete-guide-glp1-medications",
};

const sideArticles = [
  {
    id: 2,
    title: "Understanding Metabolic Adaptation: Why Weight Loss Plateaus Happen",
    excerpt: "The science behind metabolic slowdown and how to overcome it.",
    image: "/images/metabolism.jpg",
    category: "Metabolism",
    categoryColor: "orange",
    readTime: "8 min read",
    date: "Feb 12, 2026",
    medicalReviewed: true,
    slug: "metabolic-adaptation-plateaus",
  },
  {
    id: 3,
    title: "Top 5 Supplements for Metabolic Health: Evidence Review",
    excerpt: "Which supplements actually work for boosting metabolism?",
    image: "/images/supplements.jpg",
    category: "Supplements",
    categoryColor: "emerald",
    readTime: "6 min read",
    date: "Feb 10, 2026",
    medicalReviewed: true,
    slug: "supplements-metabolic-health",
  },
  {
    id: 4,
    title: "Insulin Resistance: The Hidden Factor in Weight Management",
    excerpt: "How insulin sensitivity affects your ability to lose weight.",
    image: "/images/insulin.jpg",
    category: "Metabolism",
    categoryColor: "orange",
    readTime: "10 min read",
    date: "Feb 8, 2026",
    medicalReviewed: true,
    slug: "insulin-resistance-weight",
  },
];

const categoryColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
  orange: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  violet: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function FeaturedArticles() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">
              Featured Articles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Latest insights from our medical team
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            View all articles
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Featured Article - Large */}
          <motion.div variants={itemVariants} className="lg:row-span-3">
            <Link href={`/articles/${featuredArticle.slug}`}>
              <article className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featuredArticle.categoryColor]}`}>
                      {featuredArticle.category}
                    </span>
                  </div>

                  {/* Medical Review Badge */}
                  {featuredArticle.medicalReviewed && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                        <Shield className="w-3 h-3 text-green-600" />
                        Medical Review
                      </span>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors line-clamp-2">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base mb-4 line-clamp-2">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Side Articles - Smaller */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Link href={`/articles/${article.slug}`}>
                  <article className="group flex gap-4 sm:gap-6 bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        article.categoryColor === "blue" ? "from-blue-500 to-indigo-600" :
                        article.categoryColor === "orange" ? "from-orange-500 to-red-500" :
                        "from-emerald-500 to-teal-600"
                      }`} />
                      {/* Abstract Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="20" cy="20" r="15" fill="white" opacity="0.3"/>
                          <circle cx="80" cy="80" r="20" fill="white" opacity="0.2"/>
                          <circle cx="70" cy="30" r="10" fill="white" opacity="0.4"/>
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${categoryColors[article.categoryColor]}`}>
                          {article.category}
                        </span>
                        {article.medicalReviewed && (
                          <Shield className="w-3 h-3 text-green-600" />
                        )}
                      </div>

                      <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h4>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 line-clamp-1 hidden sm:block">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex items-center self-center">
                      <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
