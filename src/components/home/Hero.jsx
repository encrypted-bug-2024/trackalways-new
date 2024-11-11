import React, { useEffect, useState } from "react";
import homeGif from '../../assets/Home-Image.gif';
import homeStatic from '../../assets/home.png';
import scroller from '../../assets/down.gif';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [imageSrc, setImageSrc] = useState(homeGif);
    const [isFading, setIsFading] = useState(false);

    const handleBookDemoClick = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const gifDuration = 2470; // Adjust duration to match the length of your GIF in milliseconds

        const timer = setTimeout(() => {
            setIsFading(true); // Start fading out the GIF
            setTimeout(() => {
                setImageSrc(homeStatic); // Switch to the static image
                setIsFading(false); // Reset fade state
            }, 500); // Adjust this delay to make the transition smoother
        }, gifDuration);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <section className="bg-[#439600] text-white min-h-[90vh] mt-24 lg:mt-[2.5%] w-11/12 mx-auto rounded-[4%] lg:rounded-[2.5rem] shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-evenly lg:items-start w-11/12 mx-auto mt-10 lg:mt-24 gap-12 md:gap-16 lg:gap-0">

                {/* Left Section with Text */}
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8 md:mt-8 lg:mt-8 lg:w-[50%]">
                    <p className="text-xs sm:text-sm md:text-base text-center lg:text-left">
                        INDIA&apos;S ONE OF THE BEST VEHICLE TRACKING SYSTEM AND APP
                    </p>
                    <h1 className="text-3xl md:text-6xl font-bold text-center lg:text-left">
                        Track your fleet easily anywhere, anytime!
                    </h1>
                    <p className="text-base md:text-xl text-center lg:text-left lg:max-w-[600px]">
                        Fleetsmart vehicle tracking offers a complete real-time view of your fleet status and vehicle locations. Cloud-based tracking software allows effective and efficient fleet management via any smartphone or desktop computer.
                    </p>
                    <Link to="/contact-us" onClick={handleBookDemoClick}>
                        <button className="bg-[#BEF269] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
                            Book A Demo
                        </button>
                    </Link>
                </div>

                {/* Right Section with Image */}
                <div className="flex justify-center items-center w-[85%] md:w-[70%] lg:w-[40%]">
                    <img
                        src={imageSrc}
                        width={1311} height={917}
                        alt="Fleet Management"
                        className={`object-cover w-full h-full transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
                    />
                </div>
            </div>

            {/* Scroll Down Arrows */}
            <div className="flex justify-center my-10">
                <img
                    src={scroller} // Replace with the actual path to your GIF
                    alt="Scroll down indicator"
                    className="w-40 h-40 animate-bounce" // Adjust size and animation as needed
                />
            </div>
        </section>
    );
};

export default Hero;
