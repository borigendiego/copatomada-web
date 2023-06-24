'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {

  const [selectedBanner, setSelectedBanner] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      selectedBanner ? setSelectedBanner(false) : setSelectedBanner(true)
    }, 4500);
    return () => clearInterval(interval);
  }, [selectedBanner]);


  return (
    <div className={`h-screen transition-all duration-500 ease-in-out opacity-30 ${selectedBanner ? 'image1' : 'image2' }`}>
      {
        selectedBanner ?
        <div className='banner-title'>
          <h1>siempre es buen momento</h1>
          <h1 className='sub-title'>para festejar</h1>
        </div>
        :  <div className='md:flex justify-center items-center absolute left-[51.3%] top-[82%] hidden'>
            <Image src={'/assets/images/logo2.png'} alt='Copa tomada logo' width={90} height={20} className='absolute z-10'/>
            <Image src={'/assets/images/paper-bg-rounded.png'} alt='Copa tomada logo' width={190} height={20} className=''/>
          </div>
      }
    </div>
  )
}

export default Banner
