import React from "react";

import SpecilitesComponent from "../components/SpecilitesComponent";
import ContactUs from "../components/ContactUs";
import BreadCumb2 from "../components/Breadcumb2";

const Specialities = () => {

  return (
    <>
    <BreadCumb2
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
