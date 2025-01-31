import React from 'react';
import { FaStar } from 'react-icons/fa';
import BreadCumb from '../components/Breadcumb';

const reviews = [
    {
      id: 1,
      name: 'Arjun Sharma',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 5,
      message: 'Excellent care and support from the doctors.',
    },
    {
      id: 2,
      name: 'Priya Kapoor',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 4,
      message: 'The service was good, but the waiting time could have been better managed.',
    },
    {
      id: 3,
      name: 'Ravi Verma',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5,
      message: 'The hospital staff was very professional and attentive to my needs throughout my stay.',
    },
    {
      id: 4,
      name: 'Neha Patel',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      rating: 3,
      message: 'Good experience overall.',
    },
    {
      id: 5,
      name: 'Manish Kumar',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      rating: 4,
      message: 'A pleasant experience with knowledgeable doctors, though a bit more cleanliness would help.',
    },
    {
      id: 6,
      name: 'Anjali Reddy',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      rating: 5,
      message: 'Amazing hospital with top-notch doctors and excellent facilities. Highly recommend this place!',
    },
    {
      id: 7,
      name: 'Suresh Gupta',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      rating: 4,
      message: 'Great staff, great service, but the overall experience could be smoother with less waiting.',
    },
    {
      id: 8,
      name: 'Sanya Mehta',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      rating: 5,
      message: 'Fantastic experience, the doctors and nurses made me feel comfortable and well taken care of.',
    },
    {
      id: 9,
      name: 'Vikram Singh',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      rating: 3,
      message: 'The experience was average; the care was decent but could be more efficient.',
    },
    {
      id: 10,
      name: 'Isha Desai',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      rating: 4,
      message: 'Good overall care. Could improve response time, but the doctors were excellent.',
    },
  ];
  
  

const TestimonialPage = () => {
  return (
    <>
     <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Our Testimonials`, link: `/testimonials` },
        ]}
        title="What Our Customers Say"
      />
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TestimonialPage;
