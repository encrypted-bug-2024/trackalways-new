import Hero from './page-sections/Home/Hero.jsx';
import Track from '../pages/page-sections/Home/Track';
import Scale from '../pages/page-sections/Home/Scale';
import Card from '../pages/page-sections/Home/Card';
import Travel from '../pages/page-sections/Home/Travel';
import Analyze from '../pages/page-sections/Home/Analyze';
import Explore from '../pages/page-sections/Home/Explore';
import Clients from '../pages/page-sections/Home/Clients';
import Footer from '../components/Footer.jsx';
import GetStarted from '../pages/page-sections/Home/GetStartedSection.jsx';

const Home = () => {
  return (
    <>
     <Hero />
     <Track />
     <Scale />
     <Card />
     <Travel />
     <Analyze />
     <Explore />
     <Clients />
     <GetStarted />
     <Footer />
    </>
  );
};

export default Home;
