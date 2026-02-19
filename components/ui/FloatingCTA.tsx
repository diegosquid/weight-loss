/** @fileoverview FloatingCTA - Fixed floating call-to-action button
 *  Appears after scroll with pulse animation and glassmorphism effect
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <FloatingCTA onClick={() => router.push('/signup')}>
 *   Start Your Journey
 * </FloatingCTA>
 * 
 * // With custom threshold and position
 * <FloatingCTA 
 *   onClick={handleClick}
 *   showAfterScroll={300}
 *   position="bottom-left"
 *   variant="secondary"
 * >
 *   Get Started
 * </FloatingCTA>
 * 
 * // With icon
 * <FloatingCTA onClick={handleClick} icon={<ArrowRight className="w-5 h-5" />}>
 *   Continue
 * </FloatingCTA>
 * ```
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingCTAProps {
  /** Button content */
  children: ReactNode;
  /** Click handler */
  onClick: () => void;
  /** Scroll threshold to show button (px) */
  showAfterScroll?: number;
  /** Button position */
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  /** Visual variant */
  variant?: "primary" | "secondary" | "outline";
  /** Optional icon */
  icon?: ReactNode;
  /** Icon position */
  iconPosition?: "left" | "right";
  /** Additional CSS classes */
  className?: string;
  /** Pulse animation intensity */
  pulseIntensity?: "none" | "subtle" | "strong";
  /** Hide on specific routes (optional) */
  hideOnRoutes?: string[];
  /** Current pathname for route checking */
  currentPath?: string;
}

const positionClasses = {
  "bottom-right": "right-4 sm:right-6 lg:right-8",
  "bottom-left": "left-4 sm:left-6 lg:left-8",
  "bottom-center": "left-1/2 -translate-x-1/2",
};

const variantClasses = {
  primary: [
    "bg-emerald-600 text-white",
    "hover:bg-emerald-700",
    "shadow-emerald-500/25",
    "dark:bg-emerald-500 dark:hover:bg-emerald-600",
  ],
  secondary: [
    "bg-slate-900 text-white",
    "hover:bg-slate-800",
    "shadow-slate-500/25",
    "dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
  ],
  outline: [
    "bg-white/80 text-slate-900 border border-slate-200",
    "hover:bg-white hover:border-slate-300",
    "shadow-slate-500/15",
    "dark:bg-slate-900/80 dark:text-slate-100 dark:border-slate-700",
    "dark:hover:bg-slate-900 dark:hover:border-slate-600",
  ],
};

export function FloatingCTA({
  children,
  onClick,
  showAfterScroll = 200,
  position = "bottom-right",
  variant = "primary",
  icon,
  iconPosition = "right",
  className,
  pulseIntensity = "subtle",
  hideOnRoutes = [],
  currentPath,
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > showAfterScroll);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll]);

  useEffect(() => {
    // Small delay for smoother appearance
    const timer = setTimeout(() => {
      setIsVisible(hasScrolled);
    }, 100);
    return () => clearTimeout(timer);
  }, [hasScrolled]);

  // Check if should hide on current route
  const shouldHide = currentPath && hideOnRoutes.some(route => 
    currentPath === route || currentPath.startsWith(route + '/')
  );

  if (shouldHide) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed bottom-4 sm:bottom-6 lg:bottom-8 z-50",
            positionClasses[position]
          )}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {/* Glassmorphism backdrop */}
          <div className="absolute inset-0 -m-2 rounded-full bg-white/20 backdrop-blur-sm dark:bg-slate-900/20" />
          
          {/* Pulse ring animation */}
          {pulseIntensity !== "none" && (
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full",
                variant === "primary" && "bg-emerald-500",
                variant === "secondary" && "bg-slate-500",
                variant === "outline" && "bg-slate-400"
              )}
              animate={{
                scale: [1, 1.15, 1],
                opacity: pulseIntensity === "strong" ? [0.4, 0, 0.4] : [0.2, 0, 0.2],
              }}
              transition={{
                duration: pulseIntensity === "strong" ? 1.5 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Button */}
          <motion.button
            onClick={onClick}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-6 py-3 font-medium shadow-lg backdrop-blur-sm",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              variant === "primary" && "focus:ring-emerald-500",
              variant === "secondary" && "focus:ring-slate-500",
              variant === "outline" && "focus:ring-slate-400",
              variantClasses[variant],
              className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon && iconPosition === "left" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Simpler version without scroll trigger - always visible */
export function FloatingButton({
  children,
  onClick,
  position = "bottom-right",
  variant = "primary",
  icon,
  className,
}: Omit<FloatingCTAProps, "showAfterScroll" | "pulseIntensity" | "hideOnRoutes" | "currentPath">) {
  return (
    <motion.div
      className={cn(
        "fixed bottom-4 sm:bottom-6 lg:bottom-8 z-50",
        positionClasses[position]
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <motion.button
        onClick={onClick}
        className={cn(
          "flex items-center gap-2 rounded-full px-6 py-3 font-medium shadow-lg",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          variantClasses[variant],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </motion.button>
    </motion.div>
  );
}
