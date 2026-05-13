import React, { useState } from 'react';

const WA_NUMBER = '918714407772';

function buildWhatsAppURL(form: { name: string; phone: string; email: string; age: string }): string {
  const message =
    `Assalamu Alaikum! 🌙\n\n` +
    `I'd like to apply for *Habiba v4.0*.\n\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `👤 *Name:* ${form.name}\n` +
    `📱 *Phone:* ${form.phone}\n` +
    `📧 *Email:* ${form.email}\n` +
    `🎂 *Age Group:* ${form.age}\n` +
    `━━━━━━━━━━━━━━━━\n\n` +
    `Please confirm my seat. JazakAllah Khair! 🤍`;


  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const AGE_OPTIONS = [
  { value: '', label: 'Select your age group' },
  { value: '14 – 17 Years', label: '14 – 17 Years' },
  { value: '18 – 21 Years', label: '18 – 21 Years' },
  { value: '22 – 25 Years', label: '22 – 25 Years' },
];

const Application: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', age: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(p => ({ ...p, [name]: '' }));
    }
  };

  const validate = () => {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim())  errs.name  = 'Please enter your name';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number';
    if (!form.email.trim()) errs.email = 'Please enter your email';
    if (!form.age)          errs.age   = 'Please select your age group';
    return errs;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    window.open(buildWhatsAppURL(form), '_blank');
  };

  const isReady = form.name && form.phone && form.email && form.age;

  // Live preview of message
  const preview = isReady ? buildWhatsAppURL(form) : null;

  return (
    <section id="apply" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,211,102,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 999, padding: '8px 20px', marginBottom: 24 }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#25D366', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Apply via WhatsApp</span>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Never miss the <span style={{ color: '#f5c842' }}>chance.</span>
          </h2>
          <p style={{ color: '#8fa3c8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Fill in your details below. We'll open WhatsApp with your application pre-written — just hit send.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="apply-grid">

          {/* LEFT — Info + WhatsApp preview */}
          <div>
            {/* Trust points */}
            <div style={{ marginBottom: 36 }}>
              {[
                { icon: '🔒', text: 'Your info stays private — sent directly to us via WhatsApp' },
                { icon: '⚡', text: 'Instant confirmation — we reply within hours' },
                { icon: '🎯', text: 'Limited seats — first come, first served' },
                { icon: '💸', text: '₹249 fee collected after your seat is confirmed' },
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
                  <span style={{ fontSize: '1.2rem', lineHeight: 1.5 }}>{t.icon}</span>
                  <span style={{ color: '#c8d8f0', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp message preview */}
            <div style={{ background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: '0.72rem', color: '#25D366', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Message Preview
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.8, color: '#c8d8f0', whiteSpace: 'pre-line', minHeight: 120 }}>
                {`Assalamu Alaikum! 🌙\n\nI'd like to apply for *Habiba v4.0*.\n\n👤 Name: ${form.name || '___________'}\n📱 Phone: ${form.phone || '___________'}\n📧 Email: ${form.email || '___________'}\n🎂 Age: ${form.age || '___________'}`}
              </div>

              {preview && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(37,211,102,0.15)', fontSize: '0.75rem', color: '#4a6080' }}>
                  ✓ Message ready — click "Send on WhatsApp" to open
                </div>
              )}
            </div>

            {/* Direct WhatsApp link */}
            <div style={{ marginTop: 20, padding: '16px 20px', background: 'rgba(17,32,64,0.5)', border: '1px solid rgba(74,127,255,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#8fa3c8', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Or contact directly</div>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none' }}>+91 87144 07772</a>
              </div>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 8, color: '#25D366', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Chat Now
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div>
            <form onSubmit={submit} style={{ background: 'rgba(17,32,64,0.7)', border: '1px solid rgba(74,127,255,0.15)', borderRadius: 20, padding: '36px 32px' }}>
              <div style={{ marginBottom: 6, fontWeight: 800, fontSize: '1.15rem' }}>Your application</div>
              <div style={{ color: '#8fa3c8', fontSize: '0.85rem', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Opens WhatsApp with your info pre-filled
              </div>

              {/* Name + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="Your full name" />
                  {errors.name && <div style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 4 }}>{errors.name}</div>}
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" name="phone" value={form.phone} onChange={handle} placeholder="+91 00000 00000" type="tel" />
                  {errors.phone && <div style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 4 }}>{errors.phone}</div>}
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <label className="form-label">Email Address *</label>
                <input className="form-input" name="email" value={form.email} onChange={handle} placeholder="you@email.com" type="email" />
                {errors.email && <div style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 4 }}>{errors.email}</div>}
              </div>

              {/* Age group */}
              <div style={{ marginBottom: 28 }}>
                <label className="form-label">Age Group *</label>
                <select className="form-input" name="age" value={form.age} onChange={handle}>
                  {AGE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                {errors.age && <div style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 4 }}>{errors.age}</div>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  padding: '15px 32px',
                  background: isReady ? '#25D366' : 'rgba(37,211,102,0.2)',
                  color: isReady ? '#fff' : '#8fa3c8',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: `1.5px solid ${isReady ? '#25D366' : 'rgba(37,211,102,0.25)'}`,
                  borderRadius: 12,
                  cursor: isReady ? 'pointer' : 'default',
                  transition: 'all 0.25s',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Send on WhatsApp
              </button>

              <div style={{ textAlign: 'center', marginTop: 14, fontSize: '0.78rem', color: '#4a6080' }}>
                You'll be redirected to WhatsApp to send the message
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .apply-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Application;
