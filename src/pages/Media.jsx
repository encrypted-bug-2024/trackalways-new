import banner from '../assets/blog.png';
import { Helmet } from 'react-helmet-async';
import largeNewsImage from '../assets/m-banner.png';
import newsImage1 from '../assets/m1.png';
import newsImage2 from '../assets/m2.png';
import newsImage3 from '../assets/m3.png';
import newsImage4 from '../assets/m4.png';

const Media = () => {
  return (
    <>
      <Helmet>
        <title>Media - TrackAlways</title>
        <meta name="description" content="Explore TrackAlways' media coverage, press releases, and news articles. Stay informed about our latest innovations, achievements, and company milestones." />
      </Helmet>

      <div className="relative">
        <nav className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">My Website</h1>
        </nav>

        {/* Banner Image */}
        <div className="w-full h-[40vh] md:h-[50vh] lg:h-[300px]">
          <img src={banner} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-8xl">Media Coverage</h2>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-0 mt-14 max-w-8xl mx-auto space-y-8">

        {/* Bottom Section: Full-Width Black Background */}
        <div className="bg-black py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Left column: m1 image */}
              <div className="col-span-1">
                <img src={newsImage1} alt="News Coverage 1" className="w-full h-auto rounded-lg shadow-md" />
              </div>

              {/* Right column: m2 and m3 on top, m4 on bottom */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <img src={largeNewsImage} alt="Main News Coverage" className="col-span-2 w-full h-auto rounded-lg shadow-md" />
                <img src={newsImage4} alt="News Coverage 4" className="col-span-2 w-full h-auto md:h-[550px] lg:h-[825px] rounded-lg shadow-md" />
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-4">
                {/* First Image (Side by Side) */}
                <img src={newsImage2} alt="Main News Coverage" className="w-full h-auto rounded-lg shadow-md" />

                {/* Second Image (Spans Full Width of the Row) */}
                <img src={newsImage3} alt="News Coverage 4" className=" w-full object-contain rounded-lg shadow-md" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Media;
