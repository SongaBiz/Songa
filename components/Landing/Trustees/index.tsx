import Image from "next/image";

export const Trustees = () => {
    return (
        <div className="lg:py-6 md:py-4 lg:px-12 md:px-3 flex flex-1 items-center shadow-2xl shadow-gray-200 border-solid space-x-9 relative w-screen">
            <h2 className="text-[#A90000] font-medium text-[35px] leading-[45.5px]">Trusted by</h2>
            <div className="flex flex-1 items-center place-content-evenly">
                <Image
                    src='/assets/images/Eastmatt.jpg'
                    alt='Download on Apple Store'
                    width={80}
                    height={80} />
                <Image
                    src='/assets/images/Quickmart.jpg'
                    alt='Download on Apple Store'
                    width={150}
                    height={150} />
                <Image
                    src='/assets/images/Goodlife.jpg'
                    alt='Download on Apple Store'
                    width={80}
                    height={80} />
            </div>
        </div>
    )
}