import React from "react";
import Slider from "react-slick";

const Gallery = () => {
  // Slick settings for auto-slide
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Generate random image URLs from Picsum
  const images = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/600/400?random=${i + 1}`,
  }));

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="p-2">
              <img
                src={image.url}
                alt={`Random ${image.id}`}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
