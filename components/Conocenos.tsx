'use client';
import React from 'react';
import ScrollingText from './Commons/ScrollingText';
import { useThemeContext } from "../app/context/theme";
import { useTheme } from "next-themes";

const Conocenos = () => {
  const { openMenu, setOpenMenu}: any = useThemeContext();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='h-screen relative overflow-hidden bg-white dark:bg-black' id={'conocenos'}>
      <div className='conocenos dark:bg-black'>
        <ScrollingText text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            <span className="hover:text-black duration-300 dark:hover:text-white">hola </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">somos </span>
            <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>copa </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">tomada </span>
          </h1>)}/>
        <ScrollingText left text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            <span className="hover:text-black duration-300 dark:hover:text-white">un </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">grupo </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">de </span>
            <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>amigos </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">que </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">ama </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">tanto </span>
          </h1>)}/>
        <ScrollingText text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            <span className="hover:text-black duration-300 dark:hover:text-white">las </span>
            <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>juntadas </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">como </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">vos </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">es </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">por </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">eso </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">que </span>
          </h1>)}/>
        <ScrollingText left text={[0,1,2,3].map(() => 
          <h1 className={theme === "light" || !theme ? "empty-font-black" : "empty-font"}>
            <span className="hover:text-black duration-300 dark:hover:text-white">creamos </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">este </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">mercado </span>
            <span className="hover:text-black duration-300 dark:hover:text-white">de </span>
            <span className={theme === "light" || !theme ? "full-font-black" : "text-white"}>bebidas</span></h1>)}/>
      </div>
      <div className='flex justify-center w-full pt-4'>
        <button className={theme === "light" || !theme ? "" : "hover:bg-black duration-300"} onClick={toggleMenu}>
          Conocenos
        </button>
      </div>
    </div>
  )
}

export default Conocenos
