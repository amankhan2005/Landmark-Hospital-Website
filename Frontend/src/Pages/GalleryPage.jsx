import React from 'react'
import BreadCumb from '../components/Breadcumb'

function GalleryPage() {
  const categories = [
    { 
      name: 'Images', 
      type: 'image', 
      content: [
        { src: 'https://picsum.photos/300/200?random=1', alt: 'Image 1' },
        { src: 'https://picsum.photos/300/200?random=2', alt: 'Image 2' },
        { src: 'https://picsum.photos/300/200?random=3', alt: 'Image 3' },
        { src: 'https://picsum.photos/300/200?random=4', alt: 'Image 4' },
        { src: 'https://picsum.photos/300/200?random=5', alt: 'Image 5' },
        { src: 'https://picsum.photos/300/200?random=6', alt: 'Image 6' },
        { src: 'https://picsum.photos/300/200?random=7', alt: 'Image 7' },
        { src: 'https://picsum.photos/300/200?random=8', alt: 'Image 8' },
        { src: 'https://picsum.photos/300/200?random=9', alt: 'Image 9' },
        { src: 'https://picsum.photos/300/200?random=10', alt: 'Image 10' },
      ]
    },
    { 
      name: 'Videos', 
      type: 'video', 
      content: [
        { src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 1' },
        { src: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 2' },
      ]
    },
    { 
      name: 'Events', 
      type: 'event', 
      content: [
        { src: 'https://picsum.photos/300/200?random=11', title: 'Event 1', date: '2025-01-01' },
        { src: 'https://picsum.photos/300/200?random=12', title: 'Event 2', date: '2025-02-01' },
        { src: 'https://picsum.photos/300/200?random=13', title: 'Event 3', date: '2025-03-01' },
        { src: 'https://picsum.photos/300/200?random=14', title: 'Event 4', date: '2025-04-01' },
        { src: 'https://picsum.photos/300/200?random=15', title: 'Event 5', date: '2025-05-01' },
      ]
    },
  ];

  return (
    <div>
      <BreadCumb
        items={[
          { label: 'Home', link: `/` },
          { label: `Gallery`, link:`/gallery` },
        ]}
        title='Gallery'
      />
      <div className="p-4">
        {categories.map((category, index) => (
          <div key={index} className="my-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center messiri">{category.name}</h2>
            
            {category.type === 'image' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.content.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
            )}

            {category.type === 'video' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.content.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <video className="w-full h-48 object-cover" controls>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}

            {category.type === 'event' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.content.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={item.src} alt={item.title} />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
