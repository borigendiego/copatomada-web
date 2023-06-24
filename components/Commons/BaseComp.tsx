import Image from 'next/image'
import React from 'react'

type BaseProps = {
    title?: string,
    image: string,
    text?: string,
    button?: string
}

const BaseComp = ({title, image, text, button}:BaseProps) => {
    return (
      <div className='flex md:flex-row flex-col-reverse justify-center'>
        <div className=''>
          <Image src={image} width={750} height={400} alt='Image'/>
        </div>
        <div className='basecomp-r'>
          <div className='md:w-[600px] md:h-[85%] my-12 md:my-0 md:block flex flex-col items-center'>
            <h1 className='my-2'>{title}</h1>
            <p className='my-2 md:w-3/4 11/12 px-6 md:px-0'>{text}</p>
            <button className={`${button ? 'mt-6 bg-[#DB0031] rounded-[50px] w-fit py-2 px-8 text-white' : 'hidden'}`}>{button}</button>
          </div>
        </div>
      </div>
  )
}

export default BaseComp
