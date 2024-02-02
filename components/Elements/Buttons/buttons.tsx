import React from 'react'
import Link from 'next/link'

interface StoreButtons {
    text: string;
    url:string;
    icon: string;
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

export default StoreButtons