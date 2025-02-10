import React, { useEffect, useState } from "react";
import BreadCumb from "../components/Breadcumb";
import AppointmentForm from "../components/AppointmentForm";
import image from "../assets/appointment-image.png";
const Appoinment = () => {
  return (
    <div className="">
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Book Appointment`, link: `/apppintment` },
        ]}
        title="Book Appointment"
      />

      <div className="flex md:py-12 py-8 md:px-8 px-4">
        <div className="flex-1">
          <img src={image} />
        </div>

        <div className="flex-1 px-2">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
