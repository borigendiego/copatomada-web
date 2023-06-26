import Image from 'next/image'
import React from 'react'

const Nosotros = () => {
  return (
    <div className='h-screen nosotros'>
      <div className='flex md:flex-col'>
        <div className='flex'>
          <h1 className='empty-font'>SOMOS</h1>
          <h1 className='text-white md:pl-2'>AMIGOS</h1>
        </div>
        <div className='relative max-h-[800px]'>
            <div>
              <Image src={'/assets/images/babo-1.png'} alt='Babo' width={280} height={200} className='absolute z-[2]'/>
              <Image src={'/assets/images/babo-2.png'} alt='Babo' width={280} height={200} className='absolute z-[1]'/>
              <h1 className='team-h1 md:top-56'>Babo</h1>
            </div>
            <div>
              <Image src={'/assets/images/javi-1.png'} width={380} height={200} alt='Javi' className='absolute z-[2] left-16'/>
              <Image src={'/assets/images/javi-2.png'} width={380} height={200} alt='Javi' className='absolute z-[1] left-16' />
              <h1 className='team-h1 md:top-52 md:left-24'>Javi</h1>
            </div>
            <div>
              <Image src={'/assets/images/mau-1.png'} width={900} height={200} alt='Mauri' className='absolute z-[2] left-40 bottom-[10%]'/>
              <Image src={'/assets/images/mau-2.png'} width={280} height={200}alt='Mauri' className='absolute z-[1] left-40'/>
              <h1 className='team-h1 '>Mauri</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nosotros
