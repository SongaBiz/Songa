import React from 'react'
import Image from 'next/image'

const Partnerships = () => {
    return (
        <div className="w-screen md:w-full h-auto md:h-[470px] bg-stone-100">
            {/* column 1 */}
            <div className='flex flex-col md:flex-row '>
                <div className='mt-20 mx-12 md:px-12'>
                    <div className="text-black text-4xl text-center md:text-start md:text-6xl font-bold leading-[91px]">
                        <h1>Partnerships</h1>
                    </div>
                    <div className="text-justify text-black text-sm font-semibold leading-[18.20px] mt-12">SONGA is an ecosystem that works closely with enterprise players in order to ensure that the rides we offer are convenient.<br /><br />This involves working together to collaboratively empower the rider. To partner with us in this journey , kindly reach us through partnerships@songa.app and we will get in touch in the shortest time possible.<br /></div>
                </div>

                {/* column 2 */}
                <div className='m-20 flex flex-col mx-auto md:grid grid-rows-3 gap-6'>
                    {/* row-1 */}
                    <div className='flex space-x-4'>
                        <div className="w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                        <div className="w-[239px] h-[120.81px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[207px] h-[207px] relative">
                                <Image
                                    src='/assets/images/SONGA-small-red-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                    </div>

                    {/* row-2 */}
                    <div className='flex ml-8 space-x-4'>
                        <div className="w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                        <div className="w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                        <div className="-mt-4 w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                    </div>

                    {/* row-3 */}
                    <div className='flex ml-24 space-x-4'>
                        <div className="-mt-6 w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                        <div className="w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-2xl flex justify-center items-center">
                            <div className="w-[107.39px] h-[107.39px] relative ">
                                <Image
                                    src='/assets/images/SONGA-small-logo.png'
                                    alt='SONGA-partners'
                                    fill={true}
                                    className=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnerships
