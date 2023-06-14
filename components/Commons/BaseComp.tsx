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
      <div className='flex'>
        <div className='md:w-[900px]'>
          <Image src={image} width={750} height={400} alt='Image'/>
        </div>
        <div className='basecomp-r'>
          <div className='md:w-[600px]'>
            <h1 className='my-2'>{title}</h1>
            <p className='my-2 md:w-3/4'>{text}</p>
            <button className={`${button ? 'my-2 bg-red-600 rounded-xl w-fit py-2 px-8 text-white' : 'hidden'}`}>{button}</button>
          </div>
        </div>
      </div>
  )
}

export default BaseComp
