"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Activity, Pill, Scale } from "lucide-react";

const articles = [
  {
    slug: "what-is-semaglutide",
    title: "What Is Semaglutide?",
    description: "Complete guide to semaglutide, how it works, and its effects on weight loss.",
    readTime: "8 min",
    category: "GLP-1",
  },
  {
    slug: "ozempic-vs-wegovy",
    title: "Ozempic vs Wegovy",
    description: "Understanding the differences between these two semaglutide medications.",
    readTime: "6 min",
    category: "Comparison",
  },
  {
    slug: "glp1-side-effects",
    title: "GLP-1 Side Effects",
    description: "Common and rare side effects of GLP-1 medications and how to manage them.",
    readTime: "10 min",
    category: "Safety",
  },
];

export default function GLP1Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Pill className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 font-medium">GLP-1 Medications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Understanding GLP-1 Drugs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Evidence-based guides on semaglutide, tirzepatide, and other GLP-1 
              receptor agonists for weight loss and diabetes management.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
