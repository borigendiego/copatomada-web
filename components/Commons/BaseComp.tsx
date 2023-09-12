import Image from 'next/image'
import React from 'react'

type BaseProps = {
    title?: string,
    image: string,
    text?: string,
    button?: string,
    linkTo?: string,
}

const BaseComp = ({title, image, text, button, linkTo}:BaseProps) => {
    return (
      <div className='flex md:flex-row flex-col-reverse justify-center md:min-w-[1302px] md:min-h-[85vh] overflow-hidden'>
        <div className='md:min-w-[474px]'>
          <Image src={image} width={750} height={400} alt='Image'/>
        </div>
        <div className='basecomp-r'>
          <div className='md:w-[650px] md:h-[85%] my-12 mt-20 md:mt-0 md:my-0 md:block flex flex-col items-center relative z-10'>
            <h1 className='my-2 md:text-left text-center'>{title}</h1>
            <p className='my-2 md:w-3/4 11/12 px-6 md:px-0'>{text}</p>
            <a href={linkTo} target='_blank' rel='noreferrer' className='md:text-left text-center'>
              <button 
              className={`${button ? 'mt-6 bg-[#DB0031] rounded-[50px] md:w-fit w-[80%] text-sm md:text-base  py-2 px-8 text-white' : 'hidden'}`}
              >
                {button}
              </button>
            </a>
          </div>
          <img src={'/assets/images/lines-bg.png'} alt='Lines background' className='lines-bg' />
        </div>
      </div>
  )
}

export default BaseComp
