import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    emoji: '📖',
    bg: 'rgba(35,85,212,0.2)',
    title: 'Islamic Values',
    desc: 'Practical guidance to apply Islamic teachings in your everyday life — grounded and real.',
  },
  {
    emoji: '✅',
    bg: 'rgba(245,200,66,0.12)',
    title: 'Task-Based Learning',
    desc: 'Daily assignments and reflective activities that guarantee you actually grow, not just attend.',
  },
  {
    emoji: '💡',
    bg: 'rgba(74,127,255,0.15)',
    title: 'Skill Development',
    desc: 'Build communication skills, time management, and quiet confidence you carry everywhere.',
  },
  {
    emoji: '🤝',
    bg: 'rgba(35,85,212,0.2)',
    title: 'Community',
    desc: 'A circle of girls walking the same path — uplifting, honest, and genuinely supportive.',
  },
];

const Features: React.FC = () => (
  <section id="about" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
    {/* Section header */}
    <div style={{ marginBottom: 56 }}>
      <div className="section-divider" />
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
          Why join<br /><span style={{ color: '#4a7fff' }}>Habiba?</span>
        </h2>
        <p style={{ maxWidth: 360, color: '#8fa3c8', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
          Not just another course. This is a carefully designed space where real change happens, one day at a time.
        </p>
      </div>
    </div>

    {/* Equal-height cards via CSS grid + stretch */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 20,
      alignItems: 'stretch',   /* ← makes all rows same height */
    }}>
      {features.map((f, i) => (
        <div key={i} className="feat-card" style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',       /* ← fills the grid cell */
        }}>
          <div className="icon-wrap" style={{ background: f.bg }}>
            <span style={{ fontSize: '1.5rem' }}>{f.emoji}</span>
          </div>
          <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 10, letterSpacing: '-0.01em' }}>{f.title}</h3>
          <p style={{ color: '#8fa3c8', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{f.desc}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 48, textAlign: 'center' }}>
      <Link to="/curriculum" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '12px 28px' }}>View Detailed Syllabus →</Link>
    </div>

  </section>
);


export default Features;
