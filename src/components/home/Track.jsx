import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import newImage from '../../assets/product.webp';
import search from '../../assets/search.svg';
import { Link } from 'react-router-dom';

const Track = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Only set once when first intersecting
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col my-10 md:my-20 items-center justify-between w-11/12 mx-auto bg-white p-5 rounded-lg md:flex-row lg:flex-row"
      >
        <div
          className={`flex-2 flex flex-col items-center md:items-start ${
            hasAnimated ? 'animate-left-content' : 'hidden-content'
          }`}
        >
          <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-6 text-center md:text-left lg:text-left">
            Increase fleet visibility with our vehicle tracking app.
          </h2>

          <div className="flex justify-center mb-4 mobile-image-only">
            <img
              src={newImage}
              alt="New Fleet Management"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="flex justify-center mb-4 iPad-image-only">
            <img
              src={newImage}
              alt="New Fleet Management"
              className="max-w-[450px] h-auto"
            />
          </div>

          <p className="text-base md:text-lg mb-6 text-center md:text-left lg:text-left px-4 md:px-0">
            See in near real-time a 360-degree view of your fleet's daily operations,
            helping you reduce costs, increase productivity, and stay on top of vehicle
            maintenance—allowing you to focus on running your business.
          </p>

          <div className="flex justify-center md:justify-start lg:justify-start mt-1">
            <Link to='/contact-us'>
            <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
              BOOK A DEMO
              <FaArrowRight className="ml-2" />
            </button>
            </Link>
          </div>
        </div>

        <div
          className={`flex-1 flex justify-center mt-4 md:mt-0 relative ${
            hasAnimated ? 'animate-right-content' : 'hidden-content'
          }`}
        >
          <img
            src={newImage}
            alt="New Fleet Management"
            className="hidden md:block lg:block max-w-[150px] md:max-w-[300px] lg:max-w-[600px] h-auto"
          />

          <img
            src={search}
            alt="Logo"
            className="absolute bottom-4 right-12 md:right-33 max-w-[50px] h-auto hidden md:block"
          />
        </div>
      </section>

      <style jsx>{`
        .iPad-image-only, .mobile-image-only {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-image-only {
            display: block;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .iPad-image-only {
            display: block;
            max-width: 400px;
            height: auto;
          }
          .md\\:block, .mobile-image-only {
            display: none;
          }
        }

        .hidden-content {
          opacity: 0;
          transform: translateX(0);
        }

        @media (min-width: 1024px) {
          .animate-left-content {
            animation: slideInLeft 0.6s ease-out forwards;
            transform: translateX(-100%);
            opacity: 1;
          }
          .animate-right-content {
            animation: slideInRight 0.6s ease-out forwards;
            transform: translateX(100%);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Track;
