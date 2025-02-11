import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'
export default function TopNavBar() {
    return (
      <header className="bg-primary text-white">
        <div className="container mx-auto flex justify-between md:gap-0 gap-2 items-center py-2 px-4">
          {/* Left side: Email and Address */}
          <div className="flex items-center space-x-6">
            <a href="mailto:info@hopehospital.com" title="Email" aria-label='email' className="lg:flex hidden items-center space-x-2 hover:cursor-pointer hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fas fa-envelope"></i>
              <span>info@hopehospital.com</span>
            </a>
            <a href="https://maps.app.goo.gl/zfh654X2njSzau8R6" title="Location of Hope hospital" aria-label="Location" className="flex items-center space-x-2 hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fas fa-map-marker-alt"></i>
              <span className="md:text-base text-xs line-clamp-1">Gonda Road, Near Vinayak Resorts, Bahraich - 271801 (U.P.)</span>
            </a>
          </div>
          <Link to='/appointment' title="Book Appointment" aria-label="Book-Appointment" className="lg:flex hidden hover:scale-x-105 ease-in-out transition-all duration-500 gap-2 shadow-2xl rounded py-1 bg-white px-2 text-primary md:font-semibold ">
            <span className="animate-bounce"><i className="fa-solid fa-calendar-check"></i></span><span>Book Appointment</span>
          </Link>
  
          {/* Right side: Social media icons */}
          <div aria-label="Social Media Links" className="flex md:space-x-5 space-x-3 md:text-lg text-sm justify-center items-center">
          <a href="#" aria-label="Facebook" title="Facebook" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaFacebookF aria-hidden="true" />
        </a>
        <a href="#" aria-label="Twitter" title="Twitter" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaXTwitter aria-hidden="true" />
        </a>
        <a href="#" aria-label="Instagram" title="Instagram" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaInstagram aria-hidden="true" />
        </a>
        <a href="#" aria-label="YouTube" title="YouTube" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaYoutube aria-hidden="true" />
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaLinkedinIn aria-hidden="true" />
        </a>
        <a href="#" aria-label="Google Plus" title="Google Plus" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaGooglePlusG aria-hidden="true" />
        </a>
          </div>
        </div>
      </header>
    );
  }
  