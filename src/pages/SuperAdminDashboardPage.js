
import React, {useState, useContext} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardBanner from '../components/DashboardBanner';
import DashboardActions from '../components/DashboardActions';
import BoardOfUsers from '../components/BoardOfUsers';

import {ShowBoardOfUsersContext} from '../context'

function SuperAdminDashboardPage() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const history = useHistory();
    const Logout = async () => {
      history.push('/')
  }

  const [showBoardOfUsers, setShowBoardOfUsers] = useContext(ShowBoardOfUsersContext)
  return (
    <div className='relative'>
      <div className="navbar sticky top-0 bg-glass flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-2"><div className="logo w-[64px] md:w-[72px]"><img className='w-full' src="../logo.png" alt="" /> </div> <span className='sp text-xl md:text-3xl font-bold'>Survey</span></div>
        <div className="info flex gap-3 md:gap-4 items-center">
          <div className="p-icon w-[24px] md:w-[32px] lg:w-[32px]"><img className='w-full cursor-pointer' src="../user.png" alt="" /></div> <div className={`text-sm`}> <span className={`text-sm`}>Hi</span>, <span className='name font-medium'>{'tj'}</span> </div> <div className='w-[20px] md:w-[24px] cursor-pointer ' onClick={() => setToggleMenu(!toggleMenu)}><img className='w-full' src="../down-chevron.png" alt="" /></div>
          <div className={`${toggleMenu ? '': 'hidden'} bg-glass rounded py-8 px-7 absolute top-[100px] right-4 bd`}><button onClick={Logout}  className={`text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white `}>Logout</button></div>        
        </div>
      </div>
      <div className="banner mt-16 w-full mx-auto flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="heading-info text-2xl md:text-3xl">Welcome <span className='name font-bold'>{'tj'}</span></div>
        <div className="sub-inf text-sm md:text-base font-light">View all participants</div>
        <div ><button className="text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white">View Participants</button></div>
      </div>
      <hr className='mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow'/>
      <div className="actions grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5 md:gap-6 place-items-center md:mt-16 mt-14 text-sm text-white">
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Take survey</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View result</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Learning Material</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Statistics</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Generate Report</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Upload Learning Materials</div>
        <div onClick={() => setShowBoardOfUsers(!showBoardOfUsers)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Board of Users</div>
      </div>


      {
          showBoardOfUsers &&
          <div className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll flex justify-center `}>
            <div onClick={() => {
                  setShowBoardOfUsers(!showBoardOfUsers)
                  
                }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
            <BoardOfUsers/>
          </div>
        }
    </div>
  )
}

export default SuperAdminDashboardPage
