 import React from "react";
import Features from "../components/Features2";

const AboutHospital = () => {
  return (
    <div className="w-full pt-8 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container mx-auto ">
        
        {/* Heading Top */}
        <div className="text-center mb-4">
          <h2 className="lg:text-4xl text-3xl font-bold text-primary leading-snug">
             Advanced Brain, Spine & Nerve Care in Lucknow,<br /> led by Dr. Rahul Singh
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Right Side - Content */}
          <div className="w-full text-gray-700 leading-relaxed space-y-6 text-center">
            <p>
              At <span className="font-semibold"> LandMark Advance NeuroSpine Care Hospital </span>, we believe every patient deserves care that combines{" "}
              <span className="font-semibold">trust</span>,{" "}
              <span className="font-semibold">precision</span>, and{" "}
              <span className="font-semibold">compassion</span>. Guided by the expertise of{" "}
              <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span> — 
              a gold medalist neurosurgeon known for his dedication to <span className="font-semibold">Brain, Spine, and 
              Peripheral Nerve Surgery </span>— we provide treatment that is both advanced and 
              patient-centered.
            </p>

            <p className="text-center leading-relaxed">
              His team combine modern technology with years of Surgical experience to 
              manage everything from life-saving emergency care to highly complex neuro 
              and spine procedures. Each treatment plan is tailored individually, ensuring 
              patients receive not only the best medical solutions but also complete 
              emotional support throughout their recovery.
              Beyond Surgery, our dedicated rehabilitation team helps patients restore 
              mobility, independence, and confidence — enabling them to return to their 
              daily lives with renewed strength and hope.
            </p>

            <p className="font-medium">
              At LandMark Hospital, under the leadership of{" "}
              <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span>, <span className="text-[#13335b] font-semibold" >  our 
              mission is clear to heal with expertise, care with compassion, and remain 
              a trusted partner in every patient’s journey to recovery.</span>
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default AboutHospital;
