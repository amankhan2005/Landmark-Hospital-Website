import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import VideoModal from "./VideoModal";

const VideoDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const videoData = res.data.filter((v) => v.category === "video");
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error);
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
      setVideos(videos.filter((v) => v._id !== id));
      Swal.fire("Deleted!", "Video has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete video.", "error");
    }
  };

  const handleAdd = () => {
    setSelectedVideo(null);
    setIsFormOpen(true);
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    fetchVideos();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Video Management</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Video
        </button>
      </div>

      {isFormOpen ? (
        <VideoModal videoData={selectedVideo} onClose={handleClose} />
      ) : (
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
            {videos.map((v) => (
              <tr key={v._id}>
                <td className="border p-2">
                  <video
                    src={v.imageUrl}
                    className="w-24 h-24 object-cover mx-auto"
                    controls
                  />
                </td>
                <td className="border p-2">{v.title}</td>
                <td className="border p-2">{v.postedBy}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEdit(v)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(v._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {videos.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-red-500 p-4">
                  No videos uploaded yet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VideoDashboard;
