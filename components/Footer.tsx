'use client';
import Image from 'next/image'
import React, {useState} from 'react'
import ModalMenu from './MenuModal'
import RedLayout from './Commons/RedLayout';
import BaseComp from './Commons/BaseComp';
import { useThemeContext } from "@/app/Context/theme";

const Footer = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const { openMenu, setOpenMenu}: any = useThemeContext();

  return (
    <div className='flex md:flex-row flex-col justify-around items-center bg-white p-8 relative md:mb-8 dark:bg-black'>
        <div className='flex justify-center items-center'>
            <Image src={'/assets/images/logo2.png'} alt='Copa tomada logo' width={80} height={20} className='absolute z-10'/>
            <Image src={'/assets/images/paper-bg-rounded.png'} alt='Copa tomada logo' width={180} height={20} className=''/>
        </div>
        <div className='flex md:flex-row flex-col footer-list'>
          <ul className={'dark:text-white'}>
            <a className='font-bold' href='#conocenos'>Nosotros</a>
            <a 
              href='#locales'
              onClick={() => setOpenMenu(true) }
            >
              Locales
            </a>
            <a 
              href='#delivery'
              onClick={() => setOpenMenu(true) }
            >
              Delivery
            </a>
            <a 
              href='#sustentable'
              onClick={() => setOpenMenu(true) }
            >
              Copa sustentable
            </a>
          </ul>
          <ul className={'dark:text-white'}>
            <li className='font-bold cursor-pointer' onClick={() => setOpenModal(true)}>Venta Mayorista</li>
            <li className='font-bold md:pt-2 cursor-pointer' onClick={() => setOpenModal2(true)}>Proveedores</li>
            <a className='font-bold md:pt-2' href='#redes'>Redes Sociales</a>
          </ul>
          <ul className={'dark:text-white'}>
            <li className='font-bold'>Trabaja con nosotros</li>
          </ul>
        </div>
        <div className='flex justify-around footer-svgs'>
          <a href="https://www.facebook.com/copatomada" className='mx-4'><Image src={'/assets/images/facebook-svg.svg'} alt='Facebook' width={30} height={20}/></a>
          <a href="https://twitter.com/CopaTomada" className='mx-4'><Image src={'/assets/images/twitter-svg.svg'} alt='Twitter' width={30} height={20}/></a>
          <a href="https://www.instagram.com/copatomada/" className='mx-4'><Image src={'/assets/images/instagram-svg.svg'} alt='Instagram' width={30} height={20}/></a>
        </div>
        <ModalMenu open={openModal} closeModal={() => setOpenModal(false)}>
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
        </ModalMenu>
        <ModalMenu open={openModal2} closeModal={() => setOpenModal2(false)}>
          <div>
              <BaseComp 
                  image='/assets/images/mayorista.png' 
                  text='Con la compra superior a $25.000 y pagando en efectivo podés acceder a nuestros precios mayoristas!' 
                  button='CONOCE NUESTRO CATÁLOGO MAYORISTA'
                  linkTo='https://linktr.ee/CopaTomada'
              />
              <RedLayout
                text={[0,1,2,3].map(() => <h1>venta mayorista venta mayorista</h1>)}
              />
            </div>
        </ModalMenu>
    </div>
  )
}

export default Footer;
