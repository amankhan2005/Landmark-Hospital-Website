import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faPills,
  faTooth,
  faEye,
  faHeartPulse,
  faBaby
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faUserDoctor,
    title: "Qualified Doctors",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  },
  {
    icon: faPills,
    title: "Pharmacy Support",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  },
  {
    icon: faTooth,
    title: "Dental Care & Service",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  },
  {
    icon: faEye,
    title: "Eye Care",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  },
  {
    icon: faHeartPulse,
    title: "Cardiology Service",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  },
  {
    icon: faBaby,
    title: "Gynaecological Clinic",
    description: "Lorem ipsum dolor sit amet, consectetur elit. Quis ipsa ullam dicta ipsum porro."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

