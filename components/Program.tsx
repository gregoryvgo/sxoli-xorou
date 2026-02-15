"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, ArrowDownToLine } from "lucide-react";

// Δεδομένα Προγράμματος (Demo Data)
const scheduleData = {
  Δευτέρα: [
    { time: "17:00 - 18:00", class: "Μπαλέτο (Pre-Primary)", level: "4-5 ετών", instructor: "Ελένη Γ." },
    { time: "18:30 - 20:00", class: "Σύγχρονος Χορός", level: "Εφήβων", instructor: "Μαρία Κ." },
    { time: "20:00 - 21:30", class: "Adult Ballet", level: "Open Level", instructor: "Ελένη Γ." },
  ],
  Τρίτη: [
    { time: "17:30 - 18:30", class: "Hip Hop Kids", level: "6-9 ετών", instructor: "Κώστας Π." },
    { time: "19:00 - 20:30", class: "Jazz Technique", level: "Advanced", instructor: "Άννα Δ." },
  ],
  Τετάρτη: [
    { time: "17:00 - 18:30", class: "Μπαλέτο (Grade 3)", level: "Εξεταστικό", instructor: "Ελένη Γ." },
    { time: "19:00 - 20:30", class: "Contemporary Floorwork", level: "Intermediate", instructor: "Μαρία Κ." },
  ],
  Πέμπτη: [
    { time: "18:00 - 19:30", class: "Pilates Mat", level: "All Levels", instructor: "Σοφία Μ." },
    { time: "19:30 - 21:00", class: "Latin Ballroom", level: "Adults", instructor: "Γιώργος Σ." },
  ],
  Παρασκευή: [
    { time: "17:00 - 18:30", class: "Μπαλέτο (Grade 5)", level: "Advanced", instructor: "Ελένη Γ." },
    { time: "19:00 - 21:00", class: "Repertoire / Pointes", level: "Professional", instructor: "Guest Teacher" },
  ],
  Σάββατο: [
    { time: "10:00 - 11:00", class: "Baby Dance", level: "3-4 ετών", instructor: "Άννα Δ." },
    { time: "11:30 - 13:00", class: "Open Contemporary", level: "All Levels", instructor: "Μαρία Κ." },
  ],
};

const days = Object.keys(scheduleData);

export default function Program() {
  const [selectedDay, setSelectedDay] = useState("Δευτέρα");

  return (
    <section id="πρόγραμμα" className="py-24 bg-primary/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
            Εβδομαδιαιο Προγραμμα
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
            Οργανώστε τον <span className="italic text-primary">χρόνο</span> σας.
          </h2>
        </div>

        {/* Days Tabs (Scrollable on mobile) */}
        <div className="flex justify-start md:justify-center overflow-x-auto gap-4 md:gap-8 mb-12 pb-4 scrollbar-hide">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`relative px-4 py-2 text-lg font-serif transition-colors shrink-0 ${
                selectedDay === day ? "text-primary font-medium" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {day}
              {selectedDay === day && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-gray-100"
            >
              {/* @ts-ignore */}
              {scheduleData[selectedDay].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-gray-50 transition-colors"
                >
                  {/* Time & Class */}
                  <div className="flex items-start gap-6">
                    <div className="w-32 shrink-0 flex items-center gap-2 text-primary font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-900 group-hover:text-primary transition-colors">
                        {item.class}
                      </h3>
                      <p className="text-sm text-gray-500 font-light mt-1">{item.level}</p>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm md:text-right">
                    <User className="w-4 h-4" />
                    <span className="tracking-wide uppercase text-xs font-medium">{item.instructor}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Download Button */}
        <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
                <ArrowDownToLine className="w-4 h-4" />
                Κατεβάστε το πρόγραμμα σε PDF
            </button>
        </div>

      </div>
    </section>
  );
}