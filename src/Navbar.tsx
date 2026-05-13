import React from 'react';

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => (
  <>
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,22,40,0.92)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(74,127,255,0.1)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#2355d4,#4a7fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>✦</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.05rem', letterSpacing: '-0.01em', lineHeight: 1 }}>Habiba <span style={{ color: '#4a7fff' }}>v4.0</span></div>
            <div style={{ fontSize: '0.65rem', color: '#8fa3c8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Online Learning</div>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          <a href="#about" className="nav-link">About</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#apply" className="nav-link">Apply</a>
          <a href="#apply" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem', borderRadius: 10 }}>Apply Now →</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
          className="show-mobile"
          aria-label="Menu"
        >
          <div style={{ width: 24, height: 2, background: menuOpen ? 'transparent' : '#fff', marginBottom: 5, transition: '0.2s' }} />
          <div style={{ width: 24, height: 2, background: '#fff', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none', transition: '0.2s' }} />
          <div style={{ width: 24, height: 2, background: '#fff', marginTop: menuOpen ? -2 : 5, transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: '0.2s' }} />
        </button>
      </div>
    </nav>

    {/* Mobile menu */}
    {menuOpen && (
      <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#apply">Apply</a>
        <a href="#apply" className="btn-primary">Apply Now →</a>
      </div>
    )}

    <style>{`
      @media (max-width: 768px) {
        .hidden-mobile { display: none !important; }
        .show-mobile { display: block !important; }
      }
      @media (min-width: 769px) {
        .show-mobile { display: none !important; }
      }
    `}</style>
  </>
);

export default Navbar;
