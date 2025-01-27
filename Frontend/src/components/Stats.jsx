import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faUserMd, faHospital, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const stats = [
  { icon: faHeartbeat, number: 9632, label: 'Happy Patients' },
  { icon: faUserMd, number: 178, label: 'Qualified Doctors' },
  { icon: faHospital, number: 864, label: 'Clinic Rooms' },
  { icon: faMapMarkerAlt, number: 473, label: 'Local Partners' },
];

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-16">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-60 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <FontAwesomeIcon icon={stat.icon} />
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            <CountUp end={stat.number} duration={2} />
          </div>
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
