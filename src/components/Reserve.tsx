import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Reserve() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Se puede ir con perros?',
      answer: 'Sí, somos dog-friendly. Los peludos son más que bienvenidos.',
    },
    {
      question: '¿Tenéis opción vegana?',
      answer: 'Sí, tenemos la Pizza Vegan y la Marinara, ambas sin productos de origen animal.',
    },
    {
      question: '¿Hace falta reservar?',
      answer: 'Recomendamos llamar con antelación, especialmente en fin de semana, para asegurarte mesa o para que tu pizza esté recién hecha al llegar.',
    },
    {
      question: '¿La masa tiene gluten?',
      answer: 'Sí. Nuestra masa se elabora con harina de trigo y contiene gluten. También existe contaminación cruzada en el local, por lo que no recomendamos su consumo a personas celíacas.',
    },
    {
      question: '¿Tenéis zona para niños?',
      answer: 'Sí, tenemos zona de juego infantil para que los más pequeños estén entretenidos.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="reservar" className="py-24 bg-verde-profundo relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-crema-calido mb-6"
          >
            ¿Tienes hambre?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-sans text-crema-calido/80 max-w-2xl mx-auto font-light"
          >
            Reserva tu mesa o haz tu pedido take away. Sin complicaciones.
          </motion.p>
        </div>

        {/* Reservation Cards */}
        <div className="max-w-xl mx-auto mb-12">
          
          {/* Card 1: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-negro-humo/40 border border-crema-calido/10 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-negro-humo/60 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center text-dorado mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-3xl font-display text-crema-calido mb-4">Llámanos</h3>
            <p className="font-sans text-crema-calido/70 mb-8 flex-grow">
              La forma más rápida. Te atendemos y coordinamos tu visita o pedido para llevar.
            </p>
            <a
              href="tel:633296850"
              className="w-full inline-flex items-center justify-center gap-2 bg-dorado hover:bg-dorado-hover text-[#1B1B1B] px-8 py-4 rounded-full font-sans text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-dorado/20"
            >
              633 296 850
            </a>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display text-crema-calido text-center mb-10"
          >
            Preguntas frecuentes
          </motion.h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-negro-humo/60 border border-crema-calido/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-medium text-lg text-crema-calido pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`text-crema-calido/50 transition-transform duration-300 shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 font-sans text-crema-calido/70 leading-relaxed border-t border-crema-calido/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
