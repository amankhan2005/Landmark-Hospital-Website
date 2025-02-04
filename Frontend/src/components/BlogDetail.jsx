import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";

const BlogDetailPage = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const moreBlogs = blogs.filter((b) => b.id !== parseInt(id));

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found!</div>;
  }

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: blog.title, link: `/blog/${blog.id}` },
        ]}
        title={blog.title}
      />
      <div className="py-8 px-4 max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* Main Blog Section */}
        <div className="md:col-span-8 col-span-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full md:h-96 h-auto md:object-cover object-contain rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-4">
            Published by <span className="text-gray-900 font-semibold">{blog.author}</span> on {blog.date}
          </p>
          <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>
          <p className="text-gray-700 mt-4">{blog.description}</p>
        </div>

        {/* More Blogs Section */}
        <div className="md:col-span-4 col-span-12 border border-gray-300  rounded-2xl p-4 bg-gray-100 ">
          <h3 className="text-2xl font-semibold mb-4 messiri">More Blogs</h3>
          <div className="space-y-4 md:max-h-[90vh] max-h-[50vh] overflow-y-scroll">
            {moreBlogs.map((b) => (
              <div
                key={b.id}
                className="borde rounded-lg p-4 bg-white shadow-lg hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/blog/${b.id}`)}
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h4 className="text-lg font-semibold line-clamp-1">{b.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
