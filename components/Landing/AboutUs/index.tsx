/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { HeroButtons } from '@/components/Elements/Buttons/buttons';

const AboutUs: React.FC = () => {
  return (
    <div id="about" className='w-auto h-auto bg-white'>
      <div className='lg:pt-9 md:py-10 flex flex-col items-center mx-12 md:px-12 lg:px-[297px]'>
        <div className="text-black text-[36px] font-bold text-center">
          About Us
        </div>
        <div className='w-[109px] h-[10px] bg-[#FF0202] mt-2 mb-4'></div>
        <div className="px-8 md:px-0 text-lg md:text-justify text-black text-[14px] font-semibold leading-normal">With a clear understanding of how boda works , SONGA aims
          to digitize boda  stakeholders experience by making their
          engagement and processes digital.</div>
      </div>
      <div className='lg:pt-9 pt-5 md:py-10 flex flex-1 sm:py-10'>
        <div className='mt-10 flex'>
          <Image
            src='/assets/images/boda.jpg'
            alt='bike image'
            width={902}
            height={836}
            className='hidden lg:block'
          />
        </div>
        <div className='flex flex-col flex-1 md:px-[20px] md:py-20 items-center lg:items-start'>
          <div className="text-black text-[36px] font-bold">
            Who We Are
          </div>
          <div className='w-[109px] h-[10px] bg-[#FF0202] mt-2 mb-4'></div>
          <div className="px-8 md:px-0 text-lg md:text-justify text-black text-[14px] font-semibold leading-normal">We are an ERP solution provider who’ve tailored our app to solve bodaboda problems.
            We incorporate 21C tech to improve rider experience which transform how we consume bodaboda services..</div>
          <div className='my-12 md:py-12'>
            <HeroButtons text='Learn More' url='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
