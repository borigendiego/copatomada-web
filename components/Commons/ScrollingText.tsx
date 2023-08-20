import React from 'react'

type ScrollTextTypes = {
    text: any,
    left?: boolean,
}

const ScrollingText = ({
  text, 
  left, 
}:ScrollTextTypes) => {
  return (
    <div className='scrolltext-container'>
      <div className='scroll'>
        <div className={`${left ? 'leftToRight' : 'rightToLeft'}`}>
          {text[0]}
          {text[1]}
          {text[2]}
          {text[3]}
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
