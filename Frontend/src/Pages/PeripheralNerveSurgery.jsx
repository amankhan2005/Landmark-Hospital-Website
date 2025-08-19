 import React, { useState } from "react";
import {
  ChevronRight,
  Activity,
  Stethoscope,
  Shield,
  Users,
  Award,
  Calendar,
  CheckCircle,
  Hand,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";

const PeripheralNerveSurgeryPage = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Peripheral Nerve Injury Repair",
      subtitle: "Advanced Microsurgical Techniques",
      description:
        "Treatment for traumatic nerve injuries ensuring functional recovery with microsurgical repair.",
      icon: <Hand className="w-8 h-8" />,
      details:
        "We perform nerve grafting, direct repair, and advanced microsurgical reconstructions for traumatic injuries affecting arms, legs, or face.",
      benefits: ["Precise nerve repair", "Improved motor function", "Pain relief"],
      procedures: ["Nerve grafting", "Direct repair", "Nerve transfer"],
    },
    {
      id: 2,
      title: "Brachial Plexus Surgery",
      subtitle: "Restoring Arm & Shoulder Function",
      description:
        "Complex surgeries to restore function after brachial plexus injuries in children and adults.",
      icon: <Users className="w-8 h-8" />,
      details:
        "We manage birth-related and traumatic brachial plexus injuries using nerve transfers, grafts, and microsurgery.",
      benefits: [
        "Restoration of arm movement",
        "Specialized pediatric care",
        "Advanced rehabilitation support",
      ],
      procedures: ["Nerve transfers", "Neurolysis", "Muscle/tendon transfers", "Nerve grafting"],
    },
    {
      id: 3,
      title: "Peripheral Nerve Tumor Removal",
      subtitle: "Benign & Malignant Nerve Tumors",
      description:
        "Safe excision of schwannomas, neurofibromas, and malignant nerve sheath tumors.",
      icon: <Shield className="w-8 h-8" />,
      details:
        "We use microsurgical techniques to remove tumors without damaging nerve function whenever possible.",
      benefits: ["Minimal nerve damage", "Microsurgical precision", "Reduced recurrence rates"],
      procedures: ["Schwannoma excision", "Neurofibroma removal", "Tumor biopsy"],
    },
    {
      id: 4,
      title: "Carpal Tunnel & Compression Syndromes",
      subtitle: "Relieving Entrapment Neuropathies",
      description:
        "Surgical solutions for carpal tunnel, cubital tunnel, and other compression syndromes.",
      icon: <Activity className="w-8 h-8" />,
      details:
        "We provide minimally invasive decompression surgeries to relieve pressure on nerves for lasting relief.",
      benefits: ["Quick recovery", "Pain relief", "Restored hand strength"],
      procedures: ["Carpal tunnel release", "Cubital tunnel release", "Peripheral decompressions"],
    },
    {
      id: 5,
      title: "Nerve Transfer Procedures",
      subtitle: "Restoring Lost Function",
      description:
        "Innovative nerve transfer surgeries for patients with paralysis due to nerve injury.",
      icon: <Stethoscope className="w-8 h-8" />,
      details:
        "Nerve transfers are used when direct repair isn’t possible. We rewire functional nerves to restore lost motor power.",
      benefits: ["Restoration of movement", "Minimally invasive approach", "Enhanced recovery chances"],
      procedures: ["Oberlin transfer", "Spinal accessory transfer", "Intercostal nerve transfer"],
    },
    {
      id: 6,
      title: "Rehabilitation & Pain Management",
      subtitle: "Holistic Post-Surgical Care",
      description:
        "Comprehensive rehab and pain management programs for nerve-related conditions.",
      icon: <Award className="w-8 h-8" />,
      details:
        "Our multidisciplinary team ensures long-term recovery with physiotherapy, occupational therapy, and pain management.",
      benefits: ["Improved quality of life", "Specialized rehab protocols", "Long-term monitoring"],
      procedures: ["Physiotherapy", "Neuromodulation", "Medication management"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Breadcrumb */}
      <BreadCumb
        title="Peripheral Nerve Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Treatment" },
          { label: "Peripheral Nerve Surgery" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#3b628b20", color: "#13335b" }}
          >
            <Hand className="w-4 h-4 mr-2" />
            Expert Peripheral Nerve Care
          </div>
          <h2
            className="lg:text-5xl text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: "#13335b" }}
          >
            Advanced <span style={{ color: "#3b628b" }}>Peripheral Nerve</span> Surgery Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-justify">
            From traumatic injuries to chronic nerve compression and tumors, we offer cutting-edge surgical and rehabilitation solutions for the best recovery outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col overflow-hidden">
              {/* Header */}
              <div
                className="px-4 py-4 text-white relative"
                style={{
                  background: "linear-gradient(135deg, #3b628b, #13335b)",
                }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm font-medium" style={{ color: "#c7d2fe" }}>
                  {service.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="flex-grow flex flex-col p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>

                {activeService === service.id && (
                  <div className="animate-fade-in space-y-4 border-t border-gray-100 pt-4">
                    <p className="text-gray-700">{service.details}</p>

                    <div>
                      <h4 className="font-bold flex items-center mb-2" style={{ color: "#13335b" }}>
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        {service.benefits.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold flex items-center mb-2" style={{ color: "#13335b" }}>
                        <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                        Common Procedures:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.procedures.map((p, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs mb-4  rounded-full font-medium"
                            style={{ backgroundColor: "#3b628b20", color: "#13335b" }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="mt-auto flex justify-between pt-4 border-t border-gray-300">
                  <button
                    className="font-semibold flex items-center gap-2"
                    style={{ color: "#3b628b" }}
                    onClick={() =>
                      setActiveService(activeService === service.id ? null : service.id)
                    }
                  >
                    {activeService === service.id ? "Show Less" : "Learn More"}
                    <ChevronRight
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        activeService === service.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <button
                    className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                    style={{ background: "linear-gradient(45deg, #3b628b, #13335b)" }}
                    onClick={() => navigate("/contact")}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        className="rounded-3xl py-12 px-4 lg:px-12 text-center text-white shadow-2xl max-w-7xl mx-auto mb-12"
        style={{ background: "linear-gradient(135deg, #13335b, #3b628b)" }}
      >
        <h3 className="lg:text-4xl text-xl md:text-3xl font-bold mb-6">
          Ready to Begin Your Nerve Recovery Journey?
        </h3>
        <p className="text-xl mb-8 text-justify md:text-center" style={{ color: "#c7d2fe" }}>
          Early treatment and specialized surgical care can restore function and improve your quality of life. Book your consultation today.
        </p>
        <button
          className="flex items-center justify-center mx-auto px-10 py-5 rounded-full font-bold text-lg text-white shadow-xl hover:scale-105 transition-transform"
          style={{ background: "linear-gradient(45deg, #3b628b, #13335b)" }}
          onClick={() => navigate("/contact")}
        >
          <Calendar className="w-5 h-5 mr-3" />
          Schedule Free Consultation
        </button>
      </section>
    </div>
  );
};

export default PeripheralNerveSurgeryPage;
