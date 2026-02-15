"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Έτη Εμπειρίας", value: "15+" },
  { id: 2, label: "Εξειδικευμένοι Δάσκαλοι", value: "8" },
  { id: 3, label: "Παραστάσεις", value: "40+" },
  { id: 4, label: "Βραβεία", value: "25" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern (Optional decorative element) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="w-96 h-96 bg-white rounded-full blur-3xl absolute -top-20 -left-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="font-serif text-4xl md:text-5xl font-bold mb-2 block">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-white/70 font-light tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}