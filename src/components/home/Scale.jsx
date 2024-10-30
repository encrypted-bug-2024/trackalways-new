import React from 'react';

const Scale = () => {
  return (
    <section className="bg-[#439600] text-white w-full py-10 my-10 md:my-20">
      <div className="w-11/12 mx-auto grid grid-cols-5 grid-rows-1 gap-4">
        {/* Left Arrows */}
        <div className="flex items-center justify-center">
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l-7 7 7 7" // Left-facing arrow
            />
          </svg>
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l-7 7 7 7" // Left-facing arrow
            />
          </svg>
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l-7 7 7 7" // Left-facing arrow
            />
          </svg>
        </div>

        {/* Text */}
        <h3 className="flex items-center justify-center text-sm md:text-lg lg:text-4xl font-semibold text-center col-span-3">
          We make fleet tracking more manageable
        </h3>

        {/* Right Arrows */}
        <div className="flex items-center justify-center col-start-5">
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M11 19l7-7-7-7" // Right-facing arrow
            />
          </svg>
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M11 19l7-7-7-7" // Right-facing arrow
            />
          </svg>
          <svg
            className="w-4 h-4 bounce-left-right xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
            fill="none"
            stroke="#90ee90"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M11 19l7-7-7-7" // Right-facing arrow
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Scale;