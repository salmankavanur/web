import React from 'react';
import { Link } from 'react-router-dom';

const AcademyInfo: React.FC = () => (
  <section style={{ padding: '80px 24px', background: 'rgba(35,85,212,0.03)', borderTop: '1px solid rgba(74,127,255,0.05)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
      <div style={{ flex: '1 1 500px' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f5c842', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Organized By</div>
        <h2 style={{ fontWeight: 900, fontSize: '2.4rem', lineHeight: 1.2, marginBottom: 20 }}>Surayya Alumnae</h2>
        <p style={{ color: '#8fa3c8', fontSize: '1rem', lineHeight: 1.8, marginBottom: 28, maxWidth: 600 }}>
          Surayya is the alumnae network formed by the 6th Batch of <strong>Daiya Islamic Academy for Women</strong>. 
          Dedicated to continuous learning and community impact, we bring you Habiba v4.0.
        </p>
        <Link to="/academy" className="nav-link" style={{ fontSize: '1rem', fontWeight: 700, color: '#4a7fff', textDecoration: 'underline' }}>
          Learn more about our Academy and Vision →
        </Link>
      </div>
      <div style={{ flex: '0 0 300px', display: 'flex', justifyContent: 'center' }}>
         <div style={{ width: 120, height: 120, borderRadius: 24, background: 'linear-gradient(135deg,rgba(35,85,212,0.1),rgba(74,127,255,0.1))', border: '1px solid rgba(74,127,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
           🎓
         </div>
      </div>
    </div>
  </section>
);

export default AcademyInfo;
