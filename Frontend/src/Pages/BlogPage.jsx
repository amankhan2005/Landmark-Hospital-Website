import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "What is CPR",
      description: "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
      author: "Dr. Kishalay Datta",
      date: "Jan 29, 2025",
      tags: ["Emergency & Trauma"],
      image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
    },
    {
      id: 2,
      title: "Guillain-Barre Syndrome: Symptoms, Causes, and Treatment",
      description: "Learn how Guillain-Barre Syndrome affects the body and explore symptoms & treatment options. Early detection can improve outcomes.",
      author: "Dr. Rajesh Gupta",
      date: "Jan 28, 2025",
      tags: ["Neurosciences Neurology"],
      image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg",
    },

    {
      id: 3,
      title: "Managing Diabetes Effectively",
      description: "Discover tips and strategies for managing diabetes effectively, including diet, exercise, and medication.",
      author: "Dr. Asha Sharma",
      date: "Jan 27, 2025",
      tags: ["Endocrinology", "General Health"],
      image: "https://picsum.photos/150/100",
    },
    {
        id: 7,
        title: "What is CPR",
        description: "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
        author: "Dr. Kishalay Datta",
        date: "Jan 29, 2025",
        tags: ["Emergency & Trauma"],
        image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
      },
    {
      id: 4,
      title: "Advancements in Cardiac Surgery",
      description: "Explore the latest advancements in cardiac surgery and how they improve patient outcomes and recovery times.",
      author: "Dr. Vijay Kumar",
      date: "Jan 26, 2025",
      tags: ["Cardiology", "Surgery"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 5,
      title: "Understanding Mental Health",
      description: "A comprehensive guide to understanding mental health, reducing stigma, and seeking help when needed.",
      author: "Dr. Meera Iyer",
      date: "Jan 25, 2025",
      tags: ["Mental Health", "Psychology"],
      image: "https://picsum.photos/150/100",
    },
  ];

  const tags = ["All", "Emergency & Trauma", "Neurosciences Neurology", "Endocrinology", "General Health", "Cardiology", "Surgery", "Mental Health", "Psychology"];

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((blog) => blog.tags.includes(selectedTag));

      const teamMembers = [
        {
          name: "Dr. O.P. Pandey",
          specialty: "Medical Director",
          image: "https://picsum.photos/300/300?random=1",
        },
        {
          name: "Dr. Anil Srivastava",
          specialty: "Hematologist",
          image: "https://picsum.photos/300/300?random=2",
        },
        {
          name: "Dr. A.k. Mishra",
          specialty: "Family Doctor",
          image: "https://picsum.photos/300/300?random=3",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=4",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=5",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=6",
        },
      ];
  return (
    <>
    <BreadCumb
        items={[
          { label: 'Home', link: `/` },
          { label: `Blog`, link:`/blog` },
        ]}
        title='Our Recent Blog'
      />
    <div className="py-6 ">
   {/* <h2 className="text-4xl messiri font-bold text-blue-500 mt-2 text-center ">Our Recent Blog</h2> */}
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Blog Section */}
      <div className="col-span-8 grid grid-cols-2 gap-2">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bordr rounded-lg p-4 mb-4 shadow-2xl hover:shadow-none transition cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-1">
              Published by <span className="text-gray-900 ">{blog.author}</span>
            </p>
            <h2 className="text-xl font-bold line-clamp-1 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-2 line-clamp-2">{blog.description}</p>
            <p className="text-sm text-gray-500 flex justify-between px-2 items-center">
              <span> on {blog.date}</span>
            <button onClick={() => navigate(`/blog/${blog.id}`)}
 className="text-blue-700 hover:text-blue-600 cursor-pointer ms-3 bg-gray-300 px-2 py-1 rounded-full">Read</button>
            </p>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      <div className="col-span-4 ">
        <h3 className="text-xl font-semibold mb-4 mt-2 messiri">By Specialities</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full bordr text-sm transition cursor-pointer ${
                selectedTag === tag
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="w-full flex-2 mt-10 bg-white p-8 pt-6 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 messiri">
              Book Appointment
            </h3>
            <form className="mt-4 flex flex-col gap-4">
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
              </select>
              <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
                <option>Select Doctor</option>
                {teamMembers.map((doc, index) => (
                  <option key={index}>{doc.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300">
                Appointment Now
              </button>
            </form>
          </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default BlogPage;
