"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Flame, BookOpen } from "lucide-react";

const topics = [
  {
    title: "How Metabolism Works",
    description: "The science behind energy expenditure and metabolic rate.",
    href: "#",
    readTime: "12 min",
  },
  {
    title: "Metabolic Adaptation",
    description: "Why weight loss plateaus and how to overcome them.",
    href: "#",
    readTime: "8 min",
  },
  {
    title: "Boosting Metabolism",
    description: "Evidence-based strategies to increase metabolic rate.",
    href: "#",
    readTime: "10 min",
  },
  {
    title: "Muscle and Metabolism",
    description: "How lean mass affects your resting metabolic rate.",
    href: "#",
    readTime: "7 min",
  },
];

export default function MetabolismPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6"
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
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-orange-600 font-medium">Metabolism Science</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Understanding Metabolism
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Learn how your body burns energy, adapts to calorie changes, 
              and what you can do to optimize your metabolic health.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Topics</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={topic.href}>
                <div className="group p-6 border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400 text-sm">{topic.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
