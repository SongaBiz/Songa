"use client"
import Image from 'next/image'
import Link from 'next/link'
import { ReactComponentElement, useState} from 'react'
import { AiOutlineArrowRight, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { sans_hebrew } from '@/app/ui/fonts'
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx'
import { useRouter } from 'next/router'

const navLinks = [
  {
    id:1,
    title:'About Us',
    url:'/about'
  },
  {
    id:2,
    title:'Partnerships',
    url:'/partnerships'
  },
  {
    id:3,
    title:'Careers',
    url:'/careers'
  },
  {
    id:4,
    title:'SONGA Enterprise',
    url:'/enterprise'
  },
  {
    id:6,
    title:'Contact Us',
    url:'/contact'
  }
  
]
export const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const pathname = usePathname()
  return (
    <div className='bg-white top-0 w-full drop-shadow-2xl absolute z-10 px-2 py-4 md:px-6 md:py-5'>
      <div>
        <div className='flex items-center justify-between'>
          <div>
            <Image
              src='/assets/images/songa-black-logo.png'
              alt='Songa Logo'
              width={100}
              height={100}
              priority
            />
          </div>

          <div className='hidden md:flex '>
            {/* map through the array to display each link */}
            <div className='md:px-2 md:text-sm lg:px-4 lg:text-lg'>
              {navLinks.map(navLink=>(
                <Link 
                  key={navLink.id} 
                  href={navLink.url} 
                  className={clsx(
                  'mx-2 lg:mx-4 text-[14px] text-[#020202] font-bold leading-normal',
                  {'border-b-2  border-red-[#A90000]': pathname === navLink.url }
                )}>{navLink.title}</Link>
              ))}
            </div>
          </div>

          <div className='hidden md:flex justify-between items-center md:space-x-2 lg:space-x-6 mr-8'>
          <div>
              <Link href='/login'>
                  <p className={`${sans_hebrew.className} text-[14px] leading-none font-bold text-[#020202]`}>Log In</p>
              </Link>
            </div>
            <div>
              <button>
                <Link href='/' className='border border-[#A90000] rounded-3xl flex items-center justify-center px-4 w-[92px] h-[32px] flex-shrink-0 py-1 '>
                  <p className={`${sans_hebrew.className} text-[14px] leading-none font-bold text-[#020202]`}>Sign Up</p>
                </Link>
              </button>
            </div>
          </div>

          {/* Mobile version */}
          <div className='md:hidden flex items-center justify-center space-x-3 ' onClick={handleClick}>
            <div>
              <Link href='/'>
                  <p className={`${sans_hebrew.className} text-[14px] leading-none font-bold text-[#020202]`}>Log In</p>
              </Link>
            </div>
            <div>
              <button >
                <Link href='/' className='border border-[#A90000] rounded-3xl flex items-center justify-center px-2 w-[78px] h-[28px] flex-shrink-0'>
                    <p className={`${sans_hebrew.className} text-[14px] leading-none font-bold text-[#020202]`}>Sign Up</p>
                  </Link>
              </button>
            </div>
            {!nav ? <AiOutlineMenu className='w-4 h-4 cursor-pointer font-bold text-black'/> : < AiOutlineClose className='w-4 h-4 cursor-pointer font-bold text-black'/>}
          </div>
        </div>

        <div className={!nav ? 'hidden' : 'flex flex-col items-start font-bold justify-start bg-white w-full h-screen'}>
          {navLinks.map(navLink=>(
            <Link key={navLink.id} 
                  href={navLink.url} 
                  className={clsx(
                    'mx-2 py-4 text-[16px] text-[#020202] font-bold leading-normal',
                    {'border-b-2  border-red-[#A90000]': pathname === navLink.url })}>
                      {navLink.title}
            </Link>
          ))}
          {/* <div className='flex flex-col mb-4 md:hidden'>
            <button >
              <Link href='/' className='border border-[#A90000] rounded-3xl flex items-center justify-center px-4 w-[92px] h-[32px] flex-shrink-0 py-1 '>
                  <p className={`${sans_hebrew.className} text-[14px] leading-none font-bold text-[#020202]`}>Sign Up</p>
                </Link>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
