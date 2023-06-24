import React from 'react';
import Image from 'next/image';
//Style
import  styles from './mobileMenu.module.scss';


type MenuItemsType = {
    linkTo: string,
    label: string,
}

type MobileMenuPropsType = {
    menuItems: MenuItemsType[]
}

const MobileMenu = ({menuItems}:MobileMenuPropsType) => {

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
                    menuItems.map((link, index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;