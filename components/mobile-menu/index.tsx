import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from "next-themes";
import ModalMenu from '../MenuModal';
import { NAV_MENU_TYPES } from '../Types';
//Style
import  styles from './mobileMenu.module.scss';
import { useThemeContext } from "../../app/context/theme";

type MobileMenuPropsType = {
    menuItems: NAV_MENU_TYPES[]
}

const MobileMenu = ({ menuItems }:MobileMenuPropsType) => {
    const { openMenu, setOpenMenu}: any = useThemeContext();
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    return (
        <div className={styles.menuToggle}>
            <input type="checkbox" className='dark:bg-white bg-black' />
            <span className='dark:bg-white' />
            <span className='dark:bg-white' />
            <span className='dark:bg-white' />
            <ul className={`dark:bg-black bg-white ${styles.menu}`}>
                {
                    theme === 'dark' ?
                    <Image 
                        src={'/assets/logo_blanco_copa.png'}
                        width={70}
                        height={100}
                        alt={'Logo de Copa Tomada'}
                        className={'pb-6'}
                    />
                    :
                    <Image 
                        src={'/assets/images/logo2.png'}
                        width={70}
                        height={100}
                        alt={'Logo de Copa Tomada'}
                        className={'pb-6'}
                    />
                }
                {
                    menuItems.map((link, index) => 
                        <a 
                            className='dark:text-white'
                            onClick={() => {
                                if(link.openNosotrosModal) {
                                    setOpenMenu(true);
                                }
                                if(link.modalContent) {
                                    setOpenModal(true)
                                    setSelectedModalDataId(link.id)
                                }
                            }} 
                            key={index} 
                            href={link.linkTo}>
                                <li>{link.label}</li>
                        </a>)
                }
            </ul>
            <ModalMenu 
                open={openModal} 
                closeModal={() => setOpenModal(false)}
                fullScreen
            >
                <div className={'w-full relative overflow-hidden top-[-5rem] md:top-0'}>
                    {menuItems[selectedModalDataId].modalContent}
                </div>
            </ModalMenu>
        </div>
    )
};

export default MobileMenu;