import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  resources: [
    { label: "All Articles",        href: "/articles" },
    { label: "BMI Calculator",      href: "/calculators/bmi" },
    { label: "Calorie Calculator",  href: "/calculators/calorie" },
    { label: "Macro Calculator",    href: "/calculators/macro" },
    { label: "Body Fat Calculator", href: "/calculators/body-fat" },
  ],
  company: [
    { label: "About Us",               href: "/about" },
    { label: "Editorial Policy",       href: "/editorial-policy" },
    { label: "Medical Review Process", href: "/editorial-policy" },
    { label: "Privacy Policy",         href: "/privacy" },
  ],
  popular: [
    { label: "What is Semaglutide?", href: "/glp-1/what-is-semaglutide" },
    { label: "Ozempic vs Wegovy",    href: "/glp-1/ozempic-vs-wegovy" },
    { label: "GLP-1 Side Effects",   href: "/glp-1/glp1-side-effects" },
  ],
};

const trustSignals = [
  "Medically Reviewed Content",
  "Peer-Reviewed Sources",
  "Evidence-Based Guidance",
  "Updated Regularly",
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0D1B2A] text-gray-300">

      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustSignals.map((signal) => (
              <span key={signal} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo dark />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Evidence-based information on weight loss, metabolism, and GLP-1 medications — medically reviewed for accuracy and safety.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-700/50 bg-emerald-900/30 text-xs font-semibold text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              HONcode Certified
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Popular Articles</h4>
            <ul className="space-y-2.5">
              {footerLinks.popular.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Metabolic Health Authority. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/editorial-policy" className="hover:text-gray-300 transition-colors">Editorial Policy</Link>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center sm:text-left leading-relaxed max-w-3xl">
            <strong className="text-gray-500 font-medium">Medical Disclaimer:</strong> This website is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before starting any medication or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
