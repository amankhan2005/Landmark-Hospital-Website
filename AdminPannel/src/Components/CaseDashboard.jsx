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
      setCases(cases.filter((c) => c._id !== id)); // ✅ Fixed the ID issue
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
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Case Management</h2>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Case
        </button>
      </div>

      {isFormOpen ? (
        <div className="h-full w-full">
          <CaseModal caseData={selectedCase} onClose={handleCloseForm} />
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Photo</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases?.length == 0 && (<div className="text-red-500 text-2xl text-center">No Data Yet!</div>)}
            {cases.map((c) => (
              <tr key={c._id} className="text-center">
                <td className="border p-2">
                  <img src={c.imageUrl} alt={c.title} className="w-12 h-12 rounded-full mx-auto" />
                </td>
                <td className="border p-2">{c.title}</td>
                <td className="border p-2">{c.description}</td>
                <td className="border p-2">
                  <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(c)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(c._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CaseDashboard;
