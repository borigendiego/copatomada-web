'use client';
import React from 'react';
import Image from 'next/image';
import ScrollingText from './Commons/ScrollingText';
import { useThemeContext } from "@/app/Context/theme";
import { useTheme } from "next-themes";

const Conocenos = () => {
  const { openMenu, setOpenMenu}: any = useThemeContext();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log(">>theme", theme)

  return (
    <div className='h-screen relative overflow-hidden bg-white dark:bg-black' id={'conocenos'}>
      <div className='conocenos dark:bg-black'>
        <ScrollingText text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            hola somos <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>copa</span>
          </h1>)}/>
        <ScrollingText left text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            un grupo de <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>amigos </span>que ama tanto
          </h1>)}/>
        <ScrollingText text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            las <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>juntadas </span>como vos es por eso que
          </h1>)}/>
        <ScrollingText left text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            creamos este mercado de <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>bebidas</span></h1>)}/>
      </div>
      <div className='conocenos-button dark:bg-black' onClick={toggleMenu}>
        <p className='text-black dark:text-white'>Conocenos</p>
        <Image width={16} height={16} alt='arrow image' src={'/assets/images/arrow.svg'} />
      </div>
    </div>
  )
}

export default Conocenos
