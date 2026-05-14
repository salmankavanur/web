import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer style={{ borderTop: '1px solid rgba(74,127,255,0.1)', background: '#080f1e' }}>
    {/* CTA banner */}
    <div style={{ background: 'linear-gradient(135deg, #1a3a8f 0%, #112040 100%)', padding: '56px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', color: '#f5c842', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>May 14 · Limited Seats</div>
        <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
          Your next 11 days<br />could change everything.
        </h2>
        <a href="/#apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '15px 36px' }}>Apply Now for ₹249 →</a>
      </div>
    </div>

    {/* Footer body */}
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 24px 36px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.02em', marginBottom: 6 }}>Surayya</div>
            <div style={{ fontSize: '0.8rem', color: '#8fa3c8', lineHeight: 1.6 }}>Daiya Islamic Academy for Women<br />Alumnae</div>
          </Link>
        </div>

        {/* Course */}
        <div>
          <div style={{ fontSize: '0.75rem', color: '#8fa3c8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Course</div>
          <Link to="/" style={{ display: 'block', color: '#c8d8f0', fontSize: '0.9rem', marginBottom: 10, textDecoration: 'none' }}>Home</Link>
          <Link to="/academy" style={{ display: 'block', color: '#c8d8f0', fontSize: '0.9rem', marginBottom: 10, textDecoration: 'none' }}>About Academy</Link>
          <Link to="/curriculum" style={{ display: 'block', color: '#c8d8f0', fontSize: '0.9rem', marginBottom: 10, textDecoration: 'none' }}>Curriculum</Link>
          <Link to="/faq" style={{ display: 'block', color: '#c8d8f0', fontSize: '0.9rem', marginBottom: 10, textDecoration: 'none' }}>FAQ</Link>
          <a href="/#apply" style={{ display: 'block', color: '#c8d8f0', fontSize: '0.9rem', marginBottom: 10, textDecoration: 'none' }}>Apply Now</a>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: '0.75rem', color: '#8fa3c8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Contact</div>
          <a href="tel:+918714407772" style={{ color: '#c8d8f0', fontSize: '0.9rem', textDecoration: 'none', display: 'block', marginBottom: 8 }}>+91 87144 07772</a>
          <div style={{ color: '#8fa3c8', fontSize: '0.85rem' }}>Kerala, India</div>
        </div>

        {/* Social */}
        <div>
          <div style={{ fontSize: '0.75rem', color: '#8fa3c8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Connect</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              {
                label: 'Instagram',
                href: '#',
                icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
              },
              {
                label: 'WhatsApp',
                href: '#',
                icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
              },
              {
                label: 'Telegram',
                href: '#',
                icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
              },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(74,127,255,0.1)', border: '1px solid rgba(74,127,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#8fa3c8', textDecoration: 'none', transition: 'background 0.2s, color 0.2s'
              }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(74,127,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(74,127,255,0.1)'; e.currentTarget.style.color = '#8fa3c8'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(74,127,255,0.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: '0.82rem', color: '#4a6080' }}>© 2026 Surayya · Daiya Islamic Academy for Women</div>
        <div style={{ fontSize: '0.82rem', color: '#4a6080' }}>Made with ❤️ for Muslim sisters</div>
      </div>
    </div>
  </footer>
);

export default Footer;

