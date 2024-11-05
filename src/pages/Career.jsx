import { useState } from 'react';
import banner from '../assets/career.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Career = () => {
  const [activeForm, setActiveForm] = useState('internship');
//   name: Deepak Kumar
// mobile: 9310142074
// email: leo.deepak25@gmail.com
// college_name: Dpg
// course: Bca
// specialization: CS
// batch: 2024
// resume: (binary)
// message: Hi

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college_name: '',
    course: '',
    specialization: '',
    batch: '',
    job_profile: '',
    resume: null,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update handleChange to show file name if selected
const handleChange = (e) => {
  const { name, value, type, files } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'file' ? files[0] : value,
  }));

  if (type === 'file' && files[0]) {
    alert(`Selected file: ${files[0].name}`);
  }
};

// Conditionally set the API endpoint based on activeForm
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  const formPayload = new FormData();
  if(activeForm === 'internship')
  {
      for (const key in formData) {
      if(key=="job_profile" &&  activeForm === 'internship')
      continue
      formPayload.append(key, formData[key]);
    }
  }
  else{
    const formData2 = {
      name: formData["name"],
      mobile: formData["mobile"],
      email: formData["email"],
      job_profile: formData["job_profile"], // This can be either "Developer" or "job"
      resume: formData["resume"],
      message: formData["message"]
  };
      for (const key in formData2) {
        formPayload.append(key, formData2[key]);
    }
  }

  try {
    const endpoint = activeForm === 'internship' ? 
      'http://localhost:8080/v1/apis/apply/internship' : 
      'http://localhost:8080/v1/apis/apply/job';

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formPayload,
    });

    if (!response.ok) throw new Error('Failed to submit the form');

    setFormData({
      name: '',
      email: '',
      mobile: '',
      college_name: '',
      course: '',
      specialization: '',
      batch: '',
      job_profile: '',
      resume: null,
      message: '',
    });
    alert('Form submitted successfully!');
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};


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

        {/* Form for Internship */}
        {activeForm === 'internship' && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Full name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Email address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Contact No*</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter contact number"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">College Name*</label>
                <input
                  type="text"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter college name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Course*</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter course"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Specialization*</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter specialization"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Year of internship*</label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter year of internship"
                  required
                />
              </div>

              {/* Upload Resume */}
              <div className="flex flex-col justify-end">
                <label className="text-lg font-semibold mb-1 text-gray-600">Upload Resume*</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="hidden"
                  id="uploadResume"
                  required
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-4 rounded w-full h-32 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center" style={{ marginTop: '90px', marginBottom: '60px' }}>
              <button type="submit" className="bg-white text-[#439600] border border-[#439600] font-semibold px-16 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 ease-in-out">
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        )}

        {/* Form for Job */}
        {activeForm === 'job' && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Full name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Email address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Contact No*</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter contact number"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1 text-gray-600">Job Profile*</label>
                <input
                  type="text"
                  name="job_profile"
                  value={formData.job_profile}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded w-full h-12 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter job profile"
                  required
                />
              </div>

              {/* Upload Resume for Job */}
              <div className="flex flex-col justify-end">
  <label className="text-lg font-semibold mb-1 text-gray-600">Upload Resume*</label>
  <input
    type="file"
    name="resume"
    onChange={handleChange}
    className="hidden"
    id="uploadResume"
    required
  />
  <label
    htmlFor="uploadResume"
    className="bg-black text-white py-4 px-6 rounded cursor-pointer w-40 hover:bg-opacity-90"
  >
    Browse...
  </label>
  {formData.resume && (
    <p className="text-gray-600 mt-2">{formData.resume.name}</p>
  )}
</div>
</div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-1 text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-4 rounded w-full h-32 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center" style={{ marginTop: '90px', marginBottom: '60px' }}>
              <button type="submit" className="bg-white text-[#439600] border border-[#439600] font-semibold px-16 py-3 rounded-tr-3xl rounded-bl-3xl shadow-md hover:bg-[#439600] hover:text-white transition duration-300 ease-in-out">
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        )}
      </div>
    </>
  );
};

export default Career;
