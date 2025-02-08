import React, { useEffect, useState } from 'react';
import { FaHome, FaUsers, FaBlog, FaBriefcase, FaImage, FaSignOutAlt } from 'react-icons/fa';
import TeamDashboard from '../Components/TeamDashboard';
import CaseDashboard from '../Components/CaseDashboard';
import GalleryDashboard from '../Components/GalleryDashboard';
import BlogDashboard from '../Components/BlogDashboard';
import Home from '../Components/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SidebarItem = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 text-white cursor-pointer p-4 hover:bg-gray-700 rounded-md"
      onClick={() => onClick(name)}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

const DashboardContent = ({ section }) => {
  switch (section) {
    case 'Home':
      return <div className="text-xl"><Home/></div>;
    case 'Team':
      return <div className="text-xl"><TeamDashboard/></div>;
    case 'Blog':
      return <div className="text-xl"><BlogDashboard/></div>;
    case 'Cases':
      return <div className="text-xl"><CaseDashboard/></div>;
    case 'Gallery':
      return <div className="text-xl"><GalleryDashboard/></div>;
    default:
      return <div>Select a section</div>;
  }
};

const Dashboard = () => {
  const location = useLocation()
  const navigate= useNavigate()
  const [section, setSection] = useState('Home');
  const [user, setUser] = useState('Mohd Suhel');
  
  const {adminData} = location?.state

  useEffect(()=>{
    if(adminData){
      setUser(adminData?.user?.email || 'Admin')
    }

  },[])

  

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
        }).then(() => {
          navigate("/")
        });
      }
    });
  };
  

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full sm:w-64 p-6">
        <div className="text-2xl font-semibold mb-6">Dashboard</div>
        <SidebarItem name="Home" icon={<FaHome />} onClick={setSection} />
        <SidebarItem name="Team" icon={<FaUsers />} onClick={setSection} />
        <SidebarItem name="Blog" icon={<FaBlog />} onClick={setSection} />
        <SidebarItem name="Cases" icon={<FaBriefcase />} onClick={setSection} />
        <SidebarItem name="Gallery" icon={<FaImage />} onClick={setSection} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>{user}</span>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 text-white p-2 rounded hover:bg-red-500 flex items-center space-x-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        {/* Section Content */}
        <div className="p-6">
          <DashboardContent section={section} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
