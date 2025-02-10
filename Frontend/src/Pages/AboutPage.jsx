import React, { useEffect } from "react";
import BreadCumb from "../components/Breadcumb";
import AppointmentForm from "../components/AppointmentForm";
import pattern from "../assets/home/whywechoose.png";
import appoint from "../assets/appointment-image.png";
import about from "../assets/home/HopeHospital-about.jpg";
import pattern1 from "../assets/pattern1.jpg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import { Link } from "react-router-dom";
function AboutPage() {
  const dispatch = useDispatch();
  const { teamData, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

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
              Welcome to Hope Hospital, your trusted multi-speciality healthcare
              provider. We are dedicated to providing exceptional medical care
              across various specialties, including Cardiology, Orthopedics,
              General Surgery, Pediatrics, Obstetrics & Gynecology, Neurology,
              Dermatology, Ophthalmology and Critical Care & Anaesthesia. Our
              team of highly skilled professionals utilizes state-of-the-art
              technology to ensure accurate diagnoses and effective treatments
              tailored to your unique needs. We prioritize patient comfort and
              satisfaction, fostering a collaborative environment where
              specialists work together for comprehensive care.
            </p>
            <p className="text-gray-600 text-sm md:text-base  leading-relaxed text-justify md:mb-1">
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
               <span className="hidden md:inline">Our</span> Specialties
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
        <section className="mt-6">
          {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Vision, Mission, and Values</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 px-2 md:px-0">
            <div className=" p-6 rounded-lg shadow-md relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.7,
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
                  opacity: 0.7,
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
                  opacity: 0.7,
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

        {/* Our Experts Section */}
        <section className="lg:py-12 px-4 md:py-10 py-8 mt-6 bg-gray-100">
          <h2 className="md:text-3xl text-xl messiri text-primary font-bold  text-center mb-8">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:px-4">
            {teamData.map((member,i) => (
              <TeamMemberCard member={member} key={i} />
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className=" flex flex-col md:flex-row justify-between  gap-6">
          {/* <div className='px-14'>
        <h2 className="text-3xl font-bold text-primary text-center mb-8 messiri">Our History</h2>
        <div className="relative border-l-2 border-blue-700 pl-8  ">
          {[
            { year: "2000", event: "Founded with the vision of providing quality healthcare." },
            { year: "2005", event: "Expanded facilities with advanced medical technologies." },
            { year: "2010", event: "Opened specialized departments for comprehensive care." },
            { year: "2020", event: "Achieved accreditation for excellence in healthcare services." },
          ].map((item, index) => (
            <div key={index} className="mb-8">
              <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
              <h3 className="text-lg font-semibold text-gray-800">{item.year}</h3>
              <p className="mt-2 text-gray-600">{item.event}</p>
            </div>
          ))}
        </div>
        </div> */}
         <div className="relative flex w-full">
  {/* Background Pattern */}
  <div
    className="absolute inset-0 z-[-1]"
    style={{
      backgroundImage: `url(${pattern1})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      opacity: 0.4,
    }}
  ></div>

  {/* Appointment Image (Visible on medium screens and above) */}
  <div className="md:block hidden flex-1">
    <img src={appoint} alt="appointmentPhoto" className="max-w- w-auto" />
  </div>

  {/* Appointment Form */}
  <div className="w-full flex-1 px-4 md:px-8 py-6">
    <AppointmentForm />
  </div>
</div>

        </section>
      </div>
    </>
  );
}

export default AboutPage;

const TeamMemberCard = ({ member }) => (
  <div className="group border-b-4 border-white hover:border-[#1b4d94] transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:p-4 py-4 bg-white rounded-lg shadow-md">
    {/* Image Section */}
    <div className="flex-1 md:w-36 md:h-44 h-52 px-2 md:px-0 overflow-hidden rounded-lg shadow-md">
      <img
        src={member?.imageUrl || "https://via.placeholder.com/150"}
        alt={member?.name || "Team member"}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="flex-1 text-left">
      <h3 className="text-base font-semibold text-gray-900">
        {member?.name || "Unknown"}
      </h3>
      <p className="text-sm font-semibold text-gray-600">{member?.specialty || "N/A"}</p>
      <p className="text-sm text-gray-600 mt-2">{member?.degree || "N/A"}</p>
      {/* <p className="text-sm text-gray-500">{member?.location || "N/A"}</p> */}
      <Link
        to="/contact"
        className="mt-4 block px-4 py-2 text-xs text-white bg-primary rounded-full cursor-pointer"
      >
        Request Appointment
      </Link>
    </div>
  </div>
);
