import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Metabolic Science | Evidence-Based Weight Loss & Health",
    template: "%s | Metabolic Science",
  },
  description:
    "Expert-reviewed information on weight loss medications, metabolism science, and GLP-1 therapies. Medically accurate, evidence-based health guidance.",
  keywords: [
    "weight loss",
    "semaglutide",
    "ozempic",
    "wegovy",
    "GLP-1",
    "metabolism",
    "medical weight loss",
    "tirzepatide",
    "mounjaro",
  ],
  authors: [{ name: "Metabolic Science" }],
  creator: "Metabolic Science",
  publisher: "Metabolic Science",
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
    url: "https://metabolicscience.com",
    siteName: "Metabolic Science",
    title: "Metabolic Science | Evidence-Based Weight Loss & Health",
    description:
      "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metabolic Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabolic Science | Evidence-Based Weight Loss & Health",
    description:
      "Expert-reviewed information on weight loss medications, metabolism, and GLP-1 therapies.",
    images: ["/og-image.jpg"],
    creator: "@metabolicscience",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://metabolicscience.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                const theme = getThemePreference();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <GlassHeader />
          <main className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
