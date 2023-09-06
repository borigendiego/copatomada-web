'use client';
import Image from 'next/image'
import React, {useState} from 'react'
import ModalMenu from './MenuModal'
import RedLayout from './Commons/RedLayout';
import BaseComp from './Commons/BaseComp';
import { useThemeContext } from "../app/context/theme";

const Footer = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const [openModal3, setOpenModal3] = useState<boolean>(false);
  const { openMenu, setOpenMenu}: any = useThemeContext();

  return (
    <>
      <div className='flex md:flex-row flex-col justify-around items-center bg-white p-8 relative dark:bg-black'>
          <div className='flex justify-center items-center'>
              <Image src={'/assets/images/logo2.png'} alt='Copa tomada logo' width={80} height={20} className='absolute z-10'/>
              <Image src={'/assets/images/paper-bg-rounded.png'} alt='Copa tomada logo' width={180} height={20} className=''/>
          </div>
          <div className='flex md:flex-row flex-col footer-list'>
            <ul className={'dark:text-white'}>
              <a className='font-bold' 
                  href='#nosotros'
                  onClick={() => setOpenMenu(true) }
                  >
                Nosotros
              </a>
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
              <li className='font-bold cursor-pointer' onClick={() => setOpenModal3(true)}>Trabaja con nosotros</li>
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
                    <RedLayout text={'copa tomada - mercado de bebidas'}/>
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
                <RedLayout text={'copa tomada - mercado de bebidas'} />
              </div>
          </ModalMenu>
          <ModalMenu open={openModal3} closeModal={() => setOpenModal3(false)}>
            <div className='equipo'>
                <BaseComp 
                    title='¿QUERES FORMAR PARTE DE NUESTRO EQUIPO?' 
                    image='/assets/images/trabaja.png' 
                    button='ENVIA TU CV'
                    linkTo='https://linktr.ee/CopaTomada'
                />
              </div>
          </ModalMenu>
      </div>
      <p className='text-center py-6 bg-white dark:bg-black dark:text-white text-black'><a href='https://www.thehipposoft.com/' rel='noreferrer' target='_blank'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</a></p>
    </>
  )
}

export default Footer;
