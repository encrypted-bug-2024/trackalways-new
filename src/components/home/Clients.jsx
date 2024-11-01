import React from 'react';
import tata from '../../assets/tata.png';
import jio from '../../assets/jio.png';
import bansal from '../../assets/bansal.png';
import skoda from '../../assets/skoda.png';
import ashok from '../../assets/ashok.png';

const Clients = () => {
  const clientLogos = [
    { src: tata, alt: 'Tata', width: 'w-24 md:w-48 lg:w-28' },
    { src: jio, alt: 'Jio', width: 'w-24 md:w-40 lg:w-28' },
    { src: bansal, alt: 'Bansal', width: 'w-24 md:w-48 lg:w-28' },
    { src: skoda, alt: 'Skoda', width: 'w-24 md:w-40 md:h-44 lg:w-28' },
  ];

  return (
    <section className="w-full mx-auto mt-28 mb-48 p-8 text-center">
      {/* Centered Heading */}
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Our Clients</h2>

      <div className="w-full mt-36 overflow-hidden relative">
        {/* Duplicating the logos for seamless effect */}
        <ul className="flex animate-marquee whitespace-nowrap items-center">
          {clientLogos.map((logo, index) => (
            <li key={index} className="flex-shrink-0 mx-6 lg:mx-24">
              <img className={`h-24 w-24 md:h-40 md:w-40 lg:h-28 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
          {/* First duplicate */}
          {clientLogos.map((logo, index) => (
            <li key={`duplicate-1-${index}`} className="flex-shrink-0 mx-6 lg:mx-24">
              <img className={`h-24 w-24 md:h-40 lg:h-28 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
          {/* Second duplicate */}
          {clientLogos.map((logo, index) => (
            <li key={`duplicate-2-${index}`} className="flex-shrink-0 mx-6 lg:mx-24">
              <img className={`h-24 w-24 md:h-40 lg:h-28 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;