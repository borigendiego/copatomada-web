import React from 'react'
import ScrollingText from './ScrollingText'

const RedLayout = ({text, positionLow}:any) => {
  return (
    <div className={`${positionLow ? 'positionLow red' : 'red'} `}>
        {
          text 
          ? <h1>{text}</h1>
          : <></>
        }
    </div>
  )
}

export default RedLayout