import { motion } from 'framer-motion';
import image1 from '../../assets/s1.png'; 
import image2 from '../../assets/s2.png'; 
import image3 from '../../assets/s3.png'; 

const Mission = () => {
    return (
        <>
        {/* Mirrored Section - Images on Left, Content on Right */}
        <div className="bg-white mt-20 md:mt-20 p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16"> {/* Adjusted gap for larger screens */}
                {/* Left Side - Responsive Images with Animation */}
                <motion.div
                    className="md:w-1/2 flex flex-wrap justify-between mb-8 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
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
                </motion.div>

                {/* Right Side - About Us Heading and Paragraph with Animation */}
                <motion.div
                    className="md:w-1/2 md:pr-4 text-center md:text-left"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-5xl mt-0 md:mt-18 lg:mt-28 mb-10">Our Mission</h3> {/* Adjusted margin-top for mobile */}
                    <p className="text-gray-700 text-lg mb-4">
                        At Trackalways, our mission is to revolutionize how businesses manage their assets, enhance operational efficiency, and ensure the safety and security of people and valuable resources. We are driven by a passion for leveraging technology to create solutions that make a tangible impact on our clients' success.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Second Section - Team Track Always */}
        <div className="bg-white -mt-20 mb-20 md:mt-0 p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Left Side - About Us Heading and Paragraph with Animation */}
                <motion.div
                    className="md:w-1/2 md:pr-4 text-center md:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-5xl mt-28 mb-10">Team Track Always</h3>
                    <p className="text-gray-700 text-lg mb-4">
                        Our diverse team brings together a wealth of expertise in telematics, software development, customer support, and business strategy. Together, we collaborate to deliver solutions that drive success for our clients.
                    </p>
                </motion.div>

                {/* Right Side - Responsive Images with Animation */}
                <motion.div
                    className="md:w-1/2 flex flex-wrap justify-between"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
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
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Mission;
