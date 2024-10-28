const WhyUs = () => {
  return (
    <>
      <div className="bg-gray-200 mt-10 py-20 min-h-[80vh] px-16 relative overflow-hidden">
        {/* Green Dotted Corners */}
        <div
          className="absolute top-[-60px] right-[-80px] w-48 h-48 border-dotted border-2 border-green-500 rounded-full"
          style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
        ></div>
        <div
          className="absolute bottom-[-80px] left-[-80px] w-48 h-48 border-dotted border-2 border-green-500 rounded-full"
          style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        ></div>

        <h2 className="text-4xl text-center mb-10">Why Choose Us?</h2>

        <div className="flex flex-col md:flex-col lg:flex-row lg:py-20 justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg w-full h-auto md:w-full text-center flex flex-col justify-between">
            <h3 className="text-2xl mb-4">Cutting-Edge Technology</h3>
            <p className="text-gray-700">
              We stay ahead of the curve by embracing the latest technological advancements, ensuring our solutions are at the forefront of industry standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg w-full h-auto md:w-full text-center flex flex-col justify-between">
            <h3 className="text-2xl mb-4">Proven Track Record</h3>
            <p className="text-gray-700">
              With a history dating back to 2018, Trackalways has a proven track record of delivering reliable and effective telematics solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg w-full h-auto md:w-full text-center flex flex-col justify-between">
            <h3 className="text-2xl mb-4">Customer Success Stories</h3>
            <p className="text-gray-700">
              Explore success stories from businesses that have benefited from Trackalways solutions, showcasing the tangible impact we make on our clients' operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
