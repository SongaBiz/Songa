import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primary p-5 text-white border-t-[.5px] border-gray-500/30'>

      {/* Desktop */}
      <div className='flex md:justify-between flex-col md:flex-row items-center justify-center'>
        <div>
          <Image src="/assets/icons/logo.svg" alt='logo' width={100} height={202} />
          <p className='text-white/80'>&copy; 2023 All rights Reserved</p>
        </div>

        <div className='space-y-10 flex flex-col items-end'>
          {/* Navigation Links */}
          <div className='text-white flex items-center justify-center space-x-5'>
            <ul className='flex space-x-5'>
              <li className='underline underline-offset-4'>
                <Link href="/">
                  <div>Home</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Service</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Terms</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Contact Us</div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <ul className='flex space-x-6'>
            <li>
              <Link href="/">
                <Image className="h-[20px]"  src="/assets/icons/social-media/facebook.svg" width={20} height={20} alt={'Facebook'} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>
                  <Image src="/assets/icons/social-media/twitter.svg" width={20} height={20} alt={'Facebook'} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>
                  <Image src="/assets/icons/social-media/insta.svg" width={20} height={20} alt={'Facebook'} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
