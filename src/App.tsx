import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-amber-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
