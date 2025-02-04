import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {specialities} from '../SpecilitesData.jsx'
import { Link } from 'react-router-dom';

function SpecilitesComponent({specialty}) {
    
// console.log(specialty.title)
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {specialities.map((speciality, index) => (
            <div className="lg:h-[35vh] h-[17vh] sm:h-[14vh]">
            <Link to={`/specialities/${speciality.link}`}
              key={index}
              className={` ${specialty?.title == speciality.title? 'border-2':'' }  bg-white block shadow-xl rounded-xl p-4 relative  hover:border-2 border-blue-500 transition-al`}
            >
              <div className="absolute md:-top-8 -top-6 left-1/2 transform -translate-x-1/2 bg-blue-100 hover:bg-white md:h-20 md:w-28 h-10 w-14 flex justify-center rounded-lg items-center  hover:border-2 border border-blue-500 md:rounded-3xl shadow-lg">
                <img
                  src={speciality.image}
                  alt={speciality.title}
                  className="md:w-20 w-8 md:rounded-3xl rounded md:h-20 h-8  object-cover md:p-2 "
                />
              </div>
              <div className="md:mt-16 mt-4 text-center ">
                <h2 className="md:text-xl text-base font-bold text-gray-800 mb-2 w-full line-clamp-1 messiri ">
                  {speciality.title}
                </h2>
                <button className="text-blue-600 md:py-1 md:px-2 rounded-full hover:bg-blue-200 ">View More <FaArrowRight className="inline-block ms-1"/></button>
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