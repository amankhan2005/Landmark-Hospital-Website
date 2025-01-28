import React from 'react'
import BreadCumb from '../components/Breadcumb'

function OurTeam() {
  const teamMembers = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', category: 'Heart Specialist', image: 'https://picsum.photos/300/300?random=1' },
    { name: 'Dr. Jane Smith', specialty: 'Neurologist', category: 'Brain Specialist', image: 'https://picsum.photos/300/300?random=2' },
    { name: 'Dr. Alice Brown', specialty: 'Pediatrician', category: 'Child Specialist', image: 'https://picsum.photos/300/300?random=3' },
    { name: 'Dr. Bob White', specialty: 'Orthopedic', category: 'Bone Specialist', image: 'https://picsum.photos/300/300?random=4' },
    { name: 'Dr. Emily Green', specialty: 'Dermatologist', category: 'Skin Specialist', image: 'https://picsum.photos/300/300?random=5' },
    { name: 'Dr. Michael Lee', specialty: 'Dentist', category: 'Teeth Specialist', image: 'https://picsum.photos/300/300?random=6' },
    { name: 'Dr. Linda Harris', specialty: 'Psychiatrist', category: 'Mental Health Specialist', image: 'https://picsum.photos/300/300?random=7' },
    { name: 'Dr. William Clark', specialty: 'Gastroenterologist', category: 'Digestive System Specialist', image: 'https://picsum.photos/300/300?random=8' },
    { name: 'Dr. Olivia Martinez', specialty: 'Gynecologist', category: 'Women’s Health Specialist', image: 'https://picsum.photos/300/300?random=9' },
    { name: 'Dr. Samuel Thompson', specialty: 'Urologist', category: 'Urinary System Specialist', image: 'https://picsum.photos/300/300?random=10' },
  ];

  return (
    <div>
      <BreadCumb
        items={[
          { label: 'Home', link: `/` },
          { label: `Our Team`, link:`/our-team` },
        ]}
        title='Our Team'
      />
      <div className="flex flex-wrap justify-evenly mt-10 items-center gap-8 p-4">
        {teamMembers.map((member, index) => (
          <div key={index} className=" w-full md:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={member.image} alt={member.name} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.specialty}</p>
              {/* <p className="text-sm text-gray-500">{member.category}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
