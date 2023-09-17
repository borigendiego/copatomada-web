import React from "react";
import { NAV_MENU_TYPES } from "./Types";
import BaseComp from "./Commons/BaseComp";
import RedLayout from "./Commons/RedLayout";

export const NAV_DATA : NAV_MENU_TYPES[] = [
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
                <RedLayout text={'copa tomada - mercado de bebidas'} />
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
                <RedLayout text={'copa tomada - mercado de bebidas'} />
            </div>
    },
    {
        id: 4,
        label: 'Redes sociales',
        linkTo: '#redes',
    },
]