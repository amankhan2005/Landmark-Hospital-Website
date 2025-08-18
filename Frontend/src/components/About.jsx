import React from 'react';

const AboutHospital = () => {
  const primaryColor = '#13335b'; // Dark Blue
  const secondaryColor = '#3b628b'; // Light Blue

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-96 md:h-full">
              <img
                src="https://content3.jdmagicbox.com/comp/lucknow/j5/0522px522.x522.230827215507.m8j5/catalogue/landmark-advance-neurospine-care-superspeciality-hospital-jankipuram-lucknow-oe707gq0tz.jpg"
                alt="LandMark Hospital"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="lg:text-4xl text-2xl  text-gray-800 font-bold mb-4"  >
              Welcome to LandMark Hospital
            </h2>
            <h3 className="text-xl font-semibold mb-6  text-gray-600" >
              Leading Brain, Spine & Peripheral Nerve Care in Lucknow
            </h3>

            <p className="text-gray-700 mb-4">
              Welcome to LandMark Hospital, your trusted destination for advanced Brain, Spine, and Peripheral Nerve care. Our expert neurosurgeons use cutting-edge technology to provide personalized and effective treatments.
            </p>

            <p className="text-gray-700 mb-4">
              We combine years of surgical expertise with modern innovations to ensure that every patient receives the highest quality of care possible.
            </p>

            <p className="text-gray-700 mb-4">
              From emergency interventions to complex surgeries, we ensure precision, safety, and compassionate care at every step of your journey. Our dedicated rehabilitation team works closely with patients to speed up recovery, restore mobility, and improve quality of life.
            </p>

            <p className="text-gray-700 font-medium">
              At LandMark, your health, comfort, and trust are our top priorities.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHospital;
