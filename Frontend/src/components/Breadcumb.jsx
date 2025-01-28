import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from '../assets/breadcrumb.jpg'
const BreadCumb = ({ items, title }) => {
  return (
    <div
      className="relative w-full h-[250px] flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-semibold messiri">{title}</h1>
        <div className="flex justify-center items-center mt-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.link} className={` ${index == 0 ? 'text-white':'text-white/90'} font-medium hover:text-blue-500`}>
                {item.label}
              </Link>
              {index < items.length - 1 && <span className="text-white"><MdKeyboardArrowRight className='text-xl inline-block font-extrabold' /></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
