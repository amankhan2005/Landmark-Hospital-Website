import React from "react";

import FacilitiesComponent from "./FacilitiesComponent";

const FacilitiesSection = () => {
  return (
    <div className="md:py-12 lg:py-14 py-10 md:px-6 px-4">
      <h1 className="md:text-4xl text-blue-600 text-2xl font-bold text-center messiri">
        Our Facilities
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        State-of-the-art facilities for advanced medical care.
      </p>
      <FacilitiesComponent />
    </div>
  );
};

export default FacilitiesSection;
