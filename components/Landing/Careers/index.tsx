import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Careers = () => {
    return (
        <div className="w-full h-auto bg-stone-100">
            <div className='pt-20 mx-12 md:px-8'>
                <div className="text-center text-4xl md:text-start text-black pt-4 md:text-6xl font-bold leading-[91px]">
                    Careers
                </div>
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='hidden lg:block mt-12'>
                        <div className="w-1/2 grid grid-cols-2 gap-x-52">
                            <div className="col-span-1">
                                <div className="relative">
                                    <div className="w-[250.04px] h-[605.26px] left-0 top-0 absolute bg-zinc-300 rounded-[70px] border border-1 border-green-600">
                                        <Image
                                            src='/assets/images/careers-1.png'
                                            alt='career-img-1'
                                            fill={true}
                                            className='rounded-[70px] object-cover absolute' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 grid grid-rows-2 gap-4 ">
                                <div className="h-2/5">
                                    <div className="w-[204.04px] h-[346.35px] relative">
                                        <div className="w-[204.04px] h-[346.35px] left-0 top-0 absolute bg-zinc-300 rounded-[70px] border border-1 border-green-600">
                                            <Image
                                                src='/assets/images/careers-2.png'
                                                alt='career-img-2'
                                                width={360.07}
                                                height={451.11}
                                                className="rounded-[70px] absolute" />
                                        </div>
                                    </div>
                                </div>

                                <div className="h-1/2">
                                    <div className="w-[308.63px] h-[230.62px] relative">
                                        <div className="w-[308.63px] h-[230.62px] left-0 top-0 absolute bg-zinc-300 rounded-[70px] border border-1 border-green-600">
                                            <Image
                                                src='/assets/images/careers-3.png'
                                                alt='career-img-3'
                                                width={364.36}
                                                height={263.20}
                                                className='rounded-[70px] absolute' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-6 md:w-1/2'>
                        <div className="text-justify text-black text-sm font-semibold leading-normal text-[14px]">SONGA is an ecosystem that works closely with enterprise players in order to ensure that the rides we offer are convenient.<br />This involves working together to collaboratively empower the rider. To partner with us in this journey, kindly reach us through partnerships@songa.app and we will get in touch in the shortest time possible.<br /></div>
                        <div className="text-justify mt-4 text-[14px]"><span className="text-green-600 text-sm font-normal leading-normal">Some perks to joining our team.<br /></span><span className="text-black text-xs font-normal leading-normal">Training and development<br />Hybrid work culture with flexible hours<br />Good work-life balance with company support<br />Competitive packages</span></div>
                        <button className='mt-8 border border-[#FB4552] bg-transparent px-4 py-[8px] w-[250px] outline-none text-black font-semibold text-center rounded-lg cursor-pointer'>
                            <Link href='/' className='leading-relaxed'>
                                View Open Positions
                            </Link>
                        </button>
                        <div className='flex flex-row space-x-4 mt-4 items-center justify-start'>
                            <div className="w-[93px] h-[69.61px] relative">
                                <div className="w-[93px] h-[38.14px] left-0 top-0 absolute"><span className="text-zinc-400 text-[40px] font-extrabold leading-[67.80px]"></span><span className="text-zinc-400 text-5xl font-extrabold leading-[62.40px]">20</span><span className="text-zinc-400 text-xl font-normal leading-[33.90px]"></span></div>
                                <div className="w-[87.46px] h-[9.91px] left-[2.38px] top-[59.70px] absolute text-zinc-400 text-[15px] font-semibold leading-tight">STAFF</div>
                            </div>
                            <div className="w-[123px] h-[69.61px] relative flex items-center flex-col">
                                <div className="w-[123px] h-[38.14px] left-4 top-0 absolute"><span className="text-zinc-400 text-[40px] font-extrabold leading-[52px]"></span><span className="text-zinc-400 text-5xl font-extrabold leading-[62.40px]">12</span><span className="text-zinc-400 text-xl font-normal leading-relaxed"></span></div>
                                <div className="w-[57.55px] h-[9.91px] left-[2.92px] top-[59.70px] absolute text-zinc-400 text-[15px] font-semibold leading-tight">ENGINEERS</div>
                            </div>
                            <div className="w-[102px] h-[69.61px] relative">
                                <div className="w-[102px] h-[38.14px] left-2 top-0 absolute"><span className="text-zinc-400 text-5xl font-extrabold leading-[62.40px]">24</span><span className="text-zinc-400 text-xl font-normal leading-relaxed">Hrs</span></div>
                                <div className="w-[67.22px] h-[9.91px] left-[17.35px] top-[59.70px] absolute text-zinc-400 text-[15px] font-semibold leading-tight">SUPPORT</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Careers
