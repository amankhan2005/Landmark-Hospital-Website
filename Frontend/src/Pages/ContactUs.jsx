import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BreadCumb from "../components/Breadcumb";
import AppointmentForm from "../components/AppointmentForm";
import pattern from "../assets/pattern12.jpg";
import ContactUsForm from "../components/ContactUsForm";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Contact Us`, link: `/contact` },
        ]}
        title="Contact Us"
      />

      {/* Form and Office Details Section */}
      <div className=" md:px-8 mt-10  lg:px-4  gap-6 md:gap-0 lg:mb-12  ">
        <div className="flex lg:mx-10  lg:flex-row flex-col  gap-4">
        <div className="flex-1 relative flex flex-col px-6 gap-6 text-white">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${pattern})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      opacity: 0.8,
      zIndex: -1,
    }}
  ></div>
  
  <div className="bg-slate-800 rounded-xl py-5 px-6">
    <div className="text-3xl font-bold flex items-center messiri">
      <FaLocationDot className="inline-block mr-2 text-3xl " /> Our Location
    </div>
    <p className="text-gray-100 mt-2">
      Gonda Road, Near Vinayak Resorts, Bharaich - 271801 (U.P.)
    </p>
  </div>
  
  <div className="bg-primary rounded-xl py-5 px-6">
    <div className="text-3xl font-bold flex items-center messiri">
      <FaPhone className="inline-block mr-2 text-3xl rotate-90" /> Connect with Us
    </div>
    <p className="text-gray-100 mt-2">
      CALL:{" "}
      <a href="tel:+917840060096" className="hover:text-white">
        +91-7840060096
      </a>
      ,{" "}
      <a href="tel:+917840060096" className="hover:text-white">
        +91-7840060096
      </a>
    </p>
  </div>
  
  <div className="bg-blue-900 rounded-xl py-5 px-6">
    <div className="text-3xl font-bold flex items-center messiri">
      <FaClock className="inline-block mr-2 text-3xl " /> Visiting Hours
    </div>
    <p className="text-gray-100 mt-2">
      Sunday: 08:00 AM - 10:00 PM <br />
      Monday - Friday: 06:00 AM - 12:00 AM
    </p>
  </div>
  
  <div className="flex md:space-x-4 space-x-3 justify-center items-center text-xl p-6">
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110 justify-center items-center rounded-full bg-gradient-to-r from-blue-800 to-blue-400 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110  justify-center items-center rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-700 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-x"></i>
    </a>
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110 justify-center items-center rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-200 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110 justify-center items-center rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-youtube"></i>
    </a>
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110 justify-center items-center rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a
      href="#"
      className="p-4 w-12 h-12 flex hover:-rotate-12 hover:scale-110 justify-center items-center rounded-full bg-gradient-to-r from-red-400 via-red-600 to-pink-500 hover:text-white transition duration-300 ease-in-out"
    >
      <i className="fab fa-google-plus-g"></i>
    </a>
  </div>
</div>

        

          {/* Enquiry Form */}
          <div className="flex-2 px-2">
            <ContactUsForm/>
          </div>
        </div>
      </div>

      <div className="bg-white md:pb-10 pb-6 rounded-lg shadow-lg">
        {/* <div className="text-2xl font-semibold mb-2">Our Location</div> */}
        <iframe
          className="w-full md:px-10 p-4 h-[20rem] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5874931405597!2d81.62148837471162!3d27.575309976258538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999af00557829fb%3A0xeb3ebdb88183dbe6!2sHope%20Hospital!5e0!3m2!1sen!2sin!4v1738136721650!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
