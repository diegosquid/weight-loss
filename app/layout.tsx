import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlassHeader } from "@/components/layout/GlassHeader";

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
          <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="font-serif text-lg font-bold">
                      Metabolic Science
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm">
                    Evidence-based information on weight loss medications, metabolism, and GLP-1 therapies. 
                    Medically reviewed and scientifically accurate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="/glp-1" className="hover:text-primary transition-colors">GLP-1 Medications</a></li>
                    <li><a href="/metabolism" className="hover:text-primary transition-colors">Metabolism</a></li>
                    <li><a href="/supplements" className="hover:text-primary transition-colors">Supplements</a></li>
                    <li><a href="/calculators" className="hover:text-primary transition-colors">Calculators</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                    <li><a href="/editorial-policy" className="hover:text-primary transition-colors">Editorial Policy</a></li>
                    <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy</a></li>
                    <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  © {new Date().getFullYear()} Metabolic Science. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-600 max-w-md text-center md:text-right">
                  This site is for informational purposes only and does not constitute medical advice.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
