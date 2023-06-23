import Image from 'next/image'
import React from 'react'

const Redes = () => {
  return (
    <div className='redes'>
      <div className='overlay'/>
      <div className='red-circle'/>
      <div className='text-black relative z-10 opacity-80 md:left-[10%] left-4 md:top-[40%] top-10'>
        <h1>seguinos</h1>
        <h1>compartí</h1>
      </div>
      <Image
        src={'/assets/images/instagram-cel.png'} 
        alt='Instagram picture' 
        width={200} 
        height={200}
        className='absolute z-20 md:left-[65%] left-[40%] md:bottom-[10%] bottom-[30%]'
      />
      <Image
        src={'/assets/images/celular.png'} 
        alt='Instagram picture' 
        width={300} 
        height={200}
        className='absolute z-10 md:left-[61%] left-[40%] md:bottom-[5%] bottom-[30%]'
      /> 
    </div>
  )
}

export default Redes
