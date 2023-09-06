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
        src={'/assets/images/mockup-cel.png'} 
        alt='Instagram picture' 
        width={325} 
        height={200}
        className='absolute z-10 md:w-[325px] w-56 md:left-[54.7%] left-[38%] md:bottom-[5%] bottom-[20%]'
      />
      <a href="https://www.instagram.com/copatomada/" target='_blank' rel='noreferrer' className='redes-a'>
        <div className='telefono-overlay md:block' />
      </a>
    </div>
  )
}

export default Redes
