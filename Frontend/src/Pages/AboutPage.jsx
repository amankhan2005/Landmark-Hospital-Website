import React from 'react';
import BreadCumb from '../components/Breadcumb';
import AppointmentForm from '../components/AppointmentForm';
import pattern from "../assets/home/whywechoose.png";
function AboutPage() {
    const teamMembers = [
        {
          name: "Dr. O.P. Pandey",
          specialty: "Medical Director",
          image: "https://picsum.photos/300/300?random=1",
        },
        {
          name: "Dr. Anil Srivastava",
          specialty: "Hematologist",
          image: "https://picsum.photos/300/300?random=2",
        },
        {
          name: "Dr. A.k. Mishra",
          specialty: "Family Doctor",
          image: "https://picsum.photos/300/300?random=3",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=4",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=5",
        },
        {
          name: "Dr. B.P. Singh",
          specialty: "Skin Specialist",
          image: "https://picsum.photos/300/300?random=6",
        },
      ];
  return (
    <>
     <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `About Us`, link: `/about` },
        ]}
        title="About Hope Hospital"
      />
    <div className="md:p-8 pt-10">
      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 md:p-8 p-2 rounded-lg shadow-md">
        <div className="md:w-1/2 w-full">
          <img 
            src="https://picsum.photos/600/400" 
            alt="Hopr Hospital" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="md:text-4xl text-2xl font-bold text-blue-700 messiri">The Story of Hope Hospital</h2>
          <p className="mt-4 text-gray-700 text-justify">
            At Hope Hospital, we are committed to bringing exceptional healthcare to our community. Since our inception, we have pursued excellence in medical care with a vision to make it accessible for all. With a patient-centric approach, we aim to transform healthcare by blending compassion with cutting-edge technology. Join us on our journey of making lives healthier and happier.
          </p>
          <div className="flex mt-4 gap-4">
            <a href="/contact" className="text-blue-600 hover:underline underline-offset-2">Contact Us</a>
            <a href="/specialities" className="text-blue-600 hover:underline underline-offset-2">Our Specialties</a>
            <a href="/facilities" className="text-blue-600 hover:underline underline-offset-2">Our Facilities</a>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="mt-6">
        {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Vision, Mission, and Values</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h3 className="text-2xl font-semibold text-blue-700 messiri">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To be the leading healthcare institution known for innovation, excellence, and compassion in providing quality medical care.
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
            <h3 className="text-2xl font-semibold text-blue-700 messiri">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To deliver exceptional healthcare services with a focus on accessibility, affordability, and patient satisfaction, while advancing medical research and education.
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
            <h3 className="text-2xl font-semibold text-blue-700 messiri">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Compassion, Integrity, Excellence, Innovation, and Collaboration form the core of our values.
            </p>
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="lg:py-12 md:py-10 py-8 mt-6 bg-gray-100">
        <h2 className="md:text-4xl text-2xl messiri text-blue-700 font-bold  text-center mb-8">Meet Our Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white py-2 px-0 rounded-lg shadow-md text-center">
              <img 
                src={`https://picsum.photos/200/200?random=${index + 1}`} 
                alt={`Doctor ${index + 1}`} 
                className="w-44 h-44 mx-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Dr. Expert {index + 1}</h3>
              <p className="text-sm text-gray-600">Specialist in Specialty {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="mt-16 flex flex-col md:flex-row justify-between  gap-6">
        <div className='px-14'>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 messiri">Our History</h2>
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
        </div>
        <div className='w-full flex-1 px-2 my-4'>
          <AppointmentForm/>
        </div>
      </section>
    </div>
    </>
  );
}

export default AboutPage;
