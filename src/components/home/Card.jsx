import { useEffect, useRef } from 'react';
import logo1 from '../../assets/a.png';
import logo2 from '../../assets/b.png';
import logo3 from '../../assets/c.png';
import logo4 from '../../assets/d.png';

const Card = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          } else {
            entry.target.classList.remove('animate-slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8 w-11/12 my-20 md:my-28 lg:my-20">
      {[{ logo: logo1, title: 'Track Your Fleet', text: 'Live tracking is available, every 60 seconds, 24 hours a day from any global location on any desktop or mobile device with our fleet tracker GPS solutions.' },
      { logo: logo2, title: 'Access Reports Easily', text: 'Fleetsmart provides a comprehensive report suite delivering information on a multitude of fleet management information.' },
      { logo: logo3, title: 'Lower Costs', text: 'Utilize your fleet more efficiently, route optimally, reduce unauthorized usage, reduce excess idling and save money.' },
      { logo: logo4, title: 'Increase Profits', text: 'Produce accurate time sheets, eliminate false overtime claims, save 10-15% on annual fuel spend.' }
      ].map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="card-animation flex flex-col items-center justify-start lg:p-4 rounded-lg opacity-0 transform -translate-y-40 lg:mb-0"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-green-200 rounded-full mb-4">
            <img src={card.logo} alt="Icon" className="w-2/4 h-2/4 object-contain" />
          </div>
          <div className="text-center">
            <h2 className="mt-2 text-lg font-bold">{card.title}</h2>
            <p className="text-gray-700">{card.text}</p>
          </div>
        </div>
      ))}
      {/* Custom CSS for screen-specific visibility */}
      <style jsx>{`
        .animate-slide-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        /* Only apply animation on large screens */
        @media (min-width: 1024px) {
          .card-animation {
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
        }
      `}</style>
    </section>
  );
};

export default Card;
