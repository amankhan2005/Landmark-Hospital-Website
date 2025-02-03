import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/hope-logo.png"; // Replace with your logo path

const LoadingSpinner = ({ onComplete }) => {
  const [moveToNavbar, setMoveToNavbar] = useState(false);

  useEffect(() => {
    // After 2.5 seconds, trigger animation towards navbar
    setTimeout(() => {
      setMoveToNavbar(true);
      setTimeout(() => onComplete(), 1500); // Remove after animation
    }, 2500);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }} // Start at center
      animate={{
        y: moveToNavbar ? -250 : 0, // Move upwards to navbar position
        x:moveToNavbar?-250:0,
        scale: moveToNavbar ? 0.5 : 1, // Shrink to fit navbar
        opacity: moveToNavbar ? 0 : 1, // Fade out at the end
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth animation
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-96 h-44"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </motion.div>
  );
};

export default LoadingSpinner;
