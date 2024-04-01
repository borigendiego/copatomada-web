import React from 'react';
import Image from 'next/image';


const WhatsApp = () => {
    return(
        <div className='fixed flex cursor-pointer bottom-[20px] right-[40px] md:right-[70px] z-40'>
           <a href={'https://api.whatsapp.com/send?phone=543512003877'} target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 pr-1'>
                <Image 
                        alt={'WhatsApp icon'} 
                        src={'/assets/images/whatsapp.png'}
                        width={50}
                        height={50}
                />
           </a>
           <a href="https://www.instagram.com/copatomada/" target={'_blank'} rel="noreferrer" className='hover:scale-125 transition-all duration-500 pl-1'>
                <Image 
                        alt={'WhatsApp icon'} 
                        src={'/assets/images/instagram.png'}
                        width={50}
                        height={50}
                />
           </a>  
        </div>
    )
}

export default WhatsApp;