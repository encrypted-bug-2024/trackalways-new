import React from "react";
import banner from '../assets/industry.png';
import { Helmet } from 'react-helmet-async';
import rightImage from '../assets/work.png';
import { FaLock, FaShieldAlt, FaFingerprint, FaCogs, FaArrowRight } from 'react-icons/fa';

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security - TrackAlways</title>
        <meta name="description" content="Discover TrackAlways' security solutions. Learn how our innovative tracking technologies can enhance asset protection, monitor security systems, and improve overall safety and risk management." />
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
            <h2 className="text-3xl mt-8 md:text-6xl">Security</h2>
          </div>
        </div>
      </div>

      {/* Security and Protection Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Security and Protection</h3>
          <p className="text-gray-700 mb-6">
            Protect your assets and data with advanced security systems. Monitor your premises in real-time, receive alerts for any unusual activities, and ensure the safety of your environment. Our cutting-edge technology helps you stay secure and responsive.
          </p>
          <button className="bg-[#439600] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Explore Solutions
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={rightImage} alt="Security" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 md:px-20 mb-8 py-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaLock className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon for Lock */}
            <h3 className="font-bold text-lg">Enhanced Data Protection</h3>
            <p className="text-gray-600 text-center">
              Safeguard your sensitive data with our advanced encryption and protection measures.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon for Shield */}
            <h3 className="font-bold text-lg">Proactive Threat Monitoring</h3>
            <p className="text-gray-600 text-center">
              Monitor potential threats in real-time and receive alerts for any suspicious activities.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaFingerprint className="text-4xl text-[#439600] mb-4" /> {/* Updated Icon for Fingerprint */}
            <h3 className="font-bold text-lg">Identity Verification</h3>
            <p className="text-gray-600 text-center">
              Ensure that only authorized individuals have access to your systems with secure identity verification.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaCogs className="text-4xl text-[#439600] mb-4" /> {/* New Icon for Settings */}
            <h3 className="font-bold text-lg">Automated Security Responses</h3>
            <p className="text-gray-600 text-center">
              Automate security protocols to respond quickly and effectively to potential breaches.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-20 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Features of Our Security System</h2>
        <p className="text-gray-700 mb-12">
          Discover the advanced features of our security solutions. Our system is designed to provide real-time monitoring, automatic threat response, and comprehensive data protection, ensuring the highest level of security for your premises and information.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://www.shutterstock.com/image-photo/lock-mark-cybersecurity-internet-protect-600nw-2493802703.jpg"
            alt="Real-Time Monitoring"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Real-Time Threat Monitoring</h3>
            <p className="text-gray-700">
              Track potential security breaches in real-time, ensuring that you can respond immediately to any threats. Our system provides continuous monitoring, with alerts sent directly to your team in case of suspicious activity, keeping your premises and data safe.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-2/3 text-left md:order-1 order-2">
            <h3 className="text-3xl font-bold mb-2">Automated Threat Response</h3>
            <p className="text-gray-700">
              Automatically activate predefined security measures when a potential threat is detected. From locking doors to disabling access points, our automated system ensures that you are always one step ahead in protecting your environment.
            </p>
          </div>
          <img
            src="https://cypfer.com/wp-content/uploads/2024/06/cypfer-blog-type-of-cyber-security.webp"
            alt="Automated Security"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:ml-10 order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://dxc.scene7.com/is/image/dxc/AdobeStock_649801194?$landscape_desktop$"
            alt="Identity Verification"
            className="md:w-2/5 rounded-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-3xl font-bold mb-2">Advanced Identity Verification</h3>
            <p className="text-gray-700">
              Ensure that only authorized personnel have access to your systems with biometric authentication, including facial recognition and fingerprint scanning. This layer of security prevents unauthorized access, protecting your sensitive data and assets.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Security;