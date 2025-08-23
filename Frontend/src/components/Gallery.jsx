 import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
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
    setScale((prevScale) =>
      Math.min(Math.max(prevScale + e.deltaY * -0.001, 1), 3)
    );
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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white md:py-16 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="md:text-4xl mb-4 text-2xl font-bold text-primary">
            Our Recent Photos
          </h1>
          <p className="text-gray-600 mt-4">
            A glimpse into our recent work and accomplishments.
          </p>
        </div>

        {/* Loader & Error */}
        {status === "loading" && <p className="text-center">Loading Gallery...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {galleryData.length === 0 && status === "success" && (
          <p className="text-center text-red-500">No images available</p>
        )}

        {/* Gallery Slider */}
        {galleryData.length > 0 && (
          <Slider {...settings}>
            {[...galleryData].reverse().map((image, idx) => (
              <div
                key={idx}
                className="p-3 relative cursor-pointer group"
                onClick={() => openModal(idx)}
              >
                {/* Image */}
                <img
                  src={image?.imageUrl}
                  alt={image.title || `Gallery Image ${idx}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />

                {/* Plus Icon */}
                <div className="absolute inset-0 flex justify-center items-center rounded-xl">
                  <FaPlus className="text-white opacity-50 group-hover:opacity-100 transition w-12 h-12" />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex h-screen overflow-hidden items-center justify-center bg-black bg-opacity-90 z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-primary transition"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 text-white text-4xl hover:text-primary transition"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <div className="relative">
            <img
              src={galleryData[currentIndex]?.imageUrl}
              alt={galleryData[currentIndex]?.title || `Gallery Image ${currentIndex}`}
              style={{ transform: `scale(${scale})` }}
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl transition-transform"
              onWheel={handleWheel}
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-6 text-white text-4xl hover:text-primary transition"
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
