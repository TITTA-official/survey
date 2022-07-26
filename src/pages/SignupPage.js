import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import axios from 'axios'

function SignupPage() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:8080/users', {
              name: name,
              email: email,
              password: password,
              confPassword: confPassword
          });
          history.push("/");
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
          <form onSubmit={Register} className="signup-form md:max-w-lg w-[90%] gap-7 min-h-[50vh]  bg-glass py-6 px-4 flex flex-col justify-between items-center shadow">
            <div className="logo w-[128px] drop-shadow-2xl"><img src="../logo.png" className='w-full h-full' alt="" /></div>
            <div className="info mb-2 text-sm opacity-80"><span>Already have an account? <Link to='/'><span className='underline cursor-pointer'>Login</span></Link></span></div>
            <p>{msg}</p>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="username">User Name</label><input value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]'/></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="email">Email</label><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]'/></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="password">Password</label><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]'/></div>
            <div className="input-group flex items-center w-full justify-between md:text-lg md:px-9"><label htmlFor="confpassword">Confirm Password</label><input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type="password" className='w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]'/></div>
            <div className="signupbtn w-full md:px-9"><button className='bg-glass w-full  rounded border-none py-3 px-5 mt-5 text-base md:text-lg'>Sign Up</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage