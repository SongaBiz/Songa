"use client"
import Image from 'next/image'
import Link from 'next/link';
import { sans_hebrew } from '@/app/ui/fonts';
import { useState } from 'react';
import { HeroButtons, StoreButtons } from '@/components/Elements/Buttons/buttons';
import { AiFillApple, AiOutlineCaretRight } from "react-icons/ai";

export const Hero = () => {
    
    return (
        <div className='relative h-[100vh] w-screen'>
            <div className='w-full '>
                <Image
                src='/assets/images/hero-bg.jpg'
                alt='boba boda riders'
                fill={true}
                className='object-cover md:object-fill'
                />
            </div>
            
            <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#0B8D2F] bg-opacity-75 absolute z-0">
                <div className="md:grid md:grid-cols-2 md:pt-8">
                    <div className="text-white w-full px-4  md:px-8">
                        <h1 className={`${sans_hebrew.className} tracking-normal text-[44px] md:tracking-widest leading-2 font-bold`}>DIGITIZING THE BODA <br/> TRANSFORMING <span className='text-[#A90000]'>LIVES</span></h1>
                        <p className={`${sans_hebrew.className} tracking-normal text-[#000000] font-light text-md md:leading-2 md:tracking-[.25em] text-[24px] my-8`}>
                            Enjoy the convenience of our <br /> digital services using our <br />apps
                        </p>
                        <div className='flex flex-col pt-2 md:flex-row md:w-full'>
                            <HeroButtons text='GET STARTED' url='/'/>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            <Link href='/'>
                                <Image
                                src='/assets/icons/app-store.png'
                                alt='Download on Apple Store'
                                width={150}
                                height={150}/>
                            </Link>
                            <Link href='/'>
                                <Image
                                src='/assets/icons/play-store.png'
                                alt='Download on Apple Store'
                                width={180}
                                height={180}
                                className='md:pt-3'/>
                            </Link>
                        </div>
                    </div> 

                    {/* Right Side */}
                    <div className='hidden lg:block md:justify-center md:items-center '>
                        <Image
                        src='/assets/images/hero-bike.png'
                        alt=''
                        height={600}
                        width={600}/>
                    </div>
                </div>      
            </div>
        </div>
    );
};
