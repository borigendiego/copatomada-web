import React from 'react'
import ScrollingText from './ScrollingText'



const RedLayout = ({text}:any) => {
  return (
    <div className='red'>
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