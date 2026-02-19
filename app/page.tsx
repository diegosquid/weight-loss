import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Categories */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">Explore Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "GLP-1 Medications", desc: "Semaglutide, tirzepatide, and more", href: "/glp-1" },
            { title: "Metabolism Science", desc: "How your body burns energy", href: "/metabolism" },
            { title: "Supplements", desc: "Evidence-based recommendations", href: "/supplements" },
            { title: "Health Tools", desc: "Calculators and assessments", href: "/tools" },
          ].map((cat) => (
            <Link 
              key={cat.title}
              href={cat.href}
              className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{cat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <TrustSection />
    </div>
  );
}
