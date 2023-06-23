'use client'

import React, { useState, useEffect } from 'react';
import ScrollingText from './Commons/ScrollingText';

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
        : <div></div>
      }
    </div>
  )
}

export default Banner
