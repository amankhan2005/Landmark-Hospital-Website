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
      <div className='md:pt-12 pt-6 md:px-6 px-2'>
        <FacilitiesComponent/>
        </div>
        <div className='md:py-0 py-6'>

        <ContactUs/>
        </div>
    </div>
  )
}

export default FacilitiesPage