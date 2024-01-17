import React from 'react'
import Image from 'next/image'

function Cards() {
  return (
    <div className='w-screen h-auto bg-white py-6 px-4  '>
        {/* CARDS */}
        
        <div className='mx-auto px-6 md:pt-8 md:grid grid-cols-3 gap-8'>
            <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                    src='/assets/icons/card1-icon.png' alt='safety-icon' width={84} height={84}
                    />
                    <h2 className='text-2xl text-green-600 font-bold text-center py-4 uppercase'>Safety</h2>
                    <p className='text-center text-black p-2 text-[14px]'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them.</p>
        </div>

        <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                src='/assets/icons/card2-icon.png' alt='convinient-icon' width={84} height={84}
            />
            <h2 className='text-2xl text-green-600 font-bold text-center py-4 uppercase'>CONVENIENT</h2>
            <p className='text-center text-black p-2 text-[14px]'> Our rides are timely and services easy to access
            Our are services cheap and help you plan on your transport with ease.</p>
        </div>

        <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-2rem] md:mt-2'
                src='/assets/icons/card3-icon.png' alt='customerfocus-icon' width={84} height={84}
            />
            <h2 className='text-2xl text-green-600 font-bold text-center py-4 uppercase'>CUSTOMER FOCUS</h2>
            <p className='text-center text-black p-2 text-[14px]'>We have services fit for the Kenyan economy and promos fit to  client&apos;s travel hours. Our technology is up to date and so are our services.</p>
        </div>

        
        </div>
    </div>
  )
}

export default Cards
