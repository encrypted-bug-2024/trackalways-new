import React from 'react';
import tata from '../../../assets/tata.png';
import jio from '../../../assets/jio.png';
import bansal from '../../../assets/bansal.png';
import skoda from '../../../assets/skoda.png';
import ashok from '../../../assets/ashok.png';

const Clients = () => {
  const clientLogos = [
    { src: tata, alt: 'Tata', width: 'w-40 md:w-48 lg:w-56' },
    { src: jio, alt: 'Jio', width: 'w-40 md:w-48 lg:w-56' },
    { src: bansal, alt: 'Bansal', width: 'w-40 md:w-48 lg:w-56' },
    { src: skoda, alt: 'Skoda', width: 'w-40 md:w-48 lg:w-56' },
  ];

  return (
    <section className="w-full mx-auto mt-28 mb-48 p-8 text-center">
      {/* Centered Heading */}
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Our Clients</h2>

      <div className="w-full mt-36 overflow-hidden relative">
        {/* Duplicating the logos for seamless effect */}
        <ul className="flex animate-marquee whitespace-nowrap items-center">
          {clientLogos.map((logo, index) => (
            <li key={index} className="flex-shrink-0 mx-6">
              <img className={`h-36 w-20 md:h-40 md:w-40  lg:h-48 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
          {/* Duplicate the list for continuous flow */}
          {clientLogos.map((logo, index) => (
            <li key={`duplicate-${index}`} className="flex-shrink-0 mx-6">
              <img className={`h-36s md:h-40 lg:h-48 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
