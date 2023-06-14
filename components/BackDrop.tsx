import React from "react";

const BackDrop = ({menu, closeMenu}:any) => {
    return(
        <img
            src={'/assets/images/+.svg'}
            className={`${ menu ? 'close-svg backdrop-open' : 'close-svg'}`}
            onClick={closeMenu}
        ></img>
    )
}

export default BackDrop