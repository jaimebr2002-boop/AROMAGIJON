import { motion } from 'motion/react';
import { Wheat, Clock, Flame, Ban } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Wheat size={24} />,
      title: 'Fermento natural',
      description: 'Masa madre hecha por nosotros a partir de harina de trigo y agua.',
    },
    {
      icon: <Clock size={24} />,
      title: '48 horas de fermentación',
      description: 'Las bolas de masa de 350gr descansan un mínimo de 48h.',
    },
    {
      icon: <Flame size={24} />,
      title: 'Horno de leña',
      description: 'Cocinamos nuestras pizzas de 29cm entre 400-430°C durante 1 minuto.',
    },
    {
      icon: <Ban size={24} />,
      title: 'Sin químicos',
      description: 'Sin aditivos, sin conservantes, sin azúcares añadidos. Solo producto real.',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-blanco-roto overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773956397/339985411_209832691658454_6848352484350504944_n._mf2rmd.jpg"
              alt="Pizzero de Aroma Pizzería Artesana"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-display text-verde-profundo mb-8 leading-tight">
              No somos una <br/>pizzería más.
            </h2>
            
            <div className="space-y-6 text-lg font-sans text-carbon-suave/80 leading-relaxed mb-12">
              <p>
                Aroma nació de una obsesión sana: hacer la pizza que nos gustaría comer. Con masa madre que preparamos nosotros mismos, con fermentación natural de mínimo 48 horas, con ingredientes sin aditivos ni conservantes, y con un horno de leña que alcanza los 430°C.
              </p>
              <p>
                La carta es corta porque nos negamos a hacer muchas cosas a medias. Cada pizza está pensada, probada y equilibrada. La cocina está a la vista porque no tenemos nada que esconder.
              </p>
              <p>
                Somos un sitio familiar. Los niños son bienvenidos. Los perros también. Y si estás embarazada, te avisamos de qué quesos no son pasteurizados — porque los detalles importan.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-crema-calido/20 flex items-center justify-center text-dorado">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-xl text-verde-profundo font-semibold">{pillar.title}</h3>
                  <p className="font-sans text-sm text-carbon-suave/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
