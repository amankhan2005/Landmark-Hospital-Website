import React from "react";
import about from "../assets/about.png";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16">
      <div className="relative w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <img
          src={about} // Replace with your image path
          alt="Healthcare Professionals"
          width={500}
          height={500}
          className="rounded-2xl mt-10 shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-sm text-blue-600 font-semibold uppercase mb-2">
          Welcome to Hope Hospital
        </h4>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Complete Medical Solutions in One Place
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
          metus, eu mollis lorem primis in orci integer metus mollis faucibus.
        </p>
        <p className="text-gray-600 leading-relaxed">
          "Like Mr. Simple Professional Excellence!" etc tailored here sample
          bio module
        </p>
      </div>
    </section>
  );
};
export default AboutSection;
