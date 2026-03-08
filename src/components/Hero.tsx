import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2832&auto=format&fit=crop"
          alt="Modern Plywood Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mt-32 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
            <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
              Exclusive Plywood Specialists
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Crafting Spaces with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
              Premium Plywood
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            From visionary 3D concepts to flawless execution. We transform cafes, residences, and commercial spaces into architectural masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-amber-500 text-zinc-950 font-semibold rounded-none hover:bg-amber-400 transition-colors w-full sm:w-auto text-center tracking-wide uppercase text-sm"
            >
              Explore Our Work
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold rounded-none hover:border-amber-500 hover:text-amber-500 transition-colors w-full sm:w-auto text-center tracking-wide uppercase text-sm"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
