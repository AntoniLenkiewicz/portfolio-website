import React from 'react'

function PageWrapper({children, color}) {
  return (
    <div className='flex flex-row'>
        <div className={`${color} w-10 lg:w-20 z-10`}/>
        <div className='w-full'>
        {children}
        </div>
        <div className={`${color} w-10 lg:w-20 z-10`}/>
    </div>
  )
}

export default PageWrapper