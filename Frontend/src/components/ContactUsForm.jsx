import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import Swal from "sweetalert2";

import {specialities} from '../SpecilitesData.jsx'

function   ContactUsForm() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [departments, setDepartments] = useState(
    specialities.map((speciality) => speciality.title)
  );
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    phone: "",
    email: "",
    message:""
  });

  const [formErrors, setFormErrors] = useState({});

;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    const selectedDept = e.target.value;
    setSelectedDepartment(selectedDept);
    setFormData({ ...formData, department: selectedDept, doctor: "" });
  };
  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const formattedData = {
        department: formData.department,
        patientName: formData.name,
        mobileNo: formData.phone,
        email: formData.email,
        message:formData.message
      };

      setLoading(true);
      console.log(formattedData);

      const res = await axios.post(`${backendUrl}/inquiry-message/save`, formattedData);
      console.log(res);

      Swal.fire({
        title: "Success!",
        text: "Appointment booked successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Error booking appointment. Try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
      setFormData({
        department: "",
        name: "",
        phone: "",
        email: "",
        message:''
      });
      setFormErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  return (
    <div className="w-full bg-white md:p-8 px-3 py-4 pt-6 shadow-lg rounded-lg border border-gray-200">
      <h3 className="md:text-3xl text-2xl text-primary messiri font-bold md:text-gray-800">
        Genral Query
      </h3>
      {loading && <p className="text-blue-500">Loading...</p>}
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        

        

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.name}
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.phone}
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

        <select
          name="department"
          className="border border-gray-300 p-3 rounded-lg"
          onChange={handleDepartmentChange}
          value={formData.department}
        >
          <option>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <textarea
          type="text"
          name="message"
          placeholder="Enter Your Message"
          className="border border-gray-300 w-full p-3 rounded-lg"
          onChange={handleChange}
          value={formData.message}
        />
        {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 cursor-pointer transition duration-300"
        >
          {loading ? "Processing..." : "Send Query"}
        </button>
      </form>
    </div>
  );
}

export default   ContactUsForm;
