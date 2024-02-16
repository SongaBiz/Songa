import React from 'react'
import RegisterForm from '@/components/Riders/Forms/RegisterUser'

const page = () => {
  return (
    <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center">
        <div className="w-full">
          <h2 className="text-lg text-center mb-4 text-ct-dark-200">
            Sign Up To Get Started!
          </h2>
          <RegisterForm />
        </div>
      </section>
  )
}

export default page