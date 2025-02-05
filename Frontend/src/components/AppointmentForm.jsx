import React, { useState, useEffect } from "react";
import axios from "axios";

function AppointmentForm() {
  const [doctorsData, setDoctorsData] = useState([
    {
        name: "Dr. O.P. Pandey",
        specialty: "Medical Director",
        image: "https://picsum.photos/300/300?random=1",
      },
      {
        name: "Dr. Anil Srivastava",
        specialty: "Hematologist",
        image: "https://picsum.photos/300/300?random=2",
      },
      {
        name: "Dr. A.k. Mishra",
        specialty: "Family Doctor",
        image: "https://picsum.photos/300/300?random=3",
      },
      {
        name: "Dr. B.P. Singh",
        specialty: "Skin Specialist",
        image: "https://picsum.photos/300/300?random=4",
      },
      {
        name: "Dr. B.P. Singh",
        specialty: "Skin Specialist",
        image: "https://picsum.photos/300/300?random=5",
      },
      {
        name: "Dr. B.P. Singh",
        specialty: "Skin Specialist",
        image: "https://picsum.photos/300/300?random=6",
      },
  ]);
  const [departments, setDepartments] = useState([ "Skin Specialist","Skin Specialist"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("https://api.example.com/doctors");
        setDoctorsData(response.data);
        
        const uniqueDepartments = [...new Set(response.data.map(doc => doc.specialty))];
        setDepartments(uniqueDepartments);
      } catch (err) {
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://api.example.com/appointments", formData);
      alert("Appointment booked successfully!");
    } catch (err) {
      setError("Error booking appointment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white md:p-8 px-3 py-4 pt-6 shadow-lg rounded-lg border border-gray-200">
      <h3 className="md:text-3xl text-2xl text-primary messiri  font-bold md:text-gray-800">Book Appointment</h3>
      {loading && <p className="text-blue-500">Loading...</p>}
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <select name="department" className="border border-gray-300 p-3 rounded-lg" onChange={handleChange} value={formData.department}>
          <option>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <select name="doctor" className="border border-gray-300 p-3 rounded-lg" onChange={handleChange} value={formData.doctor}>
          <option>Select Doctor</option>
          {doctorsData.map((doc, index) => (
            <option key={index} value={doc.name}>{doc.name}</option>
          ))}
        </select>

        <input type="text" name="name" placeholder="Your Name" className="border w-full border-gray-300 p-3 rounded-lg" onChange={handleChange} value={formData.name} />
        <input type="text" name="phone" placeholder="Phone Number" className="border w-full border-gray-300 p-3 rounded-lg" onChange={handleChange} value={formData.phone} />
        <input type="email" name="email" placeholder="Email" className="border w-full border-gray-300 p-3 rounded-lg" onChange={handleChange} value={formData.email} />
        <input type="date" name="date" placeholder="Date" className="border border-gray-300  w-full p-3 rounded-lg" onChange={handleChange} value={formData.date} />
        <input type="time" name="time" placeholder="Time" className="border border-gray-300 w-full p-3 rounded-lg" onChange={handleChange} value={formData.time} />
        
        <button type="submit" disabled={loading} className={` bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 cursor-pointer  transition duration-300`}>
          {loading ? "Processing..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
