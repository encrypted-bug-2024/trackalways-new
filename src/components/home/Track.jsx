import { FaArrowRight } from 'react-icons/fa';
import newImage from '../../assets/product.webp'; 
import search from '../../assets/search.svg';

const Track = () => {
    return (
       <>
        <section className="flex flex-col sm:mt-2 sm:mb-2 md:flex-row items-center justify-between w-11/12 mx-auto mt-16 -mb-20 bg-white p-5 rounded-lg min-h-[80vh]">
  <div className="flex-2 flex flex-col items-center md:items-start">
    {/* Heading */}
    <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-12 text-center md:text-left ">
      Increase fleet visibility with our vehicle tracking app.
    </h2>

    {/* PNG Image for Mobile */}
    <div className="flex justify-center md:hidden mb-4">
      <img
        src={newImage}
        alt="New Fleet Management"
        className="max-w-[200px] h-auto"
      />
    </div>

    {/* Paragraph */}
    <p className="text-base md:text-lg mb-8 text-center md:text-left px-4 md:px-0">
      See in near real-time a 360-degree view of your fleet's daily operations, 
      helping you reduce costs, increase productivity, and stay on top of vehicle 
      maintenance—allowing you to focus on running your business.
    </p>

    {/* Button */}
    <div className="flex justify-center md:justify-start mt-1">
      <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
        BOOK A DEMO
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>

  <div className="flex-1 flex justify-center mt-4 md:mt-0 relative">
    {/* PNG Image for Desktop */}
    <img
      src={newImage}
      alt="New Fleet Management"
      className="max-w-[150px] md:max-w-[300px] lg:max-w-[600px] h-auto hidden md:block"
    />
    
    {/* SVG Image positioned in the corner (hidden on mobile) */}
    <img
      src={search} 
      alt="Logo"
      className="absolute bottom-4  right-12 md:right-33 max-w-[50px] h-auto hidden md:block" 
    />
  </div>
</section>

       </>
    )
}
export default Track;