import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import BreadCumb from "../components/Breadcumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";
import { useLocation } from "react-router-dom";

function GalleryPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialTab = params.get("tab") || "photo";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const dispatch = useDispatch();
  const { galleryData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  // agar URL tab change ho to activeTab update karo
  useEffect(() => {
    const tab = new URLSearchParams(location.search).get("tab") || "photo";
    setActiveTab(tab);
  }, [location.search]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setScale(1);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

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

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Gallery", link: "/gallery" },
        ]}
        title="Our Recent Memories"
      />

      {/* Tabs */}
      <div className="flex justify-center gap-6 border-b mb-6">
        {["photo", "video", "news", "rewards"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600"
            }`}
          >
            {tab === "photo" && "Photo Gallery"}
            {tab === "video" && "Video Gallery"}
            {tab === "news" && "News & Media"}
            {tab === "rewards" && "Rewards"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-10 px-4 md:px-10">
        {/* Photos */}
        {activeTab === "photo" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {status === "loading" && <p>Loading Gallery Images...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {galleryData?.length === 0 && <p className="text-red-500">No Data Found</p>}
            {galleryData?.map((img, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
                onClick={() => openModal(idx)}
              >
                <div className="absolute inset-0 flex top-0 z-10 justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <FaPlus className="text-white bg-black/50 rounded-full p-2 w-10 h-10" />
                </div>
                <img
                  className="w-full h-48 object-cover"
                  src={img.src || img.imageUrl}
                  alt={img.title}
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              className="w-full h-64 rounded-lg shadow"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video 1"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-lg shadow"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Video 2"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* News */}
        {activeTab === "news" && (
          <ul className="space-y-4">
            <li className="p-4 border rounded shadow">
              📰 Hospital featured in Times of India (Jan 2024)
            </li>
            <li className="p-4 border rounded shadow">
              📰 Interview with Dr. Rahul on NDTV Health Show
            </li>
          </ul>
        )}

        {/* Rewards */}
        {activeTab === "rewards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow bg-white">
              🏆 Best Neurosurgeon Award 2023
            </div>
            <div className="p-6 border rounded-lg shadow bg-white">
              🥇 Excellence in Emergency Care 2022
            </div>
          </div>
        )}
      </div>

      {/* Modal for Photos */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onWheel={handleWheel}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
          <button
            className="absolute z-10 left-5 text-white text-3xl cursor-pointer"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          <div className="relative">
            <img
              src={galleryData[currentIndex]?.src || galleryData[currentIndex]?.imageUrl}
              alt={galleryData[currentIndex]?.alt || "Gallery Image"}
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
