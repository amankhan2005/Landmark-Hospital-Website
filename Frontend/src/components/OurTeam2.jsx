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

export default function OurTeam() {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl messiri font-bold text-blue-600">
        Meet Our Team
      </h2>
      <p className="text-gray-600 mt-2">
        Our dedicated professionals committed to your health.
      </p>

      <div className="mt-8 flex flex-col md:flex-row items-start gap-6 px-6">
        {/* Left Column - Team Members */}
        <div className="w-full md:w-2/3 grid grid-cols-1  mt-2  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden  shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-44 object-cover "
                />
              </div>
              <div className="p-4 text-center bg-white shadow-md">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Appointment Form */}
        <div className="w-full md:w-1/3 bg-white p-8 pt-6 shadow-lg rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 messiri">
            Book Appointment
          </h3>
          <form className="mt-4 flex flex-col gap-4">
            <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Neurology</option>
            </select>
            <select className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500">
              <option>Select Doctor</option>
              {teamMembers.map((doc, index) => (
                <option key={index}>{doc.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Appointment Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
