import { useState } from "react";
import axios from "axios";

const TeamForm = () => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setLoading(true);
    setMessage("Uploading Image...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hope-hospital"); // Cloudinary Upload Preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        formData
      );

      setImageUrl(response.data.secure_url);
      setMessage("Image Uploaded Successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Image Upload Failed!");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !specialty || !imageUrl) {
      setMessage("All fields are required!");
      return;
    }

    const teamData = { name, specialty, imageUrl };

    try {
      const response = await axios.post("http://localhost:3000/team/save", teamData);
      setMessage(response.data.message);
      
      // Reset form
      setName("");
      setSpecialty("");
      setImage(null);
      setImageUrl("");
    } catch (error) {
      console.error("Error saving team member:", error);
      setMessage("Failed to save team member!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>

      {message && <p className="text-sm text-gray-600 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Specialty Input */}
        <div>
          <label className="block text-sm font-medium">Specialty</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input type="file" className="mt-2" onChange={uploadImage} />
          {loading && <p className="text-blue-500 text-sm">Uploading...</p>}
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-2 w-20 h-20 object-cover" />}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Team Member
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
