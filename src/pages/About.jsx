import { Helmet } from 'react-helmet-async';
import Info from '../components/about/Info';
import WhyUs from '../components/about/WhyUs';
import Mission from '../components/about/Mission';
import Clients from '../components/about/Clients';
import Timeline from '../components/about/Timeline';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - TrackAlways</title>
        <meta name="description" content="Learn more about TrackAlways, our mission, values, and how we provide innovative solutions to help you streamline and track your operations effectively." />
      </Helmet>
      <Info />
      <WhyUs />
      <Mission />
      <Clients />
      <Timeline />
    </>
  );
};

export default About;
