"use client";

import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const classes = [
  {
    id: 1,
    title: "Κλασικό Μπαλέτο",
    description: "Η βάση όλων των χορών. Μέθοδος RAD για όλες τις ηλικίες.",
    image: "/images/class-ballet.webp",
    level: "All Levels",
    link: "/classes/ballet", 
  },
  {
    id: 2,
    title: "Σύγχρονος Χορός",
    description: "Ελευθερία έκφρασης, ροή και ενδυνάμωση μέσω της κίνησης.",
    image: "/images/class-contemporary.webp",
    level: "Intermediate / Advanced",
    link: "/classes/contemporary", 
  },
  {
    id: 3,
    title: "Παραδοσιακοί",
    description: "Δυναμισμός, ρυθμός και τεχνική σε ένα εκρηκτικό μάθημα.",
    image: "/images/class-traditional.webp",
    level: "Teens & Adults",
    link: "/classes/traditional", // <-- ΕΔΩ ΕΓΙΝΕ Η ΑΛΛΑΓΗ (Πλέον λειτουργεί)
  },
];

export default function Classes() {
  return (
    <section id="τμήματα" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-3">
              Τα Προγραμματα
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
              Επιλέξτε το <span className="italic text-primary">στυλ</span> σας.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary max-w-md text-right md:text-left leading-relaxed hidden md:block"
          >
            Από την πειθαρχία του μπαλέτου μέχρι την ελευθερία του σύγχρονου, 
            διαθέτουμε τμήματα για κάθε επίπεδο και ηλικία.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[500px] w-full overflow-hidden"
            >
              {/* WRAP THE WHOLE CARD IN LINK */}
              <Link href={item.link} className="block w-full h-full">
                
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs tracking-widest uppercase text-white/70 mb-2 block">
                      {item.level}
                    </span>
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif text-3xl font-medium mb-2">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white" />
                    </div>
                    <p className="text-white/80 font-light text-sm leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}