export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-end">
        <span 
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-widest" 
          style={{ transform: 'scaleY(1.15)', transformOrigin: 'bottom' }}
        >
          VIST
        </span>
        
        {/* The stylized A */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-[-2px] flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full absolute bottom-0" style={{ transform: 'scaleY(1.15)', transformOrigin: 'bottom' }}>
            <defs>
              <mask id="swooshes">
                <rect width="100" height="100" fill="white" />
                {/* Curved cutouts to mimic the logo */}
                <path d="M -10 75 Q 40 35 110 85 L 110 100 Q 40 50 -10 90 Z" fill="black" />
                <path d="M -10 100 Q 40 70 110 110 L 110 125 Q 40 85 -10 115 Z" fill="black" />
              </mask>
            </defs>
            <polygon points="50,10 95,100 5,100" fill="#D4AF37" mask="url(#swooshes)" />
          </svg>
        </div>

        <span 
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-widest" 
          style={{ transform: 'scaleY(1.15)', transformOrigin: 'bottom' }}
        >
          RA
        </span>
      </div>
      
      <div className="flex items-center mt-2 w-full">
        <div className="h-[2px] bg-[#D4AF37] w-[42%] mr-2"></div>
        <span className="text-[0.45rem] md:text-[0.55rem] tracking-[0.18em] text-[#D4AF37] uppercase whitespace-nowrap font-sans font-medium">
          Vistara Interior Studio
        </span>
      </div>
    </div>
  );
}
