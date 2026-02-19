import Image from "next/image";
import { cn } from "@/lib/utils";
import { Author } from "@/types";
import { Award, Building2 } from "lucide-react";

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
            className="rounded-full object-cover ring-2 ring-gray-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-gray-200">
            <span className="text-lg font-bold text-blue-700">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-gray-900">{author.name}</p>
          <p className="text-xs text-gray-500">
            {author.title}
            {author.credentials && `, ${author.credentials}`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-gray-50 rounded-2xl p-6 border border-gray-200", className)}>
      <div className="flex items-start gap-5">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-full object-cover flex-shrink-0 ring-2 ring-gray-200"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 ring-2 ring-gray-200">
            <span className="text-2xl font-bold text-blue-700">
              {author.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="text-base font-bold text-gray-900">{author.name}</p>
          <p className="text-sm font-medium text-blue-700 mt-0.5">
            {author.title}
            {author.credentials && (
              <span className="text-gray-500 font-normal">, {author.credentials}</span>
            )}
          </p>

          {author.bio && (
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{author.bio}</p>
          )}

          {((author.specialties && author.specialties.length > 0) ||
            (author.affiliations && author.affiliations.length > 0)) && (
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
              {author.specialties && author.specialties.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{author.specialties.join(", ")}</span>
                </div>
              )}
              {author.affiliations && author.affiliations.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>{author.affiliations.join(", ")}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
