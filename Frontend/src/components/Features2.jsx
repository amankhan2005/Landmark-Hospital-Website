import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className=" max-w-6xl mx-auto px-2 md:grid grid-cols-1 md:grid-cols-4 gap-2 shadow-lg rounded-lg " data-aos='fade-up'>
      {/* Working Time */}
      <div className="bg-blue-900 text-white md:p-6 p-3 mb-1 md:block hidden">
        <h3 className="text-lg font-semibold">Working Time</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex justify-between border-b pb-1">
            <span>Mon - Wed</span>
            <span className="font-semibold">9:00 AM - 7:00 PM</span>
          </li>
          <li className="flex justify-between border-b pb-1">
            <span>Thursday</span>
            <span className="font-semibold">9:00 AM - 6:30 PM</span>
          </li>
          <li className="flex justify-between border-b pb-1">
            <span>Friday</span>
            <span className="font-semibold">9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sun - Sun</span>
            <span className="font-semibold">CLOSED</span>
          </li>
        </ul>
      </div>

      {/* Doctors Timetable */}
      <div className="bg-primary text-white md:p-6 p-3 flex flex-col justify-between mb-1">
        <div>
          <h3 className="text-lg font-semibold">Expert Doctors</h3>
          <p className="text-sm mt-2 ">
            Our experienced doctors are dedicated to
            providing exceptional medical care with compassion and expertise.
          </p>
        </div>
        <Link
          to="/our-team"
          className="mt-4 text-center border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition"
        >
          View Doctors
        </Link>
      </div>

      {/* Appointments */}
      <div className="bg-blue-900 text-white md:p-6 p-3 flex flex-col justify-between mb-1">
        <div>
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-sm mt-2">
            Schedule your appointment with our expert doctors easily and get the
            best medical care at your convenience.
          </p>
        </div>

        <Link
          to="/contact"
          className="mt-4 text-center border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition"
        >
          Make an Appointment
        </Link>
      </div>

      {/* Emergency Cases */}
      <div className="bg-primary text-white md:p-6 p-3 mb-1">
  <h3 className="text-lg font-semibold">Emergency Cases</h3>
  <a href="7840060096" className="md:mt-4 mt-2 flex items-center gap-2 md:text-xl text-base font-semibold">
    <FaPhoneAlt />
    <span>+91-7840060096</span>
  </a>
  <p className="text-sm mt-2">
    In case of a medical emergency, call us immediately. Our emergency team is available 24/7 to provide urgent care and assistance.
  </p>
</div>

    </section>
  );
};

export default Features;
