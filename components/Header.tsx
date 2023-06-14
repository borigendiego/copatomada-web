import React from 'react'
import Image from 'next/image'

//Constants
const NAV_DATA = [
    {
        label: 'Nosotros',
        linkTo: '#nosotros',
    },
    {
        label: 'Locales',
        linkTo: '#locales',
    },
    {
        label: 'Provedores',
        linkTo: '#provedores',
    },
    {
        label: 'Venta mayorista',
        linkTo: '#mayorista',
    },
    {
        label: 'Redes sociales',
        linkTo: '#redes',
    },
]

const Header = () => {
  return (
    <div>
      <div className='flex md:justify-around bg-white md:pt-6 md:pb-4'>
        <a href={'/'}>
            <Image 
                src={'/assets/logoheader.png'}
                width={80}
                height={100}
                alt={'Diversity at Employment logo'}
                className={'mr-6'}
            />
        </a>
        <div className='flex items-center ml-12'>
            {
                NAV_DATA.map((item, index) =>
                    <a 
                        href={item.linkTo}
                        className={'mx-6 text-black opacity-50 font-semibold duration-300 hover:opacity-100'}
                    >{item.label}</a> 
                )
            }
        </div>
      </div>
    </div>
  )
}

export default Header
