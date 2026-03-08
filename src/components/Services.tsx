import { motion } from 'motion/react';
import { PenTool, Box, Bug, Layers, Zap, Armchair, Wrench, Sparkles } from 'lucide-react';

const services = [
  { name: 'Interior Design', icon: PenTool, desc: 'Complete spatial planning and aesthetic design tailored to your vision.', image: '/services/interior-design.jpg' },
  { name: '3D / 2D Modeling', icon: Box, desc: 'Photorealistic 3D renders and precise 2D layouts before execution.', image: '/services/3d-modeling.jpg' },
  { name: 'Pest Control', icon: Bug, desc: 'Comprehensive termite and pest treatments to protect your plywood investments.', image: '/services/pest-control.jpg' },
  { name: 'POP Work', icon: Layers, desc: 'Flawless Plaster of Paris ceilings and wall finishes.', image: '/services/pop-work.jpg' },
  { name: 'Electric Work', icon: Zap, desc: 'Safe, concealed, and modern electrical wiring and lighting setups.', image: '/services/electric-work.jpg' },
  { name: 'Furniture Work', icon: Armchair, desc: 'Custom-built premium plywood furniture designed for durability and style.', image: '/services/furniture-work.jpg' },
  { name: 'Fabrication Work', icon: Wrench, desc: 'Metal and structural fabrication seamlessly integrated with wood.', image: '/services/fabrication-work.jpg' },
  { name: 'Deep Cleaning', icon: Sparkles, desc: 'Post-execution deep cleaning to hand over a pristine, ready-to-use space.', image: '/services/deep-cleaning.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="text-zinc-400 max-w-2xl text-lg font-light">
            We offer an end-to-end interior solution. From the first sketch to the final polish, our in-house experts handle every detail with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-8">
                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-amber-500/20 rounded-none flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="text-amber-500" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
