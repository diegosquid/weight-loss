import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  iconOnly?: boolean; // Deprecated, use variant="icon"
  dark?: boolean;
}

export function Logo({ className = "", variant = "full", iconOnly, dark }: LogoProps) {
  const isIcon = variant === "icon" || iconOnly;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Mark — matches favicon */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#logo-bg)" />
          {/* Stylized M */}
          <path d="M7 23V11l5 7 5-7v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pulse line */}
          <path d="M19 17h2.5l1.5-3 2 6 1.5-3H29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        </svg>
      </div>

      {/* Text Mark */}
      {!isIcon && (
        <div className="flex flex-col">
          <span className={`font-serif text-lg font-bold leading-none tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
            Metabolic
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.15em] leading-none mt-0.5 ${dark ? "text-blue-400" : "text-blue-600"}`}>
            Science
          </span>
        </div>
      )}
    </div>
  );
}
