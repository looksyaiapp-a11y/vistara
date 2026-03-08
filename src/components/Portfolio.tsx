import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Instagram } from 'lucide-react';

const portfolioReels = [
  { id: 1, shortcode: 'DP_hOEtklkO' },
  { id: 2, shortcode: 'DUChJVVjHTd' },
  { id: 3, shortcode: 'DUAAT-9jPxr' },
  { id: 4, shortcode: 'DSpStNNjEai' },
  { id: 5, shortcode: 'DRgmWCnErmb' },
  { id: 6, shortcode: 'DSzJwdyDNUZ' },
  { id: 7, shortcode: 'DUnhNMUDOqp' },
];

// Height of Instagram embed header & footer to clip
// Footer includes: "View more on Instagram" + icons row + likes + comment box
const CLIP_TOP = 60;
const CLIP_BOTTOM = 210;
const CARD_HEIGHT = 420;
const IFRAME_HEIGHT = CARD_HEIGHT + CLIP_TOP + CLIP_BOTTOM;

export default function Portfolio() {
  const [activeReel, setActiveReel] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Works</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            A curated selection of our finest projects, showcasing our dedication to quality materials and impeccable finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {portfolioReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500/60 transition-colors duration-300 bg-zinc-900 w-full max-w-sm mx-auto sm:max-w-none"
              style={{ height: `${CARD_HEIGHT}px` }}
            >
              {/* Clipped iframe showing real thumbnail */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ height: `${CARD_HEIGHT}px` }}
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel.shortcode}/embed/`}
                  style={{
                    width: '100%',
                    height: `${IFRAME_HEIGHT}px`,
                    marginTop: `-${CLIP_TOP}px`,
                    border: 'none',
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>

              {/* Transparent click overlay */}
              <div
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
                onClick={() => setActiveReel(reel.shortcode)}
              >
                {/* Play button shown on hover */}
                <div className="w-14 h-14 rounded-full bg-black/50 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                  <Play className="text-white ml-1" size={22} fill="white" />
                </div>
              </div>

              {/* Bottom label on hover */}
              <div className="absolute bottom-0 inset-x-0 z-10 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Instagram size={13} className="text-amber-400" />
                  <span className="text-white text-xs font-medium">Watch Reel</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/_vistara__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-white font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors tracking-wide uppercase text-sm gap-3"
          >
            <Instagram size={16} />
            View More on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveReel(null)}
                className="absolute -top-10 right-0 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={`https://www.instagram.com/reel/${activeReel}/embed/?autoplay=1`}
                  className="w-full h-full border-none"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media; autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
