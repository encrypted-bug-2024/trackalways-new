import { useEffect, useRef } from 'react';
import track from '../../assets/track.svg';
import { FaArrowRight } from 'react-icons/fa';

const Travel = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation class
          } else {
            entry.target.classList.remove('animate'); // Remove animation class when out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto bg-white p-5 rounded-lg gap-x-8 my-10 lg:my-28"> 
        <div className="flex-2 flex flex-col items-center md:items-start">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-8 text-center md:text-left line-clamp-3">
            The most intuitive Fleet & Asset tracking system on the market.
          </h2>

          <div className="flex justify-center mb-4 lg:hidden">
            <img
              src={track}
              alt="New Fleet Management"
              className="max-w-[320px] mb-4 md:max-w-[400px] lg:max-w-[500px] h-auto sm:h-auto"
            />
          </div>

          <p className="text-base md:text-lg mb-8 text-center md:text-left px-4 md:px-0">
            Accessible across multiple platforms including; Mac, PC, Tablet and Mobile - any time of the day, from anywhere in the world. Vehicle tracking has never been easier. The most flexible customer-focused approach with multiple hardware options for all applications. Whatever the vehicle you are looking to track, from lorries to van tracking, let Fleetsmart take care of it all.
          </p>

          <div className="flex justify-center md:justify-start mt-1">
            <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
              GET STARTED
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-4 md:mt-0 relative">
          <img
            src={track}
            alt="New Fleet Management"
            ref={imageRef}
            className="animated-image max-w-[150px] md:max-w-[300px] lg:max-w-[600px] h-auto hidden md:block"
          />
        </div>
      </section>

      <style jsx>{`
        .animated-image {
          transform: scale(0.5);
          opacity: 0;
          transition: transform 0.8s ease, opacity 0.8s ease;
        }

        .animated-image.animate {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Travel;
