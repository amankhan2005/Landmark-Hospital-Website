import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { specialities } from "../SpecilitesData.jsx";

function ContactUsForm() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const backendUrl = import.meta.env.VITE_BACKENDURL;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle department selection
  const handleDepartmentChange = (e) => {
    const selectedDept = e.target.value;
    setSelectedDepartment(selectedDept);
    setFormData({ ...formData, department: selectedDept });
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.department) errors.department = "Department is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setLoading(true);

      const formattedData = {
        department: formData.department,
        patientName: formData.name,
        mobileNo: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      const res = await axios.post(
        `${backendUrl}/inquiry-msg/save`,
        formattedData
      );

      console.log(res.data);

      Swal.fire({
        title: "Success!",
        text: "Your query has been submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form after submission
      setFormData({
        department: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setSelectedDepartment("");
      setFormErrors({});
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white md:p-8 px-3 py-4 pt-6 shadow-lg rounded-lg border border-gray-200">
      <h3 className="md:text-3xl text-2xl text-primary messiri font-bold md:text-gray-800">
        General Query
      </h3>
      {loading && <p className="text-blue-500">Processing your request...</p>}
      
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.name}
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.phone}
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

        {/* Department Dropdown */}
        <select
          name="department"
          className="border border-gray-300 p-3 rounded-lg"
          onChange={handleDepartmentChange}
          value={formData.department}
        >
          <option value="">Select Department</option>
          {specialities.map((speciality, index) => (
            <option key={index} value={speciality.title}>
              {speciality.title}
            </option>
          ))}
        </select>
        {formErrors.department && <p className="text-red-500">{formErrors.department}</p>}

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Enter Your Message"
          className="border border-gray-300 w-full p-3 rounded-lg"
          onChange={handleChange}
          value={formData.message}
        />
        {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

        {/* Submit Button */}
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

export default ContactUsForm;
