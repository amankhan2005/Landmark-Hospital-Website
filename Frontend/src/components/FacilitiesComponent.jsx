import React from 'react';
import { Link } from 'react-router-dom';
import { facilities } from '../FacilitiesData';
import { motion } from 'framer-motion';
import pattern from '../assets/pattern1.jpg';
function FacilitiesComponent({ props }) {
  return (
    <div className="grid relative grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3">
      {/* <div className='absolute' style={{background:`url(${pattern})`,backgroundPosition:'center',backgroundSize:'cover'}}>

      </div> */}
      {facilities.map((specialty) => (
        <motion.div
          key={specialty.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative overflow-hidden  md:rounded-lg rounded shadow-lg transition-all duration-500 ease-in-out ${
            props?.title === specialty?.title ? 'border-t-6   border-primary' : ''
          } bg-white`}
        >
          <img
            src={specialty.image}
            alt={specialty.title}
            className="w-full md:h-48 h-20 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="md:p-5 px-2">
            <h3 className="md:text-xl text-lg font-semibold md:mb-2 text-gray-800">{specialty.title}</h3>
            <div className="border-b border-gray-300 mb-2"></div>
            <p className="text-gray-600 md:text-base text-xs md:mb-4 mb-1 line-clamp-2">{specialty.description}</p>
            <Link
              to={`/facilities/${specialty.link}`}
              className="block w-full md:mb-0 mb-2  text-center md:p-2 py-1 md:px-4  border border-transparent rounded-lg text-white bg-primary  transition-all duration-500 ease-in-out"
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
