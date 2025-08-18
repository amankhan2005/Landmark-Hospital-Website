 import React from "react";
import FacilitiesComponent from "./FacilitiesComponent";

const FacilitiesSection = () => {
  return (
    <section className="md:py-12 lg:py-14 py-10 bg-gray-100">
      <div className=" container mx-auto px-4 text-center">
        <h1 className="md:text-4xl text-2xl font-bold  text-gray-800   mb-4">
          Our Facilities
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          State-of-the-art facilities for advanced medical care.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <FacilitiesComponent cardWidth="max-w-xs" />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
