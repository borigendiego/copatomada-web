'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import MobileMenu from './mobile-menu';
import BaseComp from './Commons/BaseComp';
import RedLayout from './Commons/RedLayout';
import ModalMenu from './MenuModal';


//Constants
const NAV_DATA = [
    {
        id: 0,
        label: 'Nosotros',
        linkTo: '#nosotros',
    },
    {
        id: 1,
        label: 'Locales',
        linkTo: '#locales',
    },
    {
        id: 2,
        label: 'Provedores',
        linkTo: '#provedores',
        modalContent: 
                    <div>
                        <BaseComp 
                            image='/assets/images/provedores.png' 
                            title='HOLA!' 
                            text='Bienvenido a nuestro sector de compras, ¿Estás interesado en ofrecernos tu productos? Contactanos!' 
                            button='QUIERO OFRECER MIS PRODUCTOS'
                            linkTo='https://linktr.ee/CopaTomada'
                         />
                         <RedLayout text={['copa tomada - mercado de bebidas', 'copa tomada - mercado de bebidas', 'copa tomada - mercado de bebidas', 'copa tomada - mercado de bebidas']}/>
                    </div>
    },
    {
        id: 3,
        label: 'Venta mayorista',
        linkTo: '#mayorista',
        modalContent: 
                    <div>
                        <BaseComp 
                            image='/assets/images/mayorista.png' 
                            text='Con la compra superior a $25.000 y pagando en efectivo podés acceder a nuestros precios mayoristas!' 
                            button='CONOCE NUESTRO CATÁLOGO MAYORISTA'
                            linkTo='https://linktr.ee/CopaTomada'
                        />
                        <RedLayout text={['venta mayorista venta mayorista', 'venta mayorista venta mayorista', 'venta mayorista venta mayorista', 'venta mayorista']}/>
                    </div>
    },
    {
        label: 'Redes sociales',
        linkTo: '#redes',
    },
]

const Header = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);

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
                        item.modalContent ?
                        <a 
                            key={index}
                            className={'md:mx-6 text-black opacity-50 font-semibold duration-300 hover:opacity-100 cursor-pointer'}
                            onClick={() => {
                                setOpenModal(true)
                                setSelectedModalDataId(item.id)
                            }}>
                            {item.label}
                        </a>
                        :
                        <a 
                            key={index}
                            href={item.linkTo}
                            className={'md:mx-6 text-black opacity-50 font-semibold duration-300 hover:opacity-100'}>   
                            {item.label}
                        </a>
                )
            }
        </div>
      </div>
      <div className='md:hidden flex justify-around py-2 items-center fixed w-full bg-white shadow-md z-50'>
                <Image 
                    src={'/assets/logoheader.png'}
                    width={50}
                    height={100}
                    alt={'Logo de Copa Tomada'}
                    className={''}
                />
                <MobileMenu menuItems={NAV_DATA} />
        </div>
        <ModalMenu open={openModal} closeModal={() => setOpenModal(false)}>
            <div>
                {NAV_DATA[selectedModalDataId].modalContent}
            </div>
        </ModalMenu>
    </div>
  )
}

export default Header
