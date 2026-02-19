/** @fileoverview Tooltip - Accessible tooltip with configurable delay and positioning
 *  Built on Radix UI primitives with automatic positioning
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Tooltip content="This is helpful information">
 *   <button>Hover me</button>
 * </Tooltip>
 * 
 * // With custom delay
 * <Tooltip content="Delayed tooltip" delayDuration={500}>
 *   <button>Hover me</button>
 * </Tooltip>
 * 
 * // With positioning
 * <Tooltip content="Above" side="top">
 *   <button>Top</button>
 * </Tooltip>
 * 
 * // With rich content
 * <Tooltip
 *   content={
 *     <div>
 *       <strong>Title</strong>
 *       <p>Description text</p>
 *     </div>
 *   }
 * >
 *   <button>Rich tooltip</button>
 * </Tooltip>
 * 
 * // Disabled tooltip
 * <Tooltip content="Hidden" disabled>
 *   <button>No tooltip</button>
 * </Tooltip>
 * ```
 */

"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  /** Tooltip content (string or ReactNode) */
  content: ReactNode;
  /** Element that triggers the tooltip */
  children: ReactNode;
  /** Delay before showing tooltip (ms) */
  delayDuration?: number;
  /** Tooltip position relative to trigger */
  side?: "top" | "right" | "bottom" | "left";
  /** Alignment on the side */
  align?: "start" | "center" | "end";
  /** Offset from trigger element */
  sideOffset?: number;
  /** Additional CSS classes for tooltip content */
  className?: string;
  /** Disable tooltip */
  disabled?: boolean;
  /** Force tooltip open (controlled mode) */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Max width of tooltip */
  maxWidth?: number | string;
  /** Show arrow indicator */
  showArrow?: boolean;
  /** Animation variant */
  animation?: "fade" | "scale" | "none";
  /** Invert colors (dark tooltip on light bg) */
  inverted?: boolean;
}

const animationVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
};

export function Tooltip({
  content,
  children,
  delayDuration = 200,
  side = "top",
  align = "center",
  sideOffset = 8,
  className,
  disabled = false,
  open,
  onOpenChange,
  maxWidth = 250,
  showArrow = true,
  animation = "scale",
  inverted = false,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const anim = animationVariants[animation];

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root
        open={open ?? isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          onOpenChange?.(open);
        }}
      >
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            className="z-50"
            asChild
          >
            <motion.div
              initial={anim.initial}
              animate={anim.animate}
              exit={anim.exit}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className={cn(
                "rounded-lg px-3 py-2 text-sm shadow-lg",
                "border",
                inverted
                  ? "border-slate-700 bg-slate-900 text-slate-100"
                  : "border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
                className
              )}
              style={{ maxWidth }}
            >
              {content}

              {showArrow && (
                <TooltipPrimitive.Arrow
                  className={cn(
                    "fill-current",
                    inverted
                      ? "text-slate-900"
                      : "text-white dark:text-slate-900"
                  )}
                  width={12}
                  height={6}
                />
              )}
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

/** Simple tooltip with just text content */
export function TooltipSimple({
  text,
  children,
  ...props
}: Omit<TooltipProps, "content"> & { text: string }) {
  return (
    <Tooltip content={text} {...props}>
      {children}
    </Tooltip>
  );
}

/** Tooltip with title and description */
export function TooltipWithTitle({
  title,
  description,
  children,
  ...props
}: Omit<TooltipProps, "content"> & {
  title: string;
  description?: string;
}) {
  return (
    <Tooltip
      content={
        <div className="space-y-1">
          <p className="font-medium">{title}</p>
          {description && (
            <p className="text-xs opacity-80">{description}</p>
          )}
        </div>
      }
      {...props}
    >
      {children}
    </Tooltip>
  );
}

/** Icon button with tooltip (common pattern) */
export function IconButtonWithTooltip({
  icon,
  label,
  onClick,
  className,
  ...tooltipProps
}: {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
} & Omit<TooltipProps, "content" | "children">) {
  return (
    <Tooltip content={label} {...tooltipProps}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "inline-flex items-center justify-center rounded-lg p-2",
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          "dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
          "focus:outline-none focus:ring-2 focus:ring-emerald-500",
          className
        )}
        aria-label={label}
      >
        {icon}
      </button>
    </Tooltip>
  );
}

/** Tooltip group for multiple items with shared provider */
export function TooltipGroup({
  children,
  delayDuration = 200,
}: {
  children: ReactNode;
  delayDuration?: number;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

/** Tooltip without provider wrapper (use within TooltipGroup) */
export function TooltipItem({
  content,
  children,
  side = "top",
  align = "center",
  sideOffset = 8,
  className,
  maxWidth = 250,
  showArrow = true,
  animation = "scale",
  inverted = false,
}: Omit<TooltipProps, "delayDuration" | "disabled" | "open" | "onOpenChange">) {
  const anim = animationVariants[animation];

  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className="z-50"
          asChild
        >
          <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className={cn(
              "rounded-lg px-3 py-2 text-sm shadow-lg",
              "border",
              inverted
                ? "border-slate-700 bg-slate-900 text-slate-100"
                : "border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
              className
            )}
            style={{ maxWidth }}
          >
            {content}

            {showArrow && (
              <TooltipPrimitive.Arrow
                className={cn(
                  "fill-current",
                  inverted
                    ? "text-slate-900"
                    : "text-white dark:text-slate-900"
                )}
                width={12}
                height={6}
              />
            )}
          </motion.div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
