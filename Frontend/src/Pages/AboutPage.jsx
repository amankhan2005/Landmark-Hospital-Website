import React, { memo } from "react";
import BreadCumb from "../components/Breadcumb";
import pattern from "../assets/home/whywechoose.png";
import about from "../assets/home/HopeHospital-about.webp";
import { Link } from "react-router-dom";
import SpecialitiesSection from "../components/SpecialitiesSection";
import Stats from "../components/Stats";
function AboutPage() {

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `About Us`, link: `/about` },
        ]}
        title="About Hope Hospital"
      />
      <div className="md:p-8 md:pt-10 pt-4">
        {/* Story Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:bg-gray-100 md:p-8 p-2 rounded-lg shadow-md">
          <div className="md:w-1/2 w-full">
            <img
              src={about}
              alt="Hopr Hospital"
              className="rounded-lg w-full md:h-[80vh] shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full md:px-0 px-2">
            <h2 className="md:text-4xl text-2xl font-bold text-primary messiri md:mb-4">
              The Story of Hope Hospital
            </h2>
            <p className="text-gray-600  text-sm md:text-base  text-justify md:mb-1">
            Welcome to <b> Hope Hospital</b>, your trusted multi-speciality healthcare
          provider. We are dedicated to providing exceptional medical care
          across various specialities, including <b>Cardiology</b>, <b>Orthopedics</b>, <b>General Surgery</b>,
           <b> Pediatrics</b>, <b>Obstetrics & Gynecology</b>, <b>Neurology</b>, <b>Dermatology</b>,
          <b> Ophthalmology</b> and <b>Critical Care & Anaesthesia</b>. Our team of highly
          skilled professionals utilizes state-of-the-art technology to ensure
          accurate diagnoses and effective treatments tailored to your unique
          needs. We prioritize patient comfort and satisfaction, fostering a
          collaborative environment where specialists work together for
          comprehensive care.
            </p>
            <p className="text-gray-600 text-sm md:text-base  text-justify md:mb-1">
              With 24/7 emergency services and a commitment to community health,
              Hope Hospital is here to support you at every stage of your
              healthcare journey. Trust us for compassionate, high-quality
              care—your health is our priority!
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              "Your health is our priority—where expertise meets excellence."
            </p>
            <div className="flex mt-2 md:gap-5 gap-2 md:w-full">
              <Link
                to="/contact"
                className="text-primary-hover hover:underline underline-offset-2 md:pr-4 pr-2 border-r-2 rounded  border-[#1b4d94]"
              > Contact Us
              </Link>
              <Link
                to="/specialities"
                className="text-primary-hover hover:underline underline-offset-2 md:pr-4 pr-2 border-r-2 rounded  border-[#1b4d94]"
              >
               <span className="hidden md:inline">Our</span> Specialities
              </Link>
              <Link
                to="/facilities"
                className="text-primary-hover hover:underline underline-offset-2"
              >
               <span className="hidden md:flex"></span> Our Facilities
              </Link>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values Section */}
        <section className="mt-8">
          {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Vision, Mission, and Values</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 px-2 md:px-0">
            <div className=" p-6 rounded-lg shadow-md relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.3,
                  zIndex: 0,
                }}
              ></div>
              <h3 className="md:text-2xl text-xl font-semibold text-primary messiri">
                Our Vision
              </h3>
              <p className="md:mt-4 text-gray-600">
                To be the leading healthcare institution known for innovation,
                excellence, and compassion in providing quality medical care.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.3,
                  zIndex: 0,
                }}
              ></div>
              <h3 className="md:text-2xl text-xl font-semibold text-primary messiri">
                Our Mission
              </h3>
              <p className="md:mt-4 text-gray-600">
                To deliver exceptional healthcare services with a focus on
                accessibility, affordability, and patient satisfaction, while
                advancing medical research and education.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.3,
                  zIndex: 0,
                }}
              ></div>
              <h3 className="md:text-2xl text-xl font-semibold text-primary messiri">
                Our Values
              </h3>
              <p className="md:mt-4 text-gray-600">
                Compassion, Integrity, Excellence, Innovation, and Collaboration
                form the core of our values.
              </p>
            </div>
          </div>
        </section>


       <section className="md:py-8 py-4">

        <Stats/>
       </section>
       <section className="">
        <SpecialitiesSection/>
       </section>
      </div>
    </>
  );
}

export default memo(AboutPage);
