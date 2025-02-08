import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import BreadCumb from "../components/Breadcumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";
function GalleryPage() {
  const images = Array.from({ length: 10 }, (_, index) => ({
    src: `https://picsum.photos/800/500?random=${index + 1}`,
    alt: `Image ${index + 1}`,
  }));

  const [gallery, setGallery] = useState(images);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  //data fetching

  const dispatch = useDispatch();
  const { galleryData, status, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);
  
  useEffect(() => {
    setGallery(galleryData);
  }, [galleryData]);
  

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
    setScale((prevScale) =>
      Math.min(Math.max(prevScale + e.deltaY * -0.001, 1), 3)
    );
  };

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Gallery", link: "/gallery" },
        ]}
        title="Our Recent Memories"
      />
      <div className="py-10 px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.length == 0 && <p className="text-red-500">No Data Found</p>}
        {status == "loading" && <p>Loading Gallery Images...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {gallery.map((img, idx) => (
          <div
            key={idx}
            className="relative  bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
            onClick={() => openModal(idx)}
          >
            <div className="absolute inset-0 flex top-0 z-10 justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <FaPlus className="text-white bg-black/50 rounded-full p-2 w-12 h-12" />
            </div>
            <img
              className="w-full h-48 object-cover"
              src={img.src || img.imageUrl}
              alt={img.title}
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
          <button
            className="absolute z-10 left-5  text-white text-3xl cursor-pointer"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          <div className="relative">
            <img
              src={
                gallery[currentIndex]?.src || gallery[currentIndex]?.imageUrl
              }
              alt={gallery[currentIndex]?.alt || "Gallery Image"}
              style={{ transform: `scale(${scale})` }}
              className="max-w-full max-h-screen transition-transform"
            />
          </div>
          <button
            className="absolute z-10 right-5 text-white text-3xl cursor-pointer"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
