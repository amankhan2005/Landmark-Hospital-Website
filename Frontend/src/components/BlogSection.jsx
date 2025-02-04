import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Import icons

const BlogComponent = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "What is CPR",
      description:
        "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
      author: "Dr. Kishalay Datta",
      date: "Jan 29, 2025",
      tags: ["Emergency & Trauma"],
      image:
        "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
    },
    {
      id: 2,
      title: "Guillain-Barre Syndrome: Symptoms, Causes, and Treatment",
      description:
        "Learn how Guillain-Barre Syndrome affects the body and explore symptoms & treatment options. Early detection can improve outcomes.",
      author: "Dr. Rajesh Gupta",
      date: "Jan 28, 2025",
      tags: ["Neurosciences Neurology"],
      image:
        "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg",
    },
    {
      id: 3,
      title: "Managing Diabetes Effectively",
      description:
        "Discover tips and strategies for managing diabetes effectively, including diet, exercise, and medication.",
      author: "Dr. Asha Sharma",
      date: "Jan 27, 2025",
      tags: ["Endocrinology", "General Health"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 4,
      title: "Advancements in Cardiac Surgery",
      description:
        "Explore the latest advancements in cardiac surgery and how they improve patient outcomes and recovery times.",
      author: "Dr. Vijay Kumar",
      date: "Jan 26, 2025",
      tags: ["Cardiology", "Surgery"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 5,
      title: "Understanding Mental Health",
      description:
        "A comprehensive guide to understanding mental health, reducing stigma, and seeking help when needed.",
      author: "Dr. Meera Iyer",
      date: "Jan 25, 2025",
      tags: ["Mental Health", "Psychology"],
      image: "https://picsum.photos/150/100",
    },
  ];

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((blog) => blog.tags.includes(selectedTag));

  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="md:block absolute hidden top-1/2 left-0 z-20 transform cursor-pointer -translate-y-1/2 bg-blue-800 text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={onClick}
      >
        <MdArrowBack size={24} />
      </button>
    );
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="md:block absolute hidden top-1/2 z-20 right-0 transform cursor-pointer -translate-y-1/2 bg-blue-800 text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={onClick}
      >
        <MdArrowForward size={24} />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:py-14 md:py-12 py-10 relative ">
      <h2 className="md:text-4xl text-2xl messiri font-bold text-blue-500 text-center">
        Our Recent Blog
      </h2>
      <p className="text-gray-600 md:mb-6 mb-2 text-center text-sm md:text-base">
        Latest updates, tips, and insights from our team.
      </p>

      <div className="px-4 relative">
        <Slider {...sliderSettings}>
          {filteredBlogs.map((blog,index) => (
            <div
              key={blog.id}
              className={`rounded-lg p-4  transition cursor-pointer md:mx-4`} // Added mx-4 for space
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500 mb-4 underline underline-offset-4">
                Published by <span className="text-gray-900">{blog.author}</span> || 
                <span> on {blog.date}</span>
              </p>
              <h2 className="md:text-xl text-lg font-semibold line-clamp-1 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 md:text-base text-sm mb-2 line-clamp-2">
                {blog.description}
              </p>
              <p className="text-sm text-gray-500 flex justify-between items-center">
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="text-white  bg-blue-700 hover:bg-blue-600 cursor-pointer px-3 py-1 rounded"
                >
                  Read More
                </button>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogComponent;
