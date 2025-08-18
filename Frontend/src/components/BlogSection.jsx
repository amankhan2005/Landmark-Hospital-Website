 import React, { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Memoized Arrow Components
const PrevArrow = memo(({ onClick }) => (
  <button
    aria-label="Previous Slide"
    title="Previous Slide"
    className="md:block absolute hidden top-1/2 left-0 z-20 transform cursor-pointer -translate-y-1/2 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
    onClick={onClick}
  >
    <MdArrowBack size={24} />
  </button>
));

const NextArrow = memo(({ onClick }) => (
  <button
    aria-label="Next Slide"
    title="Next Slide"
    className="md:block absolute hidden top-1/2 right-0 z-20 transform cursor-pointer -translate-y-1/2 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
    onClick={onClick}
  >
    <MdArrowForward size={24} />
  </button>
));

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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const BlogComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="lg:py-14 md:py-12 py-10">
      <div className=" container mx-auto px-4 relative">
        <h1 className="md:text-4xl text-2xl   font-bold  text-gray-800 text-center">
          Our Recent Blog
        </h1>
        <p className="text-gray-600 md:mb-6 mb-2 text-center text-sm md:text-base">
          Latest updates, tips, and insights from our team.
        </p>

        {status === "loading" && <p className="text-center">Loading Blog Data...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {blogData.length === 0 && status !== "loading" && (
          <p className="text-center text-red-500">No Data Found</p>
        )}

        {blogData.length > 0 && (
          <Slider {...sliderSettings}>
            {blogData.map((blog) => (
              <div key={blog._id} className="p-2">
                <div
                  className="rounded-lg shadow-2xl hover:shadow-none p-4 transition cursor-pointer"
                  onClick={() => handleNavigate(blog._id)}
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 mb-4 underline underline-offset-4">
                    Published by <span className="text-gray-900">{blog.postedBy}</span> ||
                    <span> on {formatDate(blog.createdAt)}</span>
                  </p>
                  <h3 className="text-xl font-medium line-clamp-1 mb-2">{blog.title}</h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">
                    {blog.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                  <button
                    onClick={() => handleNavigate(blog._id)}
                    aria-label={`Read more about ${blog.title}`}
                    title="Read More Blog"
                    className="text-white bg-primary hover:bg-blue-600 cursor-pointer px-3 py-1 rounded"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default memo(BlogComponent);
