 import React, { useEffect } from "react";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BreadCumb from "../components/Breadcumb";
import pattern from "../assets/pattern12.jpg";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen    ">
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Contact Us`, link: `/contact` },
        ]}
        title="Contact Us"
      />

      {/* Form and Office Details Section */}
      <div className="   md:px-8 mt-10 lg:px-4 gap-6 md:gap-0 lg:mb-12">
        <div className="  flex lg:mx-10 lg:flex-row flex-col gap-4">
          {/* Contact Info */}
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

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/76GYsXemfE3SqpLo9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary  cursor-pointer rounded-xl py-5 px-6"
            >
              <div className="text-3xl font-bold flex items-center  ">
                <FaLocationDot className="inline-block mr-2 text-3xl" /> Our Location
              </div>
              <p className="text-gray-100 mt-2">
                M- II/016, CC, Prabhat Chauraha, Sector I, Janki Vihar Colony,
                Jankipuram, Lucknow, Uttar Pradesh 226021
              </p>
            </a>

            {/* Phone */}
            <div className="bg-primary rounded-xl py-5 px-6">
              <div className="text-3xl font-bold flex items-center  ">
                <FaPhone className="inline-block mr-2 text-3xl rotate-90" /> Connect with Us
              </div>
              <p className="text-gray-100 mt-2">
                CALL:{" "}
                <a href="tel:987654321" className="hover:text-white cursor-pointer">
                  +91-987654321
                </a>
              </p>
            </div>

            {/* Visiting Hours */}
            <div className=" bg-primary rounded-xl py-5 px-6">
              <div className="text-3xl font-bold flex items-center ">
                <FaClock className="inline-block mr-2 text-3xl" /> Visiting Hours
              </div>
              <p className="text-gray-100 mt-2">
                Mon - Sat (Morning): 10:00 AM - 1:00 PM <br />
                Mon - Sat (Evening): 6:00 PM - 9:00 PM <br />
                Sunday: CLOSED
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="flex-2 px-2">
            <ContactUsForm />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-white md:pb-10 pb-6 rounded-lg shadow-lg">
        <iframe
          className="w-full  md:px-10 p-4 h-[20rem] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.395156981833!2d80.94437887522473!3d26.922684476641265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570b190f211f%3A0x574e3bb68777d9c2!2sLandmark%20Advance%20Neurospine%20Care%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1755171794651!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
