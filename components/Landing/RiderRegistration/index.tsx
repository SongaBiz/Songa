import React from 'react'
import RegistrationForm from '../../Riders'

export default function RiderRegistration() {
  return (
    <div className='h-auto px-10 py-20 bg-black'>
      <h1 className='text-white font-bold text-[30px] md:text-[40px]'>Become a Rider</h1>
    
      {/* Registration form  */}
      <RegistrationForm />
    </div>
  )
}
