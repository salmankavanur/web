import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Schedule from './Schedule';
import Application from './Application';
import Footer from './Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#0a1628', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Features />
        <Schedule />
        <Application />
      </main>
      <Footer />
    </div>
  );
}

export default App;
