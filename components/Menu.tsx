'use client'
import Image from "next/image";
import React, {useState} from "react";
import ModalMenu from "./MenuModal";
import { MENU_DATA } from './MenuConstants'

type MenuTypes = {
    menu: any,
    closeMenu: any
}

const Menu = ({menu, closeMenu}:MenuTypes) => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);

    return(
        <div>
            <div className={`${ menu ? 'menu menu-open' : 'menu'}`}>
                <div className="flex justify-around w-full">
                    <h1>ESTO ES COPA TOMADA</h1>
                    <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="close-svg cursor-pointer" onClick={closeMenu}/>
                </div>
                <div className="md:grid md:grid-cols-4">
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(0)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <p>Nosotros</p>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(1)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <p>Locales</p>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(2)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <p>Delivery</p>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(3)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <p>Copa sustentable</p>
                    </div>
                </div>
            </div>
            <ModalMenu open={openModal} closeModal={() => setOpenModal(false)} selectedSection={MENU_DATA[selectedModalDataId].section}>
                <div>
                    {MENU_DATA[selectedModalDataId].content}
                </div>
            </ModalMenu>
        </div>
    )
}

export default Menu