/** @fileoverview Skeleton - Loading skeleton components
 *  Card, text, and generic skeleton with pulse animation
 * 
 * @example
 * ```tsx
 * // Card skeleton
 * <SkeletonCard />
 * 
 * // Text skeleton
 * <SkeletonText lines={3} />
 * 
 * // Avatar with text
 * <SkeletonAvatar />
 * 
 * // Custom skeleton
 * <Skeleton className="h-32 w-full" />
 * 
 * // Skeleton wrapper for conditional loading
 * <SkeletonWrapper isLoading={isLoading}>
 *   <ActualContent />
 * </SkeletonWrapper>
 * ```
 */

import { cn } from "@/lib/utils";

export interface SkeletonProps {
  /** Additional CSS classes */
  className?: string;
  /** Animation variant */
  animation?: "pulse" | "shimmer" | "none";
  /** Rounded corners */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  /** Inline styles */
  style?: React.CSSProperties;
}

const animationClasses = {
  pulse: "animate-pulse",
  shimmer: "animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]",
  none: "",
};

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

/** Base skeleton component */
export function Skeleton({
  className,
  animation = "pulse",
  rounded = "md",
  style,
}: SkeletonProps) {
  return (
    <div
      style={style}
      className={cn(
        "bg-slate-200 dark:bg-slate-700",
        animationClasses[animation],
        roundedClasses[rounded],
        className
      )}
    />
  );
}

/** Card skeleton with image, title, and content areas */
export function SkeletonCard({
  hasImage = true,
  lines = 3,
  className,
}: {
  hasImage?: boolean;
  lines?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      {hasImage && (
        <Skeleton className="mb-4 h-40 w-full rounded-lg" />
      )}
      <Skeleton className="mb-3 h-5 w-3/4 rounded-md" />
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn(
              "h-4 rounded-md",
              i === lines - 1 ? "w-2/3" : "w-full"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/** Text skeleton with multiple lines */
export function SkeletonText({
  lines = 2,
  className,
  lastLineWidth = "60%",
}: {
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4 rounded-md"
          style={{
            width: i === lines - 1 ? lastLineWidth : "100%",
          }}
        />
      ))}
    </div>
  );
}

/** Avatar skeleton */
export function SkeletonAvatar({
  size = "md",
  className,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClasses = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <Skeleton
      className={cn(sizeClasses[size], className)}
      rounded="full"
    />
  );
}

/** Avatar with text skeleton (common pattern) */
export function SkeletonAvatarText({
  avatarSize = "md",
  lines = 2,
  className,
}: {
  avatarSize?: "xs" | "sm" | "md" | "lg" | "xl";
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SkeletonAvatar size={avatarSize} />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-24 rounded-md" />
        {lines > 1 && (
          <Skeleton className="h-3 w-16 rounded-md" />
        )}
      </div>
    </div>
  );
}

/** Button skeleton */
export function SkeletonButton({
  width = "120px",
  className,
}: {
  width?: string;
  className?: string;
}) {
  return (
    <Skeleton
      className={cn("h-10 rounded-lg", className)}
      style={{ width }}
    />
  );
}

/** Stat/Metric skeleton */
export function SkeletonStat({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Skeleton className="h-8 w-20 rounded-md" />
      <Skeleton className="h-4 w-32 rounded-md" />
    </div>
  );
}

/** List item skeleton */
export function SkeletonListItem({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)}>
      <SkeletonAvatar size="sm" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full max-w-[200px] rounded-md" />
      </div>
      <Skeleton className="h-4 w-12 rounded-md" />
    </div>
  );
}

/** Table row skeleton */
export function SkeletonTableRow({
  columns = 4,
  className,
}: {
  columns?: number;
  className?: string;
}) {
  return (
    <tr className={className}>
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <Skeleton
            className="h-4 rounded-md"
            style={{ width: i === 0 ? "60%" : "80%" }}
          />
        </td>
      ))}
    </tr>
  );
}

/** Wrapper component for conditional skeleton rendering */
export function SkeletonWrapper({
  isLoading,
  children,
  skeleton,
  className,
}: {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton: React.ReactNode;
  className?: string;
}) {
  if (isLoading) {
    return <div className={className}>{skeleton}</div>;
  }

  return <>{children}</>;
}

/** Full page skeleton layout */
export function SkeletonPage({
  headerHeight = 64,
  className,
}: {
  headerHeight?: number;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Header */}
      <Skeleton
        className="w-full"
        style={{ height: headerHeight }}
        rounded="none"
      />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Title */}
        <Skeleton className="mb-8 h-8 w-1/3 rounded-lg" />
        
        {/* Content grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
