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
      <div className='pt-12 px-6'>
        <FacilitiesComponent/>
        </div>
        <ContactUs/>
    </div>
  )
}

export default FacilitiesPage