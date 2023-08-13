'use client';

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const EdadModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ageVerified = Cookies.get('ageVerified') === 'true';

    const handleCloseModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
        Cookies.set('ageVerified', 'true', { expires: 30 });
    };

    useEffect(() => {
        if(Cookies.get('ageVerified') === 'true') {
            document.body.style.overflow = 'auto';
            setModalIsOpen(false);
        } else {
            setModalIsOpen(true);
        }
    }, []);

    return (
        modalIsOpen
        ? <div 
            className={`fixed inset-0 bg-white w-screen h-screen z-40 ${modalIsOpen || !ageVerified ? 'visible' : 'hidden'}`}
        >
            <div className={"flex w-full h-full justify-center items-center bg-cover bg-[url('/assets/images/mayor-bg.png')] after:content-[' '] after:w-full after:h-full after:absolute after:bg-[#ff000054]"}>
                <div className={"flex flex-col bg-green-50 p-8 relative z-10 bg-cover bg-[url('/assets/images/textura-papel.png')]"}>
                    <h1 className={'text-center'}>HOLA!</h1>
                    <h2 className={'mb-3 text-center'}>SÓLO PODÉS INGRESAR A ESTE SITIO SI SOS MAYOR DE EDAD</h2>
                    <p className={'mb-3 text-center'}>Tenés más de 18 años?</p>
                    <div className={'flex justify-between'}>
                        <button 
                            onClick={handleCloseModal}>
                            SI
                        </button>
                        <button
                            className={'secondary-button'}
                            onClick={() => {}}
                        >
                            NO
                        </button>
                    </div>
                </div>
            </div>
        </div>
        : null
    )
};

export default EdadModal;