import React from 'react'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className='w-full h-auto bg-primary'>
        <div className='pt-20 mx-12 pb-20'>
        <div className="text-center text-white mb-12 text-4xl md:text-start pt-4 md:text-6xl font-bold leading-[91px]">
            <h1>Blog</h1>
        </div>
        <div className='w-full h-[625px] relative'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 shadow-lg'>
                    <Image
                    src='/assets/images/SONGA thumbnails-01.png'
                    alt='blog-1'
                    width={304}
                    height={539}
                    className='absolute'/>
                </div>
                <div className='col-span-3 grid grid-rows-2 gap-4'>
                    <div className='h-1/2 relative'>
                        <div className='flex space-x-4'>
                            <div className='shadow-lg'>
                                <Image
                                src='/assets/images/SONGA thumbnails-05.png'
                                alt='blog-2'
                                width={303}
                                height={303}
                                />
                                
                            </div>
                            <div className='shadow-lg'>
                                <Image
                                src='/assets/images/SONGA thumbnails-03.png'
                                alt='blog-3'
                                width={303}
                                height={303}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className='h-1/2'>
                        <div className='flex space-x-4'>
                            <div className='shadow-lg'>
                                <Image
                                    src='/assets/images/SONGA thumbnails-04.png'
                                    alt='blog-4'
                                    width={541}
                                    height={303}
                                    />
                            </div>
                            <div className='shadow-lg'>
                                <Image
                                    src='/assets/images/SONGA thumbnails-02.png'
                                    alt='blog-5'
                                    width={304}
                                    height={303}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blog
