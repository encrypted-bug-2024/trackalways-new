import banner from '../assets/contact-banner.png';
import mapImage from '../assets/map.png';

const Contact = () => {
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
            <h2 className="text-3xl mt-8 md:text-8xl">Contact Us</h2>
            <p className="mt-4 text-lg">
              Home <span className="text-white"> &gt;</span> <span className="opacity-75">Contact us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black mt-20 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side - Headings and Paragraph */}
          <div className="text-gray-300 md:w-1/2">
            <h3 className="hidden md:block text-9xl mb-4">Contact Us</h3>
            <h4 className="text-white text-4xl md:text-6xl mb-4">Talk to the team, we are here to help!</h4>
            <p className="text-white text-sm md:text-base mb-4">
              If you wish to contact us, fill in the form and we will get back
              to you ASAP!
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2">
            <form className="bg-black p-6 rounded shadow-lg">
              {/* Grid configuration updated for mobile stacking */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="text-white block mb-1 font-medium text-sm md:text-base">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                    placeholder="Peter"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-white block mb-1 font-medium text-sm md:text-base">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white block mb-1 font-medium text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-white block mb-1 font-medium text-sm md:text-base">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                    placeholder="+1 012 3456 789"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="subject" className="text-white block mb-1 font-medium text-sm md:text-base">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="message" className="text-white block mb-1 font-medium text-sm md:text-base">Message</label>
                  <textarea
                    id="message"
                    className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600 resize-none"
                    rows="2"  // Decreased the number of rows
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-[#439600] text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Image Section */}
      <div className="mt-20 mb-20 flex justify-center">
        <img
          src={mapImage}
          alt="Map"
          className="w-full h-auto max-w-[1200px] rounded-lg"
        />
      </div>
    </>
  );
};

export default Contact;
