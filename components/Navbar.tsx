"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Κλειδώνει το scroll όταν ανοίγει το μενού
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-5",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent text-white"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <span className={classNames(
              "font-serif text-3xl font-bold tracking-tight transition-colors",
              isMobileMenuOpen ? "text-gray-900" : (isScrolled ? "text-primary" : "text-white")
            )}>
              Γιαννίτη<span className="text-secondary">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {["Η Σχολή", "Τμήματα", "Πρόγραμμα", "Επικοινωνία"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={classNames(
                  "text-base font-medium tracking-wide hover:opacity-70 transition-opacity",
                  isScrolled ? "text-primary" : "text-white/90"
                )}
              >
                {item}
              </Link>
            ))}
            
            <Link 
              href="#επικοινωνία"
              className={classNames(
                "px-6 py-2.5 text-base font-medium rounded-full border transition-all hover:bg-opacity-10",
                isScrolled 
                  ? "border-primary text-primary hover:bg-primary" 
                  : "border-white text-white hover:bg-white"
              )}
            >
              Εγγραφή
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Όταν είναι ανοιχτό το μενού, το Χ δεν χρειάζεται εδώ γιατί είναι μέσα στο panel
               <div /> 
            ) : (
              <Menu className={classNames("w-8 h-8", isScrolled ? "text-primary" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (Darken background) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex flex-col h-full p-8 relative">
                
                {/* Close Button inside Panel */}
                 <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col mt-16 space-y-0">
                  {["Η Σχολή", "Τμήματα", "Πρόγραμμα", "Επικοινωνία"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-sans text-xl text-gray-800 font-medium hover:text-primary transition-colors block py-4 border-b border-gray-100"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Main CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="#επικοινωνία"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block text-center bg-[#0f3d3e] text-white font-medium text-base py-4 rounded-sm hover:bg-[#0f3d3e]/90 transition-colors shadow-sm"
                  >
                    Κλείστε Ραντεβού
                  </Link>
                </motion.div>

                {/* Footer Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-6"
                >
                  <div className="flex flex-col gap-5">
                    <a href="tel:+302101234567" className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors group">
                      <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                      <span className="text-base font-light tracking-wide">+30 210 1234567</span>
                    </a>
                    
                    <div className="flex gap-6">
                       <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                         <Instagram className="w-6 h-6" />
                       </a>
                       <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                         <Facebook className="w-6 h-6" />
                       </a>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}