import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesOverlay from "./Features";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
// Slider data
const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1920/1080?random=1",
    title: "Explore the World",
    description: "Discover new places and experiences with us.",
    buttonText: "Learn More",
    link: "/explore",
    class: "justify-start text-left" // Left-aligned text
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/1080?random=2",
    title: "Adventure Awaits",
    description: "Plan your next adventure today!",
    buttonText: "Get Started",
    link: "/adventure",
    class: "justify-end text-center" // Center-aligned text
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/1080?random=3",
    title: "Luxury Travel",
    description: "Experience the best in luxury travel.",
    buttonText: "View Packages",
    link: "/luxury",
    class: "justify-center text-right" // Right-aligned text
  }
];

export default function HeroSlider() {
 // Slider settings
 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
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
    <div className="w-full h-full relative">
      <Slider {...settings}>
        {slides.map((slide,index) => (
          <div key={slide.id} className={`relative w-full h-[70vh] ${index !== slide ? 'inert' : ''}`}>
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div
              className={`absolute inset-0 flex ${slide.class} items-center h-full px-20 `}
            >
              <div className="text-white max-w-2xl text-center">
                <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <Link
                  to={slide.link}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    <FeaturesOverlay/>
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover-bg-primary cursor-pointer  z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover-bg-primary cursor-pointer  z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};
