import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import newImage from '../../assets/product.webp';
import search from '../../assets/search.svg';

const Track = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when out of view for next scroll
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
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`flex flex-col sm:mt-2 sm:mb-2 items-center justify-between w-11/12 mx-auto mt-16 -mb-20 bg-white p-5 rounded-lg min-h-[80vh] md:flex-row lg:flex-row iPad-styles ${
          isVisible ? 'animate-section' : ''
        }`}
      >
        <div
          className={`flex-2 flex flex-col items-center md:items-start ${
            isVisible ? 'animate-left-content' : 'hidden-content'
          }`}
        >
          {/* Heading */}
          <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-6 text-center md:text-left lg:text-left">
            Increase fleet visibility with our vehicle tracking app.
          </h2>

          {/* PNG Image for Mobile Only */}
          <div className="flex justify-center mb-4 mobile-image-only">
            <img
              src={newImage}
              alt="New Fleet Management"
              className="max-w-[200px] h-auto"
            />
          </div>

          {/* PNG Image for iPad Only */}
          <div className="flex justify-center mb-4 iPad-image-only">
            <img
              src={newImage}
              alt="New Fleet Management"
              className="max-w-[450px] h-auto"
            />
          </div>

          {/* Paragraph */}
          <p className="text-base md:text-lg mb-6 text-center md:text-left lg:text-left px-4 md:px-0">
            See in near real-time a 360-degree view of your fleet's daily operations,
            helping you reduce costs, increase productivity, and stay on top of vehicle
            maintenance—allowing you to focus on running your business.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start lg:justify-start mt-1">
            <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
              BOOK A DEMO
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div
          className={`flex-1 flex justify-center mt-4 md:mt-0 relative ${
            isVisible ? 'animate-right-content' : 'hidden-content'
          }`}
        >
          {/* PNG Image for Desktop Only */}
          <img
            src={newImage}
            alt="New Fleet Management"
            className="hidden md:block lg:block max-w-[150px] md:max-w-[300px] lg:max-w-[600px] h-auto"
          />

          {/* SVG Image positioned in the corner (hidden on mobile) */}
          <img
            src={search}
            alt="Logo"
            className="absolute bottom-4 right-12 md:right-33 max-w-[50px] h-auto hidden md:block"
          />
        </div>
      </section>

      {/* Custom CSS for screen-specific visibility and animations */}
      <style jsx>{`
        /* Hide the iPad and mobile images by default */
        .iPad-image-only, .mobile-image-only {
          display: none;
        }

        /* Mobile View */
        @media (max-width: 767px) {
          .mobile-image-only {
            display: block;
          }
        }

        /* iPad View */
        @media (min-width: 768px) and (max-width: 1024px) {
          .md\\:flex-row {
            flex-direction: column;
          }
          .md\\:items-start {
            align-items: center;
          }
          .md\\:justify-start {
            justify-content: center;
          }
          .md\\:text-left {
            text-align: center;
          }
          /* Show iPad image only on iPad screens with increased size */
          .iPad-image-only {
            display: block;
            max-width: 400px;
            height: auto;
          }
          /* Hide desktop and mobile images on iPad */
          .md\\:block, .mobile-image-only {
            display: none;
          }
          /* iPad-specific margin adjustments */
          .iPad-styles {
            margin-top: 6rem;
            margin-bottom: -10rem;
          }
        }

        /* Hide content initially */
        .hidden-content {
          opacity: 0;
          transform: translateX(0);
        }

        /* Desktop Animations */
        @media (min-width: 1024px) {
          .animate-section {
            overflow: hidden;
          }
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

        /* Keyframes */
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
