import React from "react";
import home from '../../assets/home.png';

const Hero = () => {
    return (
        <section className="relative bg-[#439600] text-white min-h-[90vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-center mt-24 lg:mt-10 w-11/12 mx-auto rounded-[4%] shadow-lg overflow-hidden">
            {/* Left Section with Text */}
            <div className="flex-1 flex flex-col justify-center h-full px-4 md:px-20 md:mt-8 lg:mt-8">
                {/* New Paragraph Above Heading */}
                <p className="text-xs sm:text-sm md:text-base text-center lg:text-left max-w-full sm:max-w-md md:max-w-md overflow-hidden whitespace-nowrap text-ellipsis mb-2 md:mb-4 -mt-6 md:mx-auto lg:ml-0">
                    INDIA'S ONE OF THE BEST VEHICLE TRACKING SYSTEM AND APP
                </p>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-6xl font-bold text-center md:text-center lg:text-left mb-4 md:mb-8 leading-tight">
                    Track your fleet easily <br />
                    anywhere, anytime!
                </h1>

                {/* Description Paragraph */}
                <p className="mb-4 md:mb-8 text-base text-center md:text-xl md:text-center lg:text-left max-w-full line-clamp-3">
                    Fleetsmart vehicle tracking offers a complete real-time view of your fleet status and vehicle locations. Cloud-based tracking software allows effective and efficient fleet management via any smartphone or desktop computer.
                </p>

                {/* Mobile Image */}
                <div className="flex justify-center md:hidden mb-8">
                    <img
                        src={home}
                        alt="Fleet Management"
                        className="max-w-[220px] md:max-w-md h-auto transition-all duration-300"
                    />
                </div>

                {/* Call to Action Button */}
                <div className="mt-4 mb-20 sm:mb-48 lg:mb-20 flex justify-center md:justify-center lg:justify-start">
                    <button className="bg-[#9acd32] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
                        Book A Demo
                    </button>
                </div>
            </div>

           {/* Right Section with Image for iPad View */}
           <div className="hidden md:flex justify-center lg:justify-end pr-5 md:pr-20 mt-4 md:mb-20 md:ml-20 lg:mt-20 lg:ml-0">
             <img
             src={home}
            alt="Fleet Management"
            className="max-w-[300px] lg:max-w-[300px] xl:max-w-[500px] h-auto transition-all duration-300 md:-mt-52 md:mb-20 lg:mt-20"
          />
          </div>

            {/* Scroll Down Arrows */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-[-20px]">
                <svg
                    className="w-10 h-10 animate-bounce"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
                <svg
                    className="w-10 h-10 animate-bounce"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
                <svg
                    className="w-10 h-10 animate-bounce"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
