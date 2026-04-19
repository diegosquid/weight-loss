"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Sparkles, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

/** Minimal per-article payload passed down from the server at build time. */
export interface SearchArticle {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

interface SearchBarProps {
  isMobile?: boolean;
  autoFocus?: boolean;
  /**
   * Full article index, pre-built on the server. The search filters this list
   * entirely client-side — there is no /search route, no query-string URL, and
   * nothing for crawlers to discover. Selecting a result navigates directly to
   * the article page (which is in the sitemap and already indexable).
   */
  articles: SearchArticle[];
}

const placeholders = [
  "Search GLP-1 medications...",
  "How does metabolism work?",
  "Best supplements for weight loss",
  "Semaglutide vs Tirzepatide",
  "Mounjaro dosage chart",
];

const MAX_RESULTS = 6;

/**
 * Score a single article against a query. Higher score = better match.
 * Returns 0 for no match so we can filter in a single pass.
 */
function scoreArticle(article: SearchArticle, needle: string): number {
  if (!needle) return 0;
  const q = needle.toLowerCase();
  const title = article.title.toLowerCase();
  const description = article.description.toLowerCase();
  const category = article.category.toLowerCase();
  const tagString = article.tags.join(" ").toLowerCase();

  let score = 0;
  if (title.startsWith(q)) score += 100;
  if (title.includes(q)) score += 50;
  if (description.includes(q)) score += 20;
  if (category.includes(q)) score += 15;
  if (tagString.includes(q)) score += 10;

  // Token-level fallback: every word in the query must appear somewhere.
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length > 1 && score === 0) {
    const haystack = `${title} ${description} ${category} ${tagString}`;
    if (tokens.every((t) => haystack.includes(t))) score += 5;
  }

  return score;
}

export function SearchBar({ isMobile = false, autoFocus = false, articles }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Auto-focus effect
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Rotating placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Live-filter results
  const results = useMemo<SearchArticle[]>(() => {
    const q = query.trim();
    if (!q) return [];
    return articles
      .map((article) => ({ article, score: scoreArticle(article, q) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS)
      .map((r) => r.article);
  }, [articles, query]);

  // Popular fallback shown before the user types anything — real articles, not placeholders
  const popular = useMemo<SearchArticle[]>(() => {
    const preferred = [
      "what-is-semaglutide",
      "ozempic-vs-wegovy",
      "tirzepatide-vs-semaglutide",
      "glp1-side-effects",
      "mounjaro-dosage-chart",
    ];
    const bySlug = new Map(articles.map((a) => [a.slug, a]));
    const picks: SearchArticle[] = [];
    for (const slug of preferred) {
      const match = bySlug.get(slug);
      if (match) picks.push(match);
    }
    // Top up with the first articles in the index if we didn't find enough preferred ones
    if (picks.length < 5) {
      for (const article of articles) {
        if (picks.length >= 5) break;
        if (!picks.find((p) => p.slug === article.slug)) picks.push(article);
      }
    }
    return picks.slice(0, 5);
  }, [articles]);

  // Reset active index when the visible list changes
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const visible = query.trim() ? results : popular;

  const goTo = useCallback(
    (article: SearchArticle) => {
      setIsFocused(false);
      setShowSuggestions(false);
      setQuery("");
      router.push(`/${article.categorySlug}/${article.slug}`);
    },
    [router]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (visible.length === 0) return;
    const pick = activeIndex >= 0 ? visible[activeIndex] : visible[0];
    if (pick) goTo(pick);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, visible.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Escape") {
      setIsFocused(false);
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const renderResultList = () => (
    <div className="space-y-1">
      {visible.map((article, i) => (
        <button
          key={`${article.categorySlug}/${article.slug}`}
          type="button"
          onMouseDown={(e) => {
            // onMouseDown (not onClick) so it fires before the input onBlur
            e.preventDefault();
            goTo(article);
          }}
          onMouseEnter={() => setActiveIndex(i)}
          className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group ${
            activeIndex === i
              ? "bg-blue-50 dark:bg-gray-700/80"
              : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
          }`}
        >
          <FileText className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {article.title}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {article.category}
            </div>
          </div>
          <ArrowRight className="w-3 h-3 text-gray-300 dark:text-gray-600 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </button>
      ))}
    </div>
  );

  // ───────────────────────────────────────────────────────────────────────
  // Mobile variant
  // ───────────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="relative">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              placeholder={placeholders[placeholderIndex]}
              className="w-full h-12 pl-12 pr-12 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
              >
                <X className="w-3 h-3 text-gray-500" />
              </button>
            )}
          </div>
        </form>

        <AnimatePresence>
          {showSuggestions && isFocused && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2 px-1">
                {query.trim() ? (
                  <>
                    <Search className="w-3 h-3" />
                    {results.length > 0
                      ? `${results.length} result${results.length === 1 ? "" : "s"}`
                      : "No matching articles"}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3" />
                    Popular articles
                  </>
                )}
              </h4>
              {visible.length > 0 ? (
                renderResultList()
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 px-3 py-4">
                  Try a different search term — for example, &ldquo;Ozempic&rdquo;, &ldquo;BMI&rdquo;, or &ldquo;metabolism&rdquo;.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ───────────────────────────────────────────────────────────────────────
  // Desktop variant
  // ───────────────────────────────────────────────────────────────────────
  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          animate={{
            width: isFocused ? 320 : 280,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Search
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
              isFocused ? "text-primary" : "text-gray-400"
            }`}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(true);
            }}
            onBlur={() => {
              // Delay to allow clicks on suggestions to fire first
              setTimeout(() => {
                setIsFocused(false);
                setShowSuggestions(false);
              }, 200);
            }}
            placeholder={placeholders[placeholderIndex]}
            className={`w-full h-10 pl-11 pr-10 bg-gray-100/80 dark:bg-gray-800/80 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
              isFocused
                ? "bg-white dark:bg-gray-800 shadow-lg shadow-primary/10 dark:shadow-black/20 ring-2 ring-primary/20 dark:ring-primary/30"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          />
          <AnimatePresence>
            {query ? (
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                onClick={clearSearch}
                className="absolute right-2 inset-y-0 my-auto w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-1.5 inset-y-0 my-auto w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all shadow-sm hover:shadow-md group"
              >
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </form>

      {/* Desktop suggestions dropdown */}
      <AnimatePresence>
        {showSuggestions && isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden z-50 min-w-[320px]"
          >
            <div className="p-3">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3 flex items-center gap-2">
                {query.trim() ? (
                  <>
                    <Search className="w-3 h-3" />
                    {results.length > 0
                      ? `${results.length} result${results.length === 1 ? "" : "s"}`
                      : "No matching articles"}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3" />
                    Popular articles
                  </>
                )}
              </h4>
              {visible.length > 0 ? (
                renderResultList()
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 px-3 py-4">
                  Try &ldquo;Ozempic&rdquo;, &ldquo;BMI&rdquo;, or &ldquo;metabolism&rdquo;.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
