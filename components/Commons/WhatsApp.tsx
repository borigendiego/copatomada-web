import React from 'react';
import Image from 'next/image';


const WhatsApp = () => {
    return(
        <div className='fixed cursor-pointer bottom-[20px] right-[60px] z-40 hover:scale-125 transition-all duration-500'>
           <a href={''} target={'_blank'} rel="noreferrer">
                <Image 
                        alt={'WhatsApp icon'} 
                        src={'/assets/images/whatsapp.png'}
                        width={40}
                        height={40}
                />
           </a> 
        </div>
    )
}

export default WhatsApp;