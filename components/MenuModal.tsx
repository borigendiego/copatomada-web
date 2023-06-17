import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import RedLayout from './Commons/RedLayout';

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
    selectedSection: string,
}

const ModalMenu = (
    {
        open,
        children,
        closeModal,
    }:modalProps) => {
    const handleClose = () => {};
      
    return(
        <Dialog
            onClose={handleClose} 
            open={open} 
            fullWidth={true}
            maxWidth={'xl'}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                  },
            }}
        >
            <div className={'overflow-hidden'}>
                <Image 
                    height={20} 
                    width={20} 
                    alt="close" 
                    src={'/assets/images/+.svg'} 
                    className="close-svg-modal" 
                    onClick={closeModal}
                />
                {children}
            </div>
        </Dialog>
    )
}

export default ModalMenu;