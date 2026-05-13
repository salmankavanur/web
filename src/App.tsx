import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Curriculum from './pages/Curriculum';
import FAQ from './pages/FAQ';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#0a1628', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
