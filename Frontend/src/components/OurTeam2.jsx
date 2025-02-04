import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppointmentForm from "./AppointmentForm";

const teamMembers = [
  {
    name: "Dr. O.P. Pandey",
    specialty: "Medical Director",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Dr. Anil Srivastava",
    specialty: "Hematologist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Dr. A.k. Mishra",
    specialty: "Family Doctor",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dr. B.P. Singh",
    specialty: "Skin Specialist",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Dr. Rajesh Verma",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Dr. Sameer Khan",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export default function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="lg:py-14 md:py-12 py-10 bg-gray-100 text-center">
      <h1 className="md:text-4xl text-2xl messiri font-bold text-blue-600">
        Meet Our Team
      </h1>
      <p className="text-gray-600 mb-7">
        Our dedicated professionals committed to your health.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-6 md:px-6 px-3">
        {/* Left Column - Team Members */}
        <div className="w-full md:w-2/3">
          {/* Grid layout for Desktop */}
          <div className="hidden mt-2 sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="p-4 text-center bg-white shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slick Slider for Mobile */}
          <div className="sm:hidden">
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className=" rounded-lg">
                  <div className="overflow-hidden shadow-lg ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-4 text-center bg-white shadow-md">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-500">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right Column - Appointment Form */}
        <div className="w-full md:w-1/3 md:mt-0 mt-6">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
