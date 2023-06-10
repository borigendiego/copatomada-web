import React from 'react';
import Image from 'next/image';


const WhatsApp = () => {
    return(
        <div className='fixed cursor-pointer bottom-[30px] right-[30px] z-40 hover:scale-125 transition-all duration-500'>
           <a href={'https://wa.me/543875296426'} target={'_blank'} rel="noreferrer">
                <Image 
                        alt={'WhatsApp icon'} 
                        src={'/assets/images/whatsapp.png'}
                        width={66}
                        height={66}
                />
           </a> 
        </div>
    )
}

export default WhatsApp;