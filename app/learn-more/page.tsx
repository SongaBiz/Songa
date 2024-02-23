import Image from "next/image";
import Cards from "@/components/Landing/Cards";

export default function LearnMore() {
    return (
        <div className='relative h-[100vh] w-screen'>
            <div className='w-full '>
                <Image
                    src='/assets/images/about-bg.jpg'
                    alt='bike image'
                    fill={true}
                    className='hidden lg:block'
                />
            </div>
            <div className="w-full h-[100vh] flex flex-col bg-white bg-opacity-60 absolute z-0 py-5 px-[125px]">
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
                        className='object-cover md:object-fill opacity-80'
                    />
                </div>
                <div className="flex flex-1 -mt-10">
                    <Cards />
                </div>
            </div>
        </div>
    )
}