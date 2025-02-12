import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import { specialities } from "../SpecilitesData";
import { FaChevronCircleRight } from "react-icons/fa";

const handletop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 gap-8">
            
            {/* 📌 Contact Section */}
            <address className="not-italic">
              <div className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Get In Touch With Us
              </div>
              <ul>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <a href="mailto:hospital@gmail.com" className="hover:underline" aria-label="Email us at hospital@gmail.com">
                    hospital@gmail.com
                  </a>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <a href="tel:7840060096" className="hover:underline" aria-label="Call us at +91-7840060096">
                    +91-7840060096
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://maps.app.goo.gl/nt8BVHTHFHfzuJL77" className="flex items-center hover:underline" aria-label="Find us on Google Maps">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span className="text-left">Gonda Road, Near Vinayak Resorts, Bahraich - 271801 (U.P.)</span>
                  </a>
                </li>
              </ul>

              {/* 📌 Social Media Icons */}
              <nav className="mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="hover:text-gray-200 text-xl hover:scale-125" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200 text-xl hover:scale-125" aria-label="Twitter">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200 text-xl hover:scale-125" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200 text-xl hover:scale-125" aria-label="YouTube">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200 text-xl hover:scale-125" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </nav>
                <a href="https://hope-adminpannel.netlify.app/" target="_blank" title="Admin Login" aria-label="Admin Login" className="border inline-block border-white my-4 py-1 px-3 rounded hover:bg-white hover:text-blue-900 cursor-pointer">Admin Login</a>
             
            </address>

        
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Our Specialities
              </h4>
              <ul className="space-y-1">
                {specialities.map((item, index) => (
                  <li key={index}>
                    <FaChevronCircleRight className="inline-block mr-2" />
                    <Link to={`/specialities/${item.link}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            
            <nav>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Quick Links
              </h4>
              <ul className="space-y-1">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Cases", path: "/cases" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "Blog", path: "/blog" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <FaChevronCircleRight className="inline-block mr-2" />
                    <Link to={link.path} className="hover:underline" onClick={handletop}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 messiri">
                Location
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5874931405597!2d81.62148837471162!3d27.575309976258538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999af00557829fb%3A0xeb3ebdb88183dbe6!2sHope%20Hospital!5e0!3m2!1sen!2sin!4v1738136721650!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                title="Google Map showing hospital location"
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
