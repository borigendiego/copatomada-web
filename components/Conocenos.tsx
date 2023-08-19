'use client';
import React, { useState } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import ScrollingText from './Commons/ScrollingText';

const Conocenos = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prevState) => !prevState)
    }

  return (
    <div className='h-screen relative overflow-hidden bg-white dark:bg-black' id={'conocenos'}>
      <Menu menu={menu} closeMenu={toggleMenu}/>
      <div className='conocenos dark:bg-black'>
        <ScrollingText text={['hola somos copa tomada', 'hola somos copa tomada', 'hola somos copa tomada', 'hola somos copa tomada']} black/>
        <ScrollingText text={['un grupo de amigos que ama tanto', 'un grupo de amigos que ama tanto ', 'un grupo de amigos que ama tanto', 'un grupo de amigos que ama tanto']} left black/>
        <ScrollingText text={['las juntadas como vos es por eso que', 'las juntadas como vos es por eso que', 'las juntadas como vos es por eso que', 'las juntadas como vos es por eso que']} black/>
        <ScrollingText text={['creamos este mercado de bebidas', 'creamos este mercado de bebidas', 'creamos este mercado de bebidas', 'creamos este mercado de bebidas']} left black/>
      </div>
      <div className='conocenos-button dark:bg-black' onClick={toggleMenu}>
        <p className='text-black dark:text-white'>Conocenos</p>
        <Image width={16} height={16} alt='arrow image' src={'/assets/images/arrow.svg'} />
      </div>
    </div>
  )
}

export default Conocenos
