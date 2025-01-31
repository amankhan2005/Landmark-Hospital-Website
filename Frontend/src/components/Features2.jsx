import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="md:absolute hidden left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-6xl md:grid grid-cols-1 md:grid-cols-4 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Working Time */}
      <div className="bg-blue-400 text-white p-6">
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
      <div className="bg-blue-500 text-white p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">Doctors Timetable</h3>
          <p className="text-sm mt-2">
            An magnis nulla dolor at sapien augue erat iaculis purus tempor
            magna ipsum et vitae a purus primis ipsum magna ipsum
          </p>
        </div>
        <button className="mt-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition">
          View Timetable
        </button>
      </div>

      {/* Appointments */}
      <div className="bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-sm mt-2">
            An magnis nulla dolor at sapien augue erat iaculis purus tempor
            magna ipsum et vitae a purus primis ipsum magna ipsum
          </p>
        </div>
        <button className="mt-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition">
          Make an Appointment
        </button>
      </div>

      {/* Emergency Cases */}
      <div className="bg-blue-700 text-white p-6">
        <h3 className="text-lg font-semibold">Emergency Cases</h3>
        <div className="mt-4 flex items-center gap-2 text-xl font-semibold">
          <FaPhoneAlt />
          <span>1-800-123-4560</span>
        </div>
        <p className="text-sm mt-2">
          An magnis nulla dolor sapien augue erat iaculis purus tempor magna
          ipsum et vitae a purus primis ipsum magna ipsum
        </p>
      </div>
    </section>
  );
};

export default Features;
