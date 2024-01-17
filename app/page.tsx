import Image from 'next/image'
import RiderRegistration from '@/components/Landing/RiderRegistration'
import { Hero } from '../components'
import AboutUs from '../components/Landing/AboutUs'
import Cards from '@/components/Landing/Cards'
import Partnerships from '@/components/Landing/Partnerships'
import Careers from '@/components/Landing/Careers'
import Blog from '@/components/Landing/Blog'


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Partnerships/>
      <Cards />
      <Careers/>
      <Blog />
      <RiderRegistration />
    </div>
  )
}
