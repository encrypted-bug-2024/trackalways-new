import image1 from '../../../assets/s1.png'; 
import image2 from '../../../assets/s2.png'; 
import image3 from '../../../assets/s3.png'; 

const Info = () => {
  return(
    <>
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
    </>
  )
}
export default Info;