"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Έλεγχος αν ο χρήστης έχει ήδη επιλέξει
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Καθυστέρηση εμφάνισης για πιο smooth εμπειρία
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Text Content */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-full hidden sm:block">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-medium text-gray-900">
                  Πολιτική Cookies
                </h4>
                <p className="text-sm text-secondary font-light leading-relaxed max-w-xl">
                  Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας 
                  και να αναλύσουμε την επισκεψιμότητα της ιστοσελίδας μας. 
                  Μάθετε περισσότερα στην{" "}
                  <Link href="/privacy" className="text-primary underline underline-offset-4 hover:text-primary/80">
                    Πολιτική Απορρήτου
                  </Link>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Όχι, ευχαριστώ
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-white bg-primary border border-primary rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Αποδοχή
              </button>
            </div>

            {/* Close Icon (Optional alternative to Decline) */}
            <button 
                onClick={handleDecline}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 md:hidden"
            >
                <X className="w-5 h-5" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}