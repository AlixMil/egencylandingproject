import React from 'react'

function DescribeCard({label, colorTag}) {
  return (
    <div className='w-[400px] my-16 rounded-xl shadow-lg cursor-pointer'>
      <div className='p-12'>
        <h1 className='text-4xl'>{label}</h1>
        <p className='text-sm mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. <br />Ac aliquam ac volutpat, viverra magna risus. 
        </p>
      </div>
      <div className={`${colorTag} mt-16 text-md w-full rounded-b-xl p-6`}>Experienced team</div>
    </div>
  )
}

export default DescribeCard