 import { useState } from 'react';
import { ChevronRight, Brain, Activity, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServiceSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const services = [
    { 
      id: 1,
      title: "Brain Surgery",
      subtitle: "Advanced Neurosurgical Excellence",
      description: "State-of-the-art brain surgery with precision microsurgical techniques, treating tumors, aneurysms, and complex neurological conditions with exceptional outcomes.",
      icon: <Brain className="w-12 h-12 text-white" />,
      iconBg: "bg-primary",
      link:"/brain"
    },
    {
      id: 2,
      title: "Spine Surgery",
      subtitle: "Precision Spinal Care",
      description: "Expert spinal surgery solutions including endoscopic procedures, fusion surgeries, and trauma care with focus on rapid recovery and pain relief.",
      icon: <Activity className="w-12 h-12 rotate-90 text-white" />,
      iconBg: "bg-primary",
      link:"/spine"
    },
    {
      id: 3,
      title: "Neuro Surgery",
      subtitle: "Comprehensive Neurological Solutions",
      description: "Complete neurological surgical care covering complex brain disorders, vascular conditions, and functional neurosurgery with world-class expertise.",
      icon: <Zap className="w-12 h-12 text-white" />,
      iconBg: "bg-primary",
      link:"/peripheral-nerve-surgery"
    }
  ];

  return (
    <div className="w-full bg-gray-50 lg:py-6 md:py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto container relative z-10">
        {/* Header Section */}
        <div className="text-center lg:mb-12 mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 leading-tight">
            Expert Medical Care
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class surgical excellence with cutting-edge technology and compassionate care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-10 mb-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative flex flex-col overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 transform hover:scale-105 bg-white ${
                hoveredCard === service.id ? 'shadow-2xl shadow-primary/20' : 'shadow-lg'
              } border border-gray-100 hover:border-primary/20`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Optional hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 transition-opacity duration-300 rounded-2xl ${
                hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
              }`}></div>

              <div className="relative z-10 lg:p-6 p-3 flex-1 flex flex-col">
                {/* Icon Section */}
                <div className="flex items-center justify-start mb-4">
                  <div className={`p-3 ${service.iconBg} rounded-2xl transition-all duration-300 ${
                    hoveredCard === service.id ? 'scale-110' : ''
                  }`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 text-[#13335b]">{service.title}</h3>
                  <p className="text-sm font-medium text-[#3b628b] mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button
                    className="px-6 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => navigate(service.link)}
                  >
                    Know More
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#3b628b" fillOpacity="0.1"/>
        </svg>
      </div> */}
    </div>
  );
}
