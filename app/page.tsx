import Image from "next/image";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import About from "../components/About";
import Classes from "../components/Classes";
import Program from "../components/Program"; // <-- ΝΕΟ IMPORT
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { MoveRight } from "lucide-react";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/hero-bg.webp"
            alt="Χορεύτρια της σχολής Gianniti σε κίνηση"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-white/80 font-medium tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
                Σχολή Χορού Γιαννίτη
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-8"
            >
              Η τέχνη της <br />
              <span className="italic font-light">κίνησης.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/90 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed"
            >
              Ανακαλύψτε τη δύναμη της έκφρασης μέσα από τον χορό. 
              Η δέσμευσή μας είναι η επιτυχία σας σε ένα περιβάλλον υψηλής αισθητικής.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <button className="group bg-white text-primary px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-colors flex items-center gap-2">
                Ξεκινήστε τώρα
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm">
                Τα τμήματα
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPONENTS FLOW --- */}
      
      <Stats />
      <About />
      <Classes />
      
      {/* 4. Program Section */}
      <Program /> 

      <Contact />
      <Footer />

    </main>
  );
}