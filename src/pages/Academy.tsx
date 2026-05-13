import SEO from '../components/SEO';


const Academy = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
      <SEO 
        title="About Daiya Islamic Academy & Surayya Alumnae"
        description="Learn about Daiya Islamic Academy for Women and Surayya, the alumnae network behind the Habiba transformational course series."
        keywords="Daiya Islamic Academy for Women, Surayya Alumnae, Women Islamic Education Kerala, Habiba course organizers"
        canonical="/academy"
      />
      <div className="section-divider" style={{ margin: '0 auto 40px' }} />
      <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '24px' }}>
        The Vision Behind <span className="shimmer-text">Habiba</span>
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginTop: '64px' }}>
        <div className="feat-card">
          <h2 style={{ color: '#f5c842', marginBottom: '20px' }}>Daiya Islamic Academy</h2>
          <p style={{ color: '#8fa3c8', lineHeight: '1.8' }}>
            Daiya Islamic Academy for Women is a premier institution in Kerala dedicated to empowering Muslim women through authentic Islamic knowledge and modern academic excellence. Our mission is to nurture a generation of women who are spiritually grounded and intellectually capable.
          </p>
        </div>
        
        <div className="feat-card">
          <h2 style={{ color: '#4a7fff', marginBottom: '20px' }}>Surayya Alumnae</h2>
          <p style={{ color: '#8fa3c8', lineHeight: '1.8' }}>
            Surayya is the vibrant alumnae network formed by the 6th Batch of Daiya Islamic Academy for Women. It serves as a platform for continuous growth, sisterhood, and community service. The Habiba course series is one of Surayya's flagship initiatives.
          </p>
        </div>

      </div>

      <div style={{ marginTop: '80px', background: 'rgba(17,32,64,0.5)', border: '1px solid rgba(74,127,255,0.15)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 800, marginBottom: '24px' }}>Our Commitment</h2>
        <p style={{ color: '#c8d8f0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9', fontSize: '1.1rem' }}>
          "To provide a safe, supportive, and spiritually uplifting environment where every girl can rediscover her purpose and align her life with the values of the Quran and Sunnah."
        </p>
      </div>
    </div>
  );
};

export default Academy;
