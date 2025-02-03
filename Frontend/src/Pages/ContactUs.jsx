import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";
import AppointmentForm from "../components/AppointmentForm";

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
          <div className="flex-1 flex flex-col  gap-4 text-white">
            <div className=" bg-gray-800 rounded-4xl  py-8 px-4">
              <div className="text-3xl messiri">
                <FaLocationDot className="inline-block mr-2 text-3xl my-4 " />{" "}
                Our Location
              </div>
              <p className="text-gray-100">
                Gonda Road, Near Vinayak Resorts, Bharaich - 271801 (U.P.)
              </p>
            </div>
            <div className=" bg-pink-500 rounded-4xl py-8 px-4">
              <div className="text-3xl messiri">
                <FaPhone className="inline-block mr-2 text-3xl my-4 rotate-90" /> Connect
                with Us
              </div>
              <p className="text-gray-100">
                CALL: +01132534567 <br/> +011 3253 4569
              </p>
            </div>
            <div className=" bg-purple-600 rounded-4xl py-8 px-4">
              <div className="text-3xl messiri">
                <FaClock className="inline-block mr-2 text-3xl my-4" /> Visiting Hours
              </div>
              <p className="text-gray-100">
              Sunday: 08:00 AM - 10:00 PM <br/>
              Monday - Friday: 06:00 AM - 12:00 AM
              </p>
            </div>
          </div>
          <div className="lg:absolute lg:block hidden z-[-10] w-[500px] h-[500px] bg-secondary rounded-full transform translate-x-[40%] translate-y-[40%] md:opacity-50 opacity-100"></div>
          <div className="lg:absolute hidden top-0 right-0 z-[-10] w-[500px] h-[500px] lg:bg-secondary bg-primary rounded-full transform translate-x-[0%] translate-y-[0%] md:opacity-50 opacity-100"></div>

          {/* Enquiry Form */}
         <div className="flex-2">
          <AppointmentForm/>
         </div>
        </div>
      </div>

      <div className="bg-white  rounded-lg shadow-lg">
        {/* <div className="text-2xl font-semibold mb-2">Our Location</div> */}
        <iframe
          className="w-full px-10 h-[20rem] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5874931405597!2d81.62148837471162!3d27.575309976258538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999af00557829fb%3A0xeb3ebdb88183dbe6!2sHope%20Hospital!5e0!3m2!1sen!2sin!4v1738136721650!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
