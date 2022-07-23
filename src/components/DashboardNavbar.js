import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DashboardNavbar({name}) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const history = useHistory();
 
  const Logout = async () => {
      try {
          await axios.delete('http://localhost:5000/logout');
          history.push("/");
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <div className="navbar sticky top-0 bg-glass flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-2"><div className="logo w-[64px] md:w-[72px]"><img className='w-full' src="../logo.png" alt="" /> </div> <span className='sp text-xl md:text-3xl font-bold'>Survey</span></div>
        <div className="info flex gap-3 md:gap-4 items-center">
          <div className="p-icon w-[24px] md:w-[32px] lg:w-[32px]"><img className='w-full cursor-pointer' src="../user.png" alt="" /></div> <div className={`text-sm`}> <span className={`text-sm`}>Hi</span>, <span className='name font-medium'>{name}</span> </div> <div className='w-[20px] md:w-[24px] cursor-pointer ' onClick={() => setToggleMenu(!toggleMenu)}><img className='w-full' src="../down-chevron.png" alt="" /></div>
          <div className={`${toggleMenu ? '': 'hidden'} bg-glass rounded py-8 px-7 absolute top-[100px] right-4 bd`}><button onClick={Logout} className={`text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white `}>Logout</button></div>        
        </div>
      </div>
  )
}

export default DashboardNavbar