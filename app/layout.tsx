import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
  display:  "swap",
});

const playfair = Playfair_Display({
  subsets:  ["latin"],
  variable: "--font-playfair",
  display:  "swap",
  weight:   ["400", "600", "700", "900"],
  style:    ["normal", "italic"],
});

export const metadata: Metadata = {
  title:       "Vignesh K — Electronics & Software Engineer",
  description:
    "Portfolio of Vignesh K — B.E. Electronics and Communication Engineering student building skills in electronics, backend development, and AI-powered product development.",
  openGraph: {
    title:       "Vignesh K — Electronics & Software Engineer",
    description: "Building at the intersection of electronics, software, and AI.",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen bg-[#050508] overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300]
                     focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}