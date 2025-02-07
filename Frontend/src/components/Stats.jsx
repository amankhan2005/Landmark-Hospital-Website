import React from "react";
import CountUp from "react-countup";

import bg from "../assets/home/stats-bg.jpg";
import icuBeds from "../assets/home/icuBeds.png";
import doctors from "../assets/home/medical-team.png";
import happyClients from "../assets/home/healthy.png";
import experience from "../assets/home/experience.png";

const stats = [
  { icon: happyClients, number: 1000, label: "Happy Patients" },
  { icon: doctors, number: 9, label: "Qualified Doctors" },
  { icon: experience, number: 10, label: "Years of Experience" },
  { icon: icuBeds, per:'100%', label: "Patient Satisfaction" },
];

const Stats = () => {
  return (
    <div className="relative lg:py-14 md:py-12 py-10">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Stats content */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 md:px-28 px-2 md:gap-8 gap-2 z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white md:p-5 p-1 rounded-lg shadow-2xl md:w-60 text-center"
          >
            <div className="md:mb-4 mb-1">
              <img src={stat.icon} alt={stat.label} className="mx-auto md:w-20 w-10" />
            </div>
            <div className="md:text-3xl text-xl font-bold text-gray-800 md:mb-2 ">
             { stat.per ? '100 %' : (<><CountUp end={stat?.number} duration={2} enableScrollSpy /> + </>) }
            </div>
            <p className="text-gray-500 text-sm md:text-base md:mt-0 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
