import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get In Touch With Us</h4>
            <ul>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:saumya.751983@gmail.com" className="hover:underline">
                  saumya.751983@gmail.com
                </a>
              </li>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+917570018529" className="hover:underline">
                  +91-7570018529
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <p>
                  14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
                </p>
              </li>
            </ul>
          </div>

          {/* Our Treatment Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Treatment</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  High-Risk Pregnancy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sustainable Menstruation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Infertility Treatment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hysterectomy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MTP & DNC
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Find Us</h4>
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
