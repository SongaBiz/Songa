import React from 'react'
import Image from 'next/image'

function Cards() {
    return (
        <div className='w-screen h-auto bg-white py-6 px-4  '>
            {/* CARDS */}

            <div className='mx-auto px-6 md:pt-8 md:grid grid-cols-3 gap-8'>
                <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <p className='text-center text-black p-2 text-[14px]'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them.</p>
                    <div className='flex mx-auto'>
                        <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                            src='/assets/icons/card1-icon.png' alt='safety-icon' width={84} height={84}
                        />
                        <h2 className='text-[12px] my-auto font-bold text-center py-4 capitalize'>Ogolla Peter</h2>
                    </div>
                </div>

                <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <p className='text-center text-black p-2 text-[14px]'> Our rides are timely and services easy to access
                        Our are services cheap and help you plan on your transport with ease.</p>
                    <div className='flex mx-auto'>
                        <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                            src='/assets/icons/card2-icon.png' alt='convinient-icon' width={84} height={84}
                        />
                        <h2 className='text-[12px] my-auto font-bold text-center py-4 capitalize'>Kiumbe Dhaifu</h2>
                    </div>
                </div>

                <div className='w-[350px] mx-auto md:w-auto bg-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <p className='text-center text-black p-2 text-[14px]'>We have services fit for the Kenyan economy and promos fit to  client&apos;s travel hours. Our technology is up to date and so are our services.</p>
                    <div className="flex mx-auto">
                        <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                            src='/assets/icons/card3-icon.png' alt='customerfocus-icon' width={84} height={84}
                        />
                        <h2 className='text-[12px] my-auto font-bold text-center py-4 capitalize'>Boina Japeng</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Cards
