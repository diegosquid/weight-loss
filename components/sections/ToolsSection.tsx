"use client";

import { motion } from "framer-motion";
import { Calculator, Activity, Heart, Scale, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    id: "bmi",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand what it means for your health.",
    icon: Scale,
    color: "blue",
    href: "/tools/bmi-calculator",
    featured: true,
  },
  {
    id: "calorie",
    name: "Calorie Calculator",
    description: "Find your daily calorie needs based on your goals.",
    icon: Activity,
    color: "orange",
    href: "/tools/calorie-calculator",
    featured: false,
  },
  {
    id: "macro",
    name: "Macro Calculator",
    description: "Optimize your protein, carb, and fat intake.",
    icon: Sparkles,
    color: "emerald",
    href: "/tools/macro-calculator",
    featured: false,
  },
  {
    id: "health",
    name: "Health Assessment",
    description: "Quick assessment of your metabolic health markers.",
    icon: Heart,
    color: "rose",
    href: "/tools/health-assessment",
    featured: false,
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-500 to-indigo-600",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-orange-200",
    gradient: "from-orange-500 to-red-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-teal-600",
  },
  rose: {
    bg: "bg-rose-50",
    icon: "text-rose-600",
    border: "border-rose-200",
    gradient: "from-rose-500 to-pink-600",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function ToolsSection() {
  const featuredTool = tools.find((t) => t.featured);
  const otherTools = tools.filter((t) => !t.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <{/* Section Header */}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>Free Health Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Interactive Health Calculators
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get personalized insights with our evidence-based assessment tools
          </p>
        </motion.div>

        <{/* Tools Grid */}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <{/* Featured Tool - BMI Calculator */}>
          {featuredTool && (
            <motion.div variants={cardVariants} className="lg:row-span-3">
              <Link href={featuredTool.href}>
                <div className="group relative h-full bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
                  <{/* Header */}>
                  <div className={`bg-gradient-to-br ${colorClasses[featuredTool.color].gradient} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Scale className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{featuredTool.name}</h3>
                          <p className="text-white/80 text-sm">Most Popular Tool</p>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <{/* Animated Preview */}>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-white/80">Your BMI</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-3xl font-bold"
                        >
                          24.5
                        </motion.span>
                      </div>

                      <{/* BMI Scale */}>
                      <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
                        <{/* Zones */}>
                        <div className="absolute inset-0 flex">
                          <div className="w-[25%] h-full bg-blue-400/50" />
                          <div className="w-[25%] h-full bg-green-400/50" />
                          <div className="w-[25%] h-full bg-yellow-400/50" />
                          <div className="w-[25%] h-full bg-red-400/50" />
                        </div>

                        <{/* Indicator */}>
                        <motion.div
                          initial={{ left: "0%" }}
                          animate={{ left: "48%" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-6 bg-white rounded shadow-lg"
                        >
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white" />
                        </motion.div>
                      </div>

                      <{/* Labels */}>
                      <div className="flex justify-between mt-2 text-xs text-white/70">
                        <span>Underweight</span>
                        <span>Normal</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                      </div>
                    </div>
                  </div>

                  <{/* Content */}>
                  <div className="p-8">
                    <p className="text-slate-600 mb-6">{featuredTool.description}</p>

                    <{/* Quick Inputs Preview */}>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <label className="text-xs text-slate-500 block mb-1">Height</label>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-semibold text-slate-900">175</span>
                          <span className="text-sm text-slate-500">cm</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <label className="text-xs text-slate-500 block mb-1">Weight</label>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-semibold text-slate-900">75</span>
                          <span className="text-sm text-slate-500">kg</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Try Calculator
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <{/* Other Tools */}>
          <div className="flex flex-col gap-4">
            {otherTools.map((tool) => {
              const Icon = tool.icon;
              const colors = colorClasses[tool.color];
              return (
                <motion.div key={tool.id} variants={cardVariants}>
                  <Link href={tool.href}>
                    <div className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-slate-600 line-clamp-1">{tool.description}</p>
                      </div>

                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            <{/* View All Link */}>
            <motion.div variants={cardVariants}>
              <Link href="/tools">
                <div className="flex items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-colors">
                  <span className="font-medium">View All Tools</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
