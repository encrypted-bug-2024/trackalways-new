import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-300 px-4 py-8 md:px-8 md:pt-10 lg:pt-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center items-start md:items-center flex-wrap">
        {/* Logo section */}
        <div className="mb-6 md:mb-14 md:w-1/4 order-first text-center md:text-left flex flex-col items-center">
          <img src={logo} alt="Track Always Logo" className="h-10 mb-4" />

          {/* Email Input only visible in lg screens below the logo */}
          <div className="hidden lg:flex flex-col items-center mt-4 mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="border-b border-gray-400 outline-none focus:border-black px-2 py-1"
              />
              <button className="bg-black text-white px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Social Media Icons centered below the input field */}
            <div className="flex space-x-4 mt-4">
  <a
    href="https://www.facebook.com/trackalways"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-gray-600 hover:text-black"
  >
    <FaFacebookF size={20} />
  </a>
  <a
    href="https://www.linkedin.com/company/trackalways/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Linkedin"
    className="text-gray-600 hover:text-black"
  >
    <FaLinkedin size={20} />
  </a>
  <a
    href="https://www.instagram.com/trackalwaysindia/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-600 hover:text-black"
  >
    <FaInstagram size={20} />
  </a>
</div>
          </div>
        </div>

        {/* Quick Links and Get in Touch sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full md:w-auto mb-6 md:mb-0 md:flex-grow">
          {/* Quick Links */}
          <div className="text-center md:text-start md:ml-16 md:mr-32 lg:mr-0 lg:text-left lg:ml-36">
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">Home</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-black">Career</a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-600 hover:text-black">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-black">Contact Us</a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-black">Book Demo</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="text-center md:text-start lg:text-left">
            <h3 className="text-gray-800 font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600">Head Office</p>
            <p className="text-gray-600">A-01, Yasoda Garden Bagnugaliya, Bhopal - 462043</p>
            <p className="text-gray-600">Corporate Office</p>
            <p className="text-gray-600">ITI, Govindpura, Bhopal - 462043</p>
            <p className="text-gray-600 mt-2">Care@trackalways.in</p>
            <p className="text-gray-600">+91 9131950173</p>
          </div>
        </div>

        {/* Social Media Icons, Email Input for md and below */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-10 mt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex lg:hidden">
              <input
                type="email"
                placeholder="Email address"
                className="border-b border-gray-400 outline-none focus:border-black px-4 py-1"
              />
              <button className="bg-black text-white px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 lg:hidden">
            <a
    href="https://www.facebook.com/trackalways"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-gray-600 hover:text-black"
  >
    <FaFacebookF size={20} />
  </a>
  <a
    href="https://www.linkedin.com/company/trackalways/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Linkedin"
    className="text-gray-600 hover:text-black"
  >
    <FaLinkedin size={20} />
  </a>
  <a
    href="https://www.instagram.com/trackalwaysindia/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-600 hover:text-black"
  >
    <FaInstagram size={20} />
  </a>
            </div>
          </div>
        </div>
      </div>

      {/* Line above the copyright */}
      <div className="mt-8 border-t border-gray-300"></div>

      <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 py-4 text-gray-500">
      
      {/* Left Links Section */}
      <div className="grid grid-cols-1 gap-2 text-center md:flex md:space-x-0 md:text-left mb-4 md:mb-4 lg:mb-0">
        <HashLink to="#" className="hover:text-green-600 md:after:content-['|'] md:after:mx-2 last:after:content-['']">
          Privacy Policy
        </HashLink>
        <HashLink to="#" className="hover:text-green-600 md:after:content-['|'] md:after:mx-2 last:after:content-['']">
          Terms & Conditions
        </HashLink>
        <HashLink to="#" className="hover:text-green-600 md:after:content-['|'] md:after:mx-2 last:after:content-['']">
          RRC Policies
        </HashLink>
        <HashLink to="#" className="hover:text-green-600">
          Shipping Policies
        </HashLink>
      </div>

      {/* Right Copyright Section */}
      <div className="text-center md:text-right text-sm font-semibold">
        &copy; {new Date().getFullYear()}{" "}
        <HashLink to="#" className="hover:text-green-600">
          Track Always
        </HashLink>, Inc. All rights reserved.
      </div>
    </div>
    </footer>
  );
};

export default Footer;
