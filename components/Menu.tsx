'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ModalMenu from "./MenuModal";
import { 
    MENU_DATA 
} from './MenuConstants';
import { useThemeContext } from "../app/context/theme";

const sectionsIds: any = {
    'nosotros': 0,
    'locales': 1,
    'delivery': 2,
    'sustentable': 3,
}

const Menu = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);
    const { openMenu, setOpenMenu}: any = useThemeContext();

    useEffect(() => {
        if (openMenu) {
            setTimeout(function(){
                const parts = window.location.href.split("#");
                const substringAfterHash = parts[1];

                if (substringAfterHash && (sectionsIds[substringAfterHash] === 0 || sectionsIds[substringAfterHash])) {
                    setSelectedModalDataId(sectionsIds[substringAfterHash]);
                    setOpenModal(true);
                }
            }, 300);
        }
    }, [openMenu]);

    return(
        <div>
            <div className={`${ openMenu ? 'menu menu-open' : 'menu'}`}>
                <div className="flex md:justify-between justify-around md:max-w-[1000px] w-full md:pt-8">
                    <h1 className='empty-font menu-title'>ESTO ES <br className="md:hidden"/> COPA TOMADA</h1>
                    <Image 
                        height={20} width={20} 
                        alt="close" 
                        src={'/assets/images/+.svg'} 
                        className="close-svg cursor-pointer" 
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
                <div className="md:grid md:grid-cols-4 flex">
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(0)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <h1>Nosotros</h1>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(1)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <h1>Locales</h1>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(2)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <h1>Delivery</h1>
                    </div>
                    <div 
                        className="menu-section"
                        onClick={() => {
                            setSelectedModalDataId(3)
                            setOpenModal(true)}}
                    >
                        <Image height={20} width={20} alt="close" src={'/assets/images/+.svg'} className="menu-svg" />
                        <h1 className="sustentable">Copa sustentable</h1>
                    </div>
                </div>
            </div>
            <ModalMenu 
                open={openModal} 
                closeModal={() => {
                    setOpenModal(false);
                    history.replaceState({}, document.title, window.location.pathname);
                }} 
                selectedSection={MENU_DATA[selectedModalDataId].section}
            >
                <div className={'w-full'}>
                    {MENU_DATA[selectedModalDataId].content}
                </div>
            </ModalMenu>
        </div>
    )
}

export default Menu