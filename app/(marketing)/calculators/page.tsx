import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Calculators",
  description:
    "Free health calculators including BMI, calorie needs, macronutrients, and body fat percentage.",
  alternates: {
    canonical: "https://metabolichealthauthority.com/calculators",
  },
};

const calculators = [
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category.",
    href: "/calculators/bmi",
    icon: "📊",
  },
  {
    title: "Calorie Calculator",
    description: "Determine your daily calorie needs based on your goals and activity level.",
    href: "/calculators/calorie",
    icon: "🔥",
  },
  {
    title: "Macro Calculator",
    description: "Calculate optimal protein, carb, and fat intake for your goals.",
    href: "/calculators/macro",
    icon: "🥩",
  },
  {
    title: "Body Fat Calculator",
    description: "Estimate your body fat percentage using the US Navy method.",
    href: "/calculators/body-fat",
    icon: "📏",
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-[var(--primary-light)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Calculator className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-4">Health Calculators</h1>
              <p className="text-lg text-[var(--gray-700)]">
                Free tools to help you understand your body and track your health metrics
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {calculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="group block bg-white p-6 rounded-xl border border-[var(--gray-300)] hover:shadow-lg hover:border-[var(--primary)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{calc.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-[var(--gray-900)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {calc.title}
                      </h2>
                      <p className="text-[var(--gray-700)] mb-4">{calc.description}</p>
                      <span className="inline-flex items-center gap-1 text-[var(--primary)] font-medium">
                        Try Calculator
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
