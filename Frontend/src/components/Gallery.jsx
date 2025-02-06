import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { galleryData, status, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const openModal = (index) => {
    setCurrentIndex(index);
    setScale(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    setScale(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    setScale(1);
  };

  const handleWheel = (e) => {
    setScale((prevScale) => Math.min(Math.max(prevScale + e.deltaY * -0.001, 1), 3));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  // Slick slider settings
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
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="md:py-12 lg:py-14 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-primary messiri">
          Our Recent Photos
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          A glimpse into our recent work and accomplishments.
        </p>

        {status === "loading" && <p className="text-center">Loading Gallery Images...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {galleryData.length === 0 && status === "success" && (
          <p className="text-center text-red-500">No images available</p>
        )}

        {galleryData.length > 0 && (
          <Slider {...settings}>
            {galleryData.map((image, idx) => (
              <div key={idx} className="p-2">
                <img
                  src={image?.imageUrl} 
                  alt={image.title || `Gallery Image ${idx}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer"
                  onClick={() => openModal(idx)}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex h-screen overflow-hidden items-center justify-center bg-black bg-opacity-80 z-50"
          aria-hidden={!modalOpen}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          <button
            className="absolute left-5 text-white text-3xl cursor-pointer"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <div className="relative">
            <img
              src={galleryData[currentIndex]?.imageUrl}
              alt={galleryData[currentIndex]?.title || `Gallery Image ${currentIndex}`}
              style={{ transform: `scale(${scale})` }}
              className="max-w-full max-h-screen transition-transform"
              onWheel={handleWheel} // Enable zoom with mouse wheel
            />
          </div>

          <button
            className="absolute right-5 text-white text-3xl cursor-pointer"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
