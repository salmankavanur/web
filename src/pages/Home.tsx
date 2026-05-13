import Hero from '../Hero';

import Features from '../Features';
import Schedule from '../Schedule';
import AcademyInfo from '../AcademyInfo';
import Application from '../Application';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Habiba v4.0 – Islamic Online Course for Girls | May 14 | ₹249"
        description="Habiba v4.0 is a transformational 11-day online Islamic course for Muslim girls aged 14–25. Learn Islamic values, build life skills, and grow. 4th Edition starts May 14."
        keywords="Habiba v4.0, Islamic online course for girls, Muslim girls course Kerala, Daiya Islamic Academy, online Islamic learning Malayalam"
        canonical="/"
      />
      <Hero />
      <Features />
      <Schedule />
      <AcademyInfo />
      <Application />
    </>
  );
};

export default Home;
