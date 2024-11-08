import React from "react";
import banner from '../assets/industry.png';
import rightImage from '../assets/work.png';
import { FaBus, FaRoute, FaLeaf, FaUsers, FaArrowRight } from 'react-icons/fa';

const Passanger = () => {
    return (
      <>
       <div className="relative">
          <nav className="bg-gray-800 text-white p-4">
            <h1 className="text-xl">TrackAlways</h1>
          </nav>
  
          {/* Banner Image */}
          <div className="w-full h-[40vh] md:h-[50vh] lg:h-[300px]">
            <img
              src={banner}
              alt="TrackAlways Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl mt-8 md:text-6xl">Passenger Transport</h2>
            </div>
          </div>
        </div>

 {/* Fleet and Equipment Tracking Section */}
<div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
  <div className="md:w-1/2 p-4">
    <h3 className="text-4xl lg:text-5xl font-bold mb-4">Fleet and Passenger Transport</h3>
    <p className="text-gray-700 mb-6">
      Ensure the safety and efficiency of your passenger transport fleet. Track vehicles in real-time, monitor schedules, and streamline operations for better customer satisfaction. Stay on schedule and reduce unnecessary costs with our advanced tracking system.
    </p>
    <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
      Explore Solutions
      <FaArrowRight className="ml-2" />
    </button>
  </div>
  <div className="md:w-1/2 p-4">
    <img src={rightImage} alt="Industries" className="w-full h-auto rounded-lg" />
  </div>
</div>

{/* Benefits Section */}
<div className="px-4 md:px-20 mb-8 py-12 text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="flex flex-col items-center">
      <FaBus className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
      <h3 className="font-bold text-lg">Improved Passenger Flow</h3>
      <p className="text-gray-600 text-center">
        Streamline passenger movement by optimizing bus schedules and reducing wait times.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <FaRoute className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
      <h3 className="font-bold text-lg">Smart Route Planning</h3>
      <p className="text-gray-600 text-center">
        Leverage real-time data to plan efficient routes, reducing delays and improving service.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <FaLeaf className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
      <h3 className="font-bold text-lg">Eco-Friendly Transport</h3>
      <p className="text-gray-600 text-center">
        Promote sustainability by using energy-efficient vehicles and minimizing environmental impact.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <FaUsers className="text-4xl text-[#439600] mb-4" /> {/* New Icon */}
      <h3 className="font-bold text-lg">Enhanced Passenger Experience</h3>
      <p className="text-gray-600 text-center">
        Provide a seamless and comfortable travel experience, with amenities and efficient boarding processes.
      </p>
    </div>
  </div>
</div>


      {/* Features Section */}
<div className="px-4 md:px-20 py-12 text-center">
  <h2 className="text-4xl font-bold mb-4">Features Passenger Transport System</h2>
  <p className="text-gray-700 mb-12">
    Discover the advanced features that make our passenger transport solutions stand out. Our system is designed to streamline operations, enhance passenger experience, and optimize fleet management with real-time tracking, route optimization, and efficient task management.
  </p>

  {/* Row 1 */}
  <div className="flex flex-col md:flex-row items-center mb-8">
    <img
      src="https://truckguru.co.in/blog/wp-content/uploads/2022/06/gst-on-transport-services-1024x539.jpg"  
      alt="Tracking Feature"
      className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"  
    />
    <div className="md:w-2/3 text-left">
      <h3 className="text-3xl font-bold mb-2">Real-Time Vehicle Tracking</h3>
      <p className="text-gray-700">
        Keep track of your passenger transport vehicles in real-time, ensuring punctuality and safety. With our real-time vehicle tracking feature, you can monitor the exact location of your fleet, providing up-to-date information to passengers and helping drivers stay on schedule. This feature significantly reduces delays and improves overall operational efficiency, creating a seamless transportation experience for all users.
      </p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col md:flex-row items-center mb-8">
    <div className="md:w-2/3 text-left md:order-1 order-2">
      <h3 className="text-3xl font-bold mb-2">Smart Route Optimization</h3>
      <p className="text-gray-700">
        Automatically optimize routes for reduced travel time, fuel consumption, and traffic management. Our system analyzes real-time traffic data and suggests the most efficient routes, minimizing delays and maximizing fuel efficiency. By optimizing routes dynamically, we ensure faster journeys, lower fuel costs, and less environmental impact, all while enhancing the passenger's travel experience.
      </p>
    </div>
    <img
      src="https://cdn.prod.website-files.com/637f7c161a14232e2ea8473d/66ceff99459a36bc6336de98_66cefee9874085c31848bafc_image_2024-08-28_161148531.png"  
      alt="Route Optimization"
      className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"  
    />
  </div>

  {/* Row 3 */}
  <div className="flex flex-col md:flex-row items-center">
    <img
      src="https://www.taxscan.in/wp-content/uploads/2023/11/ITAT-total-addition-addition-Overburden-taxscan.jpg"  
      alt="Task Management"
      className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"  
    />
    <div className="md:w-2/3 text-left">
      <h3 className="text-3xl font-bold mb-2">Task & Driver Management</h3>
      <p className="text-gray-700">
        Assign tasks to drivers and monitor their progress. Stay informed on task completion, potential delays, and driver performance in real-time. The system allows you to schedule tasks, track their status, and adjust assignments when necessary, improving overall efficiency. With task and driver management, fleet operators can ensure the right vehicles and drivers are on time, every time, while drivers can receive real-time updates on their tasks and routes.
      </p>
    </div>
  </div>
</div>


      </>
    )
}
export default Passanger;
