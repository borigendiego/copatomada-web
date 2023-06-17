'use client'
import React, {useState} from 'react'
import Menu from './Menu';
import BackDrop from './BackDrop';
import Image from 'next/image';
import RedLayout from './Commons/RedLayout';
import ScrollingText from './Commons/ScrollingText';

const Conocenos = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prevState) => !prevState)
    }

  return (
    <div className='h-screen relative overflow-hidden bg-white'>
      <Menu menu={menu} closeMenu={toggleMenu}/>
      <div className='conocenos'>
        <ScrollingText text={['hola', 'somos', 'copa tomada', 'un']} black/>
        <ScrollingText text={['grupo', 'de amigos', 'que ama tanto', 'las juntadas']} left black/>
        <ScrollingText text={['como vos', 'es por', 'eso', 'que']} black/>
        <ScrollingText text={['creamos este', 'mercado', 'de', 'bebidas']} left black/>
      </div>
      <div className='conocenos-button' onClick={toggleMenu}>
        <p className='text-black'>Conocenos</p>
        <Image width={16} height={16} alt='arrow image' src={'/assets/images/arrow.svg'} />
      </div>
    </div>
  )
}

export default Conocenos
