import React from 'react'
import ScrollingText from './ScrollingText'



const RedLayout = ({text, positionLow}:any) => {
  return (
    <div className={`${positionLow ? 'positionLow red' : 'red'} `}>
        {
          text ?
          <ScrollingText text={text} empty={true}/>
          :
          <></>
        }
    </div>
  )
}

export default RedLayout