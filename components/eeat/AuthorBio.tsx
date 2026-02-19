import Image from "next/image";
import { cn } from "@/lib/utils";
import { Author } from "@/types";
import { Award, GraduationCap, Building2 } from "lucide-react";

interface AuthorBioProps {
  author: Author;
  variant?: "compact" | "full";
  className?: string;
}

export function AuthorBio({ author, variant = "full", className }: AuthorBioProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
            <span className="text-lg font-semibold text-[var(--primary)]">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-[var(--gray-900)]">{author.name}</p>
          <p className="text-sm text-[var(--gray-700)]">
            {author.title}
            {author.credentials && `, ${author.credentials}`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-[var(--gray-100)] rounded-xl p-6 border border-[var(--gray-300)]",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-semibold text-[var(--primary)]">
              {author.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-[var(--gray-900)]">{author.name}</h3>
            <p className="text-[var(--primary)] font-medium">
              {author.title}
              {author.credentials && (
                <span className="text-[var(--gray-700)]">, {author.credentials}</span>
              )}
            </p>
          </div>

          <p className="text-[var(--gray-700)] mb-4 leading-relaxed">{author.bio}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            {author.specialties && author.specialties.length > 0 && (
              <div className="flex items-center gap-1.5 text-[var(--gray-700)]">
                <Award className="w-4 h-4 text-[var(--secondary)]" />
                <span>{author.specialties.join(", ")}</span>
              </div>
            )}

            {author.affiliations && author.affiliations.length > 0 && (
              <div className="flex items-center gap-1.5 text-[var(--gray-700)]">
                <Building2 className="w-4 h-4 text-[var(--secondary)]" />
                <span>{author.affiliations.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
