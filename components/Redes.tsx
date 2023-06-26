import Image from 'next/image'
import React from 'react'

const Redes = () => {
  return (
    <div className='redes' id='redes'>
      <div className='overlay'/>
      <div className='red-circle'/>
      <div className='text-black relative z-10 opacity-80 md:left-[10%] left-4 md:top-[40%] top-10 leading-tight'>
        <h1>seguinos</h1>
        <h1>compartí</h1>
      </div>
      <div className='empty-font relative z-10 opacity-80 md:left-[10%] left-4 md:top-[40%] top-[70%] leading-tight'>
        <h1>VOLVÉ&lt;&lt;</h1>
        <h1>&gt;&gt;COPATE</h1>
      </div>
      <Image
        src={'/assets/images/celular.png'} 
        alt='Instagram picture' 
        width={325} 
        height={200}
        className='absolute z-10 md:w-[325px] w-56 md:left-[54.7%] left-[38%] md:bottom-[5%] bottom-[20%]'
      />
      <a href="https://www.instagram.com/copatomada/" target='_blank' rel='noreferrer' className='redes-a'>
        <Image
          src={'/assets/images/instagram-cel.png'} 
          alt='Instagram picture' 
          width={215} 
          height={200}
          className='absolute z-30 md:w-[215px] w-[146px] md:left-[59.3%] left-[50%] md:bottom-[15.5%] bottom-[26.3%]'
        />
        <Image
          src={'/assets/images/celular-b.png'} 
          alt='Instagram picture' 
          width={220} 
          height={200}
          className='absolute z-20 md:w-[220px] w-[148px] md:left-[59.1%] left-[50.1%] md:bottom-[14%] bottom-[26%]'
        />
        <Image
          src={'/assets/images/celular-play.png'} 
          alt='Instagram picture' 
          width={50} 
          height={50}
          className='absolute z-40 md:w-[50px] md:left-[65.3%] left-[63%] md:bottom-[44.8%] bottom-[43%] duration-300 ease-in-out'
        />
        <div className='telefono-overlay hidden md:block' />
      </a>
    </div>
  )
}

export default Redes
