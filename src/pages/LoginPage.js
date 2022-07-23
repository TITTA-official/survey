import React, { useState } from 'react'
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();


    const Auth = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/login', {
              email: email,
              password: password
          });
          history.push("/dashboard");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
              console.log(msg)
          }
      }
  }
  
  return (
    <div>
      <div className="Signup-pics h-screen w-screen text-[white] ">
        {/* <img className='w-full h-full object-contain' src="../loginpics.jpg" alt="" /> */}
        <div className="login-img w-full h-full flex justify-center items-center ">
          <form onSubmit={Auth} className="signup-form md:max-w-lg w-[90%] min-h-[40vh] bg-glass py-6 px-4 flex flex-col gap-8 items-center shadow">
            <div className="logo w-[128px] drop-shadow-2xl"><img src="../logo.png" className='w-full h-full' alt="" /></div>
            <div className="info mb-2 text-sm opacity-80"><span>Don't have an account yet? <Link to='/register'><span className='underline cursor-pointer'>Signup</span></Link></span></div>
            <p>{msg}</p>
            <div className="input-group flex items-center w-full justify-between  md:px-9"><label htmlFor="username" className='text-sm md:text-base'>User Name</label><input type="text" className='w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]' value={email} onChange={(e) => setEmail(e.target.value)}/></div>
            <div className="input-group flex items-center w-full justify-between md:px-9"><label htmlFor="password" className='text-sm md:text-base'>Password</label><input type="password" className='w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]' value={password} onChange={(e) => setPassword(e.target.value)}/></div>
            <div className="signupbtn w-full md:px-9"><button className='bg-glass w-full  rounded border-none text-base md:text-lg py-3 px-5 mt-5'>Login</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage