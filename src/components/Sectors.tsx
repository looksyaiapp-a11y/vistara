import { motion } from 'motion/react';

const sectors = [
  {
    name: 'Cafe & Restaurant',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    desc: 'Creating atmospheric, durable, and Instagram-worthy dining spaces.'
  },
  {
    name: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop',
    desc: 'Warm, functional, and luxurious home interiors using premium plywood.'
  },
  {
    name: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869&auto=format&fit=crop',
    desc: 'Professional office environments designed for productivity and brand identity.'
  },
  {
    name: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop',
    desc: 'Robust and practical interior solutions for heavy-duty environments.'
  }
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-amber-500">Types</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-zinc-400 max-w-xl text-lg font-light">
              Our expertise spans across diverse sectors, adapting our signature plywood craftsmanship to suit specific functional and aesthetic needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden bg-zinc-800 cursor-pointer"
            >
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-amber-500 font-mono text-sm">0{index + 1}</span>
                  <div className="h-[1px] w-12 bg-amber-500/50"></div>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  {sector.name}
                </h3>
                <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {sector.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
