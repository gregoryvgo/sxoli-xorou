import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="font-serif text-9xl text-primary/10 font-bold">404</h1>
      
      <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-8 mb-4">
        Η σελίδα δεν βρέθηκε
      </h2>
      
      <p className="text-secondary text-lg font-light max-w-md mb-10">
        Φαίνεται πως χάσαμε το βήμα. Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
      </p>

      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Επιστροφή στην Αρχική
      </Link>
    </div>
  );
}