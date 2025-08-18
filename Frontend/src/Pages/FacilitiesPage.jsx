import React from 'react'
import ContactUs from '../components/ContactUs'
import FacilitiesComponent from '../components/FacilitiesComponent'
import BreadCumb from '../components/Breadcumb'
function FacilitiesPage() {
  return (
    <div>
        <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Facilities`, link: `/facilities` },
        ]}
        title='Best Facilities'
      />
      <div className='container mx-auto  md:py-12 pt-6 md:px-6 px-2'>
        <FacilitiesComponent/>
        </div>
 
    </div>
  )
}

export default FacilitiesPage