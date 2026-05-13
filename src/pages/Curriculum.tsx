import SEO from '../components/SEO';


const Curriculum = () => {
  const modules = [
    { title: "Spiritual Foundation", topics: ["Intention (Niyyah)", "Islamic Identity", "Connection with Allah"] },
    { title: "Mindset & Habits", topics: ["Morning Routines", "Time Management (Amanah)", "Breaking Bad Habits"] },
    { title: "Communication", topics: ["Confident Speaking", "Empathetic Listening", "Islamic Etiquettes (Adab)"] },
    { title: "Life Skills", topics: ["Goal Setting", "Productivity Hacks", "Emotional Intelligence"] },
    { title: "Halal Lifestyle", topics: ["Modesty (Haya)", "Social Media Balance", "Healthy Boundaries"] }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
      <SEO 
        title="Habiba v4.0 Curriculum – Comprehensive Islamic & Life Skills Syllabus"
        description="Explore the 11-day syllabus of Habiba v4.0. From spiritual foundations to modern life skills, see what our students learn."
        keywords="Islamic studies syllabus girls, Malayalam Islamic classes, life skills for Muslim girls, Habiba course curriculum"
        canonical="/curriculum"
      />
      
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>
          Detailed <span style={{ color: '#f5c842' }}>Curriculum</span>
        </h1>
        <p style={{ color: '#8fa3c8', fontSize: '1.1rem' }}>A holistic approach to growth — spiritual, mental, and social.</p>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {modules.map((m, i) => (
          <div key={i} style={{ background: 'rgba(17,32,64,0.4)', border: '1px solid rgba(74,127,255,0.1)', borderRadius: '20px', padding: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>{m.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {m.topics.map(t => (
                  <span key={t} style={{ background: 'rgba(74,127,255,0.1)', color: '#4a7fff', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ fontSize: '2rem', opacity: 0.2 }}>0{i+1}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '64px', textAlign: 'center' }}>
        <p style={{ color: '#8fa3c8', marginBottom: '32px' }}>Interested in the full session breakdown?</p>
        <a href="/#apply" className="btn-primary">Apply for Habiba v4.0</a>
      </div>

    </div>
  );
};

export default Curriculum;
