import React from "react";
import time1 from '../../../assets/time1.png';
import time2 from '../../../assets/time2.png';
import time3 from '../../../assets/time3.png';
import time4 from '../../../assets/time4.png';

const Timeline = () => {
  const timelineData = [
    {
      year: "2017",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia.",
      image: time1,
    },
    {
      year: "2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia.",
      image: time2,
    },
    {
      year: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia.",
      image: time3,
    },
    {
      year: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo consectetur iste, exercitationem facere fugiat laudantium sed incidunt mollitia.",
      image: time4,
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-5xl font-bold text-center mb-20">Our Story</h2>
      <div className="relative">
        {/* Vertical dotted line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-black md:top-0 top-1/4 md:h-full">
          {/* Adjust top positioning based on screen size */}
        </div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between mb-10 md:mb-20 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            style={{ paddingLeft: index % 2 === 0 ? '120px' : '0', paddingRight: index % 2 === 1 ? '120px' : '0' }}
          >
            <div className="md:w-5/12 flex justify-center md:justify-end">
              <img
                src={item.image}
                alt={item.year}
                className="w-full md:w-[400px] rounded-md"
                style={{ marginRight: index % 2 === 0 ? '180px' : '0' }} // Adjust margin to shift images right
              />
            </div>

            <div className="relative z-10 w-full md:w-1/2 bg-white p-6 md:p-8 shadow-lg rounded-lg text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{item.year}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Number Circles on the vertical line */}
        {timelineData.map((_, index) => (
          <div
            key={index}
            className="absolute h-10 w-10 flex items-center justify-center bg-black border-4 border-white text-white text-xl font-bold rounded-full left-1/2 transform -translate-x-1/2"
            style={{
              top: `${index * 420}px`, // Set the first circle at the top and space them 150px apart
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
