import track from '../../../assets/track.svg'
import { FaArrowRight } from 'react-icons/fa';

const Travel = () => {
   return(
    <>
    <section className="flex flex-col md:flex-row items-center justify-between w-11/12 md:-mb-48 sm:-mt-10 mx-auto mt-8 bg-white p-5 rounded-lg min-h-[80 vh] gap-x-8"> 
  <div className="flex-2 flex flex-col items-center md:items-start">
    {/* Heading */}
    <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-8 text-center md:text-left line-clamp-3">
      the most intuitive Fleet & Asset tracking system on the market.
    </h2>

    {/* PNG Image for Mobile */}
    <div className="flex justify-center md:hidden mb-4">
      <img
        src={track}
        alt="New Fleet Management"
        className="max-w-[200px] h-auto"
      />
    </div>

    {/* Paragraph */}
    <p className="text-base md:text-lg mb-8 text-center md:text-left px-4 md:px-0">
      Accessible across multiple platforms including; Mac, PC, Tablet and Mobile - any time of the day, from anywhere in the world. Vehicle tracking has never been easier. The most flexible customer-focused approach with multiple hardware options for all applications. Whatever the vehicle you are looking to track, from lorries to van tracking, let Fleetsmart take care of it all.
    </p>

    {/* Button */}
    <div className="flex justify-center md:justify-start mt-1">
      <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
        GET STARTED
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>

  <div className="flex-1 flex justify-center mt-4 md:mt-0 relative">
    {/* PNG Image for Desktop */}
    <img
      src={track}
      alt="New Fleet Management"
      className="max-w-[150px] md:max-w-[300px] lg:max-w-[600px] h-auto hidden md:block"
    />
  </div>
</section>
    </>
   )
}
export default Travel;