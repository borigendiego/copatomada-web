'use client'
import React, {useState} from 'react'
import Menu from './Menu';
import BackDrop from './BackDrop';
import Image from 'next/image';

const Conocenos = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prevState) => !prevState)
    }

  return (
    <div className='h-screen relative flex items-end justify-center overflow-hidden'>
      <Menu menu={menu} closeMenu={toggleMenu}/>
      <div className='conocenos-button' onClick={toggleMenu}>
        <p>Conocenos</p>
        <Image width={16} height={16} alt='arrow image' src={'/assets/images/arrow.png'} />
      </div>
    </div>
  )
}

export default Conocenos
