import banner from '../assets/contact-banner.png';

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

{/* Google Map Section */}
<div className="mt-20 mb-10 flex justify-center px-4 md:px-8 lg:px-16">
  <div className="w-full max-w-8xl relative">
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.123896676444!2d77.4183657!3d23.2598894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426d6b3a23d7%3A0x7d7b4e2c8d8ec0d8!2sYasoda%20Garden%20Bagnugaliya%2C%20Bhopal%2C%20Madhya%20Pradesh%20462043!5e0!3m2!1sen!2sin!4v1698600606315"
      width="100%"
      height="450"
      className="rounded-lg shadow-lg mb-8"
      allowFullScreen=""
      loading="lazy"
      title="TrackAlways- Yasoda Garden Bagnugaliya, Bhopal"
    ></iframe>

    {/* Contact Card */}
    <div className="absolute bottom-12 right-14 bg-white rounded-lg shadow-lg p-4 w-56 text-center">
      <h5 className="text-xl font-semibold">TrackAlways</h5>
      <p>A-01, Yasoda Garden Bagnugaliya,</p>
      <p>Bhopal - 462043</p>
    </div>
  </div>
</div>




    </>
  );
};

export default Contact;
