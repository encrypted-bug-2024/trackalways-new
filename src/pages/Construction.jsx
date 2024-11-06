import React from "react";
import banner from '../assets/industry.png';

const Construction = () => {
    return (
      <>
       <div className="relative">
          <nav className="bg-gray-800 text-white p-4">
            <h1 className="text-xl">My Website</h1>
          </nav>
  
          {/* Banner Image */}
          <div className="w-full h-[40vh] md:h-[50vh] lg:h-[550px]">
            <img
              src={banner}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl mt-8 md:text-6xl">Construction</h2>
            </div>
          </div>
        </div>
      </>
    )
}
export default Construction;