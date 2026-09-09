import { Author } from "@/types";

export const editorialAuthor: Author = {
  name: "Metabolic Science Editorial",
  slug: "editorial-team",
  title: "Research and editorial content",
  schemaType: "Organization",
  bio: "Metabolic Science publishes educational articles with AI assistance. Our articles link to their sources and explain research limitations. They are not a substitute for care from a qualified health professional. No independent medical review is claimed.",
};

// Only verified contributors belong in this registry. Legacy bylines fall back
// to the publisher; an unknown reviewer must never produce a medical badge.
export const authors: Record<string, Author> = {
  "editorial-team": editorialAuthor,
};
