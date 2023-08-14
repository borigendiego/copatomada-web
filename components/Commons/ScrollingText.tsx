import React from 'react'

type ScrollTextTypes = {
    text: any,
    left?: boolean,
    black?: boolean,
    empty?: boolean,
}

const ScrollingText = ({
  text, 
  left, 
  black, 
  empty
}:ScrollTextTypes) => {
  return (
    <div className='scrolltext-container'>
      <div className='scroll'>
        <div className={`dark:text-white ${left ? 'leftToRight' : 'rightToLeft'} ${black ? 'text-black' : ''} ${empty ? 'empty-font' : ''}`}>
            <h1>{text[0]}</h1>
            <h1>{text[1]}</h1>
            <h1>{text[2]}</h1>
            <h1>{text[3]}</h1>
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
