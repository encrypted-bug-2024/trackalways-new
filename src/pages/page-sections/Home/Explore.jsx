import box1 from '../../../assets/1.png';
import box2 from '../../../assets/2.png';
import box3 from '../../../assets/4.png';
import box4 from '../../../assets/6.png';
import box5 from '../../../assets/5.png';
import box6 from '../../../assets/3.png';
import { FaArrowRight } from 'react-icons/fa';

const Explore = () => {
  return (
    <>
      <section className="w-full mx-auto mt-16 p-8 bg-gray-100 text-center">
        {/* Centered Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-12"> {/* Adjusted font sizes */}
          The smart way to extract
        </h2>

        {/* Boxes Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-0 md:px-8">
          {/* Box 1 */}
          <div className="bg-[#439600] p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box1}
              alt="Box 1 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-white font-bold text-lg mb-2">Track Your Fleet</h3>
            <p className="text-white text-left">
              Identify risky driving and exonerate drivers with auto-uploaded HD video footage.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box2}
              alt="Box 2 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Remote Immobilisation</h3>
            <p className="text-gray-700 text-left">
              Increase vehicle security & improve stolen vehicle recovery rates with remote immobilisation via smartphone app.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box3}
              alt="Box 3 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Driver Privacy Switches</h3>
            <p className="text-gray-700 text-left">
              Comply with UK privacy laws allowing masking of tracked positional details for private usage.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box4}
              alt="Box 4 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Driver Identification Fobs</h3>
            <p className="text-gray-700 text-left">
              Identify individual drivers and monitor their driving style.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box5}
              alt="Box 5 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Road Speed Data</h3>
            <p className="text-gray-700 text-left">
              True speeding events through regularly updated 'road speed data.
            </p>
          </div>

          {/* Box 6 */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-start h-full w-full sm:w-full md:w-auto">
            <img
              src={box6}
              alt="Box 6 Image"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Public API for integration</h3>
            <p className="text-gray-700 text-left">
              Integrate our software into your business with API integrations.
            </p>
          </div>
        </div>

        {/* Explore Now Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#439600] text-white border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-white hover:text-[#439600] transition duration-300 flex items-center justify-center">
            EXPLORE MORE
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Explore;
