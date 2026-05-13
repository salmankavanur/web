import React, { useState } from 'react';

const Application: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', age: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

        {/* Left – copy */}
        <div>
          <div className="section-divider" />
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Never miss<br />the <span style={{ color: '#f5c842' }}>chance.</span>
          </h2>
          <p style={{ color: '#8fa3c8', lineHeight: 1.75, fontSize: '1rem', marginBottom: 32 }}>
            Hundreds of girls have already walked through this experience and come out different — in the best way.
            This batch has limited seats. Once they're gone, they're gone.
          </p>

          {/* Trust points */}
          {[
            '11 structured days, not random content',
            'Mentors who actually know and care',
            'A community that stays after the course',
            'Grounded in Quran and Sunnah',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
              <span style={{ color: '#f5c842', fontWeight: 900, fontSize: '1rem', lineHeight: 1.5 }}>✓</span>
              <span style={{ color: '#c8d8f0', fontSize: '0.95rem' }}>{t}</span>
            </div>
          ))}

          <div style={{ marginTop: 36, padding: '20px 24px', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: 14 }}>
            <div style={{ fontSize: '0.75rem', color: '#f5c842', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>📞 Need help?</div>
            <a href="tel:+918714407772" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>+91 87144 07772</a>
          </div>
        </div>

        {/* Right – form */}
        <div>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 40px', background: 'rgba(17,32,64,0.6)', border: '1px solid rgba(74,127,255,0.2)', borderRadius: 20 }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontWeight: 900, fontSize: '1.6rem', marginBottom: 12 }}>You're in!</h3>
              <p style={{ color: '#8fa3c8', lineHeight: 1.7 }}>We've received your application. We'll reach out soon with next steps. Welcome to Habiba v4.0.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ background: 'rgba(17,32,64,0.6)', border: '1px solid rgba(74,127,255,0.15)', borderRadius: 20, padding: '40px 36px' }}>
              <div style={{ marginBottom: 8, fontWeight: 800, fontSize: '1.2rem' }}>Submit your application</div>
              <div style={{ color: '#8fa3c8', fontSize: '0.85rem', marginBottom: 28 }}>Takes less than 2 minutes.</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="form-label">Full Name</label>
                  <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="Your name" required />
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" name="phone" value={form.phone} onChange={handle} placeholder="+91 00000 00000" type="tel" required />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="form-label">Email Address</label>
                <input className="form-input" name="email" value={form.email} onChange={handle} placeholder="you@email.com" type="email" required />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label className="form-label">Your Age Group</label>
                <select className="form-input" name="age" value={form.age} onChange={handle} required>
                  <option value="">Select your age group</option>
                  <option value="14-17">14 – 17 Years</option>
                  <option value="18-21">18 – 21 Years</option>
                  <option value="22-25">22 – 25 Years</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 12, padding: '15px 32px', fontSize: '1rem' }}>
                Submit Application →
              </button>

              <div style={{ textAlign: 'center', marginTop: 16, fontSize: '0.8rem', color: '#8fa3c8' }}>
                ₹249 fee is collected after acceptance
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #apply > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Application;
