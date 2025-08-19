 import React, { useState } from "react";
import {
  ChevronRight,
  Brain,
  Stethoscope,
  Heart,
  Users,
  Shield,
  Award,
  Calendar,
  Activity,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/Breadcumb";

const BrainSurgeryPage = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Brain Tumor Surgery",
      subtitle: "Advanced Microsurgical Techniques",
      description:
        "Precise removal of brain tumors using microsurgery, brain mapping, and real-time imaging.",
      icon: <Brain className="w-8 h-8" />,
      details:
        "We employ neuro-navigation, intraoperative MRI, fluorescence-guided surgery, and brain mapping. Handling complex gliomas, meningiomas, pituitary tumors, and metastases.",
      benefits: [
        "Image-guided microsurgery",
        "Awake craniotomy",
        "Intraoperative mapping",
        "Minimally invasive approaches",
      ],
      procedures: [
        "Craniotomy",
        "Stereotactic biopsy",
        "Endoscopic surgery",
        "Gamma knife radiosurgery",
      ],
    },
    {
      id: 2,
      title: "Pediatric Brain Disorders",
      subtitle: "Specialized Child Neurosurgery",
      description:
        "Comprehensive care for children with tumors, hydrocephalus, and congenital issues.",
      icon: <Users className="w-8 h-8" />,
      details:
        "We treat craniosynostosis, spina bifida, Chiari malformation, and pediatric tumors with family-focused care.",
      benefits: [
        "Child-friendly environment",
        "Pediatric anesthesia",
        "Family counseling",
        "Long-term monitoring",
      ],
      procedures: [
        "Cranial vault reconstruction",
        "Shunt placement",
        "Epilepsy surgery",
        "Tumor resection",
      ],
    },
    {
      id: 3,
      title: "Cerebrovascular Disorders",
      subtitle: "Aneurysms & Stroke Care",
      description:
        "Treatment of aneurysms, AVMs, and strokes with microsurgery & endovascular techniques.",
      icon: <Heart className="w-8 h-8" />,
      details:
        "Dual expertise in microsurgical & endovascular treatments, handling aneurysms, AVMs, and moyamoya disease.",
      benefits: [
        "Emergency stroke intervention",
        "Advanced imaging",
        "Rehabilitation programs",
      ],
      procedures: [
        "Aneurysm clipping",
        "AVM resection",
        "Endovascular coiling",
        "Flow diverter placement",
      ],
    },
    {
      id: 4,
      title: "Hydrocephalus Treatment",
      subtitle: "Advanced CSF Management",
      description:
        "Modern hydrocephalus care with programmable shunts and endoscopic options.",
      icon: <Activity className="w-8 h-8" />,
      details:
        "Endoscopic ventriculostomy and programmable shunts with MRI-compatible systems and long-term monitoring.",
      benefits: [
        "Programmable shunts",
        "Endoscopic treatments",
        "Long-term monitoring",
      ],
      procedures: [
        "VP shunt placement",
        "Endoscopic third ventriculostomy",
        "Shunt revision surgery",
      ],
    },
    {
      id: 5,
      title: "Spinal & Skull Base Surgery",
      subtitle: "Complex Spine & Base of Skull",
      description:
        "Minimally invasive approaches for spinal tumors, disc issues, and skull base lesions.",
      icon: <Shield className="w-8 h-8" />,
      details:
        "We use advanced neuronavigation and keyhole surgery for spinal and skull base disorders, reducing recovery time.",
      benefits: [
        "Minimally invasive spine surgery",
        "Reduced recovery period",
        "Precision navigation",
      ],
      procedures: [
        "Discectomy",
        "Spinal fusion",
        "Skull base tumor removal",
        "Minimally invasive spine surgery",
      ],
    },
    {
      id: 6,
      title: "Functional Neurosurgery",
      subtitle: "Epilepsy & Movement Disorders",
      description:
        "Surgical interventions for epilepsy, Parkinson’s disease, and movement disorders.",
      icon: <Award className="w-8 h-8" />,
      details:
        "We specialize in Deep Brain Stimulation (DBS), epilepsy surgery, and advanced neuromodulation therapies.",
      benefits: [
        "Improved quality of life",
        "Targeted brain stimulation",
        "Personalized treatment plans",
      ],
      procedures: [
        "Deep Brain Stimulation (DBS)",
        "Epilepsy surgery",
        "Vagus Nerve Stimulation",
        "Cortical mapping",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <BreadCumb
        title="Brain Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Treatment" },
          { label: "Brain Surgery" },
        ]}
      />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#3b628b20", color: "#13335b" }}
          >
            <Brain className="w-4 h-4 mr-2" />
            Comprehensive Neurosurgical Services
          </div>
          <h2
            className="lg:text-5xl text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: "#13335b" }}
          >
            Complete <span style={{ color: "#3b628b" }}>Brain Healthcare</span>{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-justify">
            World-class neurosurgical treatments with advanced technology and
            compassionate care. From simple to complex cases, we deliver
            exceptional patient outcomes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col overflow-hidden">
              <div
                className="px-4 py-4 text-white relative"
                style={{ background: "linear-gradient(135deg, #3b628b, #13335b)" }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm font-medium" style={{ color: "#c7d2fe" }}>
                  {service.subtitle}
                </p>
              </div>

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
                      <ul className="space-y-1 text-gray-600 mb-4 text-sm">
                        {service.benefits.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-auto flex justify-between pt-4 border-t  border-gray-300 ">
                  <button
                    className="font-semibold flex items-center gap-2"
                    style={{ color: "#3b628b" }}
                    onClick={() => setActiveService(service.id)}
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
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrainSurgeryPage;
