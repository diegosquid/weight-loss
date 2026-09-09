import type { Metadata } from "next";

export const SITE_URL = "https://metabolicscience.org";
export const SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;

export function canonicalUrl(path = "/") {
  const pathname = new URL(path, SITE_URL).pathname;
  return `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "") + "/"}`;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "en_US", siteName: "Metabolic Science",
      title, description, url,
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Metabolic Science — research, practical guides and product assessments" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE] },
  };
}
