import { ShieldCheck, CheckCircle } from "lucide-react";
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
        "flex items-start gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50",
        className
      )}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
      </div>
      <div>
        <p className="text-sm font-bold text-emerald-800">Medically Reviewed</p>
        <p className="text-xs text-emerald-700 mt-0.5">
          Reviewed by{" "}
          <span className="font-semibold">
            {reviewerName}
            {reviewerCredentials && `, ${reviewerCredentials}`}
          </span>{" "}
          on {reviewDate}
        </p>
        <p className="text-[11px] text-emerald-600 mt-1">
          Our medical review process ensures clinical accuracy and patient safety.
        </p>
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
      color: "bg-green-50 border-green-300 text-green-800",
    },
    B: {
      label: "Level B Evidence",
      description: "Moderate evidence",
      color: "bg-blue-50 border-blue-300 text-blue-800",
    },
    C: {
      label: "Level C Evidence",
      description: "Expert opinion",
      color: "bg-amber-50 border-amber-300 text-amber-800",
    },
  };

  const { label, color } = config[level];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold",
        color,
        className
      )}
    >
      <CheckCircle className="w-3.5 h-3.5" />
      {label}
    </div>
  );
}
