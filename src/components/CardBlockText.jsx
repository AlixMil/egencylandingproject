import React from 'react'
import { useState } from 'react'

function CardBlockText({text, isActive, setActiveArticle, index}) {
  const handleClick = () => {
    setActiveArticle(index)
  }
  return (
    <div className='cursor-pointer'>
      {isActive ? <div className='bg-blue-700 text-white my-10 p-12 mx-28 h-30 rounded-xl shadow-md'>{text}</div> : <div onClick={() => handleClick()} className='my-10 p-12 mx-28 h-30 rounded-xl shadow-md text-gray-400'>{text}</div>}
    </div>
  )
}

export default CardBlockText