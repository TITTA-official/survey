import React from 'react'

function DashboardPage() {
  return (
    <div className='relative'>
      <div className="navbar sticky top-0 bg-glass flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-2"><div className="logo w-[64px] md:w-[72px]"><img className='w-full' src="../logo.png" alt="" /> </div> <span className='sp text-xl md:text-3xl font-bold'>Survey</span></div>
        <div className="info flex gap-3 md:gap-4 items-center">
          <div className="p-icon w-[24px] md:w-[32px]"><img className='w-full cursor-pointer' src="../user.png" alt="" /></div> <div className='text-sm'>Hi, <span className='name'>John Doe</span> </div> <div className='w-[20px] md:w-[24px] cursor-pointer'><img className='w-full' src="../menudown.png" alt="" /></div>
        </div>
      </div>
      <div className="banner mt-16 w-full mx-auto flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="heading-info text-2xl md:text-3xl">Welcome <span className='name font-bold'>John Doe</span></div>
        <div className="sub-inf text-sm md:text-base font-light">To get started, you can take a <span className='font-medium'>survey</span></div>
        <div ><button className="text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white">TAKE A SURVEY</button></div>
      </div>
      <div className="actions grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5 md:gap-6 md:mt-12 mt-9 text-sm text-white">
        <div className="action bg-teal-600 rounded-full flex items-center justify-center p-8 cursor-pointer">Take survey</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center p-8 cursor-pointer">View result</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center p-8 cursor-pointer">View Learning Material</div>
      </div>
    </div>
  )
}

export default DashboardPage