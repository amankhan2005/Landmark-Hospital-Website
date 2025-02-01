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
      <div className="py-10 pt-20">

   <SpecilitesComponent/>
      </div>
    </>
  );
};

export default Specialities;
