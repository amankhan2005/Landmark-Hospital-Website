import React from 'react'
import BreadCumb from '../components/Breadcumb'
import ContactUs from '../components/ContactUs'
import FacilitiesComponent from '../components/FacilitiesComponent'
function FacilitiesPage() {
  return (
    <div>
        <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Facilities`, link: `/facilities` },
        ]}
        title='Our Facilities'
      />
        <FacilitiesComponent/>
        <ContactUs/>
    </div>
  )
}

export default FacilitiesPage