import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from '../assets/breadcrumb.jpg'
const BreadCumb2 = ({ items, title }) => {
  return (
    <div
      className="relative w-full md:h-[350px] h-[150px] flex items-center justify-left ps-10 bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className=" z-10 text-left text-white">
        <h1 className="md:text-4xl leading-[1.4rem] text-2xl font-extrabold text-primary messiri" data-aos='fade-left'>{title}</h1>
       <div className="text-3xl font-semibold" data-aos='fade-left'   data-aos-delay="300"> Hospital in Bahraich </div>
        <div className="flex absolute bottom-4 items-center md:mt-4 mt-0" data-aos='fade-up'>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.link} className={` ${index == 0  ? 'text-primary':'text-white/90'} font-medium hover:text-blue-500`}>
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

export default BreadCumb2;
