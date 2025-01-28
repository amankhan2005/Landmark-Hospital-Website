import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faUserMd,
  faHospital,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

import bg from "../assets/home/stats-bg.jpg";

const stats = [
  { icon: faHeartbeat, number: 9632, label: "Happy Patients" },
  { icon: faUserMd, number: 178, label: "Qualified Doctors" },
  { icon: faHospital, number: 864, label: "Clinic Rooms" },
  { icon: faMapMarkerAlt, number: 473, label: "Local Partners" },
];

const Stats = () => {
  return (
    <div className="relative py-16">
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
      <div className="relative flex flex-wrap justify-center gap-8 z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/90 p-6 rounded-lg shadow-2xl w-60 text-center"
          >
            <div className="text-blue-500 text-5xl mb-4">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <CountUp end={stat.number} duration={2} enableScrollSpy />
            </div>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
