import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
    selectedSection?: string,
    fullScreen?: boolean
}

const ModalMenu = (
    {
        open,
        children,
        closeModal,
        fullScreen = false,
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
            fullScreen={fullScreen}
        >
            <div className={`h-full overflow-hidden flex justify-center items-center ${fullScreen ? 'md:min-h-[100vh]' : 'md:min-h-[85vh]'}  md:min-w-[1302px]`}>
                <Image 
                    height={30} 
                    width={30} 
                    alt="close" 
                    src={'/assets/images/+.svg'} 
                    className={"close-svg-modal"}
                    onClick={closeModal}
                />
                {children}
            </div>
        </Dialog>
    )
}

export default ModalMenu;