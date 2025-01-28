import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 messiri">Get In Touch With Us</h4>
            <ul>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:saumya.751983@gmail.com" className="hover:underline">
                  hope-hospital@gmail.com
                </a>
              </li>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+917570018529" className="hover:underline">
                  +91-9519838720
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <p>
                  14/25, Indira Nagar, Near Hope hospital, Lucknow
                </p>
              </li>
            </ul>
          </div>

          {/* Our Treatment Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 messiri">Our Treatment</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/treatment/high-risk-pregnancy" className="hover:underline">
                  General Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatment/sustainable-menstruation" className="hover:underline">
                  Orthopedic Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatment/infertility-treatment" className="hover:underline">
                  Neurology
                </Link>
              </li>
              <li>
                <Link to="/treatment/hysterectomy" className="hover:underline">
                  Gynecology
                </Link>
              </li>
              <li>
                <Link to="/treatment/mtp-dnc" className="hover:underline">
                  Demotology
                </Link>
              </li>
              <li>
                <Link to="/treatment/mtp-dnc" className="hover:underline">
                  Critical Cares
                </Link>
              </li>
              <li>
                <Link to="/treatment/mtp-dnc" className="hover:underline">
                  General Medicines
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 messiri">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cases" className="hover:underline">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 messiri">Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8258954949816!2d80.9461599149301!3d26.846708883152476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd52d59325e5%3A0xa2a2d0ae8a1c77c2!2sDr%20Somya%20Singh!5e0!3m2!1sen!2sin!4v1672056892416!5m2!1sen!2sin"
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
  );
};

export default Footer;
