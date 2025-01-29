import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Adam Jonson",
    specialty: "Medical Director",
    image: "https://picsum.photos/300/300?random=1",
  },
  {
    name: "Dr. Marry Hudson",
    specialty: "Hematologist",
    image: "https://picsum.photos/300/300?random=2",
  },
  {
    name: "Dr. Simon Larson",
    specialty: "Family Doctor",
    image: "https://picsum.photos/300/300?random=3",
  },
];

const OurTeam = () => {
  return (
    <div className="md:py-12 lg:py-14 py-10 px-4 text-center">
      {/* Section Heading */}
      <h2 className="text-4xl font-semibold messiri text-blue-700">
        Meet The Team
      </h2>
      <p className="text-gray-500 italic mt-2">
        Sample text. Click to select the text box. Click again or double-click
        to start editing the text.
      </p>

      {/* Doctors Container */}
      <div className="mt-10 flex flex-col md:flex-row relative justify-center items-center gap-8">
        <div className="absolute bg-primary w-full"></div>
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-gray-100 borde border-blue-400 rounded-lg p-6 w-full sm:w-[300px] relative z-10"
          >
            {/* Doctor Image */}
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-400 relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="relative w-full h-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}

        {/* Background Effect */}
        <div className="absolute w-full h-3/5 bg-blue-400 left-0 right-0 mx-auto z-0"></div>
      </div>

      {/* View More Button - Centered and Styled */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/our-team"
          className="py-2 px-6 border hover:bg-white hover:text-blue-600 bg-blue-500 transition-all duration-500 ease-in-out cursor-pointer border-gray-300 rounded-lg text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
