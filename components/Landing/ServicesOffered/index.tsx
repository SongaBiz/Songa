import Image from 'next/image';
import Cards from '@/components/Landing/Cards';
import React from 'react';

const ServicesOffered = () => {
    return (
        <div className='bg-green py-2'>
            <div className="lg:pt-[50px] sm:pt-[10px] text-black text-[30px] font-bold mb-4 text-center leading-[31.2px]">
                Our Services
            </div>
            <div className='lg:flex lg:flex-col lg:flex-1'>
                <div className='mx-20 my-8'>
                    <div className="text-white text-[24px] font-bold mb-5 md:pl-20 text-center md:text-left">
                        DELIVERIES
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            src='/assets/images/LoadedBike.jpg'
                            alt='bike image'
                            width={600}
                            height={450}
                            className='md:pl-20 md:pr-10 opacity-60 hidden lg:block'
                        />
                        <div className="flex flex-col flex-1 space-y-9">
                            <div className="px-8 md:px-0 text-lg md:text-justify text-white text-[19px] font-semibold leading-normal">SONGA works with riders to ensure customer goods
                                are delivered as well as being able to pick goods for
                                our customers and deliver them to their preferred
                                destination.</div>
                            <div className="hidden lg:block">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <div className="text-white text-[24px] font-bold my-5 text-center lg:text-left">
                                REQUEST FOR A DELIVERY
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mx-20 my-8'>
                    <div className="text-white text-[24px] font-bold mb-5 md:pl-20 text-center md:text-left">
                        RIDE HAILING
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            src='/assets/images/MovingBike.jpg'
                            alt='bike image'
                            width={600}
                            height={450}
                            className='md:pl-20 md:pr-10 opacity-60 hidden lg:block'
                        />
                        <div className="flex flex-col flex-1 space-y-9">
                            <div className="px-8 md:px-0 text-lg md:text-justify text-white text-[19px] font-semibold leading-normal">With our riders distributed  everywhere ,
                                you can now request for a trip at a cheaper prices with convenience at best/</div>
                            <div className="hidden lg:block">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <div className="text-white text-[24px] font-bold my-5 text-center lg:text-left">
                                HIRE OUR RIDERS
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Cards />
        </div>
    )
}

export default ServicesOffered;