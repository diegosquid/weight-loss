"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Activity, Scale, Sparkles, Heart } from "lucide-react";

const tools = [
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category.",
    icon: Scale,
    href: "/calculators/bmi",
    color: "blue",
  },
  {
    name: "Calorie Calculator",
    description: "Find your daily calorie needs based on your goals and activity level.",
    icon: Activity,
    href: "/calculators/calorie",
    color: "orange",
  },
  {
    name: "Macro Calculator",
    description: "Optimize your protein, carb, and fat intake for your goals.",
    icon: Sparkles,
    href: "/calculators/macro",
    color: "emerald",
  },
  {
    name: "Body Fat Calculator",
    description: "Estimate your body fat percentage using the Navy method.",
    icon: Calculator,
    href: "/calculators/body-fat",
    color: "purple",
  },
  {
    name: "Health Assessment",
    description: "Quick assessment of your metabolic health markers.",
    icon: Heart,
    href: "#",
    color: "rose",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "border-rose-200" },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-600 mb-6"
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
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-slate-600" />
              </div>
              <span className="text-slate-600 font-medium">Health Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Interactive Health Calculators
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Free tools to help you understand your health metrics 
              and make informed decisions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const colors = colorClasses[tool.color];
            const Icon = tool.icon;
            
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={tool.href}>
                  <div className={`group p-6 border rounded-xl hover:shadow-lg transition-all ${colors.border} ${colors.bg}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {tool.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600">{tool.description}</p>
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-gray-900 group-hover:underline">
                      Try Calculator →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
