"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, RefreshCw, Ban, CheckCircle, Award, Users, FileText } from "lucide-react";
import Image from "next/image";

const trustCards = [
  {
    id: "md-reviewed",
    icon: Shield,
    title: "MD Reviewed",
    description: "Every article reviewed by licensed physicians",
    color: "blue",
  },
  {
    id: "evidence-based",
    icon: BookOpen,
    title: "Evidence-Based",
    description: "Citations from peer-reviewed studies",
    color: "emerald",
  },
  {
    id: "updated",
    icon: RefreshCw,
    title: "Regularly Updated",
    description: "Content refreshed with latest research",
    color: "orange",
  },
  {
    id: "no-ads",
    icon: Ban,
    title: "No Ads",
    description: "Unbiased information, no pharmaceutical influence",
    color: "violet",
  },
];

const stats = [
  { value: "50+", label: "Articles Published", icon: FileText },
  { value: "100%", label: "Medically Reviewed", icon: CheckCircle },
  { value: "50K+", label: "Monthly Readers", icon: Users },
  { value: "25+", label: "Research Citations", icon: Award },
];

const institutionLogos = [
  { name: "American Diabetes Association", abbr: "ADA" },
  { name: "Obesity Medicine Association", abbr: "OMA" },
  { name: "Endocrine Society", abbr: "ES" },
  { name: "American Heart Association", abbr: "AHA" },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-orange-100",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-100",
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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        /* Section Header */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Why Trust Our Content?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We hold ourselves to the highest standards of medical accuracy and editorial integrity
          </p>
        </motion.div>

        /* Institution Logos */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 opacity-60"
        >
          {institutionLogos.map((inst) => (
            <div
              key={inst.abbr}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-sm">
                {inst.abbr}
              </div>
              <span className="text-sm font-medium hidden sm:block">{inst.name}</span>
            </div>
          ))}
        </motion.div>

        /* Trust Cards */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {trustCards.map((card) => {
            const Icon = card.icon;
            const colors = colorClasses[card.color];
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        /* Medical Reviewer Card */
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            /* Reviewer Info */
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Lead Medical Reviewer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Dr. Sarah Johnson, MD</h3>
              <p className="text-slate-300 mb-4">
                Board-Certified Endocrinologist & Obesity Medicine Specialist
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Dr. Johnson brings over 15 years of clinical experience in metabolic health 
                and weight management. She oversees all medical content to ensure accuracy 
                and alignment with current clinical guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Endocrinology", "Obesity Medicine", "Metabolic Health"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            /* Stats */
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        /* Editorial Process */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm">
            Our content follows a rigorous{" "}
            <a href="/editorial-policy" className="text-blue-600 hover:underline">
              editorial process
            </a>
            {" "}including medical review, fact-checking, and regular updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
