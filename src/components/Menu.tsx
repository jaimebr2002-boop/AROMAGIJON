import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Star, Home, Flame, X } from 'lucide-react';

export default function Menu() {
  const pizzas = [
    {
      name: 'Margherita',
      price: '7,90€',
      description: 'Base de tomate natural y mozzarella.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [],
    },
    {
      name: 'Marinara',
      price: '7,90€',
      description: 'Base de tomate natural y ajo en polvo.',
      topping: 'Orégano y a.o.v.e.',
      badges: [{ icon: <Leaf size={14} />, text: 'Vegana', color: 'text-green-500' }],
    },
    {
      name: 'Prosciutto',
      price: '8,90€',
      description: 'Base de tomate natural, mozzarella y jamón york.',
      extra: 'Champiñones +1€',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [],
    },
    {
      name: 'Quattro Formaggi',
      price: '9,90€',
      description: 'Base bianca de mozzarella, gorgonzola, provolone y grana padano.',
      topping: 'Orégano y a.o.v.e.',
      badges: [],
    },
    {
      name: 'Tonno',
      price: '9,90€',
      description: 'Base de tomate natural, mozzarella, atún y aceitunas negras.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [{ icon: <Star size={14} />, text: 'Favorita de los niños', color: 'text-yellow-400' }],
    },
    {
      name: 'Aroma',
      price: '9,90€',
      description: 'Base de tomate natural, mozzarella, jamón serrano y rúcula.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [{ icon: <Home size={14} />, text: 'La de la casa', color: 'text-crema-calido' }],
    },
    {
      name: 'Vegan',
      price: '9,90€',
      description: 'Base de tomate natural, queso vegano, rúcula y tomates cherry.',
      extra: 'Champiñones +1€',
      topping: 'Orégano y a.o.v.e.',
      badges: [{ icon: <Leaf size={14} />, text: '100% Vegana', color: 'text-green-500' }],
    },
    {
      name: 'Etna',
      price: '9,90€',
      description: 'Base de tomate natural, mozzarella, tomates cherry y rúcula.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [],
    },
    {
      name: 'Peppa',
      price: '9,90€',
      description: 'Base de tomate natural, mozzarella y pepperoni (salami).',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [{ icon: <Flame size={14} />, text: 'La clásica', color: 'text-dorado' }],
    },
    {
      name: 'Gazi',
      price: '9,90€',
      description: 'Base de tomate natural, mozzarella, lonchas de pollo asado y queso crema.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [{ icon: <Star size={14} />, text: 'Muy pedida', color: 'text-yellow-400' }],
    },
    {
      name: 'Bologna',
      price: '10,50€',
      description: 'Base de tomate natural, mozzarella, mortadella di Bologna y champiñones.',
      topping: 'Grana padano, orégano y a.o.v.e.',
      badges: [{ icon: <Star size={14} />, text: 'La más especial', color: 'text-yellow-400' }],
    },
    {
      name: 'Choco',
      price: '6,90€',
      description: 'Base de crema de chocolate con leche (sin grasa de palma).',
      badges: [],
    },
  ];

  const galleryImages = [
    { id: 1, name: 'Margherita', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/340008363_197837036289353_8610278048938775917_n._h2slrs.jpg' },
    { id: 2, name: 'Horno de Leña', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/438802847_18016046258212148_808817739726152296_n._y7vadi.jpg' },
    { id: 3, name: 'Prosciutto', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/620168479_18075088736369948_9152195779945195002_n._kteeym.jpg' },
    { id: 4, name: 'Masa Madre', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/623394557_18151928245441170_206486959198992107_n._duabd9.jpg' },
    { id: 5, name: 'Aroma', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/621546826_18103908292793974_5163882632153953903_n._umvs2d.jpg' },
    { id: 6, name: 'Detalle Ingredientes', src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956398/631836129_18413920954121404_2724657111138078952_n._wcvpyq.jpg' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openLightbox = (img: any) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  return (
    <section id="carta" className="py-24 bg-verde-profundo relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-crema-calido mb-6"
          >
            Pocas. Perfectas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-sans text-crema-calido/80 max-w-2xl mx-auto font-light"
          >
            Una carta corta es una carta honesta. Cada pizza se hace a mano, al momento, con ingredientes que conocemos.
          </motion.p>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pizzas.map((pizza, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-negro-humo/40 border border-crema-calido/10 rounded-2xl p-8 hover:border-crema-calido/30 hover:bg-negro-humo/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dorado/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display text-crema-calido">{pizza.name}</h3>
                <span className="text-xl font-sans font-medium text-dorado">{pizza.price}</span>
              </div>
              
              <div className="space-y-3 font-sans text-sm text-crema-calido/70 leading-relaxed">
                <p>{pizza.description}</p>
                {pizza.extra && <p className="italic text-crema-calido/50">{pizza.extra}</p>}
                {pizza.topping && <p className="text-crema-calido/90">Topping: {pizza.topping}</p>}
              </div>

              {pizza.badges && pizza.badges.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {pizza.badges.map((badge, bIdx) => (
                    <span key={bIdx} className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-verde-profundo border border-crema-calido/20 ${badge.color}`}>
                      {badge.icon}
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mb-32">
          <p className="font-serif italic text-xl text-crema-calido/60 max-w-3xl mx-auto border-t border-b border-crema-calido/10 py-6">
            "Todas nuestras pizzas se elaboran con masa madre de fermentación natural mínimo 48h, en horno de leña a 400-430°C. Sin aditivos. Sin conservantes. Sin trampa."
          </p>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-4xl font-display text-crema-calido text-center mb-12">Así se ven nuestras pizzas.</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => openLightbox(img)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer relative group bg-verde-medio/20 border border-crema-calido/10"
              >
                {img.src ? (
                  <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-verde-profundo to-negro-humo">
                    <span className="font-display text-crema-calido/50 text-xl text-center px-4">{img.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-negro-humo/0 group-hover:bg-negro-humo/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-crema-calido font-sans text-sm tracking-widest uppercase transition-opacity duration-300">Ver imagen</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 font-sans text-crema-calido/60">
            📸 ¿Tienes fotos nuestras? Etiquétanos en Instagram
          </p>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-negro-humo/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-crema-calido hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto md:h-[80vh] bg-verde-profundo rounded-2xl overflow-hidden border border-crema-calido/20 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.src ? (
                <img src={selectedImage.src} alt={selectedImage.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              ) : (
                <div className="text-center p-8">
                  <h4 className="font-display text-4xl text-crema-calido mb-4">{selectedImage.name}</h4>
                  <p className="font-sans text-crema-calido/60">[Slot para imagen real]</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
