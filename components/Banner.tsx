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
    <div>
      <div className={`h-screen relative md:block hidden`}>
        <div className='banner-title'>
          <h1>siempre es buen momento</h1>
          <h1 className='sub-title'>para festejar</h1>
        </div>
        <video 
          src='/assets/video/home_copa.mp4' 
          autoPlay
          muted
          loop
          id={'video'}
          className={'w-full'}
        />  
      </div>
      <div className='md:hidden block h-screen absolute top-9'>
        <video 
          src='/assets/video/home-mobile3.mp4' 
          autoPlay
          muted
          loop
          id={'video'}
          className='h-screen'
        />
        <div className='mobile-title'>
          <h1>siempre es buen momento</h1>
          <h1>para festejar</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
