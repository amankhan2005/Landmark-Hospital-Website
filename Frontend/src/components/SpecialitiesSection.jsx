import React from 'react'
import SpecilitesComponent from './SpecilitesComponent'

function SpecialitiesSection() {
  return (
    <div className='bg-gray-100  md:pt-12 md:pb-6 py-10 md:px-6 px-4'>
         <h1 className="md:text-4xl text-primary text-2xl font-bold text-center  messiri">
          Our Specialities
        </h1>
        <p className="text-gray-600 mb-12 text-sm md:text-base text-center ">
    We offer expert care across a range of specialties.
  </p>
        <SpecilitesComponent/>
    </div>
  )
}

export default SpecialitiesSection