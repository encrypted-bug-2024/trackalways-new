import Hero from './page-sections/About/Hero';
import Info from './page-sections/About/Info';
import WhyUs from './page-sections/About/WhyUs';
import Mission from './page-sections/About/Mission';
import Clients from './page-sections/About/Clients';
import Timeline from './page-sections/About/Timeline';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
       <Hero />
       <Info />
       <WhyUs />
       <Mission />
       <Clients />
       <Timeline />
       <Footer />
    </>
  );
};

export default About;
