import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Box, Bug, Layers, Zap, Armchair, Wrench, Sparkles, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const base = import.meta.env.BASE_URL;

type GalleryItem = { type: 'image'; src: string } | { type: 'instagram'; shortcode: string };

const services = [
  {
    name: 'Interior Design', icon: PenTool,
    desc: 'Complete spatial planning and aesthetic design tailored to your vision.',
    image: `${base}services/interior-design.jpg`,
    gallery: Array.from({ length: 8 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/interior-design/${i + 1}.jpg` })),
  },
  {
    name: '3D / 2D Modeling', icon: Box,
    desc: 'Photorealistic 3D renders and precise 2D layouts before execution.',
    image: `${base}services/3d-modeling.jpg`,
    gallery: Array.from({ length: 17 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/3d-modeling/${i + 1}.jpg` })),
  },
  {
    name: 'Pest Control', icon: Bug,
    desc: 'Comprehensive termite and pest treatments to protect your plywood investments.',
    image: `${base}services/pest-control.jpg`,
    gallery: Array.from({ length: 4 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/pest-control/${i + 1}.jpg` })),
  },
  {
    name: 'POP Work', icon: Layers,
    desc: 'Flawless Plaster of Paris ceilings and wall finishes.',
    image: `${base}services/pop-work.jpg`,
    gallery: Array.from({ length: 6 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/pop-work/${i + 1}.jpg` })),
  },
  {
    name: 'Electric Work', icon: Zap,
    desc: 'Safe, concealed, and modern electrical wiring and lighting setups.',
    image: `${base}services/electric-work.jpg`,
    gallery: Array.from({ length: 3 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/electric-work/${i + 1}.jpg` })),
  },
  {
    name: 'Furniture Work', icon: Armchair,
    desc: 'Custom-built premium plywood furniture designed for durability and style.',
    image: `${base}services/furniture-work.jpg`,
    gallery: [
      { type: 'image', src: `${base}gallery/furniture-work/1.jpg` } as GalleryItem,
      { type: 'image', src: `${base}gallery/furniture-work/2.jpg` } as GalleryItem,
      { type: 'instagram', shortcode: 'DVah0EMjOlR' } as GalleryItem,
      { type: 'instagram', shortcode: 'DVQNDrdjB4s' } as GalleryItem,
      { type: 'instagram', shortcode: 'DTxbh3mEuo7' } as GalleryItem,
    ],
  },
  {
    name: 'Fabrication Work', icon: Wrench,
    desc: 'Metal and structural fabrication seamlessly integrated with wood.',
    image: `${base}services/fabrication-work.jpg`,
    gallery: Array.from({ length: 4 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/fabrication-work/${i + 1}.jpg` })),
  },
  {
    name: 'Deep Cleaning', icon: Sparkles,
    desc: 'Post-execution deep cleaning to hand over a pristine, ready-to-use space.',
    image: `${base}services/deep-cleaning.jpg`,
    gallery: Array.from({ length: 4 }, (_, i): GalleryItem => ({ type: 'image', src: `${base}gallery/deep-cleaning/${i + 1}.jpg` })),
  },
];

export default function Services() {
  const [active, setActive] = useState<typeof services[0] | null>(null);
  const [idx, setIdx] = useState(0);

  function open(service: typeof services[0]) {
    setActive(service);
    setIdx(0);
  }

  function close() {
    setActive(null);
    setIdx(0);
  }

  function prev() {
    if (!active) return;
    setIdx((i) => (i - 1 + active.gallery.length) % active.gallery.length);
  }

  function next() {
    if (!active) return;
    setIdx((i) => (i + 1) % active.gallery.length);
  }

  const currentItem = active?.gallery[idx];

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
              className="group border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-amber-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => open(service)}
            >
              {/* Cover image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Images size={20} className="text-white" />
                  <span className="text-white text-sm font-medium">View Gallery</span>
                </div>
              </div>

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
                <p className="text-amber-500/70 text-xs mt-4 flex items-center gap-1">
                  <Images size={12} />
                  {service.gallery.length} photos
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {active && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            onClick={close}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
              <div>
                <h3 className="text-white font-display font-semibold text-lg">{active.name}</h3>
                <p className="text-zinc-500 text-xs">{idx + 1} / {active.gallery.length}</p>
              </div>
              <button onClick={close} className="text-zinc-400 hover:text-white transition-colors p-2">
                <X size={24} />
              </button>
            </div>

            {/* Main image / embed */}
            <div
              className="flex-1 flex items-center justify-center px-4 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.type === 'image' ? (
                <motion.img
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={currentItem.src}
                  alt={`${active.name} ${idx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  style={{ maxHeight: 'calc(100vh - 180px)' }}
                />
              ) : (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl"
                  style={{ height: '560px' }}
                >
                  <iframe
                    src={`https://www.instagram.com/p/${currentItem.shortcode}/embed/`}
                    className="w-full h-full border-none"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  />
                </motion.div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-amber-500 text-white transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto max-w-xs sm:max-w-md md:max-w-lg">
                {active.gallery.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors ${i === idx ? 'border-amber-500' : 'border-transparent opacity-50 hover:opacity-80'}`}
                  >
                    {item.type === 'image' ? (
                      <img src={item.src} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                        <span className="text-white text-xs">▶</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-amber-500 text-white transition-colors flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
