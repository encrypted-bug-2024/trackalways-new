import { motion } from 'framer-motion';
import image1 from '../../assets/s1.png'; 
import image2 from '../../assets/s2.png'; 
import image3 from '../../assets/s3.png'; 

const Info = () => {
  return (
    <div className="bg-white mt-0 md:mt-10 lg:mt-20 p-6 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Side - About Us Heading and Paragraph with Animation */}
        <motion.div
          className="md:w-full lg:w-1/2 md:pr-4 lg:pr-4 text-center md:text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-5xl mt-20 md:mt-14 mb-10 lg:-mt-10">About Us</h3>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to Trackalways, your trusted partner in telematics and GPS solutions. Established in 2018, Trackalways has been at the forefront of providing innovative and reliable tracking solutions designed to empower businesses across various industries. Our commitment to excellence, customer-centric approach, and cutting-edge technology set us apart in the dynamic world of telematics.
          </p>
        </motion.div>

        {/* Right Side - Responsive Images with Animation */}
        <motion.div
          className="md:w-full lg:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Top Row - Two Images in the Same Row */}
          <div className="flex w-full gap-4 mb-4">
            <div className="w-1/2 flex justify-center">
              <img src={image1} alt="Description 1" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={image2} alt="Description 2" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Bottom Row - One Image */}
          <div className="w-full flex justify-center">
            <img src={image3} alt="Description 3" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
