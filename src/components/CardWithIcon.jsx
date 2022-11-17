import React from 'react'

function CardWithIcon({text, icon}) {
  return (
    <div className='max-w-[280px] my-14'>
      <img src={icon} />
      <div className='mt-[10px] text-gray-400'>{text}</div>
    </div>
  )
}

export default CardWithIcon