import React from "react";
import { Helmet } from 'react-helmet-async';
import banner from '../assets/industry.png';
import rightImage from '../assets/work.png';
import { FaTools, FaMapSigns, FaBalanceScale, FaUsers, FaArrowRight } from 'react-icons/fa';

const Construction = () => {
  return (
    <>
      <Helmet>
        <title>Construction - TrackAlways</title>
        <meta name="description" content="Discover TrackAlways' solutions for the construction industry. Learn how our innovative tracking technologies can improve construction site management, optimize equipment usage, and enhance project efficiency." />
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
            <h2 className="text-3xl mt-8 md:text-6xl">Construction</h2>
          </div>
        </div>
      </div>

      {/* Construction Fleet and Equipment Tracking Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Construction Fleet and Equipment Management</h3>
          <p className="text-gray-700 mb-6">
            Manage your construction fleet and equipment effectively. Track vehicles, machinery, and resources in real-time, monitor schedules, and optimize operations. Our advanced tracking system helps minimize downtime, reduce operational costs, and boost productivity on-site.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Explore Solutions
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={rightImage} alt="Construction Equipment" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaTools className="text-4xl text-[#439600] mb-4" /> {/* Icon for Tools */}
            <h3 className="font-bold text-lg">Increased Construction Productivity</h3>
            <p className="text-gray-600 text-center">
              Streamline operations by improving machinery utilization, optimizing scheduling, and reducing downtime to boost productivity on construction sites.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapSigns className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Optimized Site Management</h3>
            <p className="text-gray-600 text-center">
              Efficiently manage large construction sites, coordinate logistics, and reduce travel time, improving overall efficiency and project timelines.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaBalanceScale className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Safety and Compliance</h3>
            <p className="text-gray-600 text-center">
              Ensure safety on construction sites by monitoring equipment and worker compliance with safety regulations, minimizing accidents and risks.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Enhanced Workforce Coordination</h3>
            <p className="text-gray-600 text-center">
              Improve team productivity by assigning tasks, tracking progress, and adjusting schedules for maximum efficiency on the construction site.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Construction Management System Features</h2>
        <p className="text-gray-700 mb-12">
          Discover the features that make our construction management system stand out. Our platform helps optimize equipment usage, improve workforce coordination, and enhance site safety, all while reducing costs and increasing productivity.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E1BAQGFa0DL4-mA5Q/company-background_10000/company-background_10000/0/1636743095844/matt_construction_cover?e=2147483647&v=beta&t=gNqneKscbXzU6UDFkzAAldltXLF0J0Jo5lNU78qtnDM"
            alt="Site Management Feature"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Real-Time Site Monitoring</h3>
            <p className="text-gray-700">
              Monitor construction progress, equipment performance, and worker productivity in real-time. Stay updated on the site status and ensure that everything is running smoothly and on schedule.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-2/3 text-left md:order-1 order-2">
            <h3 className="text-3xl font-bold mb-2">Fleet and Equipment Tracking</h3>
            <p className="text-gray-700">
              Track and manage your fleet and equipment to ensure proper usage. Schedule maintenance, track fuel consumption, and optimize resource allocation to minimize downtime and improve productivity.
            </p>
          </div>
          <img
            src="https://img.staticmb.com/mbcontent/images/crop/uploads/2024/3/construction-cost-in-gurgaon_0_1200.jpg"
            alt="Fleet Tracking"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://homefirstindia.com/app/uploads/2020/09/construction-2.jpg"
            alt="Task Management"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Task & Workforce Management</h3>
            <p className="text-gray-700">
              Efficiently assign tasks, track progress, and adjust schedules to keep your construction projects on track. Maximize workforce efficiency, and ensure timely completion of all project milestones.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Construction;