import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/hope-logo.png'
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-1 px-6 ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Hope Hospital Logo"
              className="w-44"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="lg:hidden text-gray-800 text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>

        {/* Navigation Items for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-semibold">
          <li className={`hover:text-blue-500  ${location.pathname === "/" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <span className="hover:text-blue-500">About Us ▾</span>
            {openDropdown === "about" && (
             <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-52 transition-all duration-300 text-sm">
             <li>
               <Link to="/our-team" className="block px-4 py-2 hover:bg-blue-100">
                 Our Team
               </Link>
             </li>
             <li>
               <Link to="/about-hospital" className="block px-4 py-2 hover:bg-blue-100">
                 About Hope Hospital
               </Link>
             </li>
           </ul>
           
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("specialities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to='/specialities' className="hover:text-blue-500">Specialities ▾</Link>
            {openDropdown === "specialities" && (
             <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-48 transition-all duration-300 text-sm">
             <li>
               <Link to="/specialities/general-surgery" className="block px-4 py-2 hover:bg-blue-100">
                 General Surgery
               </Link>
             </li>
             <li>
               <Link to="/specialities/orthopedic-surgery" className="block px-4 py-2 hover:bg-blue-100">
                 Orthopedic Surgery
               </Link>
             </li>
             <li>
               <Link to="/specialities/neurology" className="block px-4 py-2 hover:bg-blue-100">
                 Neurology
               </Link>
             </li>
             <li>
               <Link to="/specialities/gynecology" className="block px-4 py-2 hover:bg-blue-100">
                 Gynecology
               </Link>
             </li>
             <li>
               <Link to="/specialities/dermatology" className="block px-4 py-2 hover:bg-blue-100">
                 Dermatology
               </Link>
             </li>
             <li>
               <Link to="/specialities/critical-care" className="block px-4 py-2 hover:bg-blue-100">
                 Critical Care
               </Link>
             </li>
             <li>
               <Link to="/specialities/general-medicine" className="block px-4 py-2 hover:bg-blue-100">
                 General Medicine
               </Link>
             </li>
           </ul>
           
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("facilities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to='/facilities' className="hover:text-blue-500">Facilities ▾</Link>
            {openDropdown === "facilities" && (
             <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-48 transition-all duration-300 text-sm">
             <li>
               <Link to="/facilities/nicu" className="block px-4 py-2 hover:bg-blue-100">
                 NICU
               </Link>
             </li>
             <li>
               <Link to="/facilities/icu" className="block px-4 py-2 hover:bg-blue-100">
                 ICU
               </Link>
             </li>
             <li>
               <Link to="/facilities/general-care" className="block px-4 py-2 hover:bg-blue-100">
                 General Care
               </Link>
             </li>
             <li>
               <Link to="/facilities/private-care" className="block px-4 py-2 hover:bg-blue-100">
                 Private Care
               </Link>
             </li>
           </ul>
           
            )}
          </li>
          <li className={`hover:text-blue-500  ${location.pathname === "/cases" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/cases">Cases</Link>
          </li>
          <li className={`hover:text-blue-500  ${location.pathname === "/testimonials" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className={`hover:text-blue-500  ${location.pathname === "/blog" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={`hover:text-blue-500  ${location.pathname === "/gallery" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={`hover:text-blue-500  ${location.pathname === "/contact" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
