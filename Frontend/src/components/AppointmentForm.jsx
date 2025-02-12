import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import Swal from "sweetalert2";
import { specialities } from "../SpecilitesData.jsx";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentForm() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [departments, setDepartments] = useState(
    specialities.map((speciality) => speciality.title)
  );
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const { teamData, status, error } = useSelector((state) => state.data);

  // Fetch doctors data from API
  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  // Update doctorsData when data is fetched
  useEffect(() => {
    if (teamData) {
      setDoctorsData(teamData);
    }
  }, [teamData]);

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
        requestedDoctor: formData.doctor,
        patientName: formData.name,
        mobileNo: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
      };

      setLoading(true);
      console.log(formattedData);

      const res = await axios.post(`${backendUrl}/inquiry/save`, formattedData);
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
        doctor: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
      });
      setFormErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.time) errors.time = "Time is required.";
    return errors;
  };

  return (
    <div className="w-full bg-white md:p-8 px-3 py-4 pt-6 shadow-lg rounded-lg border border-gray-200">
      <h3 className="md:text-3xl text-2xl text-primary messiri font-bold md:text-gray-800">
        Book Appointment
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
          required
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Enter 10-digit phone number"
          pattern="[0-9]{10}"
          maxlength="10"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
          required
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        <select
          name="department"
          className="border border-gray-300 p-3 rounded-lg"
          onChange={handleDepartmentChange}
          value={formData.department}
          required
        >
          <option>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          name="doctor"
          className="border border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.doctor}
          required
        >
          <option>Select Doctor</option>
          {doctorsData.map((doc, index) => (
            <option key={index} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          placeholder="Date"
          className="border border-gray-300 w-full p-3 rounded-lg"
          onChange={handleChange}
          value={formData.date}
          required
        />

        {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}

        <select
          name="time"
          onChange={handleChange}
          value={formData.time}
          className="border border-gray-300 w-full p-3 rounded-lg"
          required
        >
          <option value="">Select Time</option>
          {[...Array(12)].map((_, i) => (
            <>
              <option key={`${i + 1}-AM`} value={`${i + 1} AM`}>
                {i + 1} AM
              </option>
              <option key={`${i + 1}-PM`} value={`${i + 1} PM`}>
                {i + 1} PM
              </option>
            </>
          ))}
        </select>

        {formErrors.time && <p className="text-red-500">{formErrors.time}</p>}

        <button
          type="submit"
          aria-label="Submit"
          title="Submit"
          disabled={loading}
          className="bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 cursor-pointer transition duration-300"
        >
          {loading ? "Processing..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
