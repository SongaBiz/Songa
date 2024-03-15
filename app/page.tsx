import Image from 'next/image'
import RiderRegistration from '@/components/Landing/RiderRegistration'
import {  Hero, LandingFooter, Mission, Trustees} from '../components'
import AboutUs from '../components/Landing/AboutUs'
import Partnerships from '@/components/Landing/Partnerships'
import Careers from '@/components/Landing/Careers'
import Blog from '@/components/Landing/Blog'
import ServicesOffered from '@/components/Landing/ServicesOffered';


export default function Home() {
  return (
    <div>
      {/* <Hero />
      <Trustees />
      <AboutUs />
      {/* <Partnerships/> */}
      <ServicesOffered />
      <Mission />
      {/* <Careers/> */}
      {/* <Blog /> */}
      <RiderRegistration /> 
      
    </div>
  )
}
