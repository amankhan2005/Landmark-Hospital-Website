import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios'
import {
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
     }, []);
  const servicesList = [
    "Cab Rental Services",
    "Tour Packages",
    "Bus Booking Services",
    "Train Ticketing Services",
    "Air Ticketing Services",
    "Passport & Visa Services",
    "Other Services ",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true)
      setError(null)
      const res = await axios.post('https://db.drmanasaggarwal.com/api/v1/inquiry/express',formData)
      if(res.status === 200 || 201){
        Swal.fire({
          title: "Successfull!",
          text: "Your Enquiry has been submited",
          icon: "success"
        });
      }
      else{
      setError('Something Went Wrong');
      }
    } catch (err) {
      setError('Something Went Wrong')
      Swal.fire({
        title: "Failed!",
        text: "Try After Some Time ",
        icon: "error"
      });
    }
    finally{
      setLoading(false)
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
      {/* Header */}
      <h1 className="breadcrumb relative md:pt-32 pt-24 pb-12 font-bold text-center mb-12 text-white ">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Contact Us</div>
        <div className="relative z-10 text-lg mt-2 text-secondary">
          <Link to={"/"}>           <span className="hover:text-gray-300 cursor-pointer text-white">Home / </span>
          </Link>

          Contact Us
        </div>
      </h1>

      {/* Form and Office Details Section */}
      <div className=" md:px-8  lg:px-4  gap-6 md:gap-0 lg:mb-12  ">
        <div className="flex lg:mx-10  lg:flex-row flex-col lg:gap-0 gap-4">
          {/* Office Details */}
          <div className="border flex-2 bg-white  md:bg-transparent text-gray-800 md:p-10 p-6 rounded-lg shadow-2xl z-10 ">
            <h2 className="md:text-2xl text-xl font-bold mb-4">Get in Touch with Us</h2>
            <a href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA" className="mb-2 flex justify-start items-start gap-2">
              <FaLocationDot className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div className="font-sans ">
                <div className="text-lg  font-semibold text-secondary tracking-wider lg:mt-[-7px]">
                  Address
                </div>
                45A, Dayal Enclave, Sector 9, Indira Nagar,{" "}
                <br className="lg:block hidden" /> Lucknow, Uttar Pradesh 226016
              </div>
            </a>
            <a href="mailto:info@xpresstourtravels.com" className="mb-2 flex justify-start items-start gap-2 mt-4">
              <MdEmail className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div className="font-sans">
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Mail For Information
                </div>
                info@xpresstourtravels.com
              </div>
            </a>
            <a href="tel:+91-9935115786," className="mb-2 flex justify-start items-start gap-2 mt-4">
              <FaPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rotate-90 rounded w-8 h-8" />
              <div>
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Call for Help
                </div>
                +91-9935115786, 7860021583
              </div>
            </a>
            <a href="tel:0522-4077786" className="mb-2 flex justify-start items-start gap-2 mt-4">
              <GiRotaryPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div className="font-sans">
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Land Line help
                </div>
                0522-4077786, 2700786, 2312786
              </div>
            </a>
            <p className="flex gap-4 mt-4 ">
            <a
                href="tel:+91-9935115786"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaPhone className="rotate-90" size={23} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9935115786"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://www.youtube.com/@xpresstourandtravels"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.facebook.com/people/xpress-tour-and-travels/61569937321411/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://www.instagram.com/xpresstourandtravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-t to-red-500 from-pink-600 p-2 rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaInstagram size={30} />
              </a>

              
            </p>
          </div>
          <div className="lg:absolute lg:block hidden z-[-10] w-[500px] h-[500px] bg-secondary rounded-full transform translate-x-[40%] translate-y-[40%] md:opacity-50 opacity-100"></div>
          <div className="lg:absolute hidden top-0 right-0 z-[-10] w-[500px] h-[500px] lg:bg-secondary bg-primary rounded-full transform translate-x-[0%] translate-y-[0%] md:opacity-50 opacity-100"></div>

          {/* Enquiry Form */}
          <div className="pt-4 px-8 pb-2 flex-1 bg-primary  border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Enquiry Now
            </h2>
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="text-red-500 bg-white rounded font-medium w-full mx-2 p-1">
                  {error}!
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-lg font-semibold text-gray-100 mt-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 bg-primary  shadow-sm outline-none text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-semibold text-gray-100 mt-2"
                    htmlFor="number"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Enter your phone number"
                    name="number"
                    minLength="10"
                    maxLength="10"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 bg-primary  shadow-sm outline-none text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-semibold text-gray-100 mt-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 bg-primary  shadow-sm outline-none text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-semibold text-gray-100 mt-3"
                    htmlFor="service"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    placeholder="Select a service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 mt-1 bg-primary  shadow-sm outline-none text-white"
                    required
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    {servicesList.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-lg font-semibold text-gray-100 mt-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full border-b-2 bg-primary  shadow-sm outline-none text-white"
                    placeholder="Enter your message here..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="md:text-left text-center  mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-secondary text-white py-3 px-12 text-lg font-semibold rounded-full shadow-lg transition hover:bg-secondary/80"
                >
                  {loading ? <span>Sending..</span> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

 
      </div>
            
             <div className="bg-white py-4 rounded-lg shadow-lg">
          {/* <div className="text-2xl font-semibold mb-2">Our Location</div> */}
          <iframe
            className="w-full md:h-96 h-[20rem] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.671640149946!2d81.003404574093!3d26.88217166140491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdaddf88da7f%3A0x436ab4e6e38ea103!2sXpress%20Tour%20And%20Travels!5e0!3m2!1sen!2sin!4v1737034567545!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default ContactUs;