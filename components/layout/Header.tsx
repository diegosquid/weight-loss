import Link from "next/link";
import { Calculator, Menu, X, BookOpen, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/articles", label: "Articles", icon: BookOpen },
  { href: "/calculators", label: "Calculators", icon: Calculator },
  { href: "/about", label: "About", icon: Users },
  { href: "/editorial-policy", label: "Editorial Policy", icon: Shield },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--gray-300)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
            <span className="text-xl font-bold text-[var(--gray-900)] hidden sm:block">
              Metabolic Health
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--gray-700)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-dark)] transition-colors"
            >
              Explore Articles
            </Link>
            <button className="md:hidden p-2 text-[var(--gray-700)]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
