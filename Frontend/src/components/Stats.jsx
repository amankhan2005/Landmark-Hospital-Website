 import React, { useEffect, useState } from "react";
import { User, Activity, HeartPulse } from "lucide-react"; // professional SVG icons

const statsData = [
  { label: "HAPPY PATIENTS", target: 10000, icon: User, iconBg: "bg-green-100 text-green-600" },
  { label: "TOTAL CASES SOLVED", target: 12000, icon: Activity, iconBg: "bg-yellow-100 text-yellow-600" },
  { label: "SUCCESSFUL SURGERIES", target: 5000, icon: HeartPulse, iconBg: "bg-pink-100 text-pink-600" },
];

const ClinicStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
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
    <section className="py-16 bg-gradient-to-r from-[#13335b] to-[#3b628b]">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Circle */}
                <div className={`mb-4 p-5 rounded-full ${stat.iconBg} flex items-center justify-center shadow-md`}>
                  <Icon className="h-12 w-12" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                  {Math.floor(counts[index])}+
                </div>

                {/* Label */}
                <div className="text-gray-600 font-semibold text-center text-sm md:text-lg tracking-wide uppercase">
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

export default ClinicStats;
