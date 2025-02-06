import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import BreadCumb from '../components/Breadcumb';
import {useDispatch, useSelector} from 'react-redux'
import { fetchCasesData } from '../redux/slices/dataslice';
const Data = Array.from({ length: 10 }, (_, index) => ({
  title: `Case ${index + 1}`,
  description: `This is a brief description of Case ${index + 1}.`,
  imageUrl: `https://picsum.photos/600/400?random=${index + 1}`, 
}));

const Cases = () => {
  const [caseData,setCaseData] = useState(Data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //data fetching 

  const dispatch = useDispatch()
  const {casesData,status, error} = useSelector((state)=>state.data)
useEffect(()=>{
  dispatch(fetchCasesData())
  setCaseData(casesData)
},[dispatch])

  

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
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Cases`, link: `/cases` },
        ]}
        title='Our Recent Cases'
      />

        {/* <LoadingSpinner/> */}
      {/* Cases Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10 px-4 md:px-10 md:container md:mx-auto">
      {status =='loading' && <p>Loading cases Data...</p>}
      {error && <p className="text-red-500">{error}</p>}
        {caseData.map((caseItem, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <img 
              src={caseItem.imageUrl} 
              alt={caseItem.title} 
              className="w-full md:h-48 h-36  object-cover group-hover:opacity-80 transition" 
            />
            {/* Plus Icon on Hover */}
            <div className="absolute inset-0 flex top-[-70px] justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <FaPlus className="text-white bg-black/50 rounded-full p-2 w-16 h-16" />
            </div>
            <div className="md:p-4 p-1 bg-white">
              <h3 className="md:text-xl text-base font-semibold text-center">{caseItem.title}</h3>
              <p className="text-gray-600 line-clamp-2 text-sm text-center">{caseItem.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative bg-white py-4 px-1 pt-10 rounded-lg max-w-3xl w-full shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 text-2xl flex items-center justify-center"
            >
              ×
            </button>

            <div className="flex justify-between items-center">
              <button
                onClick={prevImage}
                className="text-3xl text-gray-900 hover:text-gray-800 rounded  h-10 w-10 mr-2 bg-gray-300 cursor-pointer hover:bg-gray-400"
              >
                &#8592;
              </button>

              <img
                src={casesData[currentImageIndex].imageUrl}
                alt={`Case ${currentImageIndex + 1}`}
                className="md:w-full w-64  md:max-h-[500px] object-cover rounded"
              />

              <button
                onClick={nextImage}
                className="text-3xl  text-gray-900 hover:text-gray-800 rounded  h-10 w-10 ml-2 bg-gray-300 cursor-pointer hover:bg-gray-400"
              >
                &#8594;
              </button>
            </div>

            <h3 className="text-center text-2xl font-semibold mt-1">
              {casesData[currentImageIndex].title}
            </h3>
     
            <p className="text-center text-gray-600">
              {casesData[currentImageIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;
