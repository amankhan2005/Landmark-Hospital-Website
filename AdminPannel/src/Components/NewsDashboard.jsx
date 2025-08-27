import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NewsModal from "./NewsModal";

const NewsDashboard = () => {
  const [news, setNews] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const newsData = res.data.filter((v) => v.category === "news");
      setNews(newsData);
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
      setNews(news.filter((n) => n._id !== id));
      Swal.fire("Deleted!", "News has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete news.", "error");
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
    fetchNews();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">News Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add News
        </button>
      </div>

      {isFormOpen && <NewsModal newsData={selectedItem} onClose={handleClose} />}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Thumbnail</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Posted By</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((n) => (
            <tr key={n._id}>
              <td className="border p-2">
                <img
                  src={n.imageUrl}
                  className="w-24 h-24 object-cover mx-auto"
                  alt="news"
                />
              </td>
              <td className="border p-2">{n.title}</td>
              <td className="border p-2">{n.postedBy}</td>
              <td className="border p-2 flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEdit(n)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(n._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {news.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-red-500 p-4">
                No news uploaded yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NewsDashboard;
