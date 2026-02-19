/** @fileoverview DarkModeToggle - Animated sun/moon toggle for theme switching
 *  Accessible with smooth Framer Motion animations
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <DarkModeToggle />
 * 
 * // With custom size
 * <DarkModeToggle size="lg" />
 * 
 * // With custom callback
 * <DarkModeToggle onToggle={(isDark) => console.log('Dark mode:', isDark)} />
 * 
 * // Controlled mode
 * const [isDark, setIsDark] = useState(false);
 * <DarkModeToggle isDark={isDark} onToggle={setIsDark} />
 * ```
 */

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface DarkModeToggleProps {
  /** Controlled dark mode state */
  isDark?: boolean;
  /** Callback when toggled */
  onToggle?: (isDark: boolean) => void;
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
  /** Custom aria-label */
  ariaLabel?: string;
  /** Show label text */
  showLabel?: boolean;
  /** Label position */
  labelPosition?: "left" | "right";
}

const sizeConfig = {
  sm: {
    button: "w-10 h-6",
    circle: "w-4 h-4",
    icon: "w-2.5 h-2.5",
    translate: "translate-x-4",
  },
  md: {
    button: "w-14 h-8",
    circle: "w-6 h-6",
    icon: "w-3.5 h-3.5",
    translate: "translate-x-6",
  },
  lg: {
    button: "w-16 h-9",
    circle: "w-7 h-7",
    icon: "w-4 h-4",
    translate: "translate-x-7",
  },
};

/** Sun icon with rays */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/** Moon icon */
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function DarkModeToggle({
  isDark: controlledIsDark,
  onToggle,
  size = "md",
  className,
  ariaLabel = "Toggle dark mode",
  showLabel = false,
  labelPosition = "right",
}: DarkModeToggleProps) {
  const [isDarkInternal, setIsDarkInternal] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use controlled state if provided, otherwise internal state
  const isDark = controlledIsDark ?? isDarkInternal;

  useEffect(() => {
    setMounted(true);
    // Check system preference or localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkInternal(true);
    }
  }, []);

  const handleToggle = () => {
    const newValue = !isDark;
    
    if (controlledIsDark === undefined) {
      setIsDarkInternal(newValue);
      localStorage.setItem("theme", newValue ? "dark" : "light");
      
      // Apply to document
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    
    onToggle?.(newValue);
  };

  const config = sizeConfig[size];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "rounded-full bg-slate-200 dark:bg-slate-700",
          config.button,
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const toggleButton = (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={ariaLabel}
      onClick={handleToggle}
      className={cn(
        "relative inline-flex items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
        isDark ? "bg-slate-700" : "bg-emerald-500",
        config.button,
        className
      )}
    >
      {/* Track background with icons */}
      <span className="sr-only">{ariaLabel}</span>
      
      {/* Sun icon (left side) */}
      <span
        className={cn(
          "absolute left-1.5 flex items-center justify-center transition-opacity duration-300",
          config.icon,
          isDark ? "opacity-0" : "opacity-100",
          "text-white"
        )}
      >
        <SunIcon className={config.icon} />
      </span>
      
      {/* Moon icon (right side) */}
      <span
        className={cn(
          "absolute right-1.5 flex items-center justify-center transition-opacity duration-300",
          config.icon,
          isDark ? "opacity-100" : "opacity-0",
          "text-slate-300"
        )}
      >
        <MoonIcon className={config.icon} />
      </span>

      {/* Sliding circle */}
      <motion.span
        className={cn(
          "absolute left-0.5 flex items-center justify-center rounded-full bg-white shadow-md",
          config.circle
        )}
        initial={false}
        animate={{
          x: isDark ? (size === "sm" ? 16 : size === "md" ? 24 : 28) : 0,
          rotate: isDark ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {/* Icon inside the circle */}
        <motion.span
          className={cn("flex items-center justify-center", config.icon)}
          initial={false}
          animate={{ rotate: isDark ? -360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <MoonIcon className={cn(config.icon, "text-slate-700")} />
          ) : (
            <SunIcon className={cn(config.icon, "text-amber-500")} />
          )}
        </motion.span>
      </motion.span>
    </button>
  );

  if (!showLabel) {
    return toggleButton;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        labelPosition === "left" && "flex-row-reverse"
      )}
    >
      {toggleButton}
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
}

/** Simple icon-only toggle button */
export function DarkModeButton({
  isDark: controlledIsDark,
  onToggle,
  size = "md",
  className,
  ariaLabel = "Toggle dark mode",
}: Omit<DarkModeToggleProps, "showLabel" | "labelPosition">) {
  const [isDarkInternal, setIsDarkInternal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isDark = controlledIsDark ?? isDarkInternal;

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkInternal(true);
    }
  }, []);

  const handleToggle = () => {
    const newValue = !isDark;
    if (controlledIsDark === undefined) {
      setIsDarkInternal(newValue);
      localStorage.setItem("theme", newValue ? "dark" : "light");
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    onToggle?.(newValue);
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "rounded-lg bg-slate-200 dark:bg-slate-700",
          size === "sm" && "w-8 h-8",
          size === "md" && "w-10 h-10",
          size === "lg" && "w-12 h-12",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-colors",
        "bg-slate-100 hover:bg-slate-200",
        "dark:bg-slate-800 dark:hover:bg-slate-700",
        "focus:outline-none focus:ring-2 focus:ring-emerald-500",
        size === "sm" && "w-8 h-8",
        size === "md" && "w-10 h-10",
        size === "lg" && "w-12 h-12",
        className
      )}
    >
      <motion.span
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDark ? (
          <MoonIcon className={cn(iconSizes[size], "text-slate-300")} />
        ) : (
          <SunIcon className={cn(iconSizes[size], "text-amber-500")} />
        )}
      </motion.span>
    </button>
  );
}
