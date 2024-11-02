import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const GetStartedSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={`relative bg-[#439600] rounded-lg p-6 sm:p-8 lg:p-10 z-10 flex flex-col lg:flex-row justify-between items-center text-white w-[90%] mx-auto mb-16 lg:-mb-24 ${
        isVisible ? 'animate-slide-down' : 'hidden-content'
      }`}
    >
      <div className="max-w-lg text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let’s get started with TrackAlways</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia. Iusto, ratione sequi! Vel facere,
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <p className="text-sm sm:text-base mb-4 sm:mb-0 sm:mr-4">Ready to get started?</p>
        <Link to='/contact-us'>
        <button className="bg-black text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-gray-800">
          Get Started
        </button>
        </Link>
      </div>

      <style jsx>{`
        .hidden-content {
          opacity: 0;
          transform: translateY(-20px);
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out forwards;
          opacity: 1;
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default GetStartedSection;
