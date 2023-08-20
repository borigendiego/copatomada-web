'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import BaseComp from './Commons/BaseComp';
import RedLayout from './Commons/RedLayout';
import ModalMenu from './MenuModal';
import { useThemeContext } from "@/app/Context/theme";

//Constants
const NAV_DATA = [
    {
        id: 0,
        label: 'Nosotros',
        openNosotrosModal: true,
        linkTo: '#nosotros',
    },
    {
        id: 1,
        label: 'Locales',
        linkTo: '#locales',
        openNosotrosModal: true,
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
                    <RedLayout 
                        text={[0,1,2,3].map(() => <h1>copa tomada - mercado de bebidas</h1>)}
                    />
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
                <RedLayout 
                    text={[0,1,2,3].map(() => <h1>enta mayorista venta mayorista</h1>)}
                />
            </div>
    },
    {
        label: 'Redes sociales',
        linkTo: '#redes',
    },
]

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);
    const [mounted, setMounted] = useState(false);
    const { openMenu, setOpenMenu}: any = useThemeContext();

    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return null;
    };

    const renderLinkOption = (item:any) => {
        if (item.openNosotrosModal) {
            return (
                <span key={item.id}
                    className={'md:mx-6 text-black dark:text-white opacity-50 font-semibold duration-300 hover:opacity-100 cursor-pointer regular-font'}   
                    onClick={() => setOpenMenu(true)}
                > 
                    <a href={item.linkTo}>
                        {item.label}
                    </a>
                </span>
            )
        }
        return item.modalContent 
            ?   <a 
                    key={item.id}
                    className={'md:mx-6 text-black dark:text-white opacity-50 font-semibold duration-300 hover:opacity-100 cursor-pointer'}
                    onClick={() => {
                        setOpenModal(true)
                        setSelectedModalDataId(item.id)
                }}>
                    {item.label}
            </a>
            :   <a 
                    key={item.id}
                    href={item.linkTo}
                    className={'md:mx-6 text-black dark:text-white opacity-50 font-semibold duration-300 hover:opacity-100'}>   
                    {item.label}
            </a>
    }

    return (
        <div>
            <div className='hidden md:flex md:justify-around bg-white md:pt-6 md:pb-4 dark:bg-black'>
                <a href={'/'}>
                    <Image 
                        src={'/assets/logoheader.png'}
                        width={80}
                        height={100}
                        alt={'Logo Copa Tomada'}
                        className={'md:mr-6 dark:hidden'}
                    />
                    <Image 
                        src={'/assets/logo_blanco_copa.png'}
                        width={80}
                        height={100}
                        alt={'Logo Copa Tomada'}
                        className={'md:mr-6 dark:block hidden'}
                    />
                </a>
                <div className='flex items-center md:ml-12'>
                    {
                        NAV_DATA.map((item) => renderLinkOption(item))
                    }
                </div>
                <button
                    className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "light" ? "Dark" : "Light"}
                </button>
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
            <ModalMenu 
                open={openModal} 
                closeModal={() => setOpenModal(false)}
                fullScreen
            >
                <div className={'w-full relative overflow-hidden'}>
                    {NAV_DATA[selectedModalDataId].modalContent}
                </div>
            </ModalMenu>
        </div>
    )
}

export default Header
