import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; // Αυτό είναι απαραίτητο για να δουλέψει το Tailwind

// 1. Ρύθμιση της Inter (για το κυρίως κείμενο)
const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter", // Αυτό το όνομα πρέπει να ταιριάζει με το globals.css
  display: "swap",
});

// 2. Ρύθμιση της Playfair Display (για τους τίτλους - Luxury ύφος)
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
      {/* Εδώ "κουμπώνουμε" τις γραμματοσειρές στο body.
        Το className antialiased κάνει τα fonts να φαίνονται πιο καθαρά/λεπτά.
      */}
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}