import { motion } from 'motion/react';
import { Phone, ArrowRight, Wheat, Flame, Ban, Dog, Leaf, Baby } from 'lucide-react';

export default function Hero() {
  const badges = [
    { icon: <Wheat size={16} />, text: 'Masa madre 100% natural' },
    { icon: <Flame size={16} />, text: 'Horno de leña 400°C' },
    { icon: <Ban size={16} />, text: 'Sin conservantes' },
    { icon: <Dog size={16} />, text: 'Dog-friendly' },
    { icon: <Leaf size={16} />, text: 'Opción vegana' },
    { icon: <Baby size={16} />, text: 'Zona infantil' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-negro-humo">
      {/* Background with overlay and texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-verde-profundo/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-texture opacity-30 z-20" />
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="Pizza artesanal en horno de leña"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Decorative SVG Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none z-10">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D4B896" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.3,-40.5C85.5,-25.7,91.7,-10.1,89.6,4.6C87.5,19.3,77.1,33.1,66.1,45.3C55.1,57.5,43.5,68.1,29.6,75.1C15.7,82.1,-0.5,85.5,-16.1,82.8C-31.7,80.1,-46.7,71.3,-59.1,60.1C-71.5,48.9,-81.3,35.3,-86.3,20.1C-91.3,4.9,-91.5,-11.9,-85.6,-26.8C-79.7,-41.7,-67.7,-54.7,-53.6,-61.8C-39.5,-68.9,-23.3,-70.1,-6.6,-70.5C10.1,-70.9,20.2,-70.5,32.5,-82.9C44.8,-95.3,59.3,-100.5,45.7,-76.1Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-crema-calido leading-[1.1] mb-6"
          >
            La mejor pizza<br />
            de Gijón.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-sans text-crema-calido/80 mb-10 font-light"
          >
            Masa madre · Horno de leña · Sin aditivos
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="tel:633296850"
              className="inline-flex items-center justify-center gap-2 bg-dorado hover:bg-dorado-hover text-[#1B1B1B] px-8 py-4 rounded-full font-sans text-base font-medium transition-all hover:scale-105 shadow-lg shadow-dorado/20"
            >
              <Phone size={20} />
              Llamar para reservar
            </a>
            <a
              href="#carta"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-crema-calido text-crema-calido hover:bg-crema-calido/10 px-8 py-4 rounded-full font-sans text-base font-medium transition-all"
            >
              Ver la carta
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6"
          >
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-crema-calido/70">
                <span className="text-dorado/80">{badge.icon}</span>
                <span className="font-sans text-sm tracking-wide">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
