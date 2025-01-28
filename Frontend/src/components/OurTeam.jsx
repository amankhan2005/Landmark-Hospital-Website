import React from 'react';
import Slider from 'react-slick';

const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://picsum.photos/300/300?random=1' },
    { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://picsum.photos/300/300?random=2' },
    { name: 'Dr. Alice Brown', specialty: 'Pediatrician', image: 'https://picsum.photos/300/300?random=3' },
    { name: 'Dr. Bob White', specialty: 'Orthopedic', image: 'https://picsum.photos/300/300?random=4' },
    { name: 'Dr. Emily Green', specialty: 'Dermatologist', image: 'https://picsum.photos/300/300?random=5' },
    // Add more doctors here
  ];
  

const OurTeam = () => {
  const settings = {
    dots: true, // Pagination
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 3, // Default number of slides visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto lg:py-14 md:py-12 py-10 px-4 ">
      <h2 className="text-3xl font-semibold text-center mb-6 messiri">Highly Qualified Doctors</h2>
      <Slider {...settings}  >
        {doctors.map((doctor, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <img src={doctor.image} alt={doctor.name} className="w-full h-65 object-cover rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurTeam;
