import React from 'react'

function DashboardPage() {
  return (
    <div className='relative'>
      <div className="navbar sticky top-0 bg-glass flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-2"><div className="logo w-[64px] md:w-[72px]"><img className='w-full' src="../logo.png" alt="" /> </div> <span className='sp text-xl md:text-3xl font-bold'>Survey</span></div>
        <div className="info flex gap-3 md:gap-4 items-center">
          <div className="p-icon w-[32px] md:w-[48px]"><img className='w-full cursor-pointer' src="../user.png" alt="" /></div> <div className='text-lg'>Hi, <span>John Doe</span> </div> <div className='w-[20px] md:w-[24px] cursor-pointer'><img className='w-full' src="../menudown.png" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage