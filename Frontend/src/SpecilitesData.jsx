import general from './assets/specility/dropper.png'
import orthopedic from './assets/specility/arthritis.png'
import neurology from './assets/specility/neurology.png'
import gynecology from './assets/specility/gynecology.png'
import dermatology from './assets/specility/derm.png'
import critical from './assets/specility/critical.png'
import medicine from './assets/specility/general.png'
import emergency from './assets/specility/health-care.png'

import anesthesia from './assets/specility/anesthesia.png'
import cardiology from './assets/specility/cardiology.png'
import general1 from './assets/specility/general1.png'
import gynecology1 from './assets/specility/gynecology1.png'
import neurology1 from './assets/specility/neurology1.png'
import orthopedic1 from './assets/specility/orthopedic.png'
import phthalmology from './assets/specility/phthalmology.png'
import derm1 from './assets/specility/derm1.png'

export const specialities = [
  {
    title: "General Surgery",
    link: "general-surgery",
    image: `${general}`,
    img:`${general1}`,
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
    title: "Orthopedic",
    link: "orthopedic-surgery",
    image: `${orthopedic}`,
    img:`${orthopedic1}`,
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
    img:`${neurology1}`,
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
    title: "Obstetrics & Gynecology",
    link: "gynecology",
    image: `${gynecology}`,
    img:`${gynecology1}`,
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
    img:`${derm1}`,
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
    title: "Critical Care & anesthesia",
    link: "critical-care",
    image: `${medicine}`,
    img:`${anesthesia}`,
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
    title: "Cardiology",
    link: "cardiology",
    image: `${critical}`,
    img:`${cardiology}`,
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
    title: "Ophthalmology",
    link: "emergency-critical-care",
    image: `${emergency}`,
    img:`${phthalmology}`,
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
