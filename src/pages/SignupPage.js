import React from 'react'
import {Link} from "react-router-dom";

function SignupPage() {
  return (
    <div>
      <div className="Signup-pics h-screen w-screen text-[white] ">
        {/* <img className='w-full h-full object-contain' src="../loginpics.jpg" alt="" /> */}
        <div className="login-img w-full h-full flex justify-center items-center ">
          <div className="signup-form md:max-w-lg w-[90%] gap-7 md:h-5/6 bg-glass py-6 px-4 flex flex-col justify-between items-center shadow">
            <div className="logo w-[128px] drop-shadow-2xl"><img src="../logo.png" className='w-full h-full' alt="" /></div>
            <div className="info mb-2 text-sm opacity-80"><span>Already have an account? <Link to='/'><span className='underline cursor-pointer'>Login</span></Link></span></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="username">User Name</label><input type="text" className='w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]'/></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="email">Email</label><input type="email" className='w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]'/></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="password">Password</label><input type="password" className='w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]'/></div>
            <div className="signupbtn w-full "><button className='bg-glass w-full  rounded border-none text-lg py-3 px-5 mt-5'>Sign Up</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage