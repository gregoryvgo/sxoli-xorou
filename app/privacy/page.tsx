"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12">
          Πολιτική Απορρήτου & Cookies
        </h1>

        <div className="space-y-8 text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">1. Εισαγωγή</h2>
            <p>
              Η Σχολή Χορού Γιαννίτη σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. 
              Η παρούσα πολιτική εξηγεί πώς διαχειριζόμαστε τα δεδομένα σας όταν επισκέπτεστε τον ιστότοπό μας.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">2. Χρήση Cookies</h2>
            <p>
              Ο ιστότοπός μας χρησιμοποιεί cookies για τη βελτίωση της λειτουργικότητας και της εμπειρίας του χρήστη. 
              Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Απαραίτητα Cookies:</strong> Αναγκαία για τη λειτουργία του site (π.χ. ασφάλεια).</li>
              <li><strong>Cookies Ανάλυσης:</strong> Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε το site (π.χ. Google Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">3. Φόρμα Επικοινωνίας</h2>
            <p>
              Όταν συμπληρώνετε τη φόρμα επικοινωνίας, συλλέγουμε το όνομα, το email και το μήνυμά σας 
              αποκλειστικά για να απαντήσουμε στο αίτημά σας. Τα δεδομένα αυτά δεν κοινοποιούνται σε τρίτους.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">4. Τα δικαιώματά σας</h2>
            <p>
              Έχετε το δικαίωμα να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας δεδομένων. 
              Για οποιαδήποτε απορία, επικοινωνήστε μαζί μας στο info@giannitischool.gr.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}