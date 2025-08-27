 // src/Components/AwardsDashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AwardsModal from "./AwardsModal";

const AwardsDashboard = () => {
  const [awards, setAwards] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const awardsData = res.data.filter((item) => item.category === "rewards");
      setAwards(awardsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/gallery/delete/${id}`);
      setAwards(awards.filter((a) => a._id !== id));
      Swal.fire("Deleted!", "Award has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete award.", "error");
    }
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    fetchAwards();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Awards Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Award
        </button>
      </div>

      {isFormOpen && <AwardsModal awardData={selectedItem} onClose={handleClose} />}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Thumbnail</th>
            <th className="border p-2">Posted By</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((a) => (
            <tr key={a._id}>
              <td className="border p-2">
                <img
                  src={a.imageUrl}
                  className="w-24 h-24 object-cover mx-auto"
                  alt="award"
                />
              </td>
              <td className="border p-2">{a.postedBy}</td>
              <td className="border p-2 flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(a._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {awards.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center text-red-500 p-4">
                No awards uploaded yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AwardsDashboard;
