import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from '../assets/breadcrumb.jpg'
const BreadCumb2 = ({ items, title }) => {
  return (
    <div
      className="relative w-full md:h-[350px] h-[150px] flex items-center justify-left  bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className=" z-10 text-left text-white">
        <h1 className="md:text-4xl leading-[1.4rem] text-2xl ps-10 font-extrabold text-primary messiri" data-aos='fade-left'>{title}</h1>
       <div className="text-3xl font-semibold ps-10 " data-aos='fade-left'   data-aos-delay="300"> Hospital in Bahraich </div>
        <div className="flex absolute w-full bottom-0 items-center px-5 py-[6px] ps-10 md:mt-4 bg-white/30">
          {items.map((item, index) => (
            <React.Fragment key={index} >
              <Link to={item.link} className={` ${index == 0  ? 'text-primary':'text-primary'} font-medium hover:text-blue-500`}>
                {item.label}
              </Link>
              {index < items.length - 1 && <span className="text-primary"><MdKeyboardArrowRight className='text-xl inline-block font-extrabold' /></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCumb2;
