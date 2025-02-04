import React from "react";
import BreadCumb from "../components/Breadcumb";



import SpecilitesComponent from "../components/SpecilitesComponent";
import ContactUs from "../components/ContactUs";

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
      <div className="py-10md:pb-0 md:pt-20 md:px-8 px-2">

   <SpecilitesComponent/>
      </div>
      <div className='mb-6'>
      
              <ContactUs/>
              </div>
    </>
  );
};

export default Specialities;
