import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'La Carta', href: '#carta' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Visítanos', href: '#visitanos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-verde-profundo/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-verde-profundo py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-1 group">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956397/408031800_319734234283236_7019961517423582932_n._h3mht3.jpg" 
              alt="Aroma Pizzería Artesana" 
              className="h-12 w-12 rounded-full object-cover border border-crema-calido/20"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-crema-calido/80 hover:text-crema-calido font-sans text-sm tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservar"
              className="bg-dorado hover:bg-dorado-hover text-[#1B1B1B] px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-colors shadow-sm"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-crema-calido hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-verde-profundo border-t border-crema-calido/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-crema-calido/90 hover:text-crema-calido hover:bg-verde-medio/30 rounded-md font-sans text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#reservar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-dorado text-[#1B1B1B] px-6 py-3 rounded-full font-sans font-medium"
              >
                Reservar Mesa
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
