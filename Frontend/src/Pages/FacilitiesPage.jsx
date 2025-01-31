import React from 'react'
import Facilities from '../components/OurFacilities'
import BreadCumb from '../components/Breadcumb'
import ContactUs from '../components/ContactUs'
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
        <Facilities/>
        <ContactUs/>
    </div>
  )
}

export default FacilitiesPage