import React from "react";

const featureData = [
  {
    title: "Working Time",
    content: [
      "Mon – Wed: 9:00 AM - 7:00 PM",
      "Thursday: 9:00 AM - 6:30 PM",
      "Friday: 9:00 AM - 6:00 PM",
      "Sun – Sun: CLOSED",
    ],
  },
  {
    title: "Doctors Timetable",
    content: "An example text goes here with details about the timetable.",
    buttonText: "View Timetable",
    buttonLink: "#",
  },
  {
    title: "Appointments",
    content: "An example text goes here with details about appointments.",
    buttonText: "Make an Appointment",
    buttonLink: "#",
  },
  {
    title: "Emergency Cases",
    content: "An example text goes here with details about emergency cases.",
    contactNumber: "1-800-123-4560",
  },
];

const FeaturesOverlay = () => {
  return (
    <>
      {/* Features Overlay */}
      <div className="absolute bottom-[-120px] flex justify-center items-center  bg-opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-4  w-full px-4 py-10">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-200 text-black p-6 border rounded shadow-lg"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>

              {/* Render content dynamically */}
              {Array.isArray(feature.content) ? (
                <ul className="mt-4">
                  {feature.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4">{feature.content}</p>
              )}

              {/* Conditional rendering for buttons or contact number */}
              {feature.buttonText && feature.buttonLink && (
                <a
                  href={feature.buttonLink}
                  className="mt-10 bg-white text-blue-600 px-4 py-2 rounded"
                >
                  {feature.buttonText}
                </a>
              )}

              {feature.contactNumber && (
                <div className="mt-4 flex items-center">
                  <span className="font-bold">{feature.contactNumber}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesOverlay;
