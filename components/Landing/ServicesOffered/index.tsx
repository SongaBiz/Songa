import Image from 'next/image';
import React from 'react';

const ServicesOffered = () => {
    return (
        <div>
            <div className="text-black text-[24px] font-bold mb-4 text-center">
                Our Services
            </div>
            <div className='bg-green lg:flex lg:flex-1 items-center'>
                <div className='mx-12 my-8'>
                    <div className="text-white text-[30px] font-bold mb-5 text-center">
                        RIDE HAILING
                    </div>
                    <div className="text-center px-8 md:px-0 text-lg md:text-justify text-white text-[19px] font-semibold leading-normal">Instead of walking to the stage or stop a stranger ,
                        SONGA gives you the option of riding on a known
                        rider at the same stage price.</div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image
                            src='/assets/images/bike.png'
                            alt='bike image'
                            width={420}
                            height={540}
                            className='md:pl-20 opacity-60'
                        />
                        <div className="text-white text-[24px] font-bold mb-5">
                            REQUEST A TRIP
                        </div>
                    </div>

                </div>
                <div className='mx-12 my-8'>
                    <div className="text-white text-[30px] font-bold mb-5 text-center">
                        CORPORATE GIGS
                    </div>
                    <div className="text-center px-8 md:px-0 text-lg md:text-justify text-white text-[19px] font-semibold leading-normal">Have a short time need for riders ? SONGA let’s work
                        with a team of bodaboda riders who have been vetted
                        trained and can be trusted. </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image
                            src='/assets/images/bike.png'
                            alt='bike image'
                            width={420}
                            height={540}
                            className='md:pl-20 opacity-60'
                        />
                        <div className="text-white text-[24px] font-bold mb-5">
                            HIRE OUR RIDERS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesOffered;