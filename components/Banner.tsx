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
    </div>
  )
}

export default Banner
