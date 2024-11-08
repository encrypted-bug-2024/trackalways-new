import React from "react";
import { Helmet } from 'react-helmet-async';
import banner from '../assets/industry.png';
import rightImage from '../assets/work.png';
import { FaHeartbeat, FaRoute, FaLeaf, FaUsers, FaArrowRight } from 'react-icons/fa';

const Healthcare = () => {
  return (
    <>
      <Helmet>
        <title>Health Care - TrackAlways</title>
        <meta name="description" content="Discover TrackAlways' solutions for the healthcare industry. Learn how our innovative tracking technologies can improve patient care, optimize hospital operations, and enhance medical equipment management." />
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
            <h2 className="text-3xl mt-8 md:text-6xl">Health Care</h2>
          </div>
        </div>
      </div>

      {/* Healthcare Fleet and Equipment Tracking Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Healthcare Fleet and Equipment Management</h3>
          <p className="text-gray-700 mb-6">
            Ensure the safety and efficiency of your healthcare fleet and medical equipment. Track ambulances, medical staff, and equipment in real-time, monitor schedules, and streamline operations to provide timely care. Our advanced tracking system helps minimize delays and reduce operational costs, ensuring quality care when and where it’s needed most.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Explore Solutions
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={rightImage} alt="Healthcare Equipment" className="w-full h-auto rounded-lg" />
        </div>
      </div>


      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon for Healthcare */}
            <h3 className="font-bold text-lg">Improved Patient Flow</h3>
            <p className="text-gray-600 text-center">
              Optimize patient movement through healthcare facilities by improving scheduling, reducing wait times, and ensuring timely care.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRoute className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Smart Care Coordination</h3>
            <p className="text-gray-600 text-center">
              Coordinate medical teams and resources efficiently using real-time data, improving response times and service delivery.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaLeaf className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Eco-Friendly Healthcare Operations</h3>
            <p className="text-gray-600 text-center">
              Reduce environmental impact by optimizing transportation and medical resources, promoting sustainability in healthcare.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon */}
            <h3 className="font-bold text-lg">Enhanced Patient Experience</h3>
            <p className="text-gray-600 text-center">
              Improve the overall patient experience by streamlining appointments, reducing waiting times, and offering personalized care.
            </p>
          </div>
        </div>
      </div>



      {/* Features Section */}
      <div className="px-4 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Healthcare Management System Features</h2>
        <p className="text-gray-700 mb-12">
          Discover the advanced features that make our healthcare management system stand out. Our solution is designed to streamline patient care, enhance hospital operations, and optimize resource management with real-time tracking, task management, and smart healthcare coordination.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://healthcarentsickcare.com/cdn/shop/articles/What-is-Healthcare-Health-Care-healthcare-nt-sickcare-2783.png?v=1703044787"
            alt="Patient Tracking Feature"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Real-Time Patient Tracking</h3>
            <p className="text-gray-700">
              Monitor patient movement across healthcare facilities in real-time. With our real-time patient tracking feature, healthcare providers can ensure patients are where they need to be, providing quick and timely interventions. This feature helps hospitals optimize resource allocation, track waiting times, and deliver better care outcomes, all while reducing delays and improving operational efficiency.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-2/3 text-left md:order-1 order-2">
            <h3 className="text-3xl font-bold mb-2">Smart Healthcare Coordination</h3>
            <p className="text-gray-700">
              Automatically coordinate tasks, schedules, and resources for healthcare teams. Our system analyzes real-time data to optimize workflows, reduce bottlenecks, and improve response times. With smart healthcare coordination, medical staff can focus on providing quality care while ensuring that resources are always available and tasks are completed efficiently, improving patient outcomes.
            </p>
          </div>
          <img
            src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blta401f2e7dad39503/620d844d9d54947c7f131b0a/illustration-industry-health.png"
            alt="Healthcare Coordination"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://www.national.edu/wp-content/uploads/2021/11/Nov_4_iStock-1127069581-scaled.jpeg"
            alt="Task Management"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Task & Care Team Management</h3>
            <p className="text-gray-700">
              Efficiently manage healthcare tasks and monitor the progress of care teams. Our system helps assign tasks to doctors, nurses, and staff, track their completion, and ensure the highest standard of care. With task and care team management, healthcare providers can ensure timely and effective interventions, improving patient outcomes and ensuring smooth hospital operations.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Healthcare;