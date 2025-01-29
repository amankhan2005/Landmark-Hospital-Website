import React from "react";
import nicu from "../assets/home/nicu.png";
import icu from "../assets/home/icu.png";
import privateRoom from "../assets/home/private-room.png";
import genral from "../assets/home/genral.png";
import pattern from "../assets/home/patter.jpg";
const specialties = [
  {
    id: 1,
    title: "NICU",
    description:
      "Neonatal care for premature and critically ill newborns.",
    image: `${nicu}`,
  },
  {
    id: 2,
    title: "ICU",
    description:
      "Advanced intensive care unit for patients requiring critical care.",
    image: `${icu}`,
  },
  {
    id: 3,
    title: "General Ward",
    description:
      "Affordable and comprehensive medical care in our general ward.",
    image: `${genral}`,
  },
  {
    id: 4,
    title: "Private Rooms",
    description: "Spacious private rooms with personalized care and comfort.",
    image: `${privateRoom}`,
  },
];

const Specialties = () => {
  return (
    <div className="md:py-12 lg:py-14 py-10 bg-gra0 px-14">
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: 0,
        }}
      ></div> */}
      <div className="">
        <h2 className="md:text-4xl text-blue-600 text-2xl font-bold text-center mb-8 messiri">
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="rounded shadow-lg overflow-hidden bg-white"
            >
              <img
                src={specialty.image}
                alt={specialty.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {specialty.title}
                </h3>
                <div className="border-b border-gray-300 mb-2"></div>
                <p className="text-gray-600 text-sm mb-4">
                  {specialty.description}
                </p>
                <button className="w-full py-2 px-4 border hover:bg-white hover:text-blue-600 bg-blue-500 transition-all duration-500 ease-in-out cursor-pointer border-gray-300  rounded-lg text-white ">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
