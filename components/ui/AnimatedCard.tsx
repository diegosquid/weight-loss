/** @fileoverview AnimatedCard - Interactive card with hover animations
 *  Features: lift effect, shadow increase, icon scale, optional gradient border
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <AnimatedCard title="Weight Loss" description="Scientific approach">
 *   <ScaleIcon className="w-6 h-6" />
 * </AnimatedCard>
 * 
 * // With gradient border
 * <AnimatedCard 
 *   title="Premium Plan" 
 *   description="Advanced features"
 *   gradientBorder={true}
 *   iconColor="text-emerald-500"
 * >
 *   <CrownIcon className="w-6 h-6" />
 * </AnimatedCard>
 * 
 * // Custom animation intensity
 * <AnimatedCard 
 *   title="Custom Card"
 *   liftAmount={12}
 *   shadowIntensity="high"
 * >
 *   <CustomIcon />
 * </AnimatedCard>
 * ```
 */

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedCardProps {
  /** Card title */
  title: string;
  /** Card description or content */
  description?: string;
  /** Icon element to display */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Enable gradient border effect */
  gradientBorder?: boolean;
  /** Gradient colors (default: emerald gradient) */
  gradientColors?: string;
  /** Icon color class */
  iconColor?: string;
  /** Amount to lift on hover (px) */
  liftAmount?: number;
  /** Shadow intensity */
  shadowIntensity?: "low" | "medium" | "high";
  /** Click handler */
  onClick?: () => void;
  /** Optional href for link behavior */
  href?: string;
  /** Disabled state */
  disabled?: boolean;
}

const shadowClasses = {
  low: "hover:shadow-lg",
  medium: "hover:shadow-xl",
  high: "hover:shadow-2xl",
};

export function AnimatedCard({
  title,
  description,
  children,
  className,
  gradientBorder = false,
  gradientColors = "from-emerald-400 via-teal-500 to-cyan-500",
  iconColor = "text-emerald-600",
  liftAmount = 8,
  shadowIntensity = "medium",
  onClick,
  href,
  disabled = false,
}: AnimatedCardProps) {
  const CardWrapper = href ? motion.a : motion.div;
  const wrapperProps = href ? { href } : {};

  const cardContent = (
    <>
      {/* Gradient border background */}
      {gradientBorder && (
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            gradientColors
          )}
        >
          <div className="h-full w-full rounded-2xl bg-white dark:bg-slate-900" />
        </div>
      )}

      {/* Main card content */}
      <div
        className={cn(
          "relative rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-800 dark:bg-slate-900",
          gradientBorder && "border-transparent"
        )}
      >
        {/* Icon with scale animation */}
        {children && (
          <motion.div
            className={cn(
              "mb-4 inline-flex rounded-xl bg-slate-100 p-3 transition-colors dark:bg-slate-800",
              iconColor
            )}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {children}
          </motion.div>
        )}

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </>
  );

  return (
    <CardWrapper
      className={cn(
        "group relative cursor-pointer",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      whileHover={{
        y: -liftAmount,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...wrapperProps}
    >
      <div
        className={cn(
          "rounded-2xl transition-shadow duration-300",
          shadowClasses[shadowIntensity]
        )}
      >
        {cardContent}
      </div>
    </CardWrapper>
  );
}

/** Compact version of AnimatedCard for grid layouts */
export function AnimatedCardCompact({
  title,
  description,
  children,
  className,
  iconColor = "text-emerald-600",
  onClick,
}: Omit<AnimatedCardProps, "gradientBorder" | "gradientColors" | "shadowIntensity">) {
  return (
    <motion.div
      className={cn(
        "group flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-900",
        className
      )}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children && (
        <motion.div
          className={cn(
            "flex-shrink-0 rounded-lg bg-slate-100 p-2 dark:bg-slate-800",
            iconColor
          )}
          whileHover={{ scale: 1.1 }}
        >
          {children}
        </motion.div>
      )}
      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-slate-900 dark:text-slate-100">
          {title}
        </h4>
        {description && (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
