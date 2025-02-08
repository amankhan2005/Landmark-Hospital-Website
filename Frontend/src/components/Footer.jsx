import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BottomFooter from "./BottomFooter";

import { specialities } from "../SpecilitesData";
import { FaChevronCircleRight } from "react-icons/fa";

const handletop = ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white pt-8 pb-3 border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 gap-8">
            {/* Contact Section */}
            <div>
              <h4 className="text-2xl  font-semibold md:mb-4 mb-2 messiri">
                Get In Touch With Us
              </h4>
              <ul>
                <li className="flex items-center mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
                  <a
                    href="mailto:hospital@gmail.com"
                    className="hover:underline"
                  >
                    hospital@gmail.com
                  </a>
                </li>
                <li className="flex items-center mb-3">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 " />
                  <a href="tel:+917840060096" className="hover:underline">
                    +917840060096
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 " />
                  <p className="text-left">
                    Gonda Road, Near Vinayak Resorts, Bharaich - 271801 (U.P.)
                  </p>
                </li>
                <div className="flex space-x-4 justify-left mt-4 items-center">
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-xl hover:scale-125">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </ul>
            </div>

            {/* Our Facilities Section */}
            {/* <div className="">
            <h4 className="text-2xl font-semibold md:md:mb-4 mb-2 mb-2 messiri">Our Facilities</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/treatment/high-risk-pregnancy" className="hover:underline">
                  NICU
                </Link>
              </li>
              <li>
                <Link to="/treatment/sustainable-menstruation" className="hover:underline">
                  ICU
                </Link>
              </li>
              <li>
                <Link to="/treatment/infertility-treatment" className="hover:underline">
                  General Care
                </Link>
              </li>
              <li>
                <Link to="/treatment/hysterectomy" className="hover:underline">
                Private Care
                </Link>
              </li>
             
            </ul>
          </div> */}
            {/* Our Treatment Section */}
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Our Specialities
              </h4>
              <ul className="space-y-2">
                {specialities.map((item,index) => (
                  <li key={index}>
                    {/* <span><img src={item.image} className="h-6 mr-2 bg-white p-0.5 rounded-full inline-block"/></span> */}
                    <FaChevronCircleRight className="inline-block mr-2" />
                    <Link
                      to={`/specialities/${item.link}`}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

               
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/" className="hover:underline" onClick={handletop}>
                    Home
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/cases" className="hover:underline">
                    Cases
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5874931405597!2d81.62148837471162!3d27.575309976258538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999af00557829fb%3A0xeb3ebdb88183dbe6!2sHope%20Hospital!5e0!3m2!1sen!2sin!4v1738136721650!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>

      <BottomFooter />
    </>
  );
};

export default Footer;
