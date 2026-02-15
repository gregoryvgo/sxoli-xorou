"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar"; 
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function TraditionalPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/class-traditional.webp"
            alt="Παραδοσιακοί Χοροί στη Σχολή Γιαννίτη"
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
              Παραδοσιακοί Χοροί
            </h1>
            <p className="text-white/90 text-lg font-light max-w-xl mx-auto">
              Ρυθμός, μνήμη και ελληνική ψυχή. Ένα ταξίδι στην ιστορία 
              μέσα από τα βήματα του τόπου μας.
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
          
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              Η επιστροφή στις <br />
              <span className="italic text-primary">ρίζες μας.</span>
            </h2>
            
            <p className="text-secondary text-lg leading-relaxed mb-6 font-light">
              Οι ελληνικοί παραδοσιακοί χοροί δεν είναι απλώς βήματα· είναι η ζωντανή ιστορία 
              και η συλλογική μνήμη του τόπου μας. Από τα νησιώτικα συρτά μέχρι τους λεβέντικους 
              χορούς της Κρήτης και του Πόντου, κάθε περιοχή έχει τον δικό της ρυθμό και χαρακτήρα.
            </p>
            
            <p className="text-secondary text-lg leading-relaxed mb-8 font-light">
              Στα τμήματά μας, δίνουμε έμφαση όχι μόνο στην εκμάθηση των βημάτων, αλλά και στο ύφος, 
              στη στάση του σώματος και στη σημασία της ομαδικότητας. Ο κύκλος του χορού μας ενώνει, 
              διατηρώντας την παράδοση ζωντανή στο σήμερα.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-primary pl-6 py-2 my-10">
              <p className="font-serif text-xl italic text-primary">
                "Όποιος δεν χορεύει, δεν ξέρει τι θα πει ζωή."
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
                  <span className="text-secondary font-light text-sm">Παιδικά, Εφηβικά & Τμήματα Ενηλίκων</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900">Ρεπερτόριο</span>
                  <span className="text-secondary font-light text-sm">Χοροί από όλη την Ελλάδα (Στεριά, Νησιά, Πόντος, Κρήτη)</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900">Ενδυμασία</span>
                  <span className="text-secondary font-light text-sm">Άνετα ρούχα και αθλητικά παπούτσια.</span>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link href="/#επικοινωνία" className="w-full block text-center bg-primary text-white py-4 rounded-sm hover:bg-primary/90 transition-colors">
                Εγγραφή στο Τμήμα
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}