import React from 'react'

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { GoCheckCircle } from "react-icons/go";

function SuccessfulReset() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
    <div className='flex justify-center mb-4'>
            <img src="/assets/images/SONGA-small-red-logo.png" alt=""height="150" width="150"/>
          </div>
        <div className='flex justify-center mb-8 '>
        <GoCheckCircle size={48}
        className=' text-green border-black-600 border-solid border-2 rounded-xl '
        color='green' />
      </div>
      <div>
      <h1 className='font-bold text-3xl justify-center flex'>Password Reset</h1>
       <p className='flex justify-center'>You password has been successfully reset.Click</p>
       <p className='flex justify-center'> below to login magically</p>
       </div>
       
        
        <div className="mt-8">
          <button className="w-full h-14 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-purple-600 focus:outline-none focus:bg-green-600">
            Continue
            </button>
        </div>
      
        

      <p className="mt-4 text-sm text-center text-gray-700">
        
        <Link
          href="/login"
          className="font-medium text-grey-600 flex justify-center "
        >
          <FaArrowLeft/>back to Login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SuccessfulReset