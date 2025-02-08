import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux State
  const { blogData, status, error } = useSelector((state) => state.data);
  const [blogsData, setBlogsData] = useState([ {
    id: 1,
    title: "What is CPR",
    description:
      "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
    author: "Dr. Kishalay Datta",
    date: "Jan 29, 2025",
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
    image:
      "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg",
  },
  
  {
    id: 3,
    title: "Managing Diabetes Effectively",
    description:
      "Discover tips and strategies for managing diabetes effectively, including diet, exercise, and medication.",
    author: "Dr. Asha Sharma",
    tags: ["Endocrinology", "General Health"],
    image: "https://picsum.photos/150/100",
  },
  {
    id: 7,
    title: "What is CPR",
    description:
      "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
    author: "Dr. Kishalay Datta",
    tags: ["Emergency & Trauma"],
    image:
      "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
  },
  {
    id: 4,
    title: "Advancements in Cardiac Surgery",
    description:
      "Explore the latest advancements in cardiac surgery and how they improve patient outcomes and recovery times.",
    author: "Dr. Vijay Kumar",
    tags: ["Cardiology", "Surgery"],
    image: "https://picsum.photos/150/100",
  },
  {
    id: 5,
    title: "Understanding Mental Health",
    description:
      "A comprehensive guide to understanding mental health, reducing stigma, and seeking help when needed.",
    author: "Dr. Meera Iyer",
    tags: ["Mental Health", "Psychology"],
    image: "https://picsum.photos/150/100",
  }]);

  // Fetch Blogs
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  useEffect(() => {
    if (blogData.length > 0) {
      setBlogsData(blogData);
    }
  }, [blogData]);

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Blog`, link: `/blog` },
        ]}
        title="Our Recent Blog"
      />
      <div className="py-6">
        <div className="col-span-12 grid md:grid-cols-3 grid-cols-1 gap-2">
          {status === "loading" && <p>Loading Blog Data...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {blogsData.length === 0 && status !== "loading" && (
            <p className="text-red-500">No Data Found</p>
          )}

          {blogsData.map((blog,i) => {

            const formattedDate = new Date(blog.createdAt).toLocaleDateString(
              "en-GB",
              { day: "2-digit", month: "short", year: "numeric" }
            );

            return (
              <div
                key={i}
                className="bordr rounded-lg p-4 mb-4 shadow-2xl hover:shadow-none transition cursor-pointer"
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-500 mb-1 underline underline-offset-4">
                  Published by{" "}
                  <span className="text-gray-900 mb-2">{blog.postedBy}</span> ||
                  <span> on {formattedDate}</span>
                </p>
                <h3 className="text-xl font-medium line-clamp-1 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mb-2 line-clamp-2">
                  {blog.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <p className="text-sm text-gray-500 flex justify-between items-center">
                  <button
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    className="text-white hover:text-blue-800 border border-blue-800 cursor-pointer btn px-2 py-1 rounded"
                  >
                    Read More
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
