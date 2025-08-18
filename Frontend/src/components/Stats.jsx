 import React, { useEffect, useState } from "react";
import { Hospital, Clock, Microscope, Baby, Activity } from "lucide-react";

const statsData = [
  { icon: Hospital, label: "HAPPY PATIENTS", target: 10000 },
  { icon: Clock, label: "YEARS EXPERIENCE", target: 4 },
  { icon: Microscope, label: "TOTAL CASES SOLVED", target: 10000 },
  { icon: Activity, label: "SUCCESSFUL SURGERIES", target: 5000 },
  { icon: Baby, label: "DELIVERIES", target: 7000, hideOnMobile: true },
];

const ClinicStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation duration in ms
    const intervalTime = 20; // update interval in ms
    const steps = duration / intervalTime;

    const intervals = statsData.map((stat, index) => {
      const increment = stat.target / steps;
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[index] < stat.target) {
            next[index] = Math.min(next[index] + increment, stat.target);
          }
          return next;
        });
      }, intervalTime);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="bg-primary">
      <div className="mx-auto px-4 flex items-center justify-center flex-col">
        <div className="grid container grid-cols-2 md:grid-cols-5 gap-8 text-center mx-auto">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-4 group hover:transform hover:scale-105 transition-all duration-300 ${
                  stat.hideOnMobile ? "hidden md:block" : ""
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300">
                    <Icon className="text-[#13335b] h-8 w-8" />
                  </div>
                </div>
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                  {Math.floor(counts[index])}
                  {stat.label === "YEARS EXPERIENCE" ? "+" : "+"}
                </div>
                <div className="text-white font-semibold text-sm lg:text-base opacity-90 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Helper function to convert hex to rgba for gradient backgrounds
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default ClinicStats;
