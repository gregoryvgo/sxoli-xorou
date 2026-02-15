"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar"; 
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function BalletPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/class-ballet.webp"
            alt="Κλασικό Μπαλέτο στη Σχολή Γιαννίτη"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-white/80 font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Τμηματα & Σπουδες
            </h4>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
              Κλασικό Μπαλέτο
            </h1>
            <p className="text-white/90 text-lg font-light max-w-xl mx-auto">
              Η θεμελιώδης τέχνη του χορού. Πειθαρχία, χάρη και υψηλή αισθητική 
              που διαμορφώνει σώμα και πνεύμα.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Back Link */}
        <Link href="/#τμήματα" className="inline-flex items-center gap-2 text-secondary text-sm mb-12 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Επιστροφή στα Τμήματα
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Description - ΑΛΛΑΓΜΕΝΟ ΚΕΙΜΕΝΟ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              Η διαχρονική αξία της <br />
              <span className="italic text-primary">κλασικής παιδείας.</span>
            </h2>
            
            <p className="text-secondary text-lg leading-relaxed mb-6 font-light">
              Το κλασικό μπαλέτο δεν είναι απλώς ένα είδος χορού· είναι ο ακρογωνιαίος λίθος 
              κάθε χορευτικής εξέλιξης και μια ολοκληρωμένη σπουδή που συνδυάζει την αθλητική 
              δύναμη με την καλλιτεχνική ευαισθησία.
            </p>
            
            <p className="text-secondary text-lg leading-relaxed mb-8 font-light">
              Μέσα από τη μεθοδική εκμάθηση, οι μαθητές αποκτούν ορθοσωμία, ελαστικότητα 
              και μυϊκή ενδυνάμωση, ενώ ταυτόχρονα καλλιεργούν την πειθαρχία, τη μουσικότητα 
              και την πνευματική συγκέντρωση. Είναι μια διαδικασία που σμιλεύει τον χαρακτήρα, 
              χαρίζοντας χάρη στην κίνηση και αυτοπεποίθηση που συνοδεύει τον χορευτή σε κάθε του βήμα, 
              εντός και εκτός σκηνής.
            </p>

            {/* New Quote */}
            <div className="border-l-2 border-primary pl-6 py-2 my-10">
              <p className="font-serif text-xl italic text-primary">
                "Το μπαλέτο είναι η ποίηση της κίνησης, όπου κάθε βήμα είναι και μια λέξη."
              </p>
            </div>
          </motion.div>

          {/* Right: Details Box */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-100"
          >
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Πληροφορίες Τμήματος</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900">Ηλικίες</span>
                  <span className="text-secondary font-light text-sm">Από 4 ετών (Pre-Primary) έως Ενήλικες</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900">Επίπεδα</span>
                  <span className="text-secondary font-light text-sm">Ερασιτεχνικά, Προ-επαγγελματικά & Εντατικά</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900">Ενδυμασία</span>
                  <span className="text-secondary font-light text-sm">Κορμάκι σχολής, ροζ καλσόν, παπούτσια μπαλέτου, κότσος.</span>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link href="/#επικοινωνία" className="w-full block text-center bg-primary text-white py-4 rounded-sm hover:bg-primary/90 transition-colors">
                Εκδήλωση Ενδιαφέροντος
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}