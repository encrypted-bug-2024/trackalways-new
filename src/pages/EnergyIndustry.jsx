import React from 'react';
import banner from '../assets/industry.png';
import { Helmet } from 'react-helmet-async';
import rightVideo from '../assets/earth.mp4';
import { FaArrowRight, FaBolt, FaChartLine, FaRecycle, FaWater } from 'react-icons/fa';
import additionalImage1 from '../assets/report 1.png';
import additionalImage2 from '../assets/report 2.png';
import additionalImage3 from '../assets/report 3.png';

const EnergyIndustries = () => {
  return (
    <>
      <Helmet>
        <title>Energy Industries - TrackAlways</title>
        <meta name="description" content="Explore TrackAlways' solutions tailored for the energy industry. Learn how we help optimize energy operations, improve efficiency, and support sustainability goals with innovative tracking technologies." />
      </Helmet>

      <div className="relative">
        <nav className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">My Website</h1>
        </nav>

        {/* Banner Image */}
        <div className="w-full h-[40vh] md:h-[50vh] lg:h-[300px]">
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
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Fleet and equipment tracking for the Energy industry</h3>
          <p className="text-gray-700 mb-6">
            Determine the safety of high-value resources like coal, crude petroleum, oil, minerals, and natural gas during their transfer. Keep track of fleet or equipment even when they are beyond coverage areas! Streamline operations for better ROIs. Stay on extraction schedules and eliminate unnecessary equipment or fleet rental charges.
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

      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaBolt className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Optimized Energy Usage</h3>
            <p className="text-gray-600 text-center">
              Track and optimize energy usage to lower costs and minimize waste across your facilities.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaChartLine className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Improved Efficiency</h3>
            <p className="text-gray-600 text-center">
              Utilize data-driven insights to boost productivity and enhance operational efficiency.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRecycle className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Sustainable Operations</h3>
            <p className="text-gray-600 text-center">
              Incorporate sustainable practices and reduce environmental impact through better resource management.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaWater className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Resource Management</h3>
            <p className="text-gray-600 text-center">
              Manage natural resources efficiently, ensuring compliance and reducing operational costs.
            </p>
          </div>
        </div>
      </div>

      {/* New Section with Alternating Layout */}
      <div className="px-4 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Features of Employee Management System</h2>
        <p className="text-gray-700 mb-12">
          Here's why our employee management stand out from the rest
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={additionalImage1}
            alt="Enhancement 1"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Expense Reports</h3>
            <p className="text-gray-700">
              They help you stay on top of company expenditures. Keep track of your employee's expenses and facilitate easy reimbursement. By checking on fuel or a business trip's expenses, you can avoid financial discord. Upload receipts or invoices for ultimate transparency.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-2/3 text-left md:order-1 order-2">
            <h3 className="text-3xl font-bold mb-2">Live-tracking and ETAs</h3>
            <p className="text-gray-700">
              Do you have trouble keeping track of your teams when they work remotely? Track employees in real-time and collaborate better. Getting your crews on the job sites in good time is essential for customer satisfaction. Never make your customers wait!
            </p>
            <p className="text-gray-700">Share live ETAs and notify them ahead of time in case of delays or cancellations.</p>
          </div>
          <img
            src={additionalImage2}
            alt="Enhancement 2"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={additionalImage3}
            alt="Enhancement 3"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Job Module</h3>
            <p className="text-gray-700">
              Automate and monitor employee task assignments. The job module keeps you updated with completed tasks and missed tasks. Check up on your employees when they've missed a designated task and resolve issues preemptively.
            </p>
          </div>
        </div>
      </div>


    </>
  );
}

export default EnergyIndustries;
