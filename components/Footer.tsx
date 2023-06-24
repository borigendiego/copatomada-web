import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col justify-around items-center bg-white p-8 relative md:mb-8'>
        <div className='flex justify-center items-center'>
            <Image src={'/assets/images/logo2.png'} alt='Copa tomada logo' width={80} height={20} className='absolute z-10'/>
            <Image src={'/assets/images/paper-bg-rounded.png'} alt='Copa tomada logo' width={180} height={20} className=''/>
        </div>
        <div className='flex md:flex-row flex-col footer-list'>
          <ul>
            <li className='font-bold'>Nosotros</li>
            <li>Locales</li>
            <li>Delivery</li>
            <li>Copa sustentable</li>
          </ul>
          <ul className=''>
            <li className='font-bold'>Venta Mayorista</li>
            <li className='font-bold md:pt-2'>Proveedores</li>
            <li className='font-bold md:pt-2'>Redes Sociales</li>
          </ul>
          <ul>
            <li className='font-bold'>Trabaja con nosotros</li>
          </ul>
        </div>
        <div className='flex justify-around footer-svgs'>
          <a href="" className='mx-4'><Image src={'/assets/images/facebook-svg.svg'} alt='Facebook' width={30} height={20}/></a>
          <a href="" className='mx-4'><Image src={'/assets/images/twitter-svg.svg'} alt='Twitter' width={30} height={20}/></a>
          <a href="https://www.instagram.com/copatomada/" className='mx-4'><Image src={'/assets/images/instagram-svg.svg'} alt='Instagram' width={30} height={20}/></a>
        </div>
    </div>
  )
}

export default Footer
