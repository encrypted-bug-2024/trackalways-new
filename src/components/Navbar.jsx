import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import store from "../assets/store.jpg";
import { FaAngleDown, FaAngleRight, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

// Reusable Dropdown Item Component
const DropdownItem = ({ title, description, to, onClick }) => {
  return (
    <NavLink to={to} onClick={onClick} className="flex flex-col items-center p-4 border-b last:border-b-0">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-center">{description}</p>
    </NavLink>
  );
};

const Navbar = () => {
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleDiscover = () => setDiscoverOpen(!discoverOpen);
  const toggleIndustries = () => setIndustriesOpen(!industriesOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeDropdowns = () => {
    setDiscoverOpen(false);
    setIndustriesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the current page is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <div className={`bg-transparent flex justify-center fixed top-0 w-full z-50`}>
      <div
        className={`bg-white flex justify-between items-center w-full px-6 py-6 shadow-lg transition-all duration-300 ${
          isScrolled || !isHomePage ? 'w-full top-1 rounded-none' : 'max-w-7xl rounded-full'
        }`}
      >
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center justify-center flex-grow">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"
              }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) =>
                isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"
              }>
                Products
              </NavLink>
            </li>

            {/* Discover Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDiscover}
                className={`flex items-center ${discoverOpen ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                Discover <FaAngleRight className="ml-1" />
              </button>
              {discoverOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-[55%] mt-4 w-[80vw] bg-white rounded-lg border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.1),_0px_-4px_8px_rgba(0,0,0,0.1),_4px_0px_8px_rgba(0,0,0,0.1),_-4px_0px_8px_rgba(0,0,0,0.1)]"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <DropdownItem 
                      title="About Us" 
                      description="We are the software people! Get to know us, our company philosophy, and milestones." 
                      to="/about-us" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Contact Us" 
                      description="Get in touch with us and let us know how we can help you." 
                      to="/contact-us" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Careers" 
                      description="We'd love for you to join the family. Browse for jobs and submit your resume here!" 
                      to="/careers" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Blog" 
                      description="Discover more about our company and industry in our blog." 
                      to="/blog" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Media Coverage" 
                      description="See our media coverage and news updates about us." 
                      to="/media-coverage" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                  </div>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li className="relative">
              <button
                onClick={toggleIndustries}
                className={`flex items-center ${industriesOpen ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                Industries <FaAngleRight className="ml-1" />
              </button>
              {industriesOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-[65%] mt-4 w-[80vw] bg-white rounded-lg border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.1),_0px_-4px_8px_rgba(0,0,0,0.1),_4px_0px_8px_rgba(0,0,0,0.1),_-4px_0px_8px_rgba(0,0,0,0.1)]"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <DropdownItem 
                      title="Industry 1" 
                      description="Overview of Industry 1." 
                      to="/industry1" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Industry 2" 
                      description="Overview of Industry 2." 
                      to="/industry2" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Industry 3" 
                      description="Overview of Industry 3." 
                      to="/industry3" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="Industry 4" 
                      description="Overview of Industry 4." 
                      to="/industry4" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                    <DropdownItem 
                      title="More" 
                      description="Explore more industries." 
                      to="/more-industries" 
                      onClick={closeDropdowns} // Close dropdown on click
                    />
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-gray-600">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div>
          <button className="hidden md:flex items-center bg-white px-4 py-2 rounded-full">
            <img src={store} className="h-6" alt="B2B Icon" />
            <span className="ml-2">B2B</span>
            <FaArrowRight className="ml-2 text-gray-600" />
          </button>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleMenu} className="text-gray-600">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2">
          <li><NavLink to="/" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Home</NavLink></li>
          <li><NavLink to="/products" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Products</NavLink></li>
          <li>
            <button onClick={toggleDiscover} className="flex justify-between w-full text-left text-gray-600 hover:text-green-600">
              Discover <FaAngleDown />
            </button>
            {discoverOpen && (
              <ul className="pl-4">
                <li><NavLink to="/about-us" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">About Us</NavLink></li>
                <li><NavLink to="/contact-us" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Contact Us</NavLink></li>
                <li><NavLink to="/careers" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Careers</NavLink></li>
                <li><NavLink to="/blog" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Blog</NavLink></li>
                <li><NavLink to="/media-coverage" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Media Coverage</NavLink></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={toggleIndustries} className="flex justify-between w-full text-left text-gray-600 hover:text-green-600">
              Industries <FaAngleDown />
            </button>
            {industriesOpen && (
              <ul className="pl-4">
                <li><NavLink to="/industry1" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Industry 1</NavLink></li>
                <li><NavLink to="/industry2" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Industry 2</NavLink></li>
                <li><NavLink to="/industry3" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Industry 3</NavLink></li>
                <li><NavLink to="/industry4" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">Industry 4</NavLink></li>
                <li><NavLink to="/more-industries" onClick={toggleMenu} className="block text-gray-600 hover:text-green-600">More</NavLink></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
