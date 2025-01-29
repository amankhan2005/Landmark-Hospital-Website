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

const ContactUs = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teamMembers = [
    {
      name: "Dr. O.P. Pandey",
      specialty: "Medical Director",
      image: "https://picsum.photos/300/300?random=1",
    },
    {
      name: "Dr. Anil Srivastava",
      specialty: "Hematologist",
      image: "https://picsum.photos/300/300?random=2",
    },
    {
      name: "Dr. A.k. Mishra",
      specialty: "Family Doctor",
      image: "https://picsum.photos/300/300?random=3",
    },
    {
      name: "Dr. B.P. Singh",
      specialty: "Skin Specialist",
      image: "https://picsum.photos/300/300?random=4",
    },
    {
      name: "Dr. B.P. Singh",
      specialty: "Skin Specialist",
      image: "https://picsum.photos/300/300?random=5",
    },
    {
      name: "Dr. B.P. Singh",
      specialty: "Skin Specialist",
      image: "https://picsum.photos/300/300?random=6",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(
        "https://db.drmanasaggarwal.com/api/v1/inquiry/express",
        formData
      );
      if (res.status === 200 || 201) {
        Swal.fire({
          title: "Successfull!",
          text: "Your Enquiry has been submited",
          icon: "success",
        });
      } else {
        setError("Something Went Wrong");
      }
    } catch (err) {
      setError("Something Went Wrong");
      Swal.fire({
        title: "Failed!",
        text: "Try After Some Time ",
        icon: "error",
      });
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        number: "",
        email: "",
        service: "",
        message: "",
      });
    }
  };

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
            <div className=" bg-blue-500 rounded-4xl  py-8 px-4">
              <div className="text-4xl messiri">
                <FaLocationDot className="inline-block mr-2 text-3xl my-4 " />{" "}
                Our Location
              </div>
              <p className="text-gray-100">
                Gonda Road, Near Vinayak Resorts, Bharaich - 271801 (U.P.)
              </p>
            </div>
            <div className=" bg-blue-400 rounded-4xl py-8 px-4">
              <div className="text-4xl messiri">
                <FaPhone className="inline-block mr-2 text-3xl my-4 rotate-90" /> Connect
                with Us
              </div>
              <p className="text-gray-100">
                CALL: +01132534567 <br/> +011 3253 4569
              </p>
            </div>
            <div className=" bg-blue-500 rounded-4xl py-8 px-4">
              <div className="text-4xl messiri">
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
          <div className="w-full flex-2 bg-white p-8 pt-6 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 messiri">
              Book Appointment
            </h3>
            <form className="mt-4 flex flex-col gap-4">
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
              </select>
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
                <option>Select Doctor</option>
                {teamMembers.map((doc, index) => (
                  <option key={index}>{doc.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300">
                Appointment Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 rounded-lg shadow-lg">
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
