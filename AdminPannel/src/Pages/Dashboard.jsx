 import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBlog,
  FaBriefcase,
  FaImage,
  FaVideo,
  FaNewspaper,
  FaAward,
  FaSignOutAlt,
  FaCalendarCheck,
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Dashboard Components
import Home from "../Components/Home";
import TeamDashboard from "../Components/TeamDashboard";
import BlogDashboard from "../Components/BlogDashboard";
import CaseDashboard from "../Components/CaseDashboard";
import GalleryDashboard from "../Components/GalleryDashboard";
import VideoDashboard from "../Components/VideoDashboard";
import NewsDashboard from "../Components/NewsDashboard";
import AwardsDashboard from "../Components/AwardsDashboard";
import AppointDashbaord from "../Components/AppointDashbaord";

const SidebarItem = ({ name, icon, active, onClick }) => (
  <div
    className={`flex items-center space-x-4 cursor-pointer p-4 rounded-md ${
      active
        ? "bg-gray-700 text-white font-semibold"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`}
    onClick={() => onClick(name)}
  >
    {icon}
    <span>{name}</span>
  </div>
);

const DashboardContent = ({ section }) => {
  switch (section) {
    case "Home":
      return <Home />;
    case "Team":
      return <TeamDashboard />;
    case "Blog":
      return <BlogDashboard />;
    case "Cases":
      return <CaseDashboard />;
    case "Gallery":
      return <GalleryDashboard showCategoryDropdown={true} />;
    case "Video":
      return <VideoDashboard />;
    case "News":
      return <NewsDashboard />;
    case "Awards":
      return <AwardsDashboard />;
    case "Appointment Data":
      return <AppointDashbaord />;
    default:
      return <div className="text-gray-600 p-4">Select a section</div>;
  }
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [section, setSection] = useState("Home");
  const [user, setUser] = useState("Admin");
  const { adminData } = location?.state || {};

  useEffect(() => {
    if (adminData) setUser(adminData?.user?.email || "Admin");
  }, [adminData]);

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("admin");
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => navigate("/"));
      }
    });
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white sm:w-64 py-6 px-3">
        <div className="text-2xl font-semibold mb-6 text-center">Dashboard</div>
        <SidebarItem
          name="Home"
          icon={<FaHome />}
          active={section === "Home"}
          onClick={setSection}
        />
        <SidebarItem
          name="Team"
          icon={<FaUsers />}
          active={section === "Team"}
          onClick={setSection}
        />
        <SidebarItem
          name="Blog"
          icon={<FaBlog />}
          active={section === "Blog"}
          onClick={setSection}
        />
        <SidebarItem
          name="Cases"
          icon={<FaBriefcase />}
          active={section === "Cases"}
          onClick={setSection}
        />
        <SidebarItem
          name="Gallery"
          icon={<FaImage />}
          active={section === "Gallery"}
          onClick={setSection}
        />
        <SidebarItem
          name="Video"
          icon={<FaVideo />}
          active={section === "Video"}
          onClick={setSection}
        />
        <SidebarItem
          name="News"
          icon={<FaNewspaper />}
          active={section === "News"}
          onClick={setSection}
        />
        <SidebarItem
          name="Awards"
          icon={<FaAward />}
          active={section === "Awards"}
          onClick={setSection}
        />
        <SidebarItem
          name="Appointment Data"
          icon={<FaCalendarCheck />}
          active={section === "Appointment Data"}
          onClick={setSection}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-3">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-300"
            />
            <span className="font-medium">{user}</span>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 text-white p-2 rounded hover:bg-red-500 flex items-center space-x-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <DashboardContent section={section} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
