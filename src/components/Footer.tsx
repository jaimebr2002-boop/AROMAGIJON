import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-negro-humo py-16 border-t border-crema-calido/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="#inicio" className="flex items-center gap-1 group">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956397/408031800_319734234283236_7019961517423582932_n._h3mht3.jpg" 
                alt="Aroma Pizzería Artesana" 
                className="h-16 w-16 rounded-full object-cover border border-crema-calido/20"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="font-serif italic text-crema-calido/60 text-lg">
              Pizza artesana al horno de leña · Gijón, Asturias
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-display text-crema-calido text-xl mb-2">Navegación</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#carta" className="font-sans text-crema-calido/60 hover:text-crema-calido transition-colors">Carta</a>
              <a href="#resenas" className="font-sans text-crema-calido/60 hover:text-crema-calido transition-colors">Reseñas</a>
              <a href="#visitanos" className="font-sans text-crema-calido/60 hover:text-crema-calido transition-colors">Visítanos</a>
              <a href="#reservar" className="font-sans text-crema-calido/60 hover:text-crema-calido transition-colors">Reservar</a>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="space-y-2">
              <h4 className="font-display text-crema-calido text-xl mb-2">Contacto</h4>
              <a href="tel:633296850" className="block font-sans text-crema-calido/80 hover:text-dorado transition-colors text-lg">
                633 296 850
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/aromagijon/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-crema-calido/10 text-crema-calido flex items-center justify-center hover:bg-dorado hover:text-[#1B1B1B] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/aromagijon/?hl=es" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-crema-calido/10 text-crema-calido flex items-center justify-center hover:bg-dorado hover:text-[#1B1B1B] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-crema-calido/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-crema-calido/40">
            © 2025 Aroma Pizzería Artesana · Gijón
          </p>
          <p className="font-sans text-sm text-crema-calido/40 flex items-center gap-1">
            Hecho con <span className="text-dorado">🔥</span> y masa madre
          </p>
        </div>
      </div>
    </footer>
  );
}
