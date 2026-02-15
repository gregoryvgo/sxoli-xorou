"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Πιστοποιημένοι Καθηγητές Χορού",
  "Ολιγομελή Τμήματα για Προσωπική Προσοχή",
  "Σύγχρονες Εγκαταστάσεις",
  "Συμμετοχή σε Φεστιβάλ & Διαγωνισμούς",
];

export default function About() {
  return (
    <section id="η σχολή" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/about-1.webp" // Βεβαιώσου ότι υπάρχει ή άλλαξέ το
                alt="Μάθημα κλασικού μπαλέτου στη σχολή Γιαννίτη"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Outline Box - Luxury Detail */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 -z-10 rounded-sm" />
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">
                Η Φιλοσοφια μας
              </h4>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                Εκπαίδευση με σεβασμό στην <span className="text-primary italic">προσωπικότητα</span> του μαθητή.
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-light">
                Στη Σχολή Χορού Γιαννίτη, πιστεύουμε ότι ο χορός δεν είναι απλά βήματα. 
                Είναι παιδεία, πειθαρχία και έκφραση. Στόχος μας είναι να καλλιεργήσουμε 
                την αγάπη για την τέχνη σε ένα ασφαλές και υποστηρικτικό περιβάλλον, 
                παρέχοντας υψηλού επιπέδου εκπαίδευση από τα πρώτα βήματα μέχρι το επαγγελματικό επίπεδο.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-4"
            >
                {/* Signature or Quote (Optional) */}
                <p className="font-serif text-xl italic text-primary">"Χορεύουμε για να εκφράσουμε όσα δεν μπορούμε να πούμε."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}