 import React from "react";

const AboutHospital = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-10">

          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-96 md:h-full">
              <img
                src="https://content3.jdmagicbox.com/comp/lucknow/j5/0522px522.x522.230827215507.m8j5/catalogue/landmark-advance-neurospine-care-superspeciality-hospital-jankipuram-lucknow-oe707gq0tz.jpg"
                alt="LandMark Hospital"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-96 md:h-full">
            <div className="flex flex-col justify-center h-full">
              <h2 className="lg:text-4xl text-3xl font-bold text-[#13335b] mb-4">
                Welcome to LandMark Advance NeuroSpine Care Hospital
              </h2>
              <h3 className="text-xl font-semibold text-[#3b628b] mb-6">
                Advanced Brain, Spine & Nerve Care in Lucknow, led by{" "}
                <span className="text-[#13335b] font-bold">Dr. Rahul Singh</span>
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed overflow-y-auto">
                <p>
                  At LandMark Hospital, we believe that every patient deserves
                  care that combines <span className="font-semibold">trust</span>,{" "}
                  <span className="font-semibold">precision</span>, and{" "}
                  <span className="font-semibold">compassion</span>. Guided by the
                  expertise of{" "}
                  <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span>—
                  a gold medalist neurosurgeon known for his dedication to Brain,
                  Spine, and Peripheral Nerve surgery—we provide treatment that is
                  both advanced and patient-centered.
                </p>

                <p>
                  Dr. Rahul Singh and his team bring together modern technology and
                  years of surgical experience to handle everything from life-saving
                  emergency care to complex neuro and spine procedures. Each treatment
                  plan is personalized, ensuring that patients not only receive
                  medical solutions but also feel supported throughout their recovery.
                </p>

                <p>
                  Beyond surgery, our rehabilitation team focuses on restoring mobility,
                  independence, and confidence, so that patients can return to their
                  daily lives with renewed strength and hope.
                </p>

                <p className="font-medium">
                  At LandMark Hospital, under the leadership of{" "}
                  <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span>, 
                  our mission is simple yet profound: to heal with expertise, to care 
                  with compassion, and to stand as a trusted partner in every patient’s 
                  journey to recovery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHospital;
