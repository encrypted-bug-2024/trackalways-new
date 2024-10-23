import banner from '../assets/about.png';
import image1 from '../assets/s1.png'; 
import image2 from '../assets/s2.png'; 
import image3 from '../assets/s3.png'; 

const About = () => {
  return (
    <>
      <div className="relative">
        <nav className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">My Website</h1>
        </nav>

        {/* Banner Image */}
        <div className="w-full h-[40vh] md:h-[50vh] lg:h-[550px]">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10">
            <h2 className="text-3xl mt-8 md:text-8xl">About Us</h2>
            <p className="mt-4 text-lg">
              Home <span className="text-white"> &gt;</span> <span className="opacity-75">About</span>
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white mt-0 md:mt-20 p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side - About Us Heading and Paragraph */}
          <div className="md:w-1/2 md:pr-4 text-center md:text-left">
            <h3 className="text-5xl mt-28 mb-10">About Us</h3>
            <p className="text-gray-700 text-lg mb-4">
              Welcome to Trackalways, your trusted partner in telematics and GPS solutions. Established in 2018, Trackalways has been at the forefront of providing innovative and reliable tracking solutions designed to empower businesses across various industries. Our commitment to excellence, customer-centric approach, and cutting-edge technology set us apart in the dynamic world of telematics.
            </p>
          </div>

          {/* Right Side - Responsive Images */}
          <div className="md:w-1/2 flex flex-wrap justify-between">
            {/* Top Row - Two Images in the Same Row */}
            <div className="flex w-full gap-4 mb-4">
              <div className="w-1/2">
                <img src={image1} alt="Description 1" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="w-1/2">
                <img src={image2} alt="Description 2" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Bottom Row - One Image */}
            <div className="w-full">
              <img src={image3} alt="Description 3" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

     {/* Why Choose Us Section */}
   {/* Why Choose Us Section */}
<div className="bg-gray-200 mt-10 py-20 min-h-[80vh] px-16">
  <h2 className="text-4xl text-center mb-10">Why Choose Us?</h2>

  <div className="flex flex-col md:flex-row justify-center gap-8">
    {/* Card 1 */}
    <div className="bg-white p-2 md:p-16 rounded-lg shadow-lg w-full h-80 md:w-1/3 text-center">
      <h3 className="text-2xl mb-4">Innovative Solutions</h3>
      <p className="text-gray-700 px-5">
        We stay ahead of the curve by embracing the latest technological advancements, ensuring our solutions are at the forefront of industry standards.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-2 md:p-16 rounded-lg shadow-lg w-full md:w-1/3 text-center">
      <h3 className="text-2xl mb-4">Reliable Support</h3>
      <p className="text-gray-700 px-5">
        With a history dating back to 2018, Trackalways has a proven track record of delivering reliable and effective telematics solutions.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-2 md:p-16 rounded-lg shadow-lg w-full md:w-1/3 text-center">
      <h3 className="text-2xl mb-4">Affordable Pricing</h3>
      <p className="text-gray-700 px-5">
        Explore success stories from businesses that have benefited from Trackalways solutions, showcasing the tangible impact we make on our clients' operations.
      </p>
    </div>
  </div>
</div>



    </>
  );
};

export default About;
