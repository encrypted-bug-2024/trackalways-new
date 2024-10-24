import React from 'react';
import tata from '../../assets/tata.png';
import jio from '../../assets/jio.png';
import bansal from '../../assets/bansal.png';
import skoda from '../../assets/skoda.png';
import ashok from '../../assets/ashok.png';

const Clients = () => {
  const clientLogos = [
    { src: 'https://iconape.com/wp-content/png_logo_vector/ola-cabs-logo.png', alt: 'Ola', width: 'w-32 md:w-48 lg:w-48' },
    { src: tata, alt: 'Tata', width: 'w-40 md:w-48 lg:w-56' },
    { src: jio, alt: 'Jio', width: 'w-40 md:w-48 lg:w-56' },
    { src: bansal, alt: 'Bansal', width: 'w-40 md:w-48 lg:w-56' },
    { src: skoda, alt: 'Skoda', width: 'w-40 md:w-48 lg:w-56' },
    { src: ashok, alt: 'Ashok', width: 'w-40 md:w-96 lg:w-96' },
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
              <img className={`h-32 md:h-40 lg:h-48 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
          {/* Duplicate the list for continuous flow */}
          {clientLogos.map((logo, index) => (
            <li key={`duplicate-${index}`} className="flex-shrink-0 mx-6">
              <img className={`h-32 md:h-40 lg:h-48 ${logo.width}`} src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
