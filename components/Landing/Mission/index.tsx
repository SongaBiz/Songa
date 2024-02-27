"use client"
import Image from "next/image";
import { sans_hebrew } from '@/app/ui/fonts';

export const Mission = () => {
    return (
        <div className="relative h-[100vh] w-screen">
            <div className="w-full ">
                <Image
                    src='/assets/images/hero-bg.jpg'
                    alt='boba boda riders'
                    fill={true}
                    className='object-cover'
                />
            </div>
            <div className="absolute z-0 pt-[100px] pl-[400px] md:pt-[115px] md:pl-[600px] lg:pt-[119px] lg:pl-[886px]">
                <h2 className={`${sans_hebrew.className} font-bold font-[50px] text-white mb-5`}>We are Optimists <br /> who love to work <br /> together.</h2>
                <p className={`${sans_hebrew.className} font-normal font-[30px] text-white`}>Digitizing Boda Ndio Fom Yetu.</p>
            </div>
        </div>
    )
}