import nicu from "./assets/home/nicu.png";
import icu from "./assets/home/icu.png";
import privateRoom from "./assets/home/private-room.png";
import genral from "./assets/home/genral.png";

export const facilities = [
  {
    id: 1,
    title: "NICU",
    link: "nicu",
    description:
      "Our Neonatal Intensive Care Unit (NICU) provides specialized medical care for premature and critically ill newborns. Equipped with advanced life-support technology and staffed by experienced neonatologists, nurses, and pediatricians, we ensure that every newborn receives the best possible care. The NICU features incubators, ventilators, and round-the-clock monitoring to support fragile infants. Parents are given regular updates, and our team provides guidance on infant care post-discharge. We prioritize the health and well-being of newborns, ensuring that they receive optimal treatment for a healthy future.",
    image: `${nicu}`,
    services: [
      "24/7 neonatal monitoring",
      "Advanced life-support systems",
      "Ventilator and respiratory support",
      "Specialized neonatal nutrition",
      "Parental counseling and education",
    ],
  },
  {
    id: 2,
    title: "ICU",
    link: "icu",
    description:
      "Our Intensive Care Unit (ICU) is designed to provide life-saving treatment for patients with critical conditions. With state-of-the-art medical equipment, including ventilators, defibrillators, and continuous monitoring systems, we offer comprehensive care for patients requiring close observation. Our team of intensivists, nurses, and specialists works around the clock to stabilize and treat life-threatening conditions. The ICU is structured to manage a variety of emergencies, including cardiac, respiratory, and neurological cases. Our focus is on providing immediate, high-quality care to ensure the best possible patient outcomes.",
    image: `${icu}`,
    services: [
      "24/7 critical care monitoring",
      "Advanced ventilator support",
      "Cardiac and respiratory care",
      "Emergency trauma management",
      "Specialized infection control",
    ],
  },
  {
    id: 3,
    title: "General Care",
    link: "general-care",
    description:
      "Our General Ward offers affordable yet high-quality medical care to patients requiring hospitalization. Designed to accommodate multiple patients in a shared environment, the ward maintains cleanliness, hygiene, and round-the-clock medical supervision. With trained medical staff and access to essential healthcare services, we ensure patients receive the care they need during recovery. The ward provides comfortable bedding, nutritious meals, and assistance with daily activities. Our focus is on delivering compassionate and cost-effective healthcare while maintaining a safe and supportive healing environment for all patients.",
    image: `${genral}`,
    services: [
      "24/7 medical supervision",
      "Basic nursing care",
      "Hygienic and clean environment",
      "Regular doctor visits",
      "Affordable treatment options",
    ],
  },
  {
    id: 4,
    title: "Private Care",
    link: "private-care",
    description:
      "Our Private Rooms are designed to provide patients with comfort, privacy, and personalized medical care. Each room is equipped with modern amenities, including an adjustable hospital bed, television, Wi-Fi, and a private washroom. Patients receive dedicated nursing care and personalized attention from doctors. The rooms are spacious, air-conditioned, and provide a peaceful environment conducive to recovery. Family members are allowed flexible visiting hours, ensuring emotional support for the patient. We focus on delivering a comfortable and stress-free healing experience while maintaining top-notch medical care.",
    image: `${privateRoom}`,
    services: [
      "Dedicated nursing care",
      "Private and peaceful environment",
      "Flexible visiting hours",
      "Modern room amenities",
      "Personalized diet and nutrition plans",
    ],
  },
];
