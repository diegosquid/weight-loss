"use client";

import { motion, Variants } from "framer-motion";
import { Syringe, Flame, Pill, Wrench, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "glp1",
    title: "GLP-1 Medications",
    description: "Semaglutide, tirzepatide, and the science behind weight loss drugs",
    icon: Syringe,
    articleCount: 18,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    href: "/glp1",
  },
  {
    id: "metabolism",
    title: "Metabolism Science",
    description: "How your body burns energy, BMR, and metabolic health",
    icon: Flame,
    articleCount: 15,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    href: "/metabolism",
  },
  {
    id: "supplements",
    title: "Supplements",
    description: "Evidence-based recommendations for vitamins and supplements",
    icon: Pill,
    articleCount: 12,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    href: "/supplements",
  },
  {
    id: "tools",
    title: "Health Tools",
    description: "BMI calculators, calorie counters, and health assessments",
    icon: Wrench,
    articleCount: 8,
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    href: "/tools",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function CategoryGrid() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Explore Topics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Dive deep into evidence-based content across our key focus areas
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link href={category.href} className="block h-full">
                  <div className="group relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors">
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>

                      {/* Article Count */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {category.articleCount} articles
                        </span>
                        <motion.div
                          initial={{ x: 0, opacity: 0.5 }}
                          whileHover={{ x: 4, opacity: 1 }}
                          className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          <span className="mr-1">Explore</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
