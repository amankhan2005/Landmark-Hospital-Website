import React from "react";
import about from "../assets/home/HopeHospital-about.jpg";

const AboutSection = () => {
  return (
    <section className="flex  flex-col md:flex-row items-center md:gap-10 justify-between md:px-20  p-8 px-4 md:py-14">
      <div className="relative w-full md:w-1/3  items-center justify-center mb-8 md:mb-0 md:block hidden" data-aos='zoom-in'>
        <img
          src={about}
          alt="Healthcare Professionals"
          width={430}
          height={430}
          className="rounded-2xl  shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h4 className="messiri text-lg text-primary font-bold uppercase mb-0">
          Welcome to Hope Hospital
        </h4>
        <h1 className="text-lg md:text-3xl  text-left md:font-bold font-base text-gray-800 md:mb-2 mb-2 md:border-0 border-s-4 border-[#1b4d94] md:ps-0 ps-2 ">
          Best Multi Speciality Hospital in Bahraich
        </h1>
        <p className="text-gray-600  text-sm md:text-base  text-justify md:mb-1">
          Welcome to Hope Hospital, your trusted multi-speciality healthcare
          provider. We are dedicated to providing exceptional medical care
          across various specialties, including Cardiology, Orthopedics, General
          Surgery, Pediatrics, Obstetrics & Gynecology, Neurology, Dermatology,
          Ophthalmology and Critical Care & Anaesthesia. Our team of highly
          skilled professionals utilizes state-of-the-art technology to ensure
          accurate diagnoses and effective treatments tailored to your unique
          needs. We prioritize patient comfort and satisfaction, fostering a
          collaborative environment where specialists work together for
          comprehensive care.
        </p>
        <p className="text-gray-600 text-sm md:text-base  leading-relaxed text-justify md:mb-3">
          With 24/7 emergency services and a commitment to community health,
          Hope Hospital is here to support you at every stage of your
          healthcare journey. Trust us for compassionate, high-quality care—your
          health is our priority!
        </p>
        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
          "Your health is our priority—where expertise meets excellence."
        </p>
      </div>
    </section>
  );
};
export default AboutSection;
