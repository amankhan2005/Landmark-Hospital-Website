 import React from "react";
import BreadCumb from "../components/BreadCumb";

// Local Images (Unsplash ya random imgs laga do abhi)
import emergency from "../assets/Facilities/emergency.jpg";
import icu from "../assets/Facilities/ICU.jpg";
import privateRoom from "../assets/Facilities/Private.jpg";
import general from "../assets/Facilities/General-care.jpg";

function FacilitiesPage() {
 const facilities = [
  {
    title: "Emergency Care",
    img: emergency,
    desc: `Our 24/7 Emergency Care department is designed to provide immediate 
           medical attention in cases of accidents, trauma, strokes, cardiac 
           arrests, and other life-threatening situations. With cutting-edge 
           diagnostic equipment, a fully equipped ambulance service, and 
           advanced resuscitation units, we ensure patients receive the best 
           possible care from the very first minute. Our emergency team is 
           trained to handle critical cases with speed and precision, minimizing 
           delays and maximizing chances of recovery. Whether it’s a minor 
           injury or a major accident, our doctors, nurses, and paramedics 
           provide comprehensive support. The facility is directly connected 
           with ICU, surgical units, and radiology for seamless treatment.`,
  },
  {
    title: "Intensive Care Unit (ICU)",
    img: icu,
    desc: `Our state-of-the-art Intensive Care Unit is equipped with advanced 
           ventilators, cardiac monitors, dialysis machines, and life-support 
           systems to manage critically ill patients. The ICU team consists of 
           intensivists, critical care nurses, respiratory therapists, and 
           technicians working round the clock. Every bed is monitored with 
           high-end equipment that tracks vital parameters in real time. The 
           unit follows strict infection control protocols to safeguard patients 
           with weakened immunity. Emergency surgeries, organ failures, and 
           post-operative care are all handled here with utmost precision. We 
           believe in family-centered care, allowing relatives to stay informed 
           and engaged throughout the recovery process.`,
  },
  {
    title: "General Care",
    img: general,
    desc: `Our General Care facility provides a wide range of medical services 
           including regular checkups, vaccinations, preventive screenings, and 
           disease management. From common illnesses like fever and infections 
           to chronic conditions like diabetes and hypertension, our doctors 
           deliver personalized care for patients of all age groups. The 
           department is designed to make healthcare accessible and affordable, 
           ensuring every patient gets the right diagnosis and treatment on 
           time. We emphasize preventive healthcare through lifestyle 
           counseling, diet management, and health awareness programs. With 
           experienced physicians and modern diagnostic labs, patients get 
           comprehensive care under one roof without unnecessary delays.`,
  },
  {
    title: "Private Care",
    img: privateRoom,
    desc: `Our Private Care rooms are designed to provide comfort, privacy, and 
           personalized attention for patients who prefer a calm healing 
           environment. Each room is fully air-conditioned, equipped with 
           modern amenities, attached washrooms, and dedicated nursing support. 
           Patients receive focused attention from doctors and staff, ensuring 
           faster recovery with minimal disturbances. These rooms are ideal for 
           long-term care, post-surgical recovery, and patients who require 
           isolation. The facility also includes meal customization, companion 
           accommodation, and round-the-clock housekeeping. Combining luxury 
           with medical excellence, our private care rooms bring the best of 
           hospitality and healthcare together for a superior experience.`,
  },
];


  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: "Facilities", link: `/facilities` },
        ]}
        title="Best Facilities"
      />

      <div className="container mx-auto py-12 px-4 md:px-8 ">
        {facilities.map((item, index) => (
          <section
            key={index}
            className="mb-16 border-b pb-12 last:border-b-0"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              {item.title}
            </h2>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-6"
            />
            <p className="text-gray-700 leading-relaxed text-lg text-center  mx-auto">
              {item.desc}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default FacilitiesPage;
