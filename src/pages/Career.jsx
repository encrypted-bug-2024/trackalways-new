import { useState } from 'react';
import banner from '../assets/career.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Career = () => {
  const [activeForm, setActiveForm] = useState('internship');

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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-8xl">Careers</h2>
            <p className="mt-4 text-lg">
              Home <span className="text-white"> &gt;</span> <span className="opacity-75">Careers</span>
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 mx-4 md:mx-8 lg:mx-20">
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-44 mt-8 mb-6">
          <button
            className={`${activeForm === 'internship' ? 'bg-[#BEF269]' : 'bg-[#969696] text-white'
              } w-80 h-16 px-10 rounded hover:bg-[#BEF269] text-center text-xl`}
            onClick={() => setActiveForm('internship')}
          >
            Apply for Internship
          </button>
          <button
            className={`${activeForm === 'job' ? 'bg-[#BEF269]' : 'bg-[#969696] text-white'
              } w-80 h-16 px-10 rounded hover:bg-[#BEF269] text-center text-xl`}
            onClick={() => setActiveForm('job')}
          >
            Apply for Job
          </button>
        </div>

        {/* Internship Form */}
        {activeForm === 'internship' && (
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Full name*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter full name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Email address*</label>
                <input
                  type="email"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Contact No*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter contact number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">College Name*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter college name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Course*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter course"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Specialization*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter specialization"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Year of internship*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter year of internship"
                />
              </div>

              {/* Upload Resume */}
              <div className="flex flex-col justify-end">
                <label className="text-lg font-semibold mb-1 text-gray-600">Upload Resume*</label>
                <input
                  type="file"
                  className="hidden"
                  id="uploadResume"
                />
                <label
                  htmlFor="uploadResume"
                  className="bg-black text-white py-4 px-6 rounded cursor-pointer w-40 hover:bg-opacity-90"
                >
                  Browse...
                </label>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-1 text-gray-600">Message</label>
              <textarea
                className="border border-gray-300 p-4 rounded w-full h-32 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center" style={{ marginTop: '90px', marginBottom: '60px' }}>
              <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
                SUBMIT
                <FaArrowRight className="ml-2" />
              </button>
            </div>


          </form>
        )}

        {/* Job Form */}
        {activeForm === 'job' && (
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Full name*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter full name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Email address*</label>
                <input
                  type="email"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Contact No*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter contact number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Job profile*</label>
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter job profile"
                />
              </div>
            </div>

            {/* Upload Resume */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-1 text-gray-600">Upload Resume*</label>
              <input
                type="file"
                className="hidden"
                id="uploadResumeJob"
              />
              <label
                htmlFor="uploadResumeJob"
                className="bg-black text-white py-4 px-6 rounded cursor-pointer w-40 hover:bg-opacity-90"
              >
                Browse...
              </label>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-1 text-gray-600">Message</label>
              <textarea
                className="border border-gray-300 p-4 rounded w-full h-32 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <div className="flex justify-center" style={{ marginTop: '90px', marginBottom: '60px' }}>
                <button className="bg-white text-[#439600] border border-[#439600] font-semibold px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 flex items-center justify-center">
                  SUBMIT
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Career;
