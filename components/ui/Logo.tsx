import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  iconOnly?: boolean; // Deprecated, use variant="icon"
}

export function Logo({ className = "", variant = "full", iconOnly }: LogoProps) {
  const isIcon = variant === "icon" || iconOnly;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-600 rounded-lg rotate-3 opacity-20" />
        <div className="absolute inset-0 bg-blue-600 rounded-lg -rotate-3 opacity-20" />
        <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm border border-blue-500/20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-white"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </div>
      </div>

      {/* Text Mark */}
      {!isIcon && (
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold text-gray-900 dark:text-white leading-none tracking-tight">
            Metabolic
          </span>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.15em] leading-none mt-0.5">
            Science
          </span>
        </div>
      )}
    </div>
  );
}
