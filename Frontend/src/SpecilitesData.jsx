import general from './assets/specility/dropper.png'
import orthopedic from './assets/specility/arthritis.png'
import neurology from './assets/specility/neurology.png'
import gynecology from './assets/specility/gynecology.png'
import dermatology from './assets/specility/derm.png'
import critical from './assets/specility/critical.png'
import medicine from './assets/specility/general.png'
import emergency from './assets/specility/health-care.png'

export const specialities = [
  {
    title: "General Surgery",
    link: "general-surgery",
    image: `${general}`,
    description:
      "General surgery focuses on abdominal organs, including intestines, esophagus, stomach, liver, and other parts of the body.",
    services: [
      "Appendectomy",
      "Hernia Repair",
      "Gallbladder Removal",
      "Colorectal Surgery",
      "Breast Surgery",
    ],
  },
  {
    title: "Orthopedic Surgery",
    link: "orthopedic-surgery",
    image: `${orthopedic}`,
    description:
      "Orthopedic surgery deals with conditions involving the musculoskeletal system such as bones, joints, ligaments, and muscles.",
    services: [
      "Joint Replacement",
      "Arthroscopy",
      "Fracture Repair",
      "Spinal Surgery",
      "Pediatric Orthopedics",
    ],
  },
  {
    title: "Neurology",
    link: "neurology",
    image: `${neurology}`,
    description:
      "Neurology involves the diagnosis and treatment of nervous system disorders, including the brain, spinal cord, and nerves.",
    services: [
      "Stroke Management",
      "Epilepsy Treatment",
      "Migraine Management",
      "Parkinson's Disease Care",
      "Neuropathy Diagnosis",
    ],
  },
  {
    title: "Gynecology",
    link: "gynecology",
    image: `${gynecology}`,
    description:
      "Gynecology focuses on women’s health, including the reproductive system, hormonal disorders, and related medical issues.",
    services: [
      "Prenatal Care",
      "Family Planning",
      "Cancer Screening",
      "Menopause Management",
      "Minimally Invasive Surgery",
    ],
  },
  {
    title: "Dermatology",
    link: "dermatology",
    image: `${dermatology}`,
    description:
      "Dermatology specializes in the diagnosis and treatment of skin conditions, hair, and nails, including cosmetic procedures.",
    services: [
      "Acne Treatment",
      "Eczema Management",
      "Skin Cancer Screening",
      "Cosmetic Dermatology",
      "Laser Treatments",
    ],
  },
  {
    title: "Critical Care",
    link: "critical-care",
    image: `${critical}`,
    description:
      "Critical care is dedicated to supporting patients with life-threatening conditions requiring intensive monitoring and intervention.",
    services: [
      "Ventilator Management",
      "Organ Support",
      "Sepsis Management",
      "Post-Surgical ICU Care",
      "Trauma Recovery",
    ],
  },
  {
    title: "General Medicine",
    link: "general-medicine",
    image: `${medicine}`,
    description:
      "General medicine addresses a wide range of adult health concerns, from chronic diseases to preventive care.",
    services: [
      "Diabetes Management",
      "Hypertension Treatment",
      "Infectious Diseases",
      "Preventive Care",
      "Thyroid Disorders",
    ],
  },
  {
    title: "Emergency Critical Care",
    link: "emergency-critical-care",
    image: `${emergency}`,
    description:
      "Emergency critical care ensures rapid and comprehensive treatment for acute and severe medical conditions.",
    services: [
      "Heart Attack Care",
      "Stroke Response",
      "Trauma Management",
      "Poisoning Treatment",
      "Emergency Surgeries",
    ],
  },
];
