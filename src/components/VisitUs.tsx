import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Dog, Baby, Leaf, ShoppingBag, Facebook, Instagram } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visitanos" className="py-24 bg-blanco-roto relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-verde-profundo/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-verde-profundo mb-6">Ven a vernos.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-verde-profundo/10 flex items-center justify-center text-verde-profundo shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-verde-profundo mb-2">Dirección</h3>
                  <p className="font-sans text-carbon-suave/80 text-lg">
                    <a href="https://www.google.com/maps/place/AROMA+Pizzer%C3%ADa+Artesana/@43.5370393,-5.6531697,17z/data=!3m1!4b1!4m6!3m5!1s0xd367dbe5cae701b:0x55292d237ed55a96!8m2!3d43.5370354!4d-5.6505948!16s%2Fg%2F11fr_6htll?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-dorado transition-colors">
                      Gijón, Asturias (Ver mapa)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-verde-profundo/10 flex items-center justify-center text-verde-profundo shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-verde-profundo mb-2">Teléfono</h3>
                  <p className="font-sans text-carbon-suave/80 text-lg">
                    <a href="tel:633296850" className="hover:text-dorado transition-colors font-medium">633 296 850</a>
                    <span className="block text-sm text-carbon-suave/60 mt-1">También para pedidos take away</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-verde-profundo/10 flex items-center justify-center text-verde-profundo shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-verde-profundo mb-2">Horario</h3>
                  <div className="font-sans text-carbon-suave/80 text-lg space-y-1">
                    <p className="font-medium text-carbon-suave">Miércoles a Domingo</p>
                    <p>Comidas: 13:00 – 16:00</p>
                    <p>Cenas: 19:00 – 23:00</p>
                    <p className="text-dorado font-medium mt-2">Lunes y Martes cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="pt-8 border-t border-carbon-suave/10">
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-sans font-medium text-carbon-suave/80 shadow-sm border border-carbon-suave/5">
                  <Dog size={16} className="text-dorado" /> Dog-friendly
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-sans font-medium text-carbon-suave/80 shadow-sm border border-carbon-suave/5">
                  <Baby size={16} className="text-dorado" /> Zona infantil
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-sans font-medium text-carbon-suave/80 shadow-sm border border-carbon-suave/5">
                  <Leaf size={16} className="text-dorado" /> Opción vegana
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-sans font-medium text-carbon-suave/80 shadow-sm border border-carbon-suave/5">
                  <ShoppingBag size={16} className="text-dorado" /> Take away disponible
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8 flex gap-4">
              <a href="https://www.facebook.com/aromagijon/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-verde-profundo text-white flex items-center justify-center hover:bg-verde-medio transition-colors shadow-md hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/aromagijon/?hl=es" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-verde-profundo text-white flex items-center justify-center hover:bg-verde-medio transition-colors shadow-md hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=AROMA%20Pizzer%C3%ADa%20Artesana,%20Gijon&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Aroma Pizzería Artesana"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
