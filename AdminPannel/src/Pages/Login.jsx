import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter both email and password.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const apiKey = `${import.meta.env.VITE_API_URL}/admin/login`;

    try {
      setLoading(true);
      const response = await axios.post(apiKey, formData);
      if(response.status == 200 || 201){
      localStorage.setItem("admin", JSON.stringify(response?.data)); 
      }
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      const adminData = response.data;
      navigate('/dashboard', { state: { adminData } });

      setLoading(false);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      Swal.fire({
        title: 'Failed!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try Again!',
      });

      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800 bg">
      <div className="bg-white py-8 px-6 rounded-lg shadow-lg w-full max-w-md">
        <div className='text-gray-700 text-xl font-semibold text-center'>Welcome to Hope Hospital Admin Pannel</div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 m-6">Admin Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
