import Image from 'next/image'
import React from 'react'

const Nosotros = () => {
  return (
    <div className='h-screen bg-slate-400'>
      <div className='flex md:flex-col'>
        <div className='flex'>
          <h1 className='empty-font'>SOMOS</h1>
          <h1 className='text-white md:pl-2'>AMIGOS</h1>
        </div>
        <div className='relative'>
            <div className='team-div'>
              <Image src={'/assets/images/babo-1.png'} alt='Babo' width={250} height={200} className='team md:top-3'/>
              <Image src={'/assets/images/babo-2.png'} alt='Babo' width={250} height={200} className='team-s'/>
              <h1 className='team-h1 md:top-56'>Babo</h1>
            </div>
            <div className='team-div md:left-24 z-10'>
              <img src={'/assets/images/javi-1.png'} alt='Javi' className='team javi'/>
              <img src={'/assets/images/javi-2.png'} alt='Javi' className='team-s javi-s'/>
              <h1 className='team-h1 md:top-52 md:left-24'>Javi</h1>
            </div>
            <div className='team-div md:left-80'>
              <img src={'/assets/images/mau-1.png'} alt='Mauri' className='team w-[400px]'/>
              <img src={'/assets/images/mau-2.png'} alt='Mauri' className='team-s w-[200px]'/>
              <h1 className='team-h1 '>Mauri</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
