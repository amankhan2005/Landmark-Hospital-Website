import React, { useState } from 'react';

const casesData = Array.from({ length: 10 }, (_, index) => ({
  title: `Case ${index + 1}`,
  imageUrl: `https://picsum.photos/300/200?random=${index + 1}`, 
}));

const Cases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % casesData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + casesData.length) % casesData.length
    );
  };

  return (
    <div>
      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {casesData.map((caseItem, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal(index)}>
            <img src={caseItem.imageUrl} alt={caseItem.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center">{caseItem.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-0 bg-gray-300 right-2 text-black rounded-full w-10 h-10 text-4xl"
            >
              ×
            </button>

            <div className="flex justify-between items-center mb-4">
              <button
                onClick={prevImage}
                className="text-3xl text-gray-600  hover:text-gray-800"
              >
                &#8592; {/* Left arrow */}
              </button>

              <img
                src={casesData[currentImageIndex].imageUrl}
                alt={`Case ${currentImageIndex + 1}`}
                className="w-full max-h-96 object-cover rounded-lg"
              />

              <button
                onClick={nextImage}
                className="text-3xl text-gray-600 hover:text-gray-800"
              >
                &#8594; {/* Right arrow */}
              </button>
            </div>

            <h3 className="text-center text-xl font-semibold">{casesData[currentImageIndex].title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;
