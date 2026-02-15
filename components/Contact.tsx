"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="επικοινωνία" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Επικοινωνια
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">
              Ελάτε να γνωριστούμε <br />
              <span className="italic text-primary">από κοντά.</span>
            </h2>
            <p className="text-secondary text-lg font-light leading-relaxed mb-12">
              Είμαστε εδώ για να λύσουμε κάθε απορία σας σχετικά με τα τμήματα, 
              τις εγγραφές ή το πρόγραμμα σπουδών.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-gray-900 mb-1">Διεύθυνση</h5>
                  <p className="text-secondary font-light">Λεωφόρος Κηφισίας 123, Αθήνα</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-gray-900 mb-1">Τηλέφωνο</h5>
                  <p className="text-secondary font-light">+30 210 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-gray-900 mb-1">Email</h5>
                  <p className="text-secondary font-light">info@gianniti-school.gr</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <span className="text-sm font-medium uppercase tracking-widest text-gray-400">Social</span>
               <div className="h-px w-12 bg-gray-300 self-center"></div>
               <Instagram className="w-5 h-5 text-primary hover:text-primary/70 cursor-pointer transition-colors" />
               <Facebook className="w-5 h-5 text-primary hover:text-primary/70 cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Right Column: Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm border border-gray-100"
          >
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Ονοματεπωνυμο</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors placeholder-gray-300"
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors placeholder-gray-300"
                    placeholder="maria@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Θεμα</label>
                <select 
                  id="subject" 
                  name="subject"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="General">Γενικές Πληροφορίες</option>
                  <option value="Registration">Εγγραφές / Τμήματα</option>
                  <option value="Professional">Επαγγελματικό Τμήμα</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Μηνυμα</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors resize-none placeholder-gray-300"
                  placeholder="Γράψτε το μήνυμά σας..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 px-8 mt-4 rounded-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
              >
                Αποστολή Μηνύματος
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}