import React from 'react';

const Hero: React.FC = () => (
  <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 68, overflow: 'hidden' }}>
    {/* Background glows */}
    <div style={{ position: 'absolute', top: '10%', left: '5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,85,212,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', width: '100%' }}>

      {/* Two-column grid: left = text, right = registration card */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, alignItems: 'center' }} className="hero-grid">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Badge row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }} className="fade-up fade-up-1">
            <span className="badge badge-yellow">Girls Only</span>

            <span className="badge badge-outline">Online Course</span>
            <span className="badge badge-blue">Limited Seats</span>
          </div>

          {/* Deadline strip */}
          <div className="deadline-ticker fade-up fade-up-1" style={{ marginBottom: 32, display: 'inline-flex' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f5c842', textTransform: 'uppercase', letterSpacing: '0.05em' }}>⏳ Last date to apply</span>
            <span style={{ width: 1, height: 16, background: 'rgba(245,200,66,0.3)', margin: '0 10px' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>May 14</span>
          </div>

          {/* Headline */}
          <div className="fade-up fade-up-2" style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontStyle: 'italic', color: '#8fa3c8', marginBottom: 10 }}>An Online Learning Platform</div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0 }}>
              Becoming the<br />
              <span className="shimmer-text">Best Version</span><br />
              of You
            </h1>
          </div>

          {/* Description */}
          <p className="fade-up fade-up-3" style={{ maxWidth: 500, color: '#8fa3c8', fontSize: '1rem', lineHeight: 1.75, marginBottom: 36 }}>
            Habiba v4.0 is a transformational <strong style={{ color: '#fff' }}>11-day</strong> online course designed exclusively for girls aged <strong style={{ color: '#fff' }}>14–25</strong>. Learn Islamic values, develop life skills, and grow through task-based learning.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 52 }}>
            <a href="#apply" className="btn-primary">Apply Now →</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>

          {/* Stats row */}
          <div className="fade-up fade-up-4" style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid rgba(74,127,255,0.15)', paddingTop: 36 }}>
            {[
              { num: '11', label: 'Days' },
              { num: '14–25', label: 'Age Group' },
              { num: '₹249', label: 'Only' },
              // { num: '6th', label: 'Batch' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1 1 100px', paddingRight: 24, marginBottom: 12 }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN – Registration Card ── */}
        <div className="float-anim" style={{
          background: 'rgba(17,32,64,0.9)',
          border: '1px solid rgba(74,127,255,0.2)',
          borderRadius: 20,
          padding: 28,
          backdropFilter: 'blur(16px)',
          width: '100%',
        }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f5c842', marginBottom: 6 }}>Registration Open</div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1, marginBottom: 4 }}>May 14</div>
          <div style={{ fontSize: '0.82rem', color: '#8fa3c8', marginBottom: 22 }}>Last date to apply</div>

          <div style={{ borderTop: '1px solid rgba(74,127,255,0.15)', paddingTop: 18, marginBottom: 20 }}>
            {[['Course starts', 'May 14'], ['Duration', '11 Days'], ['Mode', 'Online'], ['Language', 'Malayalam']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.85rem' }}>
                <span style={{ color: '#8fa3c8' }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 12, padding: '14px 16px', marginBottom: 16, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f5c842' }}>₹249</div>
            <div style={{ fontSize: '0.7rem', color: '#8fa3c8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Only</div>
          </div>

          <a href="#apply" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 12, boxSizing: 'border-box' }}>Apply Now</a>
        </div>

      </div>
    </div>

    {/* Responsive: stack on mobile */}
    <style>{`
      @media (max-width: 860px) {
        .hero-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default Hero;
