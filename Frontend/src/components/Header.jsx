import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown toggle
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://picsum.photos/150/50"
              alt="Hope Hospital"
              className="h-12"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="lg:hidden text-gray-800 text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i> // Close Icon
          ) : (
            <i className="fas fa-bars"></i> // Hamburger Icon
          )}
        </div>

        {/* Navigation Items for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-semibold">
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">About Hope Hospital ▾</Link>
            {openDropdown === "about" && (
              <ul className="absolute z-50 left-0 mt-2 bg-white shadow-md border rounded-md py-2 w-48">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/our-team">Our Team</Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("specialities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">Specialities ▾</Link>
            {openDropdown === "specialities" && (
              <ul className="absolute z-50 left-0 mt-2 bg-white shadow-md border rounded-md py-2 w-48">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/cardiology">Cardiology</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/neurology">Neurology</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-500">
            <Link to="/facilities">Our Team</Link>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("cases")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">Cases ▾</Link>
            {openDropdown === "cases" && (
              <ul className="absolute z-50 left-0 mt-2 bg-white shadow-md border rounded-md py-2 w-48">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/case-studies">Case Studies</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-500">
            <Link to="/testimonials">Testimonials</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col text-gray-800 font-semibold space-y-2 py-4 px-6">
            <li className="hover:text-blue-500">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/our-team" onClick={() => setIsMobileMenuOpen(false)}>
                Our Team
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/cardiology" onClick={() => setIsMobileMenuOpen(false)}>
                Cardiology
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/neurology" onClick={() => setIsMobileMenuOpen(false)}>
                Neurology
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link
                to="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
