"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

const PasswordReset= () => {
  const [password, setPassword] = useState('');
  const [hasMinimumLength, setHasMinimumLength] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setHasMinimumLength(newPassword.length >= 8);
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hasMinimumLength && hasSpecialChar) {
      // Password reset logic here
      console.log('Password reset successful');
    } else {
      console.log('Password does not meet requirements');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-4 bg-white rounded-md shadow-md lg:max-w-xl">
          <div className='flex justify-center mb-4'>
            <img src="/assets/images/SONGA-small-red-logo.png" alt=""height="150" width="150"/>
          </div>
        <h1 className="mb-4 text-3xl font-bold text-center text-black-700">Set a new password</h1>
        <p className="flex justify-center">Your new password must be different to</p>
        
         <p className="flex justify-center">previously used passwords</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="block h-14 w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="block h-14 w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={hasMinimumLength}
            readOnly
            className="h-4 w-4 text-green focus:ring-green border-gray-300 rounded"
          />
          <label htmlFor="lengthCheckbox" className="ml-2 block text-gray-900">Minimum 8 characters</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={hasSpecialChar}
            readOnly
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="specialCharCheckbox" className="ml-2 block text-gray-900">Includes special character</label>
        </div>
        <button type="submit" className="w-full h-14 bg-green text-white py-2 rounded-md hover:bg-purple focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Reset Password</button>
      </form>
      <div className='justify center'>
      <p className="mt-6 text-sm text-center text-gray-700">
        
                <Link
                  href="/login"
                 className="font-medium text-grey-600 text-xl flex justify-center "
                 >
                     <FaArrowLeft/>back to Login
                
              </Link>
              </p>
              </div>
      </div>
    </div>
  );
};

export default PasswordReset;




