import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'


const Email = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
    <div className='flex justify-center mb-4'>
            <img src="/assets/images/SONGA-small-red-logo.png" alt=""height="150" width="150"/>
          </div>
      <p className='font-bold text-3xl justify-center flex'>Check your email</p>
      <h1 className='flex justify-center'>We send a password reset link to ogolla@songabusiness.com 
        </h1>
     
       
        
        <div className="mt-2">
          <button className="w-full h-14 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-purple-600 focus:outline-none focus:bg-green-600">
            Open email app
            </button>
        </div>
      
        <p className="mt-4 text-sm text-center text-gray-700 p-4">
          Didn't receive the email? 
          <Link
            href="/forgot"
            className="font-medium text-green hover:text-purple-800 ml-2 "
          >
            Resend the email
          </Link>
        </p>

      <p className="mt-8 text-sm text-center text-gray-700">
        
        <Link
          href="/login"
          className="font-medium text-grey-600 flex justify-center "
        >
         <FaArrowLeft/> back to Login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Email