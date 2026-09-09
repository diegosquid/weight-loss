import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Free Health Tools: Choose a Calculator", "Choose a BMI, calorie, macro or body fat calculator. Understand the limits of estimates and find the tool that fits your question.", "/tools/");

import Link from "next/link";
import { ArrowLeft, Calculator, Activity, Scale, Sparkles } from "lucide-react";

const tools = [
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category.",
    icon: Scale,
    href: "/calculators/bmi/",
    color: "blue",
  },
  {
    name: "Calorie Calculator",
    description: "Find your daily calorie needs based on your goals and activity level.",
    icon: Activity,
    href: "/calculators/calorie/",
    color: "orange",
  },
  {
    name: "Macro Calculator",
    description: "Optimize your protein, carb, and fat intake for your goals.",
    icon: Sparkles,
    href: "/calculators/macro/",
    color: "emerald",
  },
  {
    name: "Body Fat Calculator",
    description: "Estimate your body fat percentage using the Navy method.",
    icon: Calculator,
    href: "/calculators/body-fat/",
    color: "purple",
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
          
          <div
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
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pt-8 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Choose the estimate you need</h2>
        <p>BMI compares weight with height; the body fat tool uses measurements to estimate body composition. The calorie and macro tools estimate daily intake from the information you enter. These estimates do not diagnose a condition or replace individualized care. Your inputs stay in your browser.</p>
        <Link href="/calculators/" className="inline-block mt-4 text-blue-700 underline">Browse the calculator directory →</Link>
      </section>
      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const colors = colorClasses[tool.color];
            const Icon = tool.icon;
            
            return (
              <div
                key={tool.name}
              >
                <Link href={tool.href}>
                  <div className={`group p-6 border rounded-xl hover:shadow-lg transition-all ${colors.border} ${colors.bg}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {tool.name}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600">{tool.description}</p>
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-gray-900 group-hover:underline">
                      Try Calculator →
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
