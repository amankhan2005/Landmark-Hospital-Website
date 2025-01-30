import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {specialities} from '../SpecilitesData.jsx'
import { Link } from 'react-router-dom';

function SpecilitesComponent() {
    

  return (
    <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  py-16 px-10">
          {specialities.map((speciality, index) => (
            <div className="h-[30vh]">
            <Link to={`/specialities/${speciality.link}`}
              key={index}
              className="bg-white block shadow-lg rounded-xl p-4 relative  hover:border-2 border-blue-500 transition-al"
              onClick={()=>handleClick(speciality)}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-100 hover:bg-white h-20 w-28 flex justify-center  hover:border-2 border border-blue-500 rounded-3xl shadow-lg">
                <img
                  src={speciality.image}
                  alt={speciality.title}
                  className="w-20 rounded-3xl h-20 object-cover p-2"
                />
              </div>
              <div className="mt-16 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2 messiri ">
                  {speciality.title}
                </h2>
                <button className="text-blue-600 py-1 px-2 rounded-full hover:bg-blue-200 ">View More <FaArrowRight className="inline-block ms-1"/></button>
                {/* <p className="text-gray-600 text-sm mb-4">
                  {speciality.description}
                </p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  {speciality.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul> */}
              </div>
            </Link>
            </div>
          ))}
        </div>
  )
}

export default SpecilitesComponent