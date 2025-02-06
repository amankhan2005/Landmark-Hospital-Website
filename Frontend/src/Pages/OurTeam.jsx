import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCumb from "../components/Breadcumb";
import Swal from "sweetalert2";
import { fetchTeamData } from "../redux/slices/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"; // For loading spinner

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const { teamData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  useEffect(() => {
    if (teamData) {
      setTeamMembers(teamData);
    }
  }, [teamData]);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    try {
      const formattedData = {
        department: selectedDoctor.specialty,  // Cardiology1
        requestedDoctor: selectedDoctor.name,  // Dr. Smith2
        patientName: formData.name,           // John Doe3
        mobileNo: formData.phone,             // 12345678903
        email: formData.email,                // john.doe@example.com
        date: formData.date,                  // 2025-02-06
        time: formData.time                   // 10:00 AM
      };
      setLoading(true);
      console.log(formattedData)
     const res= await axios.post(`${backendUrl}/inquiry/save`, formattedData);
      console.log(res)
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
    setIsModalOpen(false);
    setFormData([])
    }
  };

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Our Team", link: "/our-team" },
        ]}
        title="Our Expert Team"
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 py-10 items-center gap-4 p-2">
        {status === "loading" && <p>Loading team members...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-2xl overflow-hidden p-4"
          >
            <img
              className="w-full h-48 object-cover"
              src={member?.image || member?.imageUrl}
              alt={member.name}
            />
            <div className="p text-start">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.specialty}</p>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-transparent hover:text-gray-600 outline hover:outline-gray-500 transition"
                onClick={() => openModal(member)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black/60 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-800">Book Appointment</h3>
            <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
              <select
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                disabled
              >
                <option>{selectedDoctor.specialty}</option>
              </select>
              <select
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                disabled
              >
                <option>{selectedDoctor.name}</option>
              </select>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg w-full"
                onChange={handleChange}
                value={formData.name}
              />
              {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg w-full"
                onChange={handleChange}
                value={formData.phone}
              />
              {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg w-full"
                onChange={handleChange}
                value={formData.email}
              />
              {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
              <input
                type="date"
                name="date"
                className="border border-gray-300 p-3 rounded-lg w-full"
                onChange={handleChange}
                value={formData.date}
              />
              {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}
              <input
                type="time"
                name="time"
                className="border border-gray-300 p-3 rounded-lg w-full"
                onChange={handleChange}
                value={formData.time}
              />
              {formErrors.time && <p className="text-red-500">{formErrors.time}</p>}
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition duration-300"
              >
                {loading ? <ClipLoader color="white" size={20} /> : "Book Appointment"}
              </button>
            </form>
            <button
              className="mt-4 bg-red-500 px-2 py-2 rounded w-full text-white cursor-pointer font-semibold hover:bg-red-400"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurTeam;
