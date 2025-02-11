import React from 'react'
import SpecilitesComponent from './SpecilitesComponent'

function SpecialitiesSection() {
  return (
    <div className='bg-gray-100  md:py-12 py-10 md:px-10 px-4 ' data-aos='fade-up'>
         <h1 className="md:text-4xl text-primary text-2xl font-bold text-center  messiri">
          Our Specialities
        </h1>
        <p className="text-gray-600 mb-12 xl:mb-16 text-sm md:text-base text-center ">
    We offer expert care across a range of specialities.
  </p>
        <SpecilitesComponent/>
    </div>
  )
}

export default SpecialitiesSection