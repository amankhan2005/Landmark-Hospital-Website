import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/hope-logo.png";
import { specialities } from "../SpecilitesData";
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
            <img src={logo} alt="Hope Hospital Logo" className="w-44" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="">
          <div
            className="lg:hidden text-gray-800 text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-52 bg-white shadow-lg transform ${
              isMobileMenuOpen ? "translate-x-0 overflow-hidden" : "translate-x-full overflow-hidden"
            } transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
          >
              <div className="flex justify-around py-2 text-lg bg-primary ">
            <a href="#" className="hover: text-gray-50"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover: text-gray-50"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover: text-gray-50"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover: text-gray-50"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover: text-gray-50"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover: text-gray-50"><i className="fab fa-google-plus-g"></i></a>
          </div>
            <button
              className="absolute top-14 shadow-2xl  right-2 text-gray-100 text-2xl font-bold bg-primary hover-bg-primary h-10 w-10 rounded-full cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="text-gray-800 font-semibold space-y-4 px-2  mt-4 ">
              <li
                className={`hover:text-blue-500 ${
                  location.pathname === "/" ? "text-blue-500" : ""
                }`}
              >
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => handleDropdown("about")}
                  className="w-full text-left hover:text-blue-500"
                >
                  About Us ▾
                </button>
                {openDropdown === "about" && (
                  <ul className="block bg-white shadow-md rounded-md py-2 w-full text-sm">
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Hope Hospital
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <Link to='/specialities'
                  onClick={() => handleDropdown("specialities")}
                  className="w-full text-left hover:text-blue-500"
                >
                  Specialities ▾
                </Link>
                {openDropdown === "specialities" && (
                  <ul className="block bg-white shadow-md rounded-md py-2 w-full text-sm">
                    {specialities.map((item,i)=>(
                    <li>
                      <Link
                        to={`/specialities/${item.link}`}
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                    ))}
                   
                  </ul>
                )}
              </li>
              <li
            className="relative cursor-pointer"
          >
            <Link to="/facilities" className="hover:text-blue-500 " onClick={() => handleDropdown("facilities")}>
              Facilities ▾
            </Link>
            {openDropdown === "facilities" && (
              <ul className="block bg-white shadow-md rounded-md py-2 w-full  text-sm">
                <li>
                  <Link
                    to="/facilities/nicu"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    NICU
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/icu"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ICU
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/general-care"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    General Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/private-care"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Private Care
                  </Link>
                </li>
              </ul>
            )}
          </li>
              <li
                className={`hover:text-blue-500  ${
                  location.pathname === "/cases"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                <Link to="/cases" onClick={() => setIsMobileMenuOpen(false)}>Cases</Link>
              </li>
              <li
                className={`hover:text-blue-500  ${
                  location.pathname === "/testimonials"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                <Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
              </li>
              <li
                className={`hover:text-blue-500  ${
                  location.pathname === "/blog"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              </li>
              <li
                className={`hover:text-blue-500  ${
                  location.pathname === "/gallery"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              </li>
              <li
                className={`hover:text-blue-500 ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Navigation Items for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-semibold">
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/about" className="hover:text-blue-500">
              About Us ▾
            </Link>
            {openDropdown === "about" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-52 transition-all duration-300 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    About Hope Hospital
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Our Team
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
            <Link to="/specialities" className="hover:text-blue-500">
              Specialities ▾
            </Link>
            {openDropdown === "specialities" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-56 transition-all duration-300 text-sm">
                {specialities.map((item,i)=>(
                    <li>
                      <Link
                        to={`/specialities/${item.link}`}
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                    ))}
             
              </ul>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("facilities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/facilities" className="hover:text-blue-500">
              Facilities ▾
            </Link>
            {openDropdown === "facilities" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-48 transition-all duration-300 text-sm">
                <li>
                  <Link
                    to="/facilities/nicu"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    NICU
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/icu"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    ICU
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/general-care"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    General Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities/private-care"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Private Care
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/cases" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/cases">Cases</Link>
          </li>
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/testimonials"
                ? "border-b-2 border-blue-500"
                : ""
            }`}
          >
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/blog" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/gallery"
                ? "border-b-2 border-blue-500"
                : ""
            }`}
          >
            <Link to="/gallery">Gallery</Link>
          </li>
          <li
            className={`hover:text-blue-500  ${
              location.pathname === "/contact"
                ? "border-b-2 border-blue-500"
                : ""
            }`}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
