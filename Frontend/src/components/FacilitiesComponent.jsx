import React from 'react'
import { Link } from 'react-router-dom'
import { facilities } from "../FacilitiesData";
function FacilitiesComponent({props}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((specialty) => (
            <div
              key={specialty.id}
              className={` ${props?.title == specialty?.title? 'border-2 border-blue-500':'' } rounded shadow-lg  overflow-hidden bg-white`}
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
  )
}

export default FacilitiesComponent