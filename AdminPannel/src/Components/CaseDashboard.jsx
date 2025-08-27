 import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CaseModal from "./CaseModal";

const CaseDashboard = () => {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await axios.get(`${api}/case/getall`);
      setCases(response.data);
    } catch (error) {
      console.error("Error fetching case data:", error);
    }
  };

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
      await axios.delete(`${api}/case/delete/${id}`);
      setCases(cases.filter((c) => c._id !== id));
      Swal.fire("Deleted!", "The case has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting case:", error);
      Swal.fire("Error!", "Failed to delete case.", "error");
    }
  };

  const handleEdit = (c) => {
    setSelectedCase(c);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedCase(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchCases();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Case Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-md transition"
        >
          Add New Case
        </button>
      </div>

      {isFormOpen && (
        <CaseModal caseData={selectedCase} onClose={handleCloseForm} />
      )}

      {!isFormOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases?.length === 0 && (
            <div className="text-red-500 text-2xl text-center col-span-full">
              No Data Yet!
            </div>
          )}
          {cases.map((c) => (
            <div
              key={c._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transition hover:shadow-lg"
            >
              <img
                src={c.imageUrl}
                alt={c.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-3 text-center">{c.title}</h3>
              <div className="flex justify-between">
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-1 rounded shadow transition"
                  onClick={() => handleEdit(c)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded shadow transition"
                  onClick={() => handleDelete(c._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseDashboard;
