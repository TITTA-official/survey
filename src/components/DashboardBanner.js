import React from 'react'

function DashboardBanner({name}) {
  return (
    <div className="banner mt-16 w-full mx-auto flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="heading-info text-2xl md:text-3xl">Welcome <span className='name font-bold'>{name}</span></div>
        <div className="sub-inf text-sm md:text-base font-light">To get started, you can take a <span className='font-medium'>survey</span></div>
        <div ><button className="text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white">TAKE A SURVEY</button></div>
      </div>
  )
}

export default DashboardBanner