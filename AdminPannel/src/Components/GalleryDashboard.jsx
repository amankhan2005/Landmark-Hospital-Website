 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import GalleryModal from "./GalleryModal";

const GalleryDashboard = ({ showCategoryDropdown = false }) => {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      setGallery(res.data);
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
      setGallery(gallery.filter((item) => item._id !== id));
      Swal.fire("Deleted!", "Item has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete item.", "error");
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
    fetchGallery();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Gallery Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Photo
        </button>
      </div>

      {isFormOpen && (
        <GalleryModal galleryData={selectedItem} onClose={handleClose} />
      )}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Posted By</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gallery
            .filter((item) => item.category === "photo")
            .map((item) => (
              <tr key={item._id}>
                <td className="border p-2">
                  <img
                    src={item.imageUrl}
                    className="w-24 h-24 object-cover"
                    alt="gallery"
                  />
                </td>
                <td className="border p-2">{item.postedBy}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {gallery.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-red-500 p-4">
                No photos uploaded yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryDashboard;
