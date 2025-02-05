import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const InquiryData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_API_URL;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${api}/inquiry/getall`);
      setAppointments(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchAppointments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/inquiry/delete/${id}`);
      fetchAppointments();
      Swal.fire("Deleted!", "The inquiry has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      Swal.fire("Error!", "Failed to delete inquiry.", "error");
    }
  };


  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Inquiries</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Requested Doctor</th>
            <th className="border px-4 py-2">Patient Name</th>
            <th className="border px-4 py-2">Mobile No</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td className="border px-4 py-2">{appointment.department}</td>
              <td className="border px-4 py-2">{appointment.requestedDoctor}</td>
              <td className="border px-4 py-2">{appointment.patientName}</td>
              <td className="border px-4 py-2">{appointment.mobileNo}</td>
              <td className="border px-4 py-2">{appointment.email}</td>
              <td className="border px-4 py-2">{appointment.date}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
              <td>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(appointment._id)}>
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryData;
