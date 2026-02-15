"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper για conditional classes αν δεν υπάρχει το utils
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <span className={classNames(
            "font-serif text-2xl font-bold tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Γιαννίτη<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {["Η Σχολή", "Τμήματα", "Πρόγραμμα", "Επικοινωνία"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={classNames(
                "text-sm font-medium tracking-wide hover:opacity-70 transition-opacity",
                isScrolled ? "text-primary" : "text-white/90"
              )}
            >
              {item}
            </Link>
          ))}
          
          {/* Κουμπί Εγγραφή - Τώρα πηγαίνει στο #επικοινωνία */}
          <Link 
            href="#επικοινωνία"
            className={classNames(
              "px-5 py-2 text-sm font-medium rounded-full border transition-all hover:bg-opacity-10",
              isScrolled 
                ? "border-primary text-primary hover:bg-primary" 
                : "border-white text-white hover:bg-white"
            )}
          >
            Εγγραφή
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {["Η Σχολή", "Τμήματα", "Πρόγραμμα", "Επικοινωνία"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`} // Διορθώθηκε για να δουλεύει και στο mobile
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-primary"
              >
                {item}
              </Link>
            ))}
            
            {/* Mobile Button Link */}
             <Link
                href="#επικοινωνία"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-xl text-primary border border-primary px-6 py-2 rounded-full mt-4"
              >
                Εγγραφή
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}