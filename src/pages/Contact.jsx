  import React, { useState } from 'react';
  import banner from '../assets/contact-banner.png';

  const Contact = () => {
    // State variables to store form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
      const errors = {};
      if (!firstName.trim()) errors.firstName = 'First name is required';
      if (!lastName.trim()) errors.lastName = 'Last name is required';
      if (!email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
      if (!phone.trim()) errors.phone = 'Phone number is required in 10 digit';
      if (!subject.trim()) errors.subject = 'Subject is required';
      if (!message.trim()) errors.message = 'Message is required'; 
      setErrors(errors);
      return Object.keys(errors).length === 0;
  };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                name: `${firstName} ${lastName}`,
                email,
                mobile: phone,
                subject,
                message
            };
            setLoading(true);
            try {
                const response = await fetch('http://localhost:8080/v1/apis/reach/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    resetForm();
                    setErrors({});
                    alert("Message sent successfully!");
                } else {
                    alert("Failed to send message. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>

            {/* Contact Section */}
            <div className="bg-black mt-20 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side - Headings and Paragraph */}
          <div className="text-gray-300 md:w-1/2">
            <h3 className="hidden md:hidden lg:block text-9xl mb-4">Contact Us</h3>
            <h4 className="text-white text-4xl md:text-6xl mb-4">Talk to the team, we are here to help!</h4>
            <p className="text-white text-sm md:text-base mb-4">
              If you wish to contact us, fill in the form and we will get back
              to you ASAP!
            </p>
          </div>
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-black p-6 rounded shadow-lg">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="text-white block mb-1 font-medium text-sm md:text-base">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                                        placeholder="Peter"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="text-white block mb-1 font-medium text-sm md:text-base">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                                        placeholder="Doe"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-white block mb-1 font-medium text-sm md:text-base">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                                        placeholder="example@mail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-white block mb-1 font-medium text-sm md:text-base">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                                        placeholder="+1 012 3456 789"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label htmlFor="subject" className="text-white block mb-1 font-medium text-sm md:text-base">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    {errors.subject && <span className="text-red-500">{errors.subject}</span>}
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label htmlFor="message" className="text-white block mb-1 font-medium text-sm md:text-base">Message</label>
                                    <textarea
                                        id="message"
                                        className="bg-black w-full p-2 border-b border-gray-300 text-white focus:outline-none focus:border-green-600 resize-none"
                                        rows="2"
                                        placeholder="Your message here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                     {errors.message && <span className="text-red-500">{errors.message}</span>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-[#439600] text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
  {/* Google Map Section */}
  <div className="mt-20 mb-10 flex justify-center px-4 md:px-8 lg:px-16">
    <div className="w-full max-w-8xl relative">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7331.368520480632!2d77.451181!3d23.254574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d9b6e83c7d%3A0xf49cec7f079ae3a9!2sTrackalways!5e0!3m2!1sen!2sin!4v1730700692795!5m2!1sen!2sin"
        width="100%"
        height="450"
        className="rounded-lg shadow-lg mb-8"
        allowFullScreen=""
        loading="lazy"
        title="TrackAlways- Yasoda Garden Bagnugaliya, Bhopal"
      ></iframe>
    </div>
  </div>

      </>
    );
  };

  export default Contact;
