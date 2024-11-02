import React from "react";
import home from '../../assets/home.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-[#439600] text-white min-h-[90vh] mt-24 lg:mt-[2.5%] w-11/12 mx-auto rounded-[4%] lg:rounded-[2.5rem] shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-evenly lg:items-start w-11/12 mx-auto mt-10 lg:mt-24 gap-12 md:gap-16 lg:gap-0">

                {/* Left Section with Text */}
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8 md:mt-8 lg:mt-8 lg:w-[50%]">

                    {/* New Paragraph Above Heading */}
                    <p className="text-xs sm:text-sm md:text-base text-center lg:text-left">
                        INDIA&apos;S ONE OF THE BEST VEHICLE TRACKING SYSTEM AND APP
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-6xl font-bold text-center lg:text-left">
                        Track your fleet easily anywhere, anytime!
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-base md:text-xl text-center lg:text-left lg:max-w-[600px]">
                        Fleetsmart vehicle tracking offers a complete real-time view of your fleet status and vehicle locations. Cloud-based tracking software allows effective and efficient fleet management via any smartphone or desktop computer.
                    </p>

                    {/* Call to Action Button */}
                    <Link to="/contact-us">
                    <button className="bg-[#9acd32] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
                        Book A Demo
                    </button>
                    </Link>
                </div>

                {/* Right Section with Image */}
                <div className="flex justify-center items-center w-[85%] md:w-[70%] lg:w-[40%]">
                    <img
                        src={home}
                        width={1311} height={917}
                        alt="Fleet Management"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Scroll Down Arrows */}
            <div className="flex flex-col items-center space-y-[-20px] my-10">
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
