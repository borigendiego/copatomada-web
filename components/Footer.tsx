import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around bg-white p-8'>
        <div className='footer-image'>
            <Image src={'/assets/images/logo2.png'} alt='Copa tomada logo' width={20} height={20}/>
        </div>
        <div></div>
        <div className='flex justify-around'>
          <a href="" className='md:mx-4'><Image src={'/assets/images/facebook-svg.svg'} alt='Facebook' width={30} height={20}/></a>
          <a href="" className='md:mx-4'><Image src={'/assets/images/twitter-svg.svg'} alt='Twitter' width={30} height={20}/></a>
          <a href="" className='md:mx-4'><Image src={'/assets/images/instagram-svg.svg'} alt='Instagram' width={30} height={20}/></a>
        </div>
    </div>
  )
}

export default Footer
