import Image from "next/image";
import Cards from "@/components/Landing/Cards";

export default function LearnMore() {
    return (
        <div className='relative h-[745px] max-h-full w-screen'>
            <div className='w-full '>
                <Image
                    src='/assets/images/about-bg.jpg'
                    alt='bike image'
                    fill={true}
                    className='hidden lg:block'
                />
            </div>
            <div className="w-full flex flex-col bg-green lg:bg-white lg:bg-opacity-80 absolute z-0 py-5 px-[125px]">
                <Image
                    src='/assets/images/miniflag.png'
                    alt='boba boda riders'
                    width={82}
                    height={5}
                    className='object-cover md:object-fill'
                />
                <div className="flex flex-col md:flex-row flex-1">
                    <p className="py-3 font-medium text-[26px] leading-[33.8px] w-[503px]">SONGA is the technology of a digital
                        bodaboda ecosystem shared between
                        riders and passengers through an app</p>
                    <Image
                        src='/assets/images/hero-cycle.png'
                        alt='boba boda riders'
                        width={490}
                        height={368}
                        className='hidden lg:block object-cover md:object-fill opacity-80'
                    />
                </div>
                <div className="flex flex-1 lg:-mt-10">
                    {/* <Cards /> */}
                    <div className='w-screen h-auto px-4'>
                        <div className='mx-auto px-6 md:pt-8 md:grid grid-cols-3 gap-8'>
                            <div className="flex flex-col items-center">
                                <div className='w-[350px] mx-auto md:w-auto bg-white md:bg-transparent shadow-2xl flex flex-col p-4 mt-8 rounded-lg hover:scale-105 duration-300 items-center'>
                                    <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                                        src='/assets/icons/card1-icon.png' alt='safety-icon' width={57} height={42}
                                    />
                                    <p className='text-black p-2 text-[17px] font-medium'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them.</p>
                                </div>
                                <p className="lg:text-green text-[26px] font-medium">+1K <br></br>RIDERS</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className='w-[350px] mx-auto md:w-auto bg-white md:bg-transparent shadow-2xl flex flex-col p-4 mt-8 rounded-lg hover:scale-105 duration-300 items-center'>
                                    <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                                        src='/assets/icons/card2-icon.png' alt='safety-icon' width={57} height={42}
                                    />
                                    <p className='text-black p-2 text-[17px] font-medium'>Our rides are timely and services easy to access Our are services cheap and help you plan on your transport with ease.</p>
                                </div>
                                <p className="lg:text-green text-[26px] font-medium">+10K <br></br>TRIPS</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className='w-[350px] mx-auto md:w-auto bg-white md:bg-transparent shadow-2xl flex flex-col p-4 mt-8 rounded-lg hover:scale-105 duration-300 items-center'>
                                    <Image className='w-20 mx-4 mt-[-2rem] md:mt-2 rounded-full hidden md:block'
                                        src='/assets/icons/card3-icon.png' alt='safety-icon' width={57} height={42}
                                    />
                                    <p className='text-black p-2 text-[17px] font-medium'>We have services fit for the Kenyan economy and promos fit to client's travel hours. Our technology is up to date and so are our services.</p>
                                </div>
                                <p className="lg:text-green text-[26px] font-medium">24Hrs <br></br>SERVICE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}