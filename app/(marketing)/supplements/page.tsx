"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Beaker } from "lucide-react";

const supplements = [
  {
    name: "Berberine",
    description: "Natural compound that may support blood sugar control and weight management.",
    evidence: "Moderate",
    href: "#",
  },
  {
    name: "Probiotics",
    description: "Beneficial bacteria that support gut health and may influence weight.",
    evidence: "Emerging",
    href: "#",
  },
  {
    name: "Fiber Supplements",
    description: "Support satiety and digestive health with soluble and insoluble fiber.",
    evidence: "Strong",
    href: "#",
  },
  {
    name: "Protein Powder",
    description: "Convenient way to increase protein intake for muscle preservation.",
    evidence: "Strong",
    href: "#",
  },
];

export default function SupplementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6"
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
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-green-600 font-medium">Supplements</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Evidence-Based Supplements
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Science-backed information on supplements for weight loss, 
              metabolic health, and overall wellness.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Supplements Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular Supplements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {supplements.map((supp, index) => (
            <motion.div
              key={supp.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={supp.href}>
                <div className="group p-6 border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition">
                        {supp.name}
                      </h3>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      supp.evidence === "Strong" 
                        ? "bg-green-100 text-green-700"
                        : supp.evidence === "Moderate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {supp.evidence} Evidence
                    </span>
                  </div>
                  
                  <p className="text-gray-600">{supp.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
