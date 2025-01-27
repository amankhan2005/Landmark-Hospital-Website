import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesOverlay from "./Features";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Smooth transition speed
    cssEase: "ease-in-out", // Smooth transition effect
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable navigation arrows
    appendDots: dots => (
      <div className="absolute bottom-8 border-4 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2 z-20">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></div>
    )
  };

  return (
    <div className="w-full h-fit relative ">
      <Slider {...settings}>
        {slides.map((slide,index) => (
          <div key={slide.id} className={`relative w-full h-[82vh] ${index !== slide ? 'inert' : ''}`}>
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div
              className={`absolute inset-0 flex ${slide.class} items-center h-full px-10 bg-blac bg-opacity-50`}
            >
              <div className="text-white max-w-2xl">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
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
