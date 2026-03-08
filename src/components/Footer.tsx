import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-8 hover:opacity-80 transition-opacity">
              <Logo />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Specialists in premium plywood interior design and execution. Transforming spaces with precision, quality, and innovative design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_vistara__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Sectors', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3">
              {['Interior Design', '3D / 2D Modeling', 'Pest Control', 'POP Work', 'Electric Work', 'Furniture Work', 'Fabrication Work', 'Deep Cleaning'].map((item) => (
                <li key={item}>
                  <span className="text-zinc-500 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Available for projects in Gujarat & Maharashtra.</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a href="tel:+918237514482" className="hover:text-amber-500 transition-colors">+91 82375 14482</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a href="mailto:hello@vistarastudio.com" className="hover:text-amber-500 transition-colors">hello@vistarastudio.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Vistara Interior Studio. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs">
            Designed with precision. Built with Plywood.
          </p>
        </div>
      </div>
    </footer>
  );
}
