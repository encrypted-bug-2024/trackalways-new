import React from "react";
import { Helmet } from 'react-helmet-async';
import banner from '../assets/industry-reduced.jpg';
import rightImage from '../assets/work.png';
import { FaSeedling, FaRoute, FaLeaf, FaUsers, FaArrowRight } from 'react-icons/fa';

const Agriculture = () => {
  return (
    <>
      <Helmet>
        <title>Agriculture - TrackAlways</title>
        <meta name="description" content="Explore TrackAlways' solutions for the agriculture industry. Learn how our innovative tracking technologies can optimize farm operations, improve crop management, and enhance supply chain efficiency." />
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
            <h2 className="text-3xl mt-8 md:text-6xl">Agriculture</h2>
          </div>
        </div>
      </div>

      {/* Agriculture Fleet and Equipment Tracking Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Agriculture Fleet and Equipment Management</h3>
          <p className="text-gray-700 mb-6">
            Ensure the efficiency and safety of your agricultural fleet and machinery. Track vehicles, equipment, and resources in real-time, monitor schedules, and optimize operations. Our advanced tracking system helps minimize downtime and reduce operational costs, ensuring optimal productivity in the fields.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Explore Solutions
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={rightImage} alt="Agricultural Equipment" className="w-full h-auto rounded-lg" />
        </div>
      </div>


      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaSeedling className="text-4xl text-[#439600] mb-4" /> {/* Icon for Agriculture */}
            <h3 className="font-bold text-lg">Increased Crop Yields</h3>
            <p className="text-gray-600 text-center">
              Enhance crop production by optimizing irrigation, equipment use, and field management. This leads to higher efficiency and improved yields.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRoute className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Optimized Field Management</h3>
            <p className="text-gray-600 text-center">
              Efficiently manage large agricultural fields with optimized routes, reducing travel time and improving equipment usage.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaLeaf className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Sustainable Agriculture Practices</h3>
            <p className="text-gray-600 text-center">
              Promote sustainability in farming practices by reducing fuel usage, minimizing environmental impact, and using resources more effectively.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Enhanced Workforce Productivity</h3>
            <p className="text-gray-600 text-center">
              Streamline operations and improve the efficiency of the agricultural workforce by optimizing task assignment and scheduling.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Agriculture Management System Features</h2>
        <p className="text-gray-700 mb-12">
          Explore the features that make our agriculture management system stand out. Our solution is designed to optimize farm operations, improve crop management, and streamline equipment utilization, all while ensuring sustainability and profitability.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://i.pinimg.com/736x/ac/a5/b5/aca5b5c048aca1e7c83851bffb2d5ae9.jpg"
            alt="Field Management Feature"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Real-Time Field Monitoring</h3>
            <p className="text-gray-700">
              Monitor crop health, irrigation levels, and field conditions in real-time. With our system, farmers can ensure optimal crop growth, reduce water waste, and prevent crop diseases before they spread, leading to healthier yields.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-2/3 text-left md:order-1 order-2">
            <h3 className="text-3xl font-bold mb-2">Smart Equipment Tracking</h3>
            <p className="text-gray-700">
              Keep track of your agricultural machinery and vehicles to ensure they're used effectively. Our system helps schedule maintenance, track fuel consumption, and optimize equipment usage, reducing downtime and improving productivity.
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_f8yWPR0cjqjcC2Y4ilCwZtJfgg29c04bPR4Dpva8Fg6N-ST6m9xbiQ14enSouP0W0M&usqp=CAU"
            alt="Equipment Tracking"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://mainepolicy.org/wp-content/uploads/Corn.jpg"
            alt="Task Management"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Task & Workforce Management</h3>
            <p className="text-gray-700">
              Efficiently assign tasks to your agricultural workforce, track progress, and adjust schedules. With task and workforce management, you can ensure timely planting, harvesting, and other operations, improving efficiency across the farm.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Agriculture;