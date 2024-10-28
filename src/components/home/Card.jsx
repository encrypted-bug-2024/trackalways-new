import logo1 from '../../assets/a.png';
import logo2 from '../../assets/b.png';
import logo3 from '../../assets/c.png';
import logo4 from '../../assets/d.png';

const Card = () => {
  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mt-16 mb-6 md:mt-24 md:mb-10">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-start h-[28rem] -mb-28 p-4 rounded-lg">
        <div className="flex items-center justify-center w-28 h-28 bg-green-200 rounded-full mb-4">
          <img src={logo1} alt="Icon" className="w-2/4 h-2/4 object-contain" />
        </div>
        <div className="text-center">
          <h2 className="mt-2 text-lg font-bold">Track Your Fleet</h2>
          <p className="text-gray-700">
            Live tracking is available, every 60 seconds, 24 hours a day from any global location on any desktop or mobile device with our fleet tracker GPS solutions.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center justify-start h-[28rem] -mb-28 p-4 rounded-lg">
        <div className="flex items-center justify-center w-28 h-28 bg-green-200 rounded-full mb-4">
          <img src={logo2} alt="Icon" className="w-2/4 h-2/4 object-contain" />
        </div>
        <div className="text-center">
          <h2 className="mt-2 text-lg font-bold">Access Reports Easily</h2>
          <p className="text-gray-700">
            Fleetsmart provides a comprehensive report suite delivering information on a multitude of fleet management information.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-start h-[28rem] -mb-28 p-4 rounded-lg">
        <div className="flex items-center justify-center w-28 h-28 bg-green-200 rounded-full mb-4">
          <img src={logo3} alt="Icon" className="w-2/4 h-2/4 object-contain" />
        </div>
        <div className="text-center">
          <h2 className="mt-2 text-lg font-bold">Lower Costs</h2>
          <p className="text-gray-700">
            Utilize your fleet more efficiently, route optimally, reduce unauthorized usage, reduce excess idling and save money.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center justify-start h-[28rem] -mb-28 p-4 rounded-lg">
        <div className="flex items-center justify-center w-28 h-28 bg-green-200 rounded-full mb-4">
          <img src={logo4} alt="Icon" className="w-2/4 h-2/4 object-contain" />
        </div>
        <div className="text-center">
          <h2 className="mt-2 text-lg font-bold">Increase Profits</h2>
          <p className="text-gray-700">
            Produce accurate time sheets, eliminate false overtime claims, save 10-15% on annual fuel spend.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
