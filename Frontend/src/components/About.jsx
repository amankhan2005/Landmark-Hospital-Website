import React from "react";
import about from "../assets/about.png";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:gap-10 justify-between bg-white md:px-24  p-8 px-4 md:py-16">
      <div className="relative w-full md:w-1/3  items-center justify-center mb-8 md:mb-0 md:block hidden">
        <img
          src={about} 
          alt="Healthcare Professionals"
          width={430}
          height={430}
          className="rounded-2xl  shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
  <h4 className="messiri text-lg text-primary font-bold uppercase mb-2">
    Welcome to Hope Hospital
  </h4>
  <h1 className="text-lg md:text-4xl  text-left md:font-bold font-base text-gray-800 md:mb-4 mb-2 md:border-0 border-s-4 border-[#1b4d94] ps-2 leading-tight">
    Complete Medical Solutions in One Place
  </h1>
  <p className="text-gray-600  text-sm md:text-base leading-relaxed text-justify md:mb-6">
    Hope Hospital is committed to providing world-class healthcare with a team
    of the best doctors specializing in various fields. Our state-of-the-art
    facilities include NICU, ICU, general and private rooms, ensuring the utmost
    comfort and care for our patients. 
  </p>
  <p className="text-gray-600 text-sm md:text-base  leading-relaxed text-justify md:mb-6">
    We offer a wide range of services, including general surgery, orthopedic
    surgery, neurology, gynecology, general medicine, dermatology, and critical
    care for life-threatening emergencies. Our mission is to deliver
    comprehensive medical solutions with professionalism and compassion, all
    under one roof.
  </p>
  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
    "Your health is our priority—where expertise meets excellence."
  </p>
</div>

    </section>
  );
};
export default AboutSection;
