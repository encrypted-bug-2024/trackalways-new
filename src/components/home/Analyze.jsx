import { useEffect, useRef, useState } from 'react';
import analyze from '../../assets/analyze.avif';
import { FaArrowRight } from 'react-icons/fa';

const Analyze = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once animated
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
        className={`flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto bg-white p-5 rounded-lg my-10 lg:my-28 gap-x-8 ${
          isVisible ? 'animate-section' : ''
        }`}
      >
        {/* Left Side: PNG Image */}
        <div className={`flex-1 flex justify-center mt-4 md:mt-0 relative ${
          isVisible ? 'animate-left-image' : 'hidden-content'
        }`}>
          <img
            src={analyze} // Replace with your image path
            alt="New Fleet Management"
            className="max-w-[320px] mb-4 md:max-w-[500px] lg:max-w-[500px] h-auto sm:h-auto" // Increase width for iPad Mini
          />
        </div>

        {/* Right Side: Text and Buttons */}
        <div className={`flex-2 flex flex-col items-center md:items-start ${
          isVisible ? 'animate-right-content' : 'hidden-content'
        }`}>
          {/* Heading */}
          <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-8 text-center md:text-left line-clamp-3">
            Analyse your fleet's performance over time
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-lg mb-8 text-center md:text-left px-4 md:px-0">
            See important trends by team, department or across the entire fleet. Our customizable dashboards make it easy to review your progress towards KPIs or budgets, with up-to-the-minute fleet analytics when you need them most.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-1">
            <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
              GET STARTED
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
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
          .animate-left-image {
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

export default Analyze;
