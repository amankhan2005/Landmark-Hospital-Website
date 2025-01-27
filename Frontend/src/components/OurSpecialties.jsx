import React from "react";

const specialties = [
  {
    id: 1,
    title: "NICU",
    description: "State-of-the-art neonatal care for premature and critically ill newborns.",
    image: `https://picsum.photos/400/300?random=1`,
  },
  {
    id: 2,
    title: "ICU",
    description: "Advanced intensive care unit for patients requiring critical care.",
    image: `https://picsum.photos/400/300?random=2`,
  },
  {
    id: 3,
    title: "General Ward",
    description: "Affordable and comprehensive medical care in our general ward.",
    image: `https://picsum.photos/400/300?random=3`,
  },
  {
    id: 4,
    title: "Private Rooms",
    description: "Spacious private rooms with personalized care and comfort.",
    image: `https://picsum.photos/400/300?random=4`,
  },
];

const Specialties = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="rounded-2xl shadow-lg overflow-hidden bg-white">
              <img
                src={specialty.image}
                alt={specialty.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {specialty.title}
                </h3>
                <div className="border-b-2 border-gray-300 mb-2"></div>
                <p className="text-gray-600 text-sm mb-4">
                  {specialty.description}
                </p>
                <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
