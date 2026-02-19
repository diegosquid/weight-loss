import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Metabolic Health Authority | Evidence-Based Weight Loss",
    template: "%s | Metabolic Health Authority",
  },
  description:
    "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies. Medically accurate, evidence-based health guidance.",
  keywords: [
    "weight loss",
    "semaglutide",
    "ozempic",
    "wegovy",
    "GLP-1",
    "metabolism",
    "medical weight loss",
  ],
  authors: [{ name: "Metabolic Health Authority" }],
  creator: "Metabolic Health Authority",
  publisher: "Metabolic Health Authority",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metabolichealthauthority.com",
    siteName: "Metabolic Health Authority",
    title: "Metabolic Health Authority | Evidence-Based Weight Loss",
    description:
      "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metabolic Health Authority",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabolic Health Authority | Evidence-Based Weight Loss",
    description:
      "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies.",
    images: ["/og-image.jpg"],
    creator: "@metabolichealth",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://metabolichealthauthority.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
