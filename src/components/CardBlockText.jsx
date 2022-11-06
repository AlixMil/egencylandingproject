import React from 'react'
import { useState } from 'react'

function CardBlockText({text}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className=' my-10 p-12 mx-28 h-30 rounded-xl shadow-md'>
      {isActive ? <div className='bg-blue-700 text-white'>{text}</div> : <div>{text}</div>}
    </div>
  )
}

export default CardBlockText