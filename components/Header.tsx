import React from 'react'
import Image from 'next/image'
import MobileMenu from './mobile-menu';


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
      <div className='hidden md:flex md:justify-around bg-white md:pt-6 md:pb-4'>
        <a href={'/'}>
            <Image 
                src={'/assets/logoheader.png'}
                width={80}
                height={100}
                alt={'Diversity at Employment logo'}
                className={'md:mr-6'}
            />
        </a>
        <div className='flex items-center md:ml-12'>
            {
                NAV_DATA.map((item, index) =>
                    <a 
                        href={item.linkTo}
                        className={'md:mx-6 text-black opacity-50 font-semibold duration-300 hover:opacity-100'}
                    >{item.label}</a> 
                )
            }
        </div>
      </div>
      <div className='md:hidden flex justify-between py-1 items-center fixed w-full bg-white shadow-md z-50'>
                <Image 
                    src={'/assets/logoheader.png'}
                    width={50}
                    height={100}
                    alt={'Logo de Copa Tomada'}
                    className={''}
                />
                <MobileMenu menuItems={NAV_DATA} />
        </div>
    </div>
  )
}

export default Header
