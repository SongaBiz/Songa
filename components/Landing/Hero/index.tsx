"use client"
import Image from 'next/image'
import Link from 'next/link';
import { sans_hebrew } from '@/app/ui/fonts';
import { useState } from 'react';
import { StoreButtons } from '@/components/Elements/Buttons/buttons';
import { AiFillApple, AiOutlineCaretRight } from "react-icons/ai";

export const Hero = () => {
    
    return (
        <div className='relative h-[100vh] w-screen group'>
            <div className='w-full '>
                <Image
                src='/assets/images/hero-bg.jpg'
                alt='boba boda riders'
                fill={true}
                className='hidden md:block'
                />
            </div>
            
            <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-slate-700 bg-opacity-75 absolute z-0">
                <span className="text-white w-full px-4  md:px-8">
                   <h1 className={`${sans_hebrew.className} tracking-normal text-[28px] md:tracking-widest md:text-[48px] leading-2 font-bold`}>DIGITIZING THE BODA <br/> TRANSFORMING <span className='text-[#A90000]'>LIVES</span></h1>
                   <p className={`${sans_hebrew.className} tracking-normal text-[#000000] font-light text-md md:leading-2 md:tracking-[.45em] text-[24px] my-8`}>
                   Enjoy the convenience of our <br /> digital services using our <br />apps
                    </p>
                    <div className='flex flex-col gap-y-8 pt-2 md:flex-row md:w-full'>
                        <button className='border-none bg-[#A90000] px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center text-[16px] rounded-lg hover:bg-[#009245]'>
                            <Link href='#rider_reg'>
                                GET STARTED
                            </Link>
                        </button>
                    </div>
                    <div className="flex space-x-8 pt-4">
                        <StoreButtons icon = <AiFillApple/>  text='Google' url='/' />
                        <StoreButtons icon= <AiOutlineCaretRight/> text='Google' url='/' />
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
