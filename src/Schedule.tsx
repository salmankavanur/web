import React from 'react';

const days = [
  { day: 'Day 1–2', title: 'Foundation', desc: 'Setting intentions, understanding Islamic identity, and why self-growth is a worship act.' },
  { day: 'Day 3–4', title: 'Mindset Reset', desc: 'Breaking bad habits, building a morning routine, and learning to manage your time as an amanah.' },
  { day: 'Day 5–6', title: 'Communication', desc: 'Speaking with confidence, listening with empathy, and navigating relationships the Islamic way.' },
  { day: 'Day 7–8', title: 'Skill Sprints', desc: 'Productivity hacks, goal-setting, and hands-on assignments you can share with your circle.' },
  { day: 'Day 9–10', title: 'Lifestyle Design', desc: 'Building a halal lifestyle that actually feels joyful — not restrictive.' },
  { day: 'Day 11', title: 'Graduation', desc: 'Celebrate your growth, share your transformation, and carry your commitment forward.' },
];

const Schedule: React.FC = () => (
  <section id="schedule" style={{ background: 'rgba(17,32,64,0.4)', borderTop: '1px solid rgba(74,127,255,0.08)', borderBottom: '1px solid rgba(74,127,255,0.08)', padding: '100px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 56 }}>
        <div className="section-divider" />
        <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
          11 days of<br /><span style={{ color: '#f5c842' }}>purposeful</span> transformation
        </h2>
        <p style={{ color: '#8fa3c8', marginTop: 16, maxWidth: 480, lineHeight: 1.7 }}>
          Each day is structured with live sessions, personal tasks, mentorship moments, and reflections.
        </p>
      </div>

      {/* Equal-height schedule cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
        alignItems: 'stretch',
        marginBottom: 48,
      }}>
        {days.map((d, i) => (
          <div key={i} className="feat-card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: 0,
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f5c842', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f5c842', display: 'inline-block', flexShrink: 0 }} />
              {d.day}
            </div>
            <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: 10, letterSpacing: '-0.01em' }}>{d.title}</h3>
            <p style={{ color: '#8fa3c8', fontSize: '0.88rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      {/* Course info strip – equal-height boxes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 16,
        alignItems: 'stretch',
      }}>
        {[
          ['🗓', 'Starts', 'May 14'],
          ['⏱', 'Duration', '11 Days'],
          ['💻', 'Mode', 'Online'],
          ['🌐', 'Language', 'Malayalam'],
          // ['👥', 'Batch', '6th Batch'],
          ['💰', 'Fee', '₹249 Only'],
        ].map(([icon, label, val]) => (
          <div key={label} style={{
            background: 'rgba(10,22,40,0.6)',
            border: '1px solid rgba(74,127,255,0.12)',
            borderRadius: 14,
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <div style={{ fontSize: '1.3rem', marginBottom: 10 }}>{icon}</div>
            <div style={{ fontSize: '0.7rem', color: '#8fa3c8', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, marginBottom: 6 }}>{label}</div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', marginTop: 'auto' }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Schedule;
