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
      <div className='flex md:flex-row flex-col-reverse justify-center md:min-w-[1302px] md:min-h-[85vh]'>
        <div className='md:min-w-[474px]'>
          <Image src={image} width={750} height={400} alt='Image'/>
        </div>
        <div className='basecomp-r'>
          <div className='md:w-[650px] md:h-[85%] my-12 mt-40 md:mt-0 md:my-0 md:block flex flex-col items-center'>
            <h1 className='my-2'>{title}</h1>
            <p className='my-2 md:w-3/4 11/12 px-6 md:px-0'>{text}</p>
            <a href={linkTo} target='_blank' rel='noreferrer'>
              <button 
              className={`${button ? 'mt-6 bg-[#DB0031] rounded-[50px] w-fit py-2 px-8 text-white' : 'hidden'}`}
              >
                {button}
              </button>
            </a>
          </div>
        </div>
      </div>
  )
}

export default BaseComp
