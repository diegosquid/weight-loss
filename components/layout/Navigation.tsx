"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Pill, Flame, Beaker, Calculator } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  key: string;
  children: NavChild[];
  totalArticles?: number;
}

interface NavigationProps {
  isMobile?: boolean;
  navItems?: NavItem[];
}

// Fallback if no navItems passed (shouldn't happen, but safe default)
const defaultNavItems: NavItem[] = [
  { label: "GLP-1", href: "/glp-1", key: "glp-1", children: [] },
  { label: "Metabolism", href: "/metabolism", key: "metabolism", children: [] },
  { label: "Supplements", href: "/supplements", key: "supplements", children: [] },
  {
    label: "Tools",
    href: "/tools",
    key: "tools",
    children: [
      { label: "BMI Calculator", href: "/calculators/bmi", description: "Body Mass Index" },
      { label: "Calorie Calculator", href: "/calculators/calorie", description: "Daily calorie needs" },
      { label: "Macro Calculator", href: "/calculators/macro", description: "Macronutrient targets" },
      { label: "Body Fat %", href: "/calculators/body-fat", description: "Estimate body composition" },
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "glp-1": <Pill className="w-4 h-4" />,
  metabolism: <Flame className="w-4 h-4" />,
  supplements: <Beaker className="w-4 h-4" />,
  tools: <Calculator className="w-4 h-4" />,
};

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
};

export function Navigation({ isMobile = false, navItems }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const items = navItems ?? defaultNavItems;

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  if (isMobile) {
    return (
      <div className="space-y-1">
        {items.map((item, index) => (
          <motion.div
            key={item.key}
            custom={index}
            variants={mobileItemVariants}
            initial="hidden"
            animate="visible"
          >
            {item.children.length > 0 ? (
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.key ? null : item.key)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span className={isActive(item.href) ? "text-blue-700" : "text-gray-500 dark:text-gray-400"}>
                      {iconMap[item.key]}
                    </span>
                    {item.label}
                  </span>
                  <motion.span
                    animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeDropdown === item.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((child, childIndex) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              href={child.href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                              }`}
                            >
                              <span className="font-medium">{child.label}</span>
                              {child.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                        {item.totalArticles != null && item.totalArticles > item.children.length && (
                          <Link
                            href={item.href}
                            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            View all {item.totalArticles} articles →
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className={isActive(item.href) ? "text-blue-700" : "text-gray-500 dark:text-gray-400"}>
                  {iconMap[item.key]}
                </span>
                {item.label}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {items.map((item) => (
        <div
          key={item.key}
          className="relative"
          onMouseEnter={() => item.children.length > 0 && setActiveDropdown(item.key)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {item.children.length > 0 ? (
            <>
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span>{item.label}</span>
                <motion.span
                  animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </Link>

              <AnimatePresence>
                {activeDropdown === item.key && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 rounded-xl transition-all duration-200 group ${
                            pathname === child.href
                              ? "bg-blue-50/50 dark:bg-blue-900/10"
                              : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <p
                            className={`font-medium text-sm ${
                              pathname === child.href
                                ? "text-blue-700 dark:text-blue-400"
                                : "text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400"
                            }`}
                          >
                            {child.label}
                          </p>
                          {child.description && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                      {item.totalArticles != null && item.totalArticles > item.children.length && (
                        <Link
                          href={item.href}
                          className="block px-4 py-2.5 mt-1 rounded-xl text-sm font-semibold text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors text-center border-t border-gray-100 dark:border-gray-700"
                        >
                          View all {item.totalArticles} articles →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={item.href}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              }`}
            >
              <span>{item.label}</span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
