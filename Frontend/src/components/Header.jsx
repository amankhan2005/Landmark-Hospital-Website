import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // State to handle dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown toggle
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://picsum.photos/150/50" 
              alt="Hope Hospital" 
              className="h-12"
            />
          </Link>
        </div>

        {/* Right Side: Navigation Items */}
        <ul className="flex space-x-8 text-gray-800 font-semibold">
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>

          {/* About Hope Hospital Dropdown */}
          <li 
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            // onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">About Hope Hospital ▾</Link>
            {openDropdown === "about" && (
              <ul 
                className="absolute z-50 left-0 mt-2 bg-white shadow-md border rounded-md py-2 w-48"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/our-team">Our Team</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Specialities Dropdown */}
          <li 
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("specialities")}
            // onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">Specialities ▾</Link>
            {openDropdown === "specialities" && (
              <ul 
                className="absolute z-50 left-0 mt-2 bg-white shadow-md border rounded-md py-2 w-48"
                onMouseEnter={() => setOpenDropdown("specialities")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
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
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link to="/testimonials">Testimonial</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link to="/facilities">Facilities</Link>
          </li>

          {/* Cases Dropdown */}
          <li 
            className="relative cursor-pointer"
            onMouseEnter={() => handleDropdown("cases")}
            // onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="#">Cases ▾</Link>
            {openDropdown === "cases" && (
              <ul 
                className="absolute z-50 left-0 mt-6 bg-white shadow-md border rounded-md py-2 w-48"
                onMouseEnter={() => setOpenDropdown("cases")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link to="/case-studies">Case Studies</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-500">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
