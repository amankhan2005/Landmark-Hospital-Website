import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";

// Team Member Card Component
const TeamMemberCard = ({ member }) => (
  <div className="group">
    <div className="overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
      <img
        src={member?.imageUrl || "https://via.placeholder.com/150"}
        alt={member.name}
        className="w-full h-52 object-cover"
      />
    </div>
    <div className="p-4 text-center bg-white shadow-md">
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-gray-500">{member.specialty}</p>
    </div>
  </div>
);

// Slick Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

export default function OurTeam() {
  const dispatch = useDispatch();
  const { teamData, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500 py-5">Loading team members...</p>;
  if (error) return <p className="text-center text-red-500 py-5">Failed to load team data.</p>;
  if (!teamData?.length) return <p className="text-center text-gray-500 py-5">No team members available.</p>;

  return (
    <section className="lg:py-14 md:py-12 py-10 bg-gray-100 text-center">
      <h1 className="md:text-4xl text-2xl font-bold text-primary messiri">Meet Our Team</h1>
      <p className="text-gray-600 mb-6 md:text-base text-sm">
        Our dedicated professionals committed to your health.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-6 md:px-6 px-3">
        <div className="w-full">
          {/* Grid layout for Desktop */}
          <div className="hidden mt-2 sm:grid grid-cols-1 sm:grid-cols-2 md:px-10 lg:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <TeamMemberCard key={member._id} member={member} />
            ))}
          </div>

          {/* Slick Slider for Mobile */}
          <div className="sm:hidden">
            <Slider {...sliderSettings}>
              {teamData.map((member) => (
                <TeamMemberCard key={member._id} member={member} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
