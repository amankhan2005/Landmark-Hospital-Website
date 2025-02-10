import React from 'react'
import ContactUs from '../components/ContactUs'
import FacilitiesComponent from '../components/FacilitiesComponent'
import BreadCumb2 from '../components/Breadcumb2'
function FacilitiesPage() {
  return (
    <div>
        <BreadCumb2
        items={[
          { label: "Home", link: `/` },
          { label: `Facilities`, link: `/facilities` },
        ]}
        title='Best Facilities'
      />
      <div className='md:py-12 pt-6 md:px-6 px-2'>
        <FacilitiesComponent/>
        </div>
 
    </div>
  )
}

export default FacilitiesPage