import Link from "next/link";
import { BookOpen, Calculator, Users, Shield, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/articles",         label: "Articles" },
  { href: "/calculators",      label: "Calculators" },
  { href: "/about",            label: "About" },
  { href: "/editorial-policy", label: "Editorial Policy" },
];

export function Header() {
  return (
    <>
      {/* Main header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/98 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-gray-900 hidden sm:block leading-none">
                  Metabolic Health
                </span>
                <span className="text-[10px] text-gray-500 hidden sm:block font-medium tracking-wide uppercase leading-none mt-0.5">
                  Authority
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/articles"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read Articles
              </Link>
              {/* Mobile menu placeholder (non-interactive for now) */}
              <button className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
