import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BlogModal from "./BlogModal";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${api}/blog/getall`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
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
      await axios.delete(`${api}/blog/delete/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
      Swal.fire("Deleted!", "The blog has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting blog:", error);
      Swal.fire("Error!", "Failed to delete blog.", "error");
    }
  };

  const handleEdit = (b) => {
    setSelectedBlog(b);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedBlog(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchBlogs();
  };

  const removeHTMLTags = (text) => {
    return text.replace(/<[^>]*>/g, "");
  };
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Blog Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New Blog
        </button>
      </div>

      {isFormOpen ? (
        <div className="h-full w-full">
          <BlogModal blogData={selectedBlog} onClose={handleCloseForm} />
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Photo</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Posted By</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {blogs?.length == 0 && (<div className="text-red-500 text-2xl text-center">No Data Yet!</div>)}
            {blogs.map((b) => (
              <tr key={b._id} className="text-center">
                <td className="border p-2">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="border p-2">{b.title}</td>

                <td className="border p-2 line-clamp-4">
                  {removeHTMLTags(b.description)}
                </td>

                <td className="border p-2">{b.postedBy}</td>
                <td className="border p-2">
                  <button
                    className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEdit(b)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(b._id)}
                  >
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

export default BlogDashboard;
