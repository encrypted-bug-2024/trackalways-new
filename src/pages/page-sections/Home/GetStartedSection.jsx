import React from 'react';

const GetStartedSection = () => {
  return (
    <div className="relative bg-[#439600] rounded-lg p-6 sm:p-8 lg:p-10 z-50 flex flex-col lg:flex-row justify-between items-center text-white w-[90%] mx-auto mb-16 lg:-mb-24">
      {/* Left Section with Text */}
      <div className="max-w-lg text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let’s get started with TrackAlways</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia. Iusto, ratione sequi! Vel facere,
        </p>
      </div>

      {/* Right Section with Button */}
      <div className="flex flex-col sm:flex-row items-center">
        <p className="text-sm sm:text-base mb-4 sm:mb-0 sm:mr-4">Ready to get started?</p>
        <button className="bg-black text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStartedSection;
