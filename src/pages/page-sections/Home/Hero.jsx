import React from "react";
import home from '../../../assets/home.png';

const Hero = () => {
    return (
        <section className="relative bg-[#439600] text-white min-h-[95vh] flex flex-col md:flex-row items-center justify-center mt-24 md:mt-12 md:pt-10 w-11/12 mx-auto rounded-[4%] shadow-lg overflow-hidden">
            {/* Left Section with Text */}
            <div className="flex-1 flex flex-col justify-center pl-5 pr-5 md:pl-20 md:pr-20 h-full">
                {/* New Paragraph Above Heading */}
                <p className="text-lg md:text-l text-left max-w-md whitespace-normal lg:whitespace-nowrap mt-0 md:mb-6">
                    INDIA'S ONE OF THE BEST VEHICLE TRACKING SYSTEM AND APP
                </p>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-6xl font-bold text-left mt-0 md:mb-6 leading-tight">
                    Track your fleet easily <br />
                    anywhere, anytime!
                </h1>

                {/* Mobile Image */}
                <div className="flex justify-center md:hidden mt-4">
                    <img
                        src={home}
                        alt="Fleet Management"
                        className="max-w-[220px] md:max-w-md h-auto transition-all duration-300"
                    />
                </div>

                {/* Description Paragraph */}
                <p className="mt-4 text-base md:text-xl text-left max-w-full line-clamp-3">
                    Fleetsmart vehicle tracking offers a complete real-time view of your fleet status and vehicle locations. Cloud-based tracking software allows effective and efficient fleet management via any smartphone or desktop computer.
                </p>

                {/* Call to Action Button */}
                <div className="mt-8 flex justify-center md:justify-start">
                    <button className="bg-[#9acd32] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
                        Book A Demo
                    </button>
                </div>
            </div>

            {/* Right Section with Image for Desktop View */}
            <div className="hidden md:flex justify-center md:justify-end pr-5 md:pr-20 mt-8 md:mt-0">
                <img
                    src={home}
                    alt="Fleet Management"
                    className="max-w-[200px] lg:max-w-[300px] xl:max-w-[500px] h-auto md:mt-16 transition-all duration-300"
                />
            </div>

            {/* Scroll Down Arrows */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 hidden md:flex">
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
}

export default Hero;
