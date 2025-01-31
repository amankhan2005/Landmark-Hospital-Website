import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogComponent = () => {
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

  return (
    <div className="lg:py-14 md:py-12 py-10">
   <h2 className="text-4xl messiri font-bold text-blue-500 mt-2 text-center ">Our Recent Blog</h2>
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Blog Section */}
      <div className="col-span-12 grid grid-cols-3 gap-2">
        {filteredBlogs.slice(0,3).map((blog) => (
          <div
            key={blog.id}
            className="bordr rounded-lg p-4 mb-4 shado-2xl hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold line-clamp-1 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-2 line-clamp-2">{blog.description}</p>
            <p className="text-sm text-gray-500">
              Published by <span className="text-gray-900">{blog.author}</span> on {blog.date}
            <button className="text-blue-700 hover:text-blue-600 cursor-pointer ms-3 bg-gray-300 px-2 py-1 rounded-full">Read</button>
            </p>
          </div>
        ))}
      </div>

      {/* Tags Section
      <div className="col-span-4">
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
      </div> */}
    </div>
    </div>
  );
};

export default BlogComponent;
