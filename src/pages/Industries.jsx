import React from 'react';
import banner from '../assets/industry.png';
import rightImage from '../assets/work.png';
import rightImage2 from '../assets/lady.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaShieldAlt, FaLock, FaTools, FaCog, FaBriefcase } from 'react-icons/fa';

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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-6xl">Sales & Services Industries</h2>
            <p className="mt-4 text-lg">
              Home <span className="text-white"> &gt;</span> <span className="opacity-75">Industries</span>
            </p>
          </div>
        </div>
      </div>

      {/* Sales and Services Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Sales and Services</h3>
          <p className="text-gray-700 mb-6">
            Are you struggling to keep tabs on your sales representatives' locations, or finding it difficult to manage their time effectively?
            Does tracking bills, expenses, and overall team performance feel like a constant challenge?
            With Uffizio's dynamic and flexible employee management system, you can effortlessly monitor, manage, and streamline your workforce operations in real time—keeping your business running efficiently while reducing manual work and errors.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Solutions
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={rightImage} alt="Industries" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Benefits</h2>
        <p className="text-gray-600 mb-24">
          Manage equipment and construction fleets over multiple job sites. Boost productivity by streamlining operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaLock className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Reduced Thefts</h3>
            <p className="text-gray-600 text-center">
              Alerts for route deviation, unauthorized stops, and consignment tampering, and more.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaTools className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Fewer Repairs</h3>
            <p className="text-gray-600 text-center">
              Access actionable maintenance data and save a fortune on equipment repairs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Enhanced Safety</h3>
            <p className="text-gray-600 text-center">
              Get live alerts for site accidents and protect your on-site workers and drivers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCog className="text-4xl text-[#439600] mb-4" />
            <h3 className="font-bold text-lg">Customizable Features</h3>
            <p className="text-gray-600 text-center">
              Our platform is configurable and allows 3rd party API integration.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="lg:w-1/2 p-4">
          <h3 className="text-4xl font-bold mb-4">What Sales & Services Industry Provides</h3>
          <p className="text-gray-700 mb-6">
            The sales and services industry plays a crucial role in driving economic growth by providing essential products and services that meet consumer needs.
          </p>
          <img src={rightImage2} alt="Sales & Services" className="w-full h-auto rounded-lg" />
        </div>
          {/* Right Side Icons and Text */}
  <div className="lg:w-1/2 p-4 flex flex-col gap-6">
    <div className="flex items-start">
      <FaPaperPlane className="text-black text-5xl mr-4" />
      <div>
        <h4 className="font-bold text-lg">Streamlined Communication</h4>
        <p className="text-gray-600">
          Effective communication is the backbone of the sales and services industry. From engaging potential clients to providing post-sale support, streamlined communication ensures that all parties are informed and satisfied throughout the entire process.
        </p>
      </div>
    </div>

    <div className="flex items-start">
      <FaShieldAlt className="text-black text-5xl mr-4" />
      <div>
        <h4 className="font-bold text-lg">Security and Trust</h4>
        <p className="text-gray-600">
          In today's market, building trust with customers is paramount. The sales and services industry prioritizes transparency, data security, and ethical practices, fostering long-lasting relationships that contribute to customer loyalty and satisfaction.
        </p>
      </div>
    </div>

    <div className="flex items-start">
      <FaCog className="text-black text-5xl mr-4" />
      <div>
        <h4 className="font-bold text-lg">Tailored Solutions</h4>
        <p className="text-gray-600">
          The industry offers tailored solutions that cater to specific client needs. Through personalized service and bespoke offerings, businesses can enhance customer experiences and create value that resonates with their target audience.
        </p>
      </div>
    </div>

    <div className="flex items-start">
      <FaBriefcase className="text-black text-5xl mr-4" />
      <div>
        <h4 className="font-bold text-lg">Professional Expertise</h4>
        <p className="text-gray-600">
          A key aspect of the sales and services industry is the expertise of its professionals. Trained sales representatives and service agents possess deep product knowledge and the skills necessary to effectively address customer inquiries and concerns, ensuring that clients receive the best advice and assistance possible.
        </p>
      </div>
    </div>
        </div>
      </div>

{/* Final Call-to-Action Section */}
<div className="bg-gray-100 py-36 text-center relative">
  <h2 className="text-4xl font-bold mb-6 text-[#333333] mx-auto px-4">Ready to get started? Get in touch with us!</h2>
  <div className="flex flex-col items-center justify-center px-6 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mx-auto">
    <Link to="/contact-us">
      <button className="bg-[#439600] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 flex items-center justify-center space-x-2">
        <span>Schedule a Meeting</span> 
        <FaArrowRight />
      </button>
    </Link>
    <Link to="/products">
      <button className="text-black py-3 px-8 text-lg font-semibold hover:text-[#439600] transition duration-300 flex items-center justify-center space-x-2">
        <span>Products</span> 
        <FaArrowRight />
      </button>
    </Link>
  </div>
</div>


    </>
  );
};

export default Industries;
