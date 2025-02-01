import AppointmentForm from "./AppointmentForm";

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
    <section className="lg:py-14 md:py-12 py-10 bg-gray-100 text-center">
      <h1 className="md:text-4xl text-2xl  messiri font-bold text-blue-600">
        Meet Our Team
      </h1>
      <p className="text-gray-600 mb-7">
        Our dedicated professionals committed to your health.
      </p>

      <div className=" flex flex-col md:flex-row items-start gap-6 px-6">
        {/* Left Column - Team Members */}
        <div className="w-full md:w-2/3 grid grid-cols-1  mt-2  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden  shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-52 object-cover "
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
        <div className="w-full md:w-1/3">
          <AppointmentForm/>
        </div>
      </div>
    </section>
  );
}
