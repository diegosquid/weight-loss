import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicalReviewBadgeProps {
  reviewerName: string;
  reviewerCredentials?: string;
  reviewDate: string;
  className?: string;
}

export function MedicalReviewBadge({
  reviewerName,
  reviewerCredentials,
  reviewDate,
  className,
}: MedicalReviewBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[var(--secondary-light)] border-[var(--secondary)]",
        className
      )}
    >
      <Shield className="w-5 h-5 text-[var(--secondary)]" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[var(--secondary-dark)]">
          Medically Reviewed
        </span>
        <span className="text-xs text-[var(--gray-700)]">
          By {reviewerName}
          {reviewerCredentials && `, ${reviewerCredentials}`} on {reviewDate}
        </span>
      </div>
    </div>
  );
}

interface EvidenceBadgeProps {
  level: "A" | "B" | "C";
  className?: string;
}

export function EvidenceBadge({ level, className }: EvidenceBadgeProps) {
  const config = {
    A: {
      label: "Level A Evidence",
      description: "Strong evidence from RCTs",
      color: "bg-green-100 border-green-500 text-green-800",
    },
    B: {
      label: "Level B Evidence",
      description: "Moderate evidence",
      color: "bg-blue-100 border-blue-500 text-blue-800",
    },
    C: {
      label: "Level C Evidence",
      description: "Expert opinion",
      color: "bg-amber-100 border-amber-500 text-amber-800",
    },
  };

  const { label, description, color } = config[level];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs",
        color,
        className
      )}
      title={description}
    >
      <CheckCircle className="w-3.5 h-3.5" />
      <span className="font-medium">{label}</span>
    </div>
  );
}
