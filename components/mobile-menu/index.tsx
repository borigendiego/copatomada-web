import React from 'react';
import Image from 'next/image';
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

    return (
        <div className={styles.menuToggle}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul className={styles.menu}>
                <Image 
                    src={'/assets/logoheader.png'}
                    width={100}
                    height={100}
                    alt={'Logo de Copa Tomada'}
                    className={'py-4'}
                />
                {
                    menuItems.map((link, index) => 
                        <a 
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