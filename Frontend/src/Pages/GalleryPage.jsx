import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import BreadCumb from "../components/Breadcumb";

function GalleryPage() {
  const images = Array.from({ length: 10 }, (_, index) => ({
    src: `https://picsum.photos/800/500?random=${index + 1}`,
    alt: `Image ${index + 1}`,
  }));

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
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  };

  const handleWheel = (e) => {
    setScale((prevScale) => Math.min(Math.max(prevScale + e.deltaY * -0.001, 1), 3));
  };

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("wheel", handleWheel);
    } else {
      window.removeEventListener("wheel", handleWheel);
    }
    return () => window.removeEventListener("wheel", handleWheel);
  }, [modalOpen]);

  return (
    <div>
      <BreadCumb
        items={[{ label: "Home", link: "/" }, { label: "Gallery", link: "/gallery" }]}
        title="Our Recent Memories"
      />
      <div className="py-10 px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => openModal(idx)}>
            <img className="w-full h-48 object-cover" src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
            <FaTimes />
          </button>
          <button className="absolute z-10 left-5  text-white text-3xl" onClick={prevImage}>
            <FaChevronLeft />
          </button>
          <div className="relative">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{ transform: `scale(${scale})` }}
              className="max-w-full max-h-screen transition-transform"
            />
          </div>
          <button className="absolute z-10 right-5 text-white text-3xl" onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;