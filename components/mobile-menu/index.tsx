import React from 'react';
import Image from 'next/image';
import { useTheme } from "next-themes";

//Style
import  styles from './mobileMenu.module.scss';
import { useThemeContext } from "../../app/context/theme";

type MenuItemsType = {
    linkTo: string,
    label: string,
    openNosotrosModal?: boolean
}

type MobileMenuPropsType = {
    menuItems: MenuItemsType[]
}

const MobileMenu = ({menuItems}:MobileMenuPropsType) => {
    const { openMenu, setOpenMenu}: any = useThemeContext();
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
                            }} 
                            key={index} 
                            href={link.linkTo}>
                                <li>{link.label}</li>
                        </a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;