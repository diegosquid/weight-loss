"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  isMobile?: boolean;
  autoFocus?: boolean;
}

const placeholders = [
  "Search GLP-1 medications...",
  "How does metabolism work?",
  "Best supplements for weight loss",
  "Calculate your BMI...",
  "Semaglutide vs Tirzepatide",
  "Natural metabolism boosters",
];

const recentSearches = [
  "Ozempic dosage",
  "Metabolic syndrome",
  "Protein powder",
];

const trendingSearches = [
  "Wegovy side effects",
  "Mounjaro reviews",
  "Intermittent fasting",
];

export function SearchBar({ isMobile = false, autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  // Handle search submission
  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsFocused(false);
      setShowSuggestions(false);
      setQuery("");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

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
              className="mt-4 space-y-4"
            >
              {/* Recent Searches */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recent
                </h4>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSearch(search)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">{search}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </h4>
                <div className="space-y-2">
                  {trendingSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSearch(search)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-gray-700 dark:text-gray-300">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

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
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(true);
            }}
            onBlur={() => {
              // Delay to allow clicking suggestions
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

      {/* Desktop Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-3">
              {/* Recent Searches */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recent
                </h4>
                <div className="space-y-1">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      type="button"
                      onClick={() => handleSearch(search)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    >
                      <Clock className="w-4 h-4 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{search}</span>
                      <ArrowRight className="w-3 h-3 text-gray-300 dark:text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3 flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </h4>
                <div className="space-y-1">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={search}
                      type="button"
                      onClick={() => handleSearch(search)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    >
                      <span className={`w-5 h-5 rounded text-xs font-bold flex items-center justify-center ${
                        index === 0
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                          : index === 1
                          ? "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                          : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{search}</span>
                      <ArrowRight className="w-3 h-3 text-gray-300 dark:text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
