 // src/Pages/Treatment/Spine.jsx
import React, { useState } from "react";
import {
  ChevronRight,
  Activity,
  Stethoscope,
  Heart,
  Users,
  Shield,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";

const SpineSurgeryPage = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  // ✅ Services Data (Spine)
  const services = [
    {
      id: 1,
      title: "Minimally Invasive Spine Surgery",
      subtitle: "Advanced Keyhole Techniques",
      description:
        "Small incision spine surgeries with faster recovery and less pain.",
      icon: <Shield className="w-8 h-8" />,
      details:
        "We use tubular retractors and endoscopic methods for herniated discs, stenosis, and spinal tumors.",
      benefits: [
        "Less blood loss",
        "Quicker recovery",
        "Minimal scarring",
      ],
      procedures: [
        "Endoscopic Discectomy",
        "Minimally Invasive Fusion",
        "Microdecompression",
      ],
    },
    {
      id: 2,
      title: "Spinal Tumor Surgery",
      subtitle: "Precision Tumor Removal",
      description:
        "Safe removal of benign and malignant spinal tumors with modern techniques.",
      icon: <Activity className="w-8 h-8" />,
      details:
        "Microsurgical and endoscopic spine tumor removal with advanced neuronavigation.",
      benefits: [
        "Precise tumor removal",
        "Improved function",
        "Reduced recurrence risk",
      ],
      procedures: [
        "Microsurgical tumor resection",
        "Endoscopic tumor removal",
        "Spinal reconstruction",
      ],
    },
    {
      id: 3,
      title: "Spinal Deformity Correction",
      subtitle: "Scoliosis & Kyphosis",
      description:
        "Advanced correction techniques for scoliosis, kyphosis, and spine deformities.",
      icon: <Users className="w-8 h-8" />,
      details:
        "3D correction methods, neuromonitoring, and customized implants for safe deformity correction.",
      benefits: [
        "Improved posture",
        "Better mobility",
        "Cosmetic improvement",
      ],
      procedures: [
        "Scoliosis correction",
        "Kyphosis correction",
        "Spinal fusion",
      ],
    },
    {
      id: 4,
      title: "Degenerative Spine Disorders",
      subtitle: "Disc & Nerve Compression",
      description:
        "Treatment of slipped discs, spinal stenosis, and spondylolisthesis.",
      icon: <Heart className="w-8 h-8" />,
      details:
        "Use of minimally invasive decompression, disc replacement, and stabilization surgeries.",
      benefits: [
        "Pain relief",
        "Nerve decompression",
        "Improved quality of life",
      ],
      procedures: [
        "Laminectomy",
        "Discectomy",
        "Artificial Disc Replacement",
      ],
    },
    {
      id: 5,
      title: "Spinal Trauma Surgery",
      subtitle: "Fracture & Injury Care",
      description:
        "Emergency and planned treatments for spinal fractures and injuries.",
      icon: <Award className="w-8 h-8" />,
      details:
        "State-of-the-art stabilization, instrumentation, and rehabilitation protocols.",
      benefits: [
        "Quick stabilization",
        "Prevent paralysis",
        "Restore mobility",
      ],
      procedures: [
        "Spinal fixation",
        "Vertebroplasty",
        "Kyphoplasty",
      ],
    },
    {
      id: 6,
      title: "Pediatric Spine Surgery",
      subtitle: "Child-Specific Care",
      description:
        "Specialized spine care for children with congenital and developmental spine issues.",
      icon: <Stethoscope className="w-8 h-8" />,
      details:
        "Scoliosis, spina bifida, and other congenital issues treated with precision and care.",
      benefits: [
        "Child-friendly approach",
        "Early correction",
        "Family counseling",
      ],
      procedures: [
        "Pediatric scoliosis surgery",
        "Tethered cord release",
        "Congenital deformity correction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Breadcrumb */}
      <BreadCumb
        title="Spine Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Treatment" },
          { label: "Spine Surgery" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-12 bg-gray-100">
        <div className=" container mx-auto px-4 lg:px-8 text-center">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#3b628b20", color: "#13335b" }}
          >
            <Activity className="w-4 h-4 mr-2" />
            Comprehensive Spine Care
          </div>
          <h2
            className="lg:text-5xl text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: "#13335b" }}
          >
            Complete <span style={{ color: "#3b628b" }}>Spine Healthcare</span>{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-justify">
            Specialized spine treatments using advanced techniques and compassionate care.
            From slipped discs to complex deformities, we ensure world-class outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer group flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div
                className="px-4 py-4 text-white relative"
                style={{
                  background: "linear-gradient(135deg, #3b628b, #13335b)",
                }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  <div className="animate-fade-in space-y-4 border-t pt-4">
                    <p className="text-gray-700">{service.details}</p>

                    <div>
                      <h4
                        className="font-bold flex items-center mb-2"
                        style={{ color: "#13335b" }}
                      >
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
                      <h4
                        className="font-bold flex items-center mb-2"
                        style={{ color: "#13335b" }}
                      >
                        <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                        Common Procedures:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.procedures.map((p, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: "#3b628b20",
                              color: "#13335b",
                            }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="mt-auto flex justify-between pt-4 border-t">
                  <button
                    className="font-semibold flex items-center gap-2"
                    style={{ color: "#3b628b" }}
                    onClick={() =>
                      setActiveService(
                        activeService === service.id ? null : service.id
                      )
                    }
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                    style={{
                      background: "linear-gradient(45deg, #3b628b, #13335b)",
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="rounded-3xl py-12 px-4 lg:px-12 text-center text-white shadow-2xl max-w-7xl mx-auto mb-12"
        style={{ background: "linear-gradient(135deg, #13335b, #3b628b)" }}
      >
        <h3 className="lg:text-4xl text-xl md:text-3xl font-bold mb-6">
          Ready to Take the Next Step in Your Spine Health?
        </h3>
        <p
          className="text-xl mb-8 text-justify md:text-center"
          style={{ color: "#c7d2fe" }}
        >
          Don’t let back or spine pain limit your life. Book your consultation today and explore advanced treatment options.
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

export default SpineSurgeryPage;
