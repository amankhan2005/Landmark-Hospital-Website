import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import {Link} from 'react-router-dom'
// Team Member Card Component
const TeamMemberCard = ({ member }) => (
  <div className="group border-b-4 border-white hover:border-[#1b4d94] transition-all duration-300 flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md">
    {/* Image Section */}
    <div className="flex-1 w-36 h-40 overflow-hidden rounded-lg shadow-md">
      <img
        src={member?.imageUrl || "https://via.placeholder.com/150"}
        alt={member?.name || "Team member"}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="flex-1 text-left">
      <h3 className="text-base font-semibold text-gray-900">
        {member?.name || "Unknown"}
      </h3>
      <p className="text-sm text-gray-600">{member?.degree || "N/A"}</p>
      <p className="text-sm text-gray-600">{member?.specialty || "N/A"}</p>
      <p className="text-sm text-gray-500">{member?.location || "N/A"}</p>
      <Link to='/contact'  className="mt-4 block px-4 py-2 text-xs text-white bg-primary rounded-full cursor-pointer">
        Request Appointment
      </Link>
    </div>
  </div>
);

// Slick Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function OurTeam() {
  const dispatch = useDispatch();
  const { teamData, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500 py-5">Loading team members...</p>;
  if (error)
    return (
      <div className="text-center text-red-500 py-5">
        <p>⚠️ Failed to load team data. Please try again later.</p>
      </div>
    );
  if (!teamData?.length)
    return <p className="text-center text-gray-500 py-5">No team members available.</p>;

  return (
    <section className="lg:py-14 md:py-12 py-10 bg-gray-100 text-center">
      <h1 className="md:text-4xl text-2xl font-bold text-primary messiri">Meet Our Team</h1>
      <p className="text-gray-600 mb-6 md:text-base text-sm">
        Our dedicated professionals committed to your health.
      </p>

      <div className="md:px-10">
        <Slider {...sliderSettings}>
          {teamData.map((member) => (
            <div className="px-2" key={member._id}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
