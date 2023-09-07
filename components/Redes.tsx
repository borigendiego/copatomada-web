import Image from 'next/image'
import React from 'react'

const Redes = () => {
  return (
    <div className='redes' id='redes'>
      <div className='relative w-[325px] md:left-[52%] top-8 md:top-0 md:bottom-0 mx-auto md:mx-0'>
        <Image
          src={'/assets/images/mockup-cel.png'} 
          alt='Instagram picture' 
          width={325} 
          height={200}
          className='z-10'
        />
        <a href="https://www.instagram.com/copatomada/" target='_blank' rel='noreferrer' className='telefono-overlay'/>
      </div>
      <p className='md:hidden block text-center text-white text-xl w-[60%] mx-auto'>Clickea para ver nuestro Instagram!</p>
    </div>
  )
}

export default Redes
