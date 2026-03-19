import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const allReviews = [
    { name: 'Jb Heine', text: '¡Sin duda las mejores pizzas en Gijón/Asturias! La masa es riquísima, los ingredientes frescos y de calidad. Las pizzas son grandes y muy bien de precio. Los trabajadores son muy amables y atentos.', date: 'Hace 2 semanas' },
    { name: 'Silvia', text: 'La mejor pizza de Gijón sin duda. Soy muy exigente con la pizza porque es mi comida favorita y viví muchos años en Italia. Os puedo decir que esta es sin duda la más auténtica de Gijón. Masa madre, ingredientes de calidad y horno de leña.', date: 'Hace 1 mes' },
    { name: 'Carolina Mónica Bressan López', text: 'La mejor pizza que he probado en mi vida. Espectacular masa e ingredientes abundantes. Servicio rápido y muy amable. Un descubrimiento, seguro volveremos.', date: 'Hace 3 semanas' },
    { name: 'Diego Barrantes', text: 'Siempre merece la pena volver a Aroma para cenar. La masa es muy suave, ligera y rica. Los ingredientes se notan de calidad, siempre sabrosos y combinando a la perfección. Sin duda, la mejor pizza de Gijón y, probablemente, de Asturias.', date: 'Hace 2 meses' },
    { name: 'Mitxel Ballet', text: 'Trato VIP, pizzas de 10, nada que envidiar a las napolitanas. La masa súper sabrosa y los ingredientes de calidad. ¡Y precio inmejorable!', date: 'Hace 1 mes' },
    { name: 'Daiana Figueroa', text: 'Las pizzas muy buenas pero mejor aún la atención. Se dieron cuenta de que estaba embarazada y me advirtieron que un queso no era pasteurizado. Estos detalles son los que hacen a un lugar la diferencia.', date: 'Hace 3 meses' },
    { name: 'Daniel González', text: 'Local muy acogedor, pizzas increíblemente buenas, buen tamaño, buenos ingredientes y la masa como si estuvieses en Italia. Sus propietarios de 10. Súper amables y atentos. 100% recomendable.', date: 'Hace 2 semanas' },
    { name: 'Manuela', text: 'La mejor pizza que me he comido, precio muy muy asequible, incluso barato para lo ricas que están. Nos atendió genial el cocinero, es un chico italiano, explicándonos todo. Todo genial y deseando volver.', date: 'Hace 4 meses' },
    { name: 'Alex Ramírez', text: 'De lo mejor no solo de la zona sino de todo Gijón. Pizzas muy buenas y con una masa excepcional. Trato amable, y muy bien ubicados. Repetiré sin duda.', date: 'Hace 1 mes' },
    { name: 'Miguel González', text: 'Después de haber visitado Italia, me atrevo a decir que estas pizzas son como haber vuelto a viajar allí. Baratas, rápidas, y de mucha calidad, se nota que el dueño sabe lo que hace.', date: 'Hace 5 meses' },
    { name: 'Berti Demirkapu', text: 'La pizza está espectacular. La masa de madre fresca, ingredientes abundantes, local limpio, atención de persona muy agradable. Sin duda repetiremos. La pizza es original napolitana.', date: 'Hace 2 meses' },
    { name: 'Roberto Egea', text: 'No se puede pedir más. Un lugar donde comer una pizza es una auténtica experiencia. El olor a leña al entrar a la pizzería ya te da una idea de la calidad. Ingredientes de máxima calidad. Volveremos siempre.', date: 'Hace 6 meses' },
    { name: 'Judith Morales', text: '¡No hay mejores pizzas en Asturias! Masa con un sabor espectacular e ingredientes de primera calidad y abundantes. Pero la locura es la pizza de chocolate... ¡brutal! Son súper rápidos y muy amables.', date: 'Hace 1 mes' },
    { name: 'Carla Ruiz', text: 'Vinimos de visita y volvimos a comer porque nos encantó. Cuando volvamos sabemos dónde ir. La masa está riquísima y la hacen con el horno de leña. No tardan ni 10 minutos en dárnosla.', date: 'Hace 3 semanas' },
    { name: 'Cristóbal Sánchez', text: 'Las pizzas más honestas y más buenas de todo Gijón. Calidad precio inigualable.', date: 'Hace 4 meses' },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentReviews = allReviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="resenas" className="py-24 bg-blanco-roto overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-verde-profundo mb-6"
          >
            Palabras que nos llenan<br/>más que el horno.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-sans text-carbon-suave/70"
          >
            +150 clientes felices en Google. Esto es lo que dicen.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden px-2 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {currentReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-verde-profundo relative flex flex-col h-full"
                  >
                    <Quote className="absolute top-6 right-6 text-crema-calido/20" size={48} />
                    
                    <div className="flex text-dorado mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="font-sans text-carbon-suave/80 leading-relaxed mb-6 flex-grow italic">
                      "{review.text}"
                    </p>
                    
                    <div className="mt-auto">
                      <p className="font-display font-semibold text-verde-profundo text-lg">{review.name}</p>
                      <p className="font-sans text-sm text-carbon-suave/50">{review.date}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevPage}
              className="w-12 h-12 rounded-full border border-verde-profundo/20 flex items-center justify-center text-verde-profundo hover:bg-verde-profundo hover:text-white transition-colors"
              aria-label="Página anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === idx ? 'bg-dorado w-6' : 'bg-verde-profundo/20 hover:bg-verde-profundo/40'
                  }`}
                  aria-label={`Ir a página ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-12 h-12 rounded-full border border-verde-profundo/20 flex items-center justify-center text-verde-profundo hover:bg-verde-profundo hover:text-white transition-colors"
              aria-label="Página siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 border-t border-carbon-suave/10"
        >
          <a
            href="https://www.google.com/maps/place/AROMA+Pizzer%C3%ADa+Artesana/@43.5370393,-5.6531697,17z/data=!4m8!3m7!1s0xd367dbe5cae701b:0x55292d237ed55a96!8m2!3d43.5370354!4d-5.6505948!9m1!1b1!16s%2Fg%2F11fr_6htll?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde-profundo text-white px-8 py-3.5 rounded-full font-sans font-medium hover:bg-verde-medio transition-colors w-full sm:w-auto justify-center shadow-md"
          >
            <Star size={18} fill="currentColor" />
            Déjanos tu reseña en Google
          </a>
          <a
            href="https://www.tripadvisor.es/UserReviewEdit-g187451-d20934342-Aroma_Pizza_Artesana-Gijon_Asturias.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-verde-profundo text-verde-profundo px-8 py-3.5 rounded-full font-sans font-medium hover:bg-verde-profundo/5 transition-colors w-full sm:w-auto justify-center"
          >
            🍽️ Opinanos en TripAdvisor
          </a>
        </motion.div>

      </div>
    </section>
  );
}
