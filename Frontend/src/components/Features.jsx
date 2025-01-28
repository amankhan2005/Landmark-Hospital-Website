import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import pattern from "../assets/home/whywechoose.png";
import workingTime from "../assets/home/time-table.jpg";
import bookAppointment from "../assets/home/book-appointment.png";
import cases from "../assets/home/cases.png";
import contactUs from "../assets/home/contactUs.png";

const featureData = [
  {
    title: "Time Table",
    description: `Mon-Sat: 9:00 AM - 7:00 PM Sun: CLOSED`,
    link: "/",
    icon: workingTime,
  },
  {
    title: "Book Appointment",
    description: "Book an appointment with ease.",
    link: "/appointments",
    icon: bookAppointment,
  },
  {
    title: "Cases",
    description: "View emergency cases.",
    link: "/emergency-cases",
    icon: cases,
  },
  {
    title: "Contact Us",
    description: "Reach out to us for assistance.",
    link: "/contact-us",
    icon: contactUs,
  },
];

const FeaturesOverlay = () => {
  return (
    <>
      {/* Features Overlay */}
      <div className="md:absolute bottom-[-50px] flex justify-center items-center bg-opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-10">
          {featureData.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="bg-white relative text-black p-4 flex items-center  rounded-xl shadow-2xl hover:shadow-lg hover:shadow-gray-100 transition-shadow duration-300"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.6,
                  zIndex: 0,
                }}
              ></div>
              <div className="w-16 h-16 mr-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-1 text-sm">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesOverlay;
