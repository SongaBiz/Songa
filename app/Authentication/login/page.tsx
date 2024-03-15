// pages/LoginPage.tsx

import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className='flex justify-center mb-4'>
            <img src="/assets/images/SONGA-small-red-logo.png" alt=""height="150" width="150"/>
          </div>
        <div>
          <p className="mt-6  text-3xl font-extrabold text-gray-900">
            Login
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800" 
            >
              Email
            </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" mb-5 block h-14 w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="name@example.com"
              />
            </div>
            <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800" 
            >
              Password
            </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block h-14 w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
            <Link
            href="/forgot"
            className="font-medium text-blue-600 ml-2"
          >
            Forgot Password?
          </Link>
            </div>
          </div>

          <div className="mt-2">
             <button className="w-full h-14 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-purple-600 focus:outline-none focus:bg-green-600">
               Login
               </button>
             </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


