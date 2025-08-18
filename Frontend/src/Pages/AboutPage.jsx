 import React, { memo } from "react";
import BreadCumb from "../components/Breadcumb";
import pattern from "../assets/home/whywechoose.png";
import about from "../assets/home/HopeHospital-about.webp";
import { Link } from "react-router-dom";
import SpecialitiesSection from "../components/SpecialitiesSection";
import Stats from "../components/Stats";
 import  About from "../components/About";
function AboutPage() {
  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `About Us`, link: `/about` },
          { label: "Landmark Advance Neurospine Care", link: `/about` },
        ]}
        title="About Landmark Advance Neurospine Care"
      />

      <About />
      <Stats />
      <SpecialitiesSection />
      
    </>
  );
}

export default memo(AboutPage);
