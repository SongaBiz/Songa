import React from 'react'
import Link from 'next/link'

interface StoreButtons {
    text: string;
    url:string;
    icon: string;
}

interface HeroButtons {
  text: string;
  url: string;
}

export const StoreButtons = ({ text, url, icon }: StoreButtons) => {
  return (
    <div className='pt-4'>
        <Link href={url}>
            <button className='border-none bg-[#000000] px-2 py-[8px] outline-none text-white rounded-md'>
                {icon} {text}
            </button>
        </Link>
    </div>
  )
}

export const HeroButtons = ({ text, url }: HeroButtons) => {
  return (
    <div className='pt-4'>
        <Link href={url}>
            <button className='border-none bg-[#A90000] font-bold px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center text-[16px] rounded-lg hover:bg-[#009245]'>
                 {text}
            </button>
        </Link>
    </div>
  )
}