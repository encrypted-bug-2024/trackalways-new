import React from 'react';
import banner from '../assets/industry.png';
import rightVideo from '../assets/earth.mp4';
import { FaArrowRight } from 'react-icons/fa';
import { FaBolt, FaChartLine, FaRecycle, FaWater } from 'react-icons/fa';

const EnergyIndustries = () => {
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
              <h2 className="text-3xl mt-8 md:text-6xl">Energy Industries</h2>
            </div>
          </div>
        </div>

         {/* Energy Industries Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
          <div className="md:w-1/2 p-4">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Energy Industries</h3>
            <p className="text-gray-700 mb-6">
              Discover how Uffizio’s robust employee management system can transform the way you monitor and manage your workforce in real time. 
              From tracking sales representatives' locations to managing expenses and team performance, Uffizio enables efficient operations 
              and minimizes errors—allowing your business to thrive.
            </p>
            <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
              Solutions
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 p-4">
            <video 
              src={rightVideo} 
              loop
              autoPlay
              muted
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Benefit 1 */}
        <div className="flex flex-col items-center">
          <FaBolt className="text-4xl text-[#439600] mb-4" />
          <h3 className="font-bold text-lg">Optimized Energy Usage</h3>
          <p className="text-gray-600 text-center">
            Track and optimize energy usage to lower costs and minimize waste across your facilities.
          </p>
        </div>
        
        {/* Benefit 2 */}
        <div className="flex flex-col items-center">
          <FaChartLine className="text-4xl text-[#439600] mb-4" />
          <h3 className="font-bold text-lg">Improved Efficiency</h3>
          <p className="text-gray-600 text-center">
            Utilize data-driven insights to boost productivity and enhance operational efficiency.
          </p>
        </div>
        
        {/* Benefit 3 */}
        <div className="flex flex-col items-center">
          <FaRecycle className="text-4xl text-[#439600] mb-4" />
          <h3 className="font-bold text-lg">Sustainable Operations</h3>
          <p className="text-gray-600 text-center">
            Incorporate sustainable practices and reduce environmental impact through better resource management.
          </p>
        </div>
        
        {/* Benefit 4 */}
        <div className="flex flex-col items-center">
          <FaWater className="text-4xl text-[#439600] mb-4" />
          <h3 className="font-bold text-lg">Resource Management</h3>
          <p className="text-gray-600 text-center">
            Manage natural resources efficiently, ensuring compliance and reducing operational costs.
          </p>
        </div>
        
      </div>
      </div>
      </>
    );
}

export default EnergyIndustries;
