import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo2.png";
import store from "../../assets/store.jpg";
import { FaAngleDown, FaAngleRight, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

// Reusable Dropdown Item Component
const DropdownItem = ({ title, description, to, onClick, isActive }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`flex flex-col items-center p-2 border-b last:border-b-0 ${isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"}`}
    >
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <p className="text-center">{description}</p>
    </NavLink>
  );
};

const Navbar = () => {
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();


  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      closeDropdown();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDiscover = () => {
    setDiscoverOpen((prev) => !prev);
    setIndustriesOpen(false); // Close Industries if Discover is opened
  };

  const toggleIndustries = () => {
    setIndustriesOpen((prev) => !prev);
    setDiscoverOpen(false); // Close Discover if Industries is opened
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeDropdowns = () => {
    setDiscoverOpen(false);
    setIndustriesOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdowns(); // Close dropdowns when the menu is closed
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      closeDropdowns(); // Close dropdowns on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the current page is the homepage
  const isHomePage = location.pathname === "/";

  // Check if any discover links are active
  const isDiscoverActive = [
    "/about-us",
    "/contact-us",
    "/careers",
    "/blog",
    "/media-coverage",
  ].includes(location.pathname);

  // Check if any industries links are active
  const isIndustriesActive = [
    "/industry",
    "/energy-industry",
    "/passanger-transport",
    "/health-care",
    "/agriculture",
    "/construction",
    "/trucking",
    "/security"
  ].includes(location.pathname);

  return (
    <div className={`bg-transparent flex justify-center fixed top-0 w-full z-50 `}>
      <div
        className={`bg-white flex justify-between items-center w-full px-6 py-6 shadow-lg transition-all duration-300 ${isScrolled || !isHomePage ? 'w-full top-1 rounded-none' : 'max-w-7xl rounded-full'}`}
      >
        <div className="flex items-center">
          <NavLink to="/" onClick={() => { closeDropdowns(); window.scrollTo(0, 0); }}>
            <img src={logo} alt="Logo" className="h-8" />
          </NavLink>
        </div>


        <div className="hidden md:flex items-center justify-center flex-grow">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  closeDropdowns();
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={() => {
                  closeDropdowns();
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"
                }
              >
                Products
              </NavLink>
            </li>


            {/* Discover Dropdown */}
            <li className="relative">
              <button
                onMouseEnter={toggleDiscover} // Use onMouseEnter to open the dropdown// Use onMouseLeave to close the dropdown
                className={`flex items-center ${discoverOpen || isDiscoverActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                Discover <FaAngleRight className="ml-1" />
              </button>
              {discoverOpen && (
                <div
                  className="absolute left-1/2 transform -translate-x-[55%] mt-4 w-[80vw] bg-white rounded-lg border border-gray-200 shadow-lg"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <DropdownItem
                      title="About Us"
                      description="We are the software people! Get to know us, our company philosophy, and milestones."
                      to="/about-us"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/about-us'}
                    />
                    <DropdownItem
                      title="Contact Us"
                      description="Get in touch with us and let us know how we can help you."
                      to="/contact-us"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/contact-us'}
                    />
                    <DropdownItem
                      title="Careers"
                      description="We'd love for you to join the family. Browse for jobs and submit your resume here!"
                      to="/careers"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/careers'}
                    />
                    <DropdownItem
                      title="Blog"
                      description="Discover more about our company and industry in our blog."
                      to="/blog"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/blog'}
                    />
                    <DropdownItem
                      title="Media Coverage"
                      description="See our media coverage and news updates about us."
                      to="/media-coverage"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/media-coverage'}
                    />
                  </div>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li className="relative">
              <button
                onMouseEnter={toggleIndustries}
                className={`flex items-center ${industriesOpen || isIndustriesActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                Industries <FaAngleRight className="ml-1" />
              </button>
              {industriesOpen && (
                <div
                  className="absolute left-1/2 transform -translate-x-[65%] mt-4 w-[80vw] bg-white rounded-lg border border-gray-200 shadow-lg"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <DropdownItem
                      title="Sales and Services"
                      description="Electrical & Utilities Maintenance, GPS Tracking Device Service & Maintenance, Health Care & Medical Sales"
                      to="/industry"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/industry'}
                    />
                    <DropdownItem
                      title="Energy"
                      description="Electric Utility Companies, Gas And Water Utility Providers, Renewable Energy Installation & Maintenance"
                      to="/energy-industry"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/energy-industry'}
                    />
                    <DropdownItem
                      title="Passenger Transport"
                      description="Bus Services, School Transportation, Airport Shuttle Services, Tour & Charter Bus Operators, Ferries"
                      to="/passanger-transport"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/passanger-transport'}
                    />
                    <DropdownItem
                      title="Health Care"
                      description="Medical Equipment Transport, Pharmaceutical Distribution, Blood & Organ Transport Services"
                      to="/health-care"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/health-care'}
                    />
                    <DropdownItem
                      title="Agriculture"
                      description="Farming Operations Fleets, Precision Agriculture For Crop Management, Livestock Transportation"
                      to="/agriculture"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/agriculture'}
                    />
                    <DropdownItem
                      title="Construction"
                      description="Construction Companies, Excavation & Earthmoving, Equipment Rental Businesses"
                      to="/construction"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/construction'}
                    />
                    <DropdownItem
                      title="Trucking"
                      description="Freight Transportation & Logistics, Long-Haul Trucking, Local Delivery Services, Refrigerated Trucking"
                      to="/trucking"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/trucking'}
                    />
                    <DropdownItem
                      title="Security"
                      description="Cash Carry Vans, Secure Cargo Transport, Government & Military Transport"
                      to="/security"
                      onClick={() => { closeDropdowns(); closeMenu(); window.scrollTo(0, 0); }}
                      isActive={location.pathname === '/security'}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
            <button onClick={closeMenu} className="text-gray-600">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="p-4 space-y-4">
            <li>
              <NavLink to="/"  onClick={() => { closeMenu(); window.scrollTo(0, 0); }}  className="text-gray-800 hover:text-green-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products"  onClick={() => { closeMenu(); window.scrollTo(0, 0); }} className="text-gray-800 hover:text-green-600">
                Products
              </NavLink>
            </li>

            {/* Discover Dropdown */}
<li>
  <button
    onClick={toggleDiscover}
    className={`flex items-center justify-between w-full text-gray-800 ${discoverOpen ? "text-green-600" : "hover:text-green-600"}`}
  >
    Discover <FaAngleDown className={`ml-1 transform ${discoverOpen ? "rotate-180" : ""}`} />
  </button>
  {discoverOpen && (
    <div className="mt-2 space-y-2 pl-4 border-l-2 border-green-600">
      <DropdownItem
        title="About Us"
        to="/about-us"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/about-us'}
      />
      <DropdownItem
        title="Contact Us"
        to="/contact-us"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/contact-us'}
      />
      <DropdownItem
        title="Careers"
        to="/careers"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/careers'}
      />
      <DropdownItem
        title="Blog"
        to="/blog"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/blog'}
      />
      <DropdownItem
        title="Media Coverage"
        to="/media-coverage"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/media-coverage'}
      />
    </div>
  )}
</li>

{/* Industries Dropdown */}
<li>
  <button
    onClick={toggleIndustries}
    className={`flex items-center justify-between w-full text-gray-800 ${industriesOpen ? "text-green-600" : "hover:text-green-600"}`}
  >
    Industries <FaAngleDown className={`ml-1 transform ${industriesOpen ? "rotate-180" : ""}`} />
  </button>
  {industriesOpen && (
    <div className="mt-2 space-y-2 pl-4 border-l-2 border-green-600">
      <DropdownItem
        title="Sales and Services"
        to="/industry"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/industry'}
      />
      <DropdownItem
        title="Energy"
        to="/energy-industry"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/energy-industry'}
      />
      <DropdownItem
        title="Passenger Transport"
        to="/passanger-transport"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/passanger-transport'}
      />
      <DropdownItem
        title="Health Care"
        to="/health-care"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/health-care'}
      />
      <DropdownItem
        title="Agriculture"
        to="/agriculture"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/agriculture'}
      />
      <DropdownItem
        title="Construction"
        to="/construction"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/construction'}
      />
      <DropdownItem
        title="Trucking"
        to="/trucking"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/trucking'}
      />
      <DropdownItem
        title="Security"
        to="/security"
        onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
        isActive={location.pathname === '/security'}
      />
    </div>
  )}
</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
