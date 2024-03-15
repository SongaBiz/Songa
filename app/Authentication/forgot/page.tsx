import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'


const Forgot = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
    <div className='flex justify-center mb-4'>
            <img src="/assets/images/SONGA-small-red-logo.png" alt=""height="150" width="150"/>
          </div>
      <p className='font-bold text-3xl justify-center flex'>Forgot Password</p>
      <h1 className='flex justify-center'>No worries, we'll send you 
        reset instructions.</h1>
      <form className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
            
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="block w-full h-14 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
       
        
        <div className="mt-6">
          <button className="w-full h-14 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-purple-600 focus:outline-none focus:bg-green-600">
            Reset Password
            </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-center text-gray-700">
        
        <Link
          href="/login"
          className="font-medium text-grey-600 text-xl flex justify-center"
        >
         <FaArrowLeft/> back to Login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Forgot