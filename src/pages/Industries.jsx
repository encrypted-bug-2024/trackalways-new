import React from 'react';
import banner from '../assets/industry.png';
import rightImage from '../assets/work.png'; 
import rightImage2 from '../assets/lady.png'; 
import { FaArrowRight } from 'react-icons/fa';
import Clients from '../components/home/Clients.jsx';
import { FaPaperPlane, FaShieldAlt, FaCog, FaBriefcase } from 'react-icons/fa';

const Industries = () => {
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

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-6xl">Sales & Services Industries</h2>
            <p className="mt-4 text-lg">
              Home <span className="text-white"> &gt;</span> <span className="opacity-75">Industries</span>
            </p>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl font-bold mb-4">Sales and Services</h3>
          <p className="text-gray-700 mb-6">
             Are you unsure of your sales representatives whereabouts? Do you
             have difficulty managing fime? Losing track of bills and expenses?
             Uffizio's dynamic and flexible employee management system can help
             with all the above.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
             Solutions 
             <FaArrowRight className="ml-2" /> 
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 p-4">
          <img
            src={rightImage}
            alt="Industries"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <Clients />

      {/* Responsive Section Below Clients */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-20 py-12 ">
        {/* Left Side Content */}
        <div className="lg:w-1/2 p-4">
          <h3 className="text-4xl font-bold mb-4">What Sales & Services Industry provides</h3>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <img
            src={rightImage2} // Replace with your actual image
            alt="Sales & Services"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side Icons and Text */}
        <div className="lg:w-1/2 p-4 flex flex-col gap-6">
          <div className="flex items-start">
            <FaPaperPlane className="text-black text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-lg">Lorem ipsum dolor sit amet, consectetur</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaShieldAlt className="text-black text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-lg">Lorem ipsum dolor silit</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCog className="text-black text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-lg">Lorem ipsum dolor sit amet, consectetur</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaBriefcase className="text-black text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-lg">Lorem ipsum dolor silit</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
