import logo1 from '../../../assets/a.png';
import logo2 from '../../../assets/b.png';
import logo3 from '../../../assets/c.png';
import logo4 from '../../../assets/d.png';

const Card = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4 p-4 md:p-16 mt-24"> {/* Adjusted padding */}
      {/* Box 1 */}
      <div className="flex flex-col items-center justify-center w-full sm:w-80 md:w-80 h-96 p-4 border rounded-lg shadow-md max-w-xs"> {/* Responsive width */}
        <div className="flex items-center justify-center w-28 h-28 bg-lightgreen rounded-full">
          <img
            src={logo1}
            alt="Icon"
            className="bg-green-300 rounded-full w-24 h-24 object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-bold">Track Your Fleet</h2>
        <p className="text-center text-gray-700">
          Live tracking is available, every 60 seconds, 24 hours a day from any global location on any desktop or mobile device with our fleet tracker GPS solutions.
        </p>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col items-center justify-center w-full sm:w-80 md:w-80 h-96 p-4 border rounded-lg shadow-md max-w-xs">
        <div className="flex items-center justify-center w-28 h-28 bg-lightgreen rounded-full">
          <img
            src={logo2}
            alt="Icon"
            className="bg-green-300 rounded-full w-24 h-24 object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-bold">Access Reports Easily</h2>
        <p className="text-center text-gray-700">
          Fleetsmart provides a comprehensive report suite delivering information on a multitude of fleet management information.
        </p>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col items-center justify-center w-full sm:w-80 md:w-80 h-96 p-4 border rounded-lg shadow-md max-w-xs">
        <div className="flex items-center justify-center w-28 h-28 bg-lightgreen rounded-full">
          <img
            src={logo3}
            alt="Icon"
            className="bg-green-300 rounded-full w-24 h-24 object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-bold">Lower Costs</h2>
        <p className="text-center text-gray-700">
          Utilize your fleet more efficiently, route optimally, reduce unauthorized usage, reduce excess idling and save money.
        </p>
      </div>

      {/* Box 4 */}
      <div className="flex flex-col items-center justify-center w-full sm:w-80 md:w-80 h-96 p-4 border rounded-lg shadow-md max-w-xs">
        <div className="flex items-center justify-center w-28 h-28 bg-lightgreen rounded-full">
          <img
            src={logo4}
            alt="Icon"
            className="bg-green-300 rounded-full w-24 h-24 object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-bold">Increase Profits</h2>
        <p className="text-center text-gray-700">
          Produce accurate time sheets, eliminate false overtime claims, save 10-15% on annual fuel spend.
        </p>
      </div>
    </section>
  );
}

export default Card;
