"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-transparent opacity-70" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-slate-50 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-8"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Medically Reviewed Content</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Evidence-Based <br className="hidden lg:block" />
              <span className="text-blue-700">Weight Loss Science</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              We successfully translate complex metabolic research into clear, actionable health guidance. 
              Reliable information on GLP-1 therapies, nutrition, and metabolic health.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/articles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-sm hover:shadow-md"
              >
                Start Reading
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tools/bmi-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Health Tools
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8"
            >
              <div>
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Research Articles</div>
              </div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">MD Reviewed</div>
              </div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-slate-900">Free</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Health Calculators</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern/Clean Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50" />
                
                {/* Abstract UI Representation of Data/Health */}
                <div className="relative p-8 min-h-[500px] flex flex-col justify-center">
                   {/* Decorative elements representing structured data/articles */}
                   <div className="space-y-4 mb-8 opacity-40">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-full"></div>
                      <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                   </div>

                   <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Activity className="w-6 h-6" />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-slate-900">Metabolic Health</div>
                            <div className="text-xs text-slate-500">Latest Research</div>
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="h-2 bg-slate-100 rounded w-full"></div>
                         <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                         <div className="h-2 bg-slate-100 rounded w-4/6"></div>
                      </div>
                   </div>

                    <div className="absolute bottom-12 right-12 bg-white rounded-lg shadow-lg border border-slate-100 p-4 transform translate-x-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium text-slate-700">Updated Today</span>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
