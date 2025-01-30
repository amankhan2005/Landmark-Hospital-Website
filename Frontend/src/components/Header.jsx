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
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-52 transition-all duration-300">
                <li className="px-4 py-2 hover:bg-blue-100 ">
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/about-hospital">About Hope Hospital</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("specialities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <span className="hover:text-blue-500">Specialities ▾</span>
            {openDropdown === "specialities" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md  rounded-md py-2 w-48 transition-all duration-300">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/general-surgery">General Surgery</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/orthopedic-surgery">Orthopedic Surgery</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/neurology">Neurology</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/gynecology">Gynecology</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/dermatology">Dermatology</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/critical-care">Critical Care</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/specialities/general-medicine">General Medicine</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("facilities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <span className="hover:text-blue-500">Facilities ▾</span>
            {openDropdown === "facilities" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md  rounded-md py-2 w-48 transition-all duration-300">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/nicu">NICU</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/icu">ICU</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/general-care">General Care</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/private-care">Private Care</Link>
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
