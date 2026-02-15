import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent"; // <-- 1. ΠΡΟΣΘΗΚΗ IMPORT

// 1. Ρύθμιση της Inter
const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  display: "swap",
});

// 2. Ρύθμιση της Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Σχολή Χορού Γιαννίτη | Σύγχρονη Εκπαίδευση & Τέχνη",
  description: "Επαγγελματική εκπαίδευση χορού σε ένα περιβάλλον υψηλής αισθητικής.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}>
        
        {/* Το κυρίως περιεχόμενο της σελίδας */}
        {children}

        {/* 2. ΠΡΟΣΘΗΚΗ: Το Cookie Banner στο τέλος */}
        <CookieConsent />
        
      </body>
    </html>
  );
}