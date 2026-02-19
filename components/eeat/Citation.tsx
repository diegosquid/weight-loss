import { cn } from "@/lib/utils";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

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
    <li id={`ref-${id}`} className={cn("text-sm text-gray-600", className)}>
      <span className="font-medium text-gray-900">[{id}]</span>{" "}
      {authors && `${authors}. `}
      <span className="italic">{title}</span>. {source}
      {year && ` (${year})`}.
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 ml-1 text-blue-600 hover:text-blue-800"
        >
          <ExternalLink className="w-3 h-3" />
          View
        </Link>
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
    <div className={cn("mt-12 pt-8 border-t border-gray-200", className)}>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">References</h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">
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
    <sup className={cn("text-blue-600 font-medium", className)}>
      <a
        href={`#ref-${id}`}
        className="hover:text-blue-800 hover:underline"
        aria-label={`Jump to reference ${id}`}
      >
        [{id}]
      </a>
    </sup>
  );
}
