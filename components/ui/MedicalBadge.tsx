/** @fileoverview MedicalBadge - "Medically Reviewed" badge with reviewer info
 *  Builds trust with medical credibility indicators
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <MedicalBadge 
 *   reviewerName="Dr. Sarah Johnson"
 *   reviewerTitle="Endocrinologist"
 *   reviewerImage="/images/dr-johnson.jpg"
 * />
 * 
 * // With review date
 * <MedicalBadge 
 *   reviewerName="Dr. Michael Chen"
 *   reviewerTitle="Nutritionist, MD"
 *   reviewerImage="/images/dr-chen.jpg"
 *   reviewDate="2024-01-15"
 * />
 * 
 * // Compact version for cards
 * <MedicalBadgeCompact
 *   reviewerName="Dr. Emily Davis"
 *   reviewerTitle="Cardiologist"
 * />
 * 
 * // With custom verification text
 * <MedicalBadge 
 *   reviewerName="Dr. James Wilson"
 *   reviewerTitle="Internal Medicine"
 *   verificationText="Clinically Verified"
 * />
 * ```
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Shield, User } from "lucide-react";

export interface MedicalBadgeProps {
  /** Reviewer's full name */
  reviewerName: string;
  /** Reviewer's title/specialty */
  reviewerTitle: string;
  /** Reviewer's photo URL */
  reviewerImage?: string;
  /** Date of review */
  reviewDate?: string;
  /** Badge text (default: "Medically Reviewed") */
  badgeText?: string;
  /** Verification text shown in tooltip */
  verificationText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Show verification icon */
  showVerificationIcon?: boolean;
  /** Custom verification badge content */
  customVerification?: string;
}

const sizeClasses = {
  sm: {
    container: "gap-1.5 text-xs",
    image: "w-5 h-5",
    icon: "w-3 h-3",
    badge: "px-1.5 py-0.5 text-[10px]",
  },
  md: {
    container: "gap-2 text-sm",
    image: "w-6 h-6",
    icon: "w-4 h-4",
    badge: "px-2 py-0.5 text-xs",
  },
  lg: {
    container: "gap-3 text-base",
    image: "w-8 h-8",
    icon: "w-5 h-5",
    badge: "px-2.5 py-1 text-sm",
  },
};

export function MedicalBadge({
  reviewerName,
  reviewerTitle,
  reviewerImage,
  reviewDate,
  badgeText = "Medically Reviewed",
  verificationText = "This content has been reviewed by a licensed medical professional",
  className,
  size = "md",
  showVerificationIcon = true,
  customVerification,
}: MedicalBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const sizes = sizeClasses[size];

  const formattedDate = reviewDate
    ? new Date(reviewDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div
      className={cn("relative inline-flex items-center", sizes.container, className)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      {/* Green verification badge */}
      <motion.div
        className={cn(
          "inline-flex items-center gap-1 rounded-full font-medium",
          "bg-emerald-100 text-emerald-700",
          "dark:bg-emerald-900/30 dark:text-emerald-400",
          sizes.badge
        )}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {showVerificationIcon && (
          <Shield className={cn("flex-shrink-0", sizes.icon)} />
        )}
        <span>{badgeText}</span>
      </motion.div>

      {/* Reviewer info */}
      <div className="flex items-center gap-1.5">
        {/* Avatar */}
        <div
          className={cn(
            "relative flex-shrink-0 overflow-hidden rounded-full",
            "bg-slate-200 dark:bg-slate-700",
            sizes.image
          )}
        >
          {reviewerImage ? (
            <img
              src={reviewerImage}
              alt={reviewerName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-400">
              <User className="w-1/2 h-1/2" />
            </div>
          )}
          
          {/* Verification checkmark overlay */}
          <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-white p-0.5 dark:bg-slate-800">
            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
          </div>
        </div>

        {/* Name and title */}
        <div className="flex flex-col">
          <span className="font-medium text-slate-900 dark:text-slate-100">
            {reviewerName}
          </span>
          {size !== "sm" && (
            <span className="text-slate-500 dark:text-slate-400">
              {reviewerTitle}
            </span>
          )}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full left-0 mb-2 w-64 z-50"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div
              className={cn(
                "rounded-lg border border-emerald-200 bg-white p-3 shadow-lg",
                "dark:border-emerald-800 dark:bg-slate-900"
              )}
            >
              {/* Arrow */}
              <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 border-b border-r border-emerald-200 bg-white dark:border-emerald-800 dark:bg-slate-900" />
              
              <div className="flex items-start gap-3">
                {reviewerImage && (
                  <img
                    src={reviewerImage}
                    alt={reviewerName}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {reviewerName}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {reviewerTitle}
                  </p>
                  {formattedDate && (
                    <p className="mt-1 text-xs text-slate-500">
                      Reviewed on {formattedDate}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-2 border-t border-slate-100 pt-2 dark:border-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {customVerification || verificationText}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Compact version for space-constrained layouts */
export function MedicalBadgeCompact({
  reviewerName,
  reviewerTitle,
  className,
}: Pick<MedicalBadgeProps, "reviewerName" | "reviewerTitle" | "className">) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "border border-emerald-200 bg-emerald-50 px-3 py-1.5",
        "dark:border-emerald-800 dark:bg-emerald-900/20",
        className
      )}
    >
      <Shield className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
      <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
        Medically Reviewed
      </span>
      <span className="text-xs text-emerald-600 dark:text-emerald-400">
        by {reviewerName}, {reviewerTitle}
      </span>
    </div>
  );
}

/** Simple badge without reviewer details */
export function MedicalBadgeSimple({
  className,
  badgeText = "Medically Reviewed",
}: Pick<MedicalBadgeProps, "className" | "badgeText">) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full",
        "bg-emerald-100 px-2.5 py-1 text-xs font-medium",
        "text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
        className
      )}
    >
      <CheckCircle2 className="h-3.5 w-3.5" />
      <span>{badgeText}</span>
    </div>
  );
}
