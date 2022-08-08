
import React, {useState, useContext} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardBanner from '../components/DashboardBanner';
import DashboardActions from '../components/DashboardActions';
import AdminViewResults from '../components/AdminViewResults'
import AdminViewLearningMaterials from '../components/AdminViewLearningMaterials';
import AdminUsersList from '../components/AdminUsersList';

import {ShowUploadLearningMaterialsContext, ShowAdminViewStatisticsContext, ShowAdminViewStatisticsProvider,ShowBoardOfUsers, ShowUploadLearningMaterialsProvider, ShowCreateQuestionsContext, ShowCreateQuestionsProvider, ViewLearningMaterialsContext, ResultShowContext, ResultShowProvider, ShowAdminUsersListProvider, ShowAdminUsersListContext} from '../context'
import UploadLearningMaterials from '../components/UploadLearningMaterials';
import CreateQuestions from '../components/CreateQuestions';
import AdminViewStatistics from '../components/AdminViewStatistics';



function AdminDashboardPage() {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const history = useHistory();
    const Logout = async () => {
      history.push('/')
  }
  const [showUploadLearningMaterials, setShowUploadLearningMaterials] = useContext(ShowUploadLearningMaterialsContext)
  const [showCreateQuestions, setShowCreateQuestions] = useContext(ShowCreateQuestionsContext)
  const [showViewLearningMaterials, setShowViewLearningMaterials] = useContext(ViewLearningMaterialsContext)
  const [showResult, setShowResult] = useContext(ResultShowContext)
  const [showAdminUsersList, setShowAdminUsersList] = useContext(ShowAdminUsersListContext)
  const [showAdminViewStatistics, setShowAdminViewStatistics] = useContext(ShowAdminViewStatisticsContext)
  
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
        <div ><button onClick={() => setShowAdminUsersList(!showAdminUsersList)} className="text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white">View All Participants</button></div>
      </div>
      <hr className='mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow'/>
      <div className="actions grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5 md:gap-6 place-items-center md:mt-16 mt-14 text-sm text-white">
        <div onClick={() => setShowCreateQuestions(!showCreateQuestions)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Create Survey Questions</div>
        <div  onClick={() => setShowResult(!showResult)}  className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Results</div>
        <div onClick={() => setShowViewLearningMaterials(!showViewLearningMaterials)}  className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Learning Material</div>
        <div onClick={() => setShowAdminViewStatistics(!showAdminViewStatistics)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Statistics</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Generate Report</div>
        <div onClick={() => setShowUploadLearningMaterials(!showUploadLearningMaterials)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Upload Learning Materials</div>
      </div>


      {/* <ResultShowProvider value={[showResult, setShowResult]}> */}
            {/* {
              showResult &&
              <div className={`fixed z-50 top-0 w-screen h-screen bg-white flex justify-center items-start`}>
                <div onClick={() => {
                      setShowResult(!showResult)
                      
                    }}
                className="close absolute top-5 z-20 left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                <AdminViewResults/>
              </div>

            } */}
            {/* <AdminViewResults/> */}
          {/* </ResultShowProvider> */}

          
            
              {
              showUploadLearningMaterials &&
                <ShowUploadLearningMaterialsProvider>
                    

                  <div className={` fixed z-50 top-0 w-screen h-screen bg-gray-200 flex justify-center items-center`}>
                  <div onClick={() => {
                                        setShowUploadLearningMaterials(!showUploadLearningMaterials)
                                        
                                      }}
                                  className="close absolute top-5 z-20 left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                    <UploadLearningMaterials/>
                  </div>
                
                </ShowUploadLearningMaterialsProvider>
              }
              {
              showAdminUsersList &&
                <ShowAdminUsersListProvider>
                    

                  <div className={` fixed z-50 top-0 w-screen h-screen bg-gray-200 flex justify-center items-center`}>
                  <div onClick={() => {
                                        setShowAdminUsersList(!showAdminUsersList)
                                        
                                      }}
                                  className="close absolute top-5 z-20 left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                    <AdminUsersList/>
                  </div>
                
                </ShowAdminUsersListProvider>
              }
              

              {
              showCreateQuestions &&
                <ShowCreateQuestionsProvider>
                    

                  <div className={` fixed z-50 top-0 w-screen h-screen bg-gray-200 flex justify-center items-center`}>
                  <div onClick={() => {
                                        setShowCreateQuestions(!showCreateQuestions)
                                        
                                      }}
                                  className="close absolute top-5 z-20 left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                    <CreateQuestions/>
                  </div>
                
                </ShowCreateQuestionsProvider>
              }

{
          showViewLearningMaterials &&
          <div className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll`}>
            <div onClick={() => {
                  setShowViewLearningMaterials(!showViewLearningMaterials)
                  
                }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
            <AdminViewLearningMaterials/>
          </div>
        }
{
          showAdminViewStatistics &&
          <div className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll`}>
            <div onClick={() => {
                  setShowAdminViewStatistics(!showAdminViewStatistics)
                  
                }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
            <AdminViewStatistics/>
          </div>
        }

<ResultShowProvider value={[showResult, setShowResult]}>
            {
              showResult &&
              <div className={`fixed  top-0 w-screen h-screen bg-white flex justify-center items-start`}>
                <div onClick={() => {
                      setShowResult(!showResult)
                      
                    }}
                className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                <AdminViewResults/>
              </div>

            }
          </ResultShowProvider>
    </div>
  )
}

export default AdminDashboardPage
