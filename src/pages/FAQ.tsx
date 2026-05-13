import SEO from '../components/SEO';


const FAQ = () => {
  const faqs = [
    { q: "Is Habiba v4.0 for beginners?", a: "Yes! The course is designed for girls aged 14–25, regardless of their current level of Islamic knowledge. We start from the foundations." },
    { q: "What is the medium of instruction?", a: "The course is conducted primarily in Malayalam, making it accessible to girls in Kerala and the Malayali diaspora." },
    { q: "How are the classes conducted?", a: "Classes are held online via live sessions. We also use personal tasks and mentorship groups for interactive learning." },
    { q: "Who organizes this course?", a: "It is organized by Surayya, the alumnae network of Daiya Islamic Academy for Women, a respected institution in Kerala." },
    { q: "What is the registration fee?", a: "The fee is just ₹249 for the entire 11-day program. This helps us cover the costs of the digital platform and materials." }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
      <SEO 
        title="Habiba v4.0 FAQ – Frequently Asked Questions"
        description="Have questions about the Habiba online course? Find answers about eligibility, fees, curriculum, and how to join Batch 6."
        keywords="Habiba course details, Islamic classes FAQ, Kerala Muslim girls online course, Daiya academy contact"
        canonical="/faq"
      />
      
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>
          Frequently Asked <span style={{ color: '#4a7fff' }}>Questions</span>
        </h1>
        <p style={{ color: '#8fa3c8', fontSize: '1.1rem' }}>Everything you need to know before starting your journey.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(74,127,255,0.1)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#f5c842' }}>Q.</span> {f.q}
            </h3>
            <p style={{ color: '#8fa3c8', lineHeight: '1.8', paddingLeft: '32px' }}>{f.a}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '64px', background: 'linear-gradient(rgba(35,85,212,0.1), transparent)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '16px' }}>Still have questions?</h2>
        <p style={{ color: '#8fa3c8', marginBottom: '24px' }}>Chat with our support team directly on WhatsApp.</p>
        <a href="https://wa.me/918714407772" target="_blank" rel="noreferrer" className="btn-secondary">Message Us on WhatsApp</a>
      </div>
    </div>
  );
};

export default FAQ;
