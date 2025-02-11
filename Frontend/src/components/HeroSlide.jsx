import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Features from "./Features2";
import banner1 from '../assets/home/banner3.webp'
import banner2 from '../assets/home/banner2.webp'
import banner3 from '../assets/home/banner4.webp'

// Slider data
const slides = [
  {
    id: 1,
    image: `${banner3}`,
    title: "Higher Standards for all Heathcare",
  },
  {
    id: 2,
    image: `${banner2}`,
    title: "Best Healthcare services",
  },
  {
    id: 3,
    image:`${banner1}`,
    title: "Trustworthy hospital",
  }
];

export default function HeroSlider() {
 // Slider settings
 const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For tablets or small laptops
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 600, // For small tablets and large phones
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480, // For phones
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};

  return (
    <>
    <div className="w-full  relative">
      <Slider {...settings}>
        {slides.map((slide,index) => (
          <div key={slide.id} className={`relative w-full h-auto lg:h-[70vh] ${index !== slide ? 'inert' : ''}`}>
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              title={slide.title}
              loading="lazy"
              className="w-full lg:h-full lg:object-cover object-contain"
            />

          </div>
        ))}
      </Slider>
    </div>
    <Features/>
    </>
  );
}

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
    aria-label="Next"
    title='Next'
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover-bg-primary cursor-pointer  z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
    aria-label="previous"
    title="previous"
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover-bg-primary cursor-pointer  z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};
