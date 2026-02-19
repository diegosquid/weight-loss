/** @fileoverview ScrollProgress - Progress bar at top of page
 *  Shows reading progress with smooth updates and theme colors
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ScrollProgress />
 * 
 * // With custom color
 * <ScrollProgress color="bg-blue-500" />
 * 
 * // With gradient
 * <ScrollProgress gradient="from-emerald-500 to-cyan-500" />
 * 
 * // With custom height
 * <ScrollProgress height={4} />
 * 
 * // With threshold (only show after scrolling)
 * <ScrollProgress showAfter={100} />
 * ```
 */

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface ScrollProgressProps {
  /** Progress bar color (tailwind class) */
  color?: string;
  /** Gradient colors (e.g., "from-emerald-500 to-cyan-500") */
  gradient?: string;
  /** Bar height in pixels */
  height?: number;
  /** Additional CSS classes */
  className?: string;
  /** Only show after scrolling X pixels */
  showAfter?: number;
  /** Spring stiffness (0-1000) */
  springStiffness?: number;
  /** Spring damping (0-100) */
  springDamping?: number;
  /** Position fixed at top or bottom */
  position?: "top" | "bottom";
  /** Z-index */
  zIndex?: number;
  /** Include subtle shadow */
  shadow?: boolean;
}

export function ScrollProgress({
  color = "bg-emerald-500",
  gradient,
  height = 3,
  className,
  showAfter = 0,
  springStiffness = 300,
  springDamping = 30,
  position = "top",
  zIndex = 50,
  shadow = true,
}: ScrollProgressProps) {
  const [isVisible, setIsVisible] = useState(showAfter === 0);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: springStiffness,
    damping: springDamping,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (showAfter === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > showAfter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0",
        position === "top" ? "top-0" : "bottom-0",
        "origin-left",
        gradient ? `bg-gradient-to-r ${gradient}` : color,
        shadow && position === "top" && "shadow-sm",
        className
      )}
      style={{
        height,
        scaleX,
        zIndex,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  );
}

/** Circular scroll progress indicator */
export function ScrollProgressCircle({
  size = 48,
  strokeWidth = 4,
  color = "stroke-emerald-500",
  bgColor = "stroke-slate-200 dark:stroke-slate-700",
  className,
  showPercentage = false,
}: {
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  className?: string;
  showPercentage?: boolean;
}) {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={bgColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </svg>
      
      {showPercentage && (
        <span className="absolute text-xs font-medium text-slate-700 dark:text-slate-300">
          {Math.round(progress * 100)}%
        </span>
      )}
    </div>
  );
}

/** Minimal dot progress indicator */
export function ScrollProgressDots({
  totalSections = 5,
  activeColor = "bg-emerald-500",
  inactiveColor = "bg-slate-300 dark:bg-slate-600",
  className,
}: {
  totalSections?: number;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.scrollY / scrollHeight;
      const index = Math.min(
        Math.floor(scrollProgress * totalSections),
        totalSections - 1
      );
      setActiveIndex(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSections]);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-colors duration-300",
            index <= activeIndex ? activeColor : inactiveColor
          )}
          animate={{
            scale: index === activeIndex ? 1.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      ))}
    </div>
  );
}
