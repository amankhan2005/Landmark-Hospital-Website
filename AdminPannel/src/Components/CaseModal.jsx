 import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const GalleryModal = ({ galleryData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    postedBy: "",
    imageUrl: "",
    category: "photo",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (galleryData) {
      setFormData({
        postedBy: galleryData.postedBy || "",
        imageUrl: galleryData.imageUrl || "",
        category: galleryData.category || "photo",
      });
    }
  }, [galleryData]);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hope-hospital");
    data.append("folder", `hope-hospital/${formData.category}`);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        data
      );
      setFormData((prev) => ({ ...prev, imageUrl: res.data.secure_url }));
      Swal.fire("Success", "File uploaded successfully!", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "File upload failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.postedBy || !formData.imageUrl || !formData.category) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      if (galleryData) {
        await axios.put(`${api}/gallery/update/${galleryData._id}`, formData);
        Swal.fire("Success", "Gallery updated successfully!", "success");
      } else {
        await axios.post(`${api}/gallery/save`, formData);
        Swal.fire("Success", "Gallery added successfully!", "success");
      }
      onClose();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {galleryData ? "Update" : "Add"} Gallery
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Posted By"
            value={formData.postedBy}
            onChange={(e) =>
              setFormData({ ...formData, postedBy: e.target.value })
            }
            className="border p-2 rounded w-full"
            required
          />

          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="border p-2 rounded w-full"
            required
          >
            <option value="photo">Photo</option>
            <option value="video">Video</option>
            <option value="news">News</option>
            <option value="rewards">Rewards</option>
          </select>

          <input type="file" onChange={uploadFile} accept="image/*,video/*" />
          {loading && <p className="text-blue-500">Uploading...</p>}
          {formData.imageUrl && (
            <div className="mt-2">
              {formData.category === "video" ? (
                <video src={formData.imageUrl} controls className="w-full h-48" />
              ) : (
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded"
                />
              )}
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {galleryData ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryModal;
