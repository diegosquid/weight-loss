import { cn } from "@/lib/utils";
import { BookOpen, ExternalLink } from "lucide-react";

interface CitationProps {
  id: string;
  title: string;
  source: string;
  url?: string;
  year?: string;
  authors?: string;
  className?: string;
}

export function Citation({
  id,
  title,
  source,
  url,
  year,
  authors,
  className,
}: CitationProps) {
  return (
    <li id={`ref-${id}`} className={cn("text-sm text-[var(--gray-700)]", className)}>
      <span className="font-medium text-[var(--gray-900)]">[{id}]</span>{" "}
      {authors && `${authors}. `}
      <span className="italic">{title}</span>. {source}
      {year && ` (${year})`}.
      {url && (
        <
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 ml-1 text-[var(--primary)] hover:text-[var(--primary-dark)]"
        >
          <ExternalLink className="w-3 h-3" />
          View
        </>
      )}
    </li>
  );
}

interface ReferenceListProps {
  citations: CitationProps[];
  className?: string;
}

export function ReferenceList({ citations, className }: ReferenceListProps) {
  return (
    <div className={cn("mt-12 pt-8 border-t border-[var(--gray-300)]", className)}>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-[var(--primary)]" />
        <h2 className="text-xl font-bold text-[var(--gray-900)]">References</h2>
      </div>
      <p className="text-sm text-[var(--gray-700)] mb-4">
        Our content is based on peer-reviewed research, clinical guidelines, and expert consensus.
      </p>
      <ol className="space-y-3">
        {citations.map((citation) => (
          <Citation key={citation.id} {...citation} />
        ))}
      </ol>
    </div>
  );
}

interface InlineCitationProps {
  id: string;
  className?: string;
}

export function InlineCitation({ id, className }: InlineCitationProps) {
  return (
    <sup className={cn("text-[var(--primary)] font-medium", className)}>
      <a
        href={`#ref-${id}`}
        className="hover:text-[var(--primary-dark)] hover:underline"
        aria-label={`Jump to reference ${id}`}
      >
        [{id}]
      </a>
    </sup>
  );
}
