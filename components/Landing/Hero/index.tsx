"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
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
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    //     // console.log("previous slide: ", newIndex);
    //     setCurrentIndex(newIndex);
    // };

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === sliderImages.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };

    // const goToSlide = (slideIndex: number) => {
    //     setCurrentIndex(slideIndex);
    //   };

    
    return (
        <div className='relative h-[100vh] w-screen group'>
             {/* <div>
            <Image
                src={sliderImages[currentIndex]}
                alt='Hero Image'
                fill={true}
                className="object-cover md:object-fill h-[80vh] absolute z-0 left-0"
                />
            </div> */}
            
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 absolute z-0">
                <span className="text-white w-full mx-12 px-12 md:pl-20">
                   <h1 className='text-2xl md:text-5xl font-bold'>DIGITIZING THE BODA BODA INDUSTRY.</h1>
                   <p className="text-[#ffffff] font-light text-lg my-8 md:w-[611px]">
                   Ride on us and experience the technology our rides have to offer.
                    </p>
                    <div className='flex flex-col gap-y-8  pt-4 md:space-x-12 md:flex-row md:w-full'>
                        <button className='border-none bg-[#009245] px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center rounded-lg hover:bg-[#FB4552]'>
                            <Link href='#rider_reg'>
                                Become a Rider
                            </Link>
                        </button>
                        <button  className='border border-[#FB4552] bg-transparent px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center rounded-lg hover:bg-[#000000]'>
                            <Link href='#about'>
                                Learn More
                            </Link>
                        </button>
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
