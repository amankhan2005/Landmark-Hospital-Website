import React from "react";
import TopNavBar from "../components/TopNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNavBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
