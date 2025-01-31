import React from "react";

import {facilities} from '../FacilitiesData'
import { Link } from "react-router-dom";


const Facilities = () => {
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
          {facilities.map((specialty) => (
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
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {specialty.description}
                </p>
                <Link to={`/facilities/${specialty.link}`}className="w-full block py-2 px-4 border hover:bg-white hover:text-blue-600 bg-blue-500 transition-all duration-500 ease-in-out cursor-pointer border-gray-300  rounded-lg text-white ">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
