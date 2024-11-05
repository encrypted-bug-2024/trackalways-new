import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2017",
      title: "Established",
      description: `TrackAlways was established in 2017. It has been at the forefront of providing innovative real-time tracking solutions. Over the years, the company has expanded its services to cover major elections and COVID emergencies, gaining a reputation for reliability and precision in tracking systems.`,
      isGreen: true, // Mark the first box as green
    },
    {
      year: "2018",
      title: "Vidhan Sabha Elections (M.P.)",
      description: `Supplied and installed GPS devices to track EVMs across 10 districts. This was the first major project aimed at improving the transparency and security of election processes, ensuring real-time tracking and monitoring.`,
    },
    {
      year: "2019",
      title: "Lok Sabha Elections (M.P.)",
      description: `Expanded tracking services during the 2019 Lok Sabha elections in M.P., covering 10 more districts. The integration of GPS devices enabled authorities to monitor the movement of election materials, enhancing logistical efficiency.`,
    },
    {
      year: "2020",
      title: "By Election (M.P.)",
      description: `Supplied GPS devices for tracking EVMs in by-elections. Focused on securing electoral processes in a politically critical time, ensuring that EVMs were monitored at all times.`,
    },
    {
      year: "2021",
      title: "COVID Emergency Services (M.P.)",
      description: `Amidst the pandemic, provided essential tracking services for oxygen cylinders in Bhopal Smart City. The system ensured the real-time tracking of life-saving resources in hospitals, enabling faster and more efficient deliveries.`,
    },
    {
      year: "2023",
      title: "Vidhan Sabha Elections (M.P.)",
      description: `During the 2023 Vidhan Sabha Elections, TrackAlways expanded its services across 50 districts, providing GPS tracking for EVMs and live webcasting on polling days. This initiative greatly improved election monitoring and public transparency.`,
    },
    {
      year: "2024",
      title: "Lok Sabha Elections (M.P. & Bihar)",
      description: `In 2024, TrackAlways extended its tracking services to cover both M.P. and Bihar. Supplied and installed GPS devices for EVMs in multiple districts, including live webcasting for real-time updates on counting days across 36 districts in Bihar.`,
    },
  ];

  return (
    <div className="relative bg-gray-100 py-16">
      <h2 className="text-center text-5xl font-bold mb-10">Our Story</h2>

      <div className="container mx-auto relative">
        {/* Vertical Dotted Line */}
        <div className="absolute left-3 md:left-15 lg:left-1/2 transform md:translate-x-0 lg:-translate-x-1/2 h-full border-r-4 border-dotted border-gray-300"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col lg:flex-row items-start lg:items-center w-full ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content Block */}
            <div className={`lg:w-1/2 p-6 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
              <div
                className={`p-6 rounded-lg shadow-lg ${
                  item.isGreen ? "bg-[#439600] text-white" : "bg-white"
                }`}
              >
                <p className="text-2xl mb-2 text-green-300">{item.year}</p>
                <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Number Circles on the vertical line */}
        {timelineData.map((_, index) => (
          <div
            key={index}
            className="hidden lg:flex absolute h-10 w-10 items-center justify-center bg-black text-white text-xl font-bold rounded-full border-4 border-white left-1/2 transform -translate-x-1/2"
            style={{
              top: `${index * 320 + 100}px`, // Adjusts the spacing between circles on large screens
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
