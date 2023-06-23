import Image from 'next/image'
import React from 'react'

const Equipo = () => {
  return (
    <div>
        <div>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <h1>Babo</h1>
        </div>
        <div>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <h1>Javi</h1>

        </div>
        <div>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <Image src={''} alt='a' width={120} height={120} className='team-image'/>
            <h1>Mauri</h1>
        </div>
    </div>
  )
}

export default Equipo