import Link from "next/link";
import { Shield, Mail, Heart } from "lucide-react";

const footerLinks = {
  resources: [
    { label: "All Articles", href: "/articles" },
    { label: "BMI Calculator", href: "/calculators/bmi" },
    { label: "Calorie Calculator", href: "/calculators/calorie" },
    { label: "Macro Calculator", href: "/calculators/macro" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Medical Review Process", href: "/editorial-policy" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  popular: [
    { label: "What is Semaglutide?", href: "/articles/what-is-semaglutide" },
    { label: "Ozempic vs Wegovy", href: "/articles/ozempic-vs-wegovy" },
    { label: "GLP-1 Side Effects", href: "/articles/glp1-side-effects" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--gray-300)] bg-[var(--gray-100)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-[var(--gray-900)]">
                Metabolic Health
              </span>
            </div>
            <p className="text-sm text-[var(--gray-700)] mb-4">
              Evidence-based information on weight loss, metabolism, and GLP-1 medications. 
              Medically reviewed and trustworthy.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--gray-700)]">
              <Shield className="w-4 h-4 text-[var(--secondary)]" />
              <span>HONcode Certified</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-700)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-700)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">Popular Articles</h3>
            <ul className="space-y-2">
              {footerLinks.popular.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-700)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--gray-300)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--gray-700)]">
              © {new Date().getFullYear()} Metabolic Health Authority. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-[var(--gray-700)]">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[var(--coral)] fill-current" />
              <span>for better health</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-[var(--gray-500)] text-center md:text-left">
            Disclaimer: This website is for informational purposes only and does not constitute medical advice. 
            Always consult with a qualified healthcare provider before starting any medication or treatment.
          </div>
        </div>
      </div>
    </footer>
  );
}
