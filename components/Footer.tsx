export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <div className="mb-8">
            <span className="font-serif text-3xl font-bold tracking-tight">
            Γιαννίτη<span className="text-secondary">.</span>
            </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-light text-white/80">
            <a href="#" className="hover:text-white transition-colors">Αρχική</a>
            <a href="#η σχολή" className="hover:text-white transition-colors">Η Σχολή</a>
            <a href="#τμήματα" className="hover:text-white transition-colors">Τμήματα</a>
            <a href="#επικοινωνία" className="hover:text-white transition-colors">Επικοινωνία</a>
        </nav>

        <div className="text-white/40 text-xs font-light tracking-wider uppercase border-t border-white/10 w-full max-w-xs pt-8">
          © {currentYear} Gianniti Dance School. 
          <br /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}