import React, { useState, useEffect } from "react";
import BreadCumb from "../components/Breadcumb";
import { fetchTeamData } from "../redux/slices/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   date: "",
  //   time: "",
  // });
  // const [formErrors, setFormErrors] = useState({});

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

  // const openModal = (doctor) => {
  //   setSelectedDoctor(doctor);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const backendUrl = import.meta.env.VITE_BACKENDURL;

  // const validateForm = () => {
  //   const errors = {};
  //   if (!formData.name) errors.name = "Name is required";
  //   if (!formData.phone) errors.phone = "Phone number is required";
  //   if (!formData.email) errors.email = "Email is required";
  //   if (!formData.date) errors.date = "Date is required";
  //   if (!formData.time) errors.time = "Time is required";
  //   return errors;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = validateForm();
  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //     return;
  //   }
  //   try {
  //     const formattedData = {
  //       department: selectedDoctor.specialty,  // Cardiology1
  //       requestedDoctor: selectedDoctor.name,  // Dr. Smith2
  //       patientName: formData.name,           // John Doe3
  //       mobileNo: formData.phone,             // 12345678903
  //       email: formData.email,                // john.doe@example.com
  //       date: formData.date,                  // 2025-02-06
  //       time: formData.time                   // 10:00 AM
  //     };
  //     setLoading(true);
  //     console.log(formattedData)
  //    const res= await axios.post(`${backendUrl}/inquiry/save`, formattedData);
  //     console.log(res)
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Appointment booked successfully!",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });
  //   } catch (err) {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "Error booking appointment. Try again.",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   } finally {
  //     setLoading(false);
  //   setIsModalOpen(false);
  //   setFormData([])
  //   }
  // };

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Our Team", link: "/our-team" },
        ]}
        title="Our Expert Team"
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-3 px-6 py-10 items-center gap-4 p-2">
        {status === "loading" && <p>Loading team members...</p>}
        {error && <p className="text-red-700">{error}</p>}
        {teamMembers.map((member, index) => (
         <TeamMemberCard member={member} key={index} />
        ))}
      </div>

      {/* {isModalOpen && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black/60 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-xl font-bold text-gray-800">Book Appointment</h5>
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
      )} */}
    </div>
  );
}

export default OurTeam;



const TeamMemberCard = ({ member }) => (
  <div className="group border-b-4 border-white hover:border-[#1b4d94] transition-all duration-300 flex flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md">
    {/* Image Section */}
    <div className="flex-1 w-36 h-44 overflow-hidden rounded-lg shadow-md">
      <img
        src={member?.imageUrl || "https://via.placeholder.com/150"}
        alt={member?.name || "Team member"}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="flex-1 text-left">
      <div className="text-base font-semibold text-gray-900">
        {member?.name || "Unknown"}
      </div>
      <p className="text-sm font-medium text-gray-600"><span className="font-semibold">Head</span> - Department of {member?.specialty || "N/A"}</p>
      <p className="text-sm text-gray-600 mt-2">{member?.degree || "N/A"}</p>
      {/* <p className="text-sm text-gray-500">{member?.location || "N/A"}</p> */}
      <Link to='/appointment'  className="mt-4 text-center block px-4 py-2 text-xs text-white bg-primary rounded-full cursor-pointer">
        Request Appointment
      </Link>
    </div>
  </div>
);