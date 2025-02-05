import { useState, useEffect } from "react";
import axios from "axios";
import { FaBlog, FaUsers, FaImage, FaClipboardList } from "react-icons/fa"; // Importing React Icons
import InquiryData from "./InquiryData";

const Home = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [caseCount, setCaseCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);

  const fetchData = async () => {
    try {
      // Fetch total blogs
      const inquiryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/inquiry/getall`);
      setInquiryCount(inquiryResponse.data.length);

      const blogResponse = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getall`);
      setBlogCount(blogResponse.data.length);

      // Fetch total team members
      const teamResponse = await axios.get(`${import.meta.env.VITE_API_URL}/team/getall`);
      setTeamCount(teamResponse.data.payload.length);

      // Fetch total gallery images
      const galleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/getall`);
      setGalleryCount(galleryResponse.data.length);

      // Fetch total cases
      const caseResponse = await axios.get(`${import.meta.env.VITE_API_URL}/case/getall`);
      setCaseCount(caseResponse.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">Hello Admin</h1>
    <div className="bg-gray-100 max-h-[70vh] overflow-scroll py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Greeting */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Blog Card */}
          <div className="bg-purple-600 p-6 rounded-lg shadow-lg text-white">
            <FaBlog className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Total Inquiry</h2>
            <p className="text-2xl">{inquiryCount}</p>
          </div>

          <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
            <FaBlog className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Total Blogs</h2>
            <p className="text-2xl">{blogCount}</p>
          </div>

          {/* Team Member Card */}
          <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white">
            <FaUsers className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Total Team Members</h2>
            <p className="text-2xl">{teamCount}</p>
          </div>

          {/* Gallery Card */}
          <div className="bg-pink-500 p-6 rounded-lg shadow-lg text-white">
            <FaImage className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Total Gallery Images</h2>
            <p className="text-2xl">{galleryCount}</p>
          </div>

          {/* Cases Card */}
          <div className="bg-orange-500 p-6 rounded-lg shadow-lg text-white">
            <FaClipboardList className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Total Cases</h2>
            <p className="text-2xl">{caseCount}</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <InquiryData/>
      </div>
    </div>
    </>
  );
};

export default Home;
