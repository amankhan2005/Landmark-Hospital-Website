import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaYoutube ,FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'
export default function TopNavBar() {
    return (
      <header className="  bg-primary text-white">
        <div className="  container mx-auto flex justify-between md:gap-0 gap-4 items-center py-2 px-4"  >
          {/* Left side: Email and Address */}
          <div className="flex items-center space-x-6">
            <a href="https://maps.app.goo.gl/NySWvTwjmSoAUuBV7" title="Email" aria-label='email' className="lg:flex hidden items-center space-x-2 hover:cursor-pointer hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fas fa-map-marker-alt"></i> 

            <span>M-II/016, Prabhat Chauraha, Janki Vihar, Lucknow, UP 226021</span>
            </a>
            <a href="tel:+91 84001-36465" title="Contact of Landmark Hospital" aria-label="Contact" className="flex items-center space-x-2 hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fa-solid fa-phone-volume text-white"></i>
              <span className="md:text-base text-xs line-clamp-1">+91 84001-36465</span>
            </a>
          </div>
            
          
   <div className="flex gap-6"> 
  <Link to='/appointment' title="Book Appointment" aria-label="Book-Appointment" className="flex  hover:scale-x-105 ease-in-out transition-all duration-500 gap-2 shadow-2xl rounded lg:py-1 py-0.5 bg-white lg:px-2 px-1 text-primary md:font-semibold ">
            <span className="animate-bounce"><i className="fa-solid fa-calendar-check"></i></span><span className="lg:text-base text-xs  flex justify-center items-center"><span className="lg:flex hidden">Book</span> Appointment</span>
          </Link>

          <div aria-label="Social Media Links" className="flex md:space-x-5 space-x-3 md:text-lg text-sm justify-center items-center">
          <a href="#" aria-label="Facebook" title="Facebook" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaFacebookF />
        </a>
        {/* <a href="#" aria-label="Twitter" title="Twitter" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaXTwitter />
        </a> */}
        <a href="#" aria-label="Instagram" title="Instagram" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaInstagram />
        </a>
        <a href="#" aria-label="YouTube" title="YouTube" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaYoutube />
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Whatsapp" title="Whatsapp" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaWhatsapp />
        </a>

        {/* <a href="#" aria-label="Google Plus" title="Google Plus" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300">
          <FaGooglePlusG />
        </a> */}
         
          </div>
          </div>
        </div>
      </header>
    );
  }
  