import React from "react";

import FacilitiesComponent from "./FacilitiesComponent";

const FacilitiesSection = () => {
  return (
    <div className="md:py-12 bg-gray-100 lg:py-14 py-10 md:px-6 px-4">
      <h1 className="md:text-4xl text-primary text-2xl font-bold text-center messiri">
        Our Facilities
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
        State-of-the-art facilities for advanced medical care.
      </p>
      <FacilitiesComponent />
    </div>
  );
};

export default FacilitiesSection;
