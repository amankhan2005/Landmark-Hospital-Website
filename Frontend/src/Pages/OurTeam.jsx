import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCumb from "../components/Breadcumb";

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([
      { name: 'Dr. John Doe', specialty: 'Cardiologist', category: 'Heart Specialist', image: 'https://picsum.photos/300/300?random=1' },
      { name: 'Dr. Jane Smith', specialty: 'Neurologist', category: 'Brain Specialist', image: 'https://picsum.photos/300/300?random=2' },
      { name: 'Dr. Alice Brown', specialty: 'Pediatrician', category: 'Child Specialist', image: 'https://picsum.photos/300/300?random=3' },
      { name: 'Dr. Bob White', specialty: 'Orthopedic', category: 'Bone Specialist', image: 'https://picsum.photos/300/300?random=4' },
      { name: 'Dr. Emily Green', specialty: 'Dermatologist', category: 'Skin Specialist', image: 'https://picsum.photos/300/300?random=5' },
      { name: 'Dr. Michael Lee', specialty: 'Dentist', category: 'Teeth Specialist', image: 'https://picsum.photos/300/300?random=6' },
      { name: 'Dr. Linda Harris', specialty: 'Psychiatrist', category: 'Mental Health Specialist', image: 'https://picsum.photos/300/300?random=7' },
      { name: 'Dr. William Clark', specialty: 'Gastroenterologist', category: 'Digestive System Specialist', image: 'https://picsum.photos/300/300?random=8' },
      { name: 'Dr. Olivia Martinez', specialty: 'Gynecologist', category: 'Women’s Health Specialist', image: 'https://picsum.photos/300/300?random=9' },
      { name: 'Dr. Samuel Thompson', specialty: 'Urologist', category: 'Urinary System Specialist', image: 'https://picsum.photos/300/300?random=10' },
   
  
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get("https://api.example.com/team");
        setTeamMembers(response.data);
      } catch (err) {
        setError("Failed to load team members.");
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://api.example.com/appointments", { ...formData, doctor: selectedDoctor.name });
      alert("Appointment booked successfully!");
    } catch (err) {
      setError("Error booking appointment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BreadCumb
        items={[{ label: "Home", link: "/" }, { label: "Our Team", link: "/our-team" }]}
        title="Our Expert Team"
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 py-10 items-center gap-4 p-2">
        {loading && <p>Loading team members...</p>}
        {/* {error && <p className="text-red-500">{error}</p>} */}
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full bg-white rounded-lg shadow-2xl overflow-hidden p-4">
            <img className="w-full h-48 object-cover" src={member.image} alt={member.name} />
            <div className="p-4 text-start">
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
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/60 bg-opacity-50" onClick={closeModal}>
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-800">Book Appointment</h3>
            <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500" disabled>
                <option>{selectedDoctor.specialty}</option>
              </select>
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500" disabled>
                <option>{selectedDoctor.name}</option>
              </select>
              <input type="text" name="name" placeholder="Your Name" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={formData.name} />
              <input type="text" name="phone" placeholder="Phone Number" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={formData.phone} />
              <input type="email" name="email" placeholder="Email" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={formData.email} />
              <input type="date" name="date" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={formData.date} />
              <input type="time" name="time" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={formData.time} />
              <button type="submit" className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition duration-300">
                {loading ? "Processing..." : "Book Appointment"}
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
