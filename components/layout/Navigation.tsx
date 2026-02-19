"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Pill, Flame, Beaker, Calculator } from "lucide-react";

interface NavigationProps {
  isMobile?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: "GLP-1",
    href: "/glp-1",
    icon: <Pill className="w-4 h-4" />,
    children: [
      { label: "Semaglutide", href: "/glp-1/semaglutide", description: "Ozempic, Wegovy, Rybelsus" },
      { label: "Tirzepatide", href: "/glp-1/tirzepatide", description: "Mounjaro, Zepbound" },
      { label: "Liraglutide", href: "/glp-1/liraglutide", description: "Saxenda, Victoza" },
      { label: "Comparison", href: "/glp-1/comparison", description: "Compare all medications" },
    ],
  },
  {
    label: "Metabolism",
    href: "/metabolism",
    icon: <Flame className="w-4 h-4" />,
    children: [
      { label: "How It Works", href: "/metabolism/how-it-works", description: "Understanding metabolic processes" },
      { label: "Boost Metabolism", href: "/metabolism/boost", description: "Natural ways to increase metabolism" },
      { label: "Metabolic Health", href: "/metabolism/health", description: "Indicators and markers" },
      { label: "Insulin Resistance", href: "/metabolism/insulin-resistance", description: "Causes and solutions" },
    ],
  },
  {
    label: "Supplements",
    href: "/supplements",
    icon: <Beaker className="w-4 h-4" />,
    children: [
      { label: "Weight Loss", href: "/supplements/weight-loss", description: "Evidence-based supplements" },
      { label: "Vitamins", href: "/supplements/vitamins", description: "Essential nutrients" },
      { label: "Protein", href: "/supplements/protein", description: "Best protein sources" },
      { label: "Reviews", href: "/supplements/reviews", description: "Expert reviews" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    icon: <Calculator className="w-4 h-4" />,
    children: [
      { label: "BMI Calculator", href: "/calculators/bmi", description: "Body Mass Index" },
      { label: "Calorie Calculator", href: "/calculators/calorie", description: "Daily calorie needs" },
      { label: "Macro Calculator", href: "/calculators/macro", description: "Macronutrient targets" },
      { label: "Body Fat %", href: "/calculators/body-fat", description: "Estimate body composition" },
    ],
  },
];

const dropdownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" }
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
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

export function Navigation({ isMobile = false }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  if (isMobile) {
    return (
      <div className="space-y-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            custom={index}
            variants={mobileItemVariants}
            initial="hidden"
            animate="visible"
          >
            {item.children ? (
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span className={isActive(item.href) ? "text-primary" : "text-gray-500 dark:text-gray-400"}>
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  <motion.span
                    animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
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
                            key={child.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              href={child.href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
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
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className={isActive(item.href) ? "text-primary" : "text-gray-500 dark:text-gray-400"}>
                  {item.icon}
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
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {item.children ? (
            <>
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span>{item.label}</span>
                <motion.span
                  animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={isActive(item.href) ? "text-primary" : ""}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary dark:bg-primary-light"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === item.label && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-3 rounded-xl transition-all duration-200 group ${
                            pathname === child.href
                              ? "bg-primary/5 dark:bg-primary/10"
                              : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                pathname === child.href
                                  ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-primary/20 dark:group-hover:text-primary-light"
                              }`}
                            >
                              <span className="text-sm font-semibold">{child.label[0]}</span>
                            </div>
                            <div>
                              <p
                                className={`font-medium text-sm ${
                                  pathname === child.href
                                    ? "text-primary dark:text-primary-light"
                                    : "text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light"
                                }`}
                              >
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
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
                  ? "text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              }`}
            >
              <span>{item.label}</span>
              {isActive(item.href) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary dark:bg-primary-light"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
