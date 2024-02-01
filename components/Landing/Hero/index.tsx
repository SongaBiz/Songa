"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { sans_hebrew } from '@/app/ui/fonts';
import { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft, AiOutlineDash } from 'react-icons/ai'


// const sliderImages = [
//     "/assets/images/Songa-slide-1.jpeg",
//     "/assets/images/Songa-slide-2.jpeg",
//     "/assets/images/Songa-slide-3.jpeg",
//     "/assets/images/Songa-slide-4.jpeg",
//     "/assets/images/Songa-slide-5.jpeg",
    
// ]


export const Hero = () => {
    
    return (
        <div className='relative h-[100vh] w-screen group'>
            <div className=''>
                <Image
                src='/assets/images/hero-bg.jpg'
                alt='boba boda riders'
                fill={true}
                />
            </div>
            
            <div className="w-full h-full flex flex-col justify-center items-center bg-slate-700 bg-opacity-75 absolute z-0">
                <span className="text-white w-full px-20">
                   <h1 className={`${sans_hebrew.className} tracking-widest text-[48px] leading-2 font-bold`}>DIGITIZING THE BODA <br/> TRANSFORMING <span className='text-[#A90000]'>LIVES</span></h1>
                   <p className={`${sans_hebrew.className} text-[#000000] font-light text-md leading-2 tracking-[.45em] text-[24px] my-8`}>
                   Enjoy the convenience of our <br /> digital services using our <br />apps
                    </p>
                    <div className='flex flex-col gap-y-8  pt-4 md:space-x-12 md:flex-row md:w-full'>
                        <button className='border-none bg-[#A90000] px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center text-[16px] rounded-lg hover:bg-[#009245]'>
                            <Link href='#rider_reg'>
                                GET STARTED
                            </Link>
                        </button>
                        {/* <button  className='border border-[#FB4552] bg-transparent px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center rounded-lg hover:bg-[#000000]'>
                            <Link href='#about'>
                                Learn More
                            </Link>
                        </button> */}
                    </div>
                </span>       
            </div>
            <div className='z-1'>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    {/* <AiOutlineLeft onClick={prevSlide} size={30} /> */}
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    {/* <AiOutlineRight onClick={nextSlide} size={30} /> */}
                </div>
            </div>
            {/* Dots at the bottom */}
                {/* <div className='flex bottom-4 justify-center py-2'>
                    {sliderImages.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} >
                            <AiOutlineDash className='text-2xl text-[#fff] cursor-pointer'/>
                        </div>
                ))}
                </div> */}
        </div>
    );
};
