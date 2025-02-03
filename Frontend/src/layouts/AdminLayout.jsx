import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        Admin Panel © 2025
      </footer>
    </div>
  );
};

export default AdminLayout;
