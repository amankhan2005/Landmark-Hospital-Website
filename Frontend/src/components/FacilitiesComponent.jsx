import React from 'react';
import { Link } from 'react-router-dom';
import { facilities } from '../FacilitiesData';
import { motion } from 'framer-motion';
import pattern from '../assets/pattern1.jpg';
function FacilitiesComponent({ props }) {
  return (
    <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* <div className='absolute' style={{background:`url(${pattern})`,backgroundPosition:'center',backgroundSize:'cover'}}>

      </div> */}
      {facilities.map((specialty) => (
        <motion.div
          key={specialty.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
            props?.title === specialty?.title ? 'border-2 border-blue-500' : ''
          } bg-white`}
        >
          <img
            src={specialty.image}
            alt={specialty.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{specialty.title}</h3>
            <div className="border-b border-gray-300 mb-2"></div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{specialty.description}</p>
            <Link
              to={`/facilities/${specialty.link}`}
              className="block w-full text-center py-2 px-4 border border-transparent rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500 ease-in-out"
            >
              View More
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FacilitiesComponent;
