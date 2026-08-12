import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import Noise from './components/Noise';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import PosterWall from './components/PosterWall';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Toolbox from './components/Toolbox';
import Statement from './components/Statement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initLenis, destroyLenis } from './lib/scroll';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Noise />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <SelectedWork />
        <PosterWall />
        <WhatIDo />
        <About />
        <Toolbox />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
