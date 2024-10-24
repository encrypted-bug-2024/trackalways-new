import analyze from '../../assets/analyze.avif';
import { FaArrowRight } from 'react-icons/fa';

const Analyzse = () => {
  return(
    <>
    <section className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto mt-8 md:mt-48 bg-white p-5 rounded-lg  min-h-[70vh] gap-x-8">
  
  {/* Left Side: PNG Image */}
  <div className="flex-1 flex justify-center mt-4 md:mt-0 relative">
    <img
      src={analyze}  // Replace with your image path
      alt="New Fleet Management"
      className="max-w-[320px] mb-4 md:max-w-[200px] lg:max-w-[500px] h-auto"
    />
  </div>

  {/* Right Side: Text and Buttons */}
  <div className="flex-2 flex flex-col items-center md:items-start">
    {/* Heading */}
    <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl mb-8 text-center md:text-left line-clamp-3">
    Analyse your fleet's performance over time
    </h2>

    {/* Paragraph */}
    <p className="text-base md:text-lg mb-8 text-center md:text-left px-4 md:px-0">
    See important trends by team, department or across the entire fleet. Our customisable dashboards make it easy to review your progress towards KPIs or budgets, with up-to-the-minute fleet analytics when you need them most.
    </p>

    {/* Button */}
    <div className="flex justify-center md:justify-start mt-1">
      <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
        GET STARTED
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>

</section>
    </>
  )
}
export default Analyzse;