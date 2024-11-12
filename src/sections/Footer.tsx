import React from 'react'
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

function Footer() {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:w-full before:absolute before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,C2F0B1,#2FD8FE)]">
          <Image src={logo} alt='saas logo' height={40} className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row justify-center items-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn /> 
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 Saas. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer