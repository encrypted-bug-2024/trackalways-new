import Hero from '../components/home/Hero.jsx';
import Track from '../components/home/Track.jsx';
import Scale from '../components/home/Scale.jsx';
import Card from '../components/home/Card.jsx';
import Travel from '../components/home/Travel.jsx';
import Analyze from '../components/home/Analyze.jsx';
import Explore from '../components/home/Explore.jsx';
import Clients from '../components/home/Clients.jsx';
import GetStarted from '../components/home/GetStartedSection.jsx';

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
    </>
  );
};

export default Home;
