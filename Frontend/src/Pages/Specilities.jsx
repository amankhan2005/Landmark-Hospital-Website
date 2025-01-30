import React from "react";
import BreadCumb from "../components/Breadcumb";



import SpecilitesComponent from "../components/SpecilitesComponent";

const Specialities = () => {

  return (
    <>
    <BreadCumb
        items={[
          { label: 'Home', link: `/` },
          { label: `Specialities`, link:`/specialities` },
        ]}
        title='Our Specialities'
      />
   <SpecilitesComponent/>
    </>
  );
};

export default Specialities;
