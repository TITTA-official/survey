import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

import SurveyPage from '../components/SurveyPage';

import {SurveyShowContext, ResultShowContext, ViewLearningMaterialsContext} from '../context'

import { QuestionProvider, ResultShowProvider, ViewLearningMaterialsProvider } from '../context';
import ViewResult from '../components/ViewResult';
import ViewLearningMaterials from '../components/ViewLearningMaterials';


function DashboardPage() {
  const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [toggleMenu, setToggleMenu] = useState(false)

    const [showSurvey, setShowSurvey] = useContext(SurveyShowContext)

    const [showResult, setShowResult] = useContext(ResultShowContext)
    const [showViewLearningMaterials, setShowViewLearningMaterials] = useContext(ViewLearningMaterialsContext)
    

    
    //     useEffect(() => {
      //       refreshToken();
      //       getUsers();
//   }, []);

//   const refreshToken = async () => {
  //     try {
    //         const response = await axios.get('http://localhost:8080/token');
    //         setToken(response.data.accessToken);
    //         const decoded = jwt_decode(response.data.accessToken);
    //         setName(decoded.name);
    //         setExpire(decoded.exp);
    //     } catch (error) {
      //         if (error.response) {
        //             history.push("/");
        //         }
        //         console.log(error)
        //     }
// }

// const axiosJWT = axios.create();

//     axiosJWT.interceptors.request.use(async (config) => {
  //         const currentDate = new Date();
  //         if (expire * 1000 < currentDate.getTime()) {
    //             const response = await axios.get('http://localhost:8080/token');
    //             config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    //             setToken(response.data.accessToken);
//             const decoded = jwt_decode(response.data.accessToken);
//             setName(decoded.name);
//             setExpire(decoded.exp);
//         }
//         return config;
//     }, (error) => {
//         return Promise.reject(error);
//     });
 
//     const getUsers = async () => {
  //         const response = await axiosJWT.get('http://localhost:8080/users', {
    //             headers: {
      //                 Authorization: `Bearer ${token}`
      //             }
      //         });
      //         setUsers(response.data);
      //     }
      
      
      //     console.log(users)
      const Logout = async () => {
        history.push('/')
    }
      return (
        <div className='relative'>
      <div className="navbar sticky top-0 bg-glass flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-2"><div className="logo w-[64px] md:w-[72px]"><img className='w-full' src="../logo.png" alt="" /> </div> <span className='sp text-xl md:text-3xl font-bold'>Survey</span></div>
        <div className="info flex gap-3 md:gap-4 items-center">
          <div className="p-icon w-[24px] md:w-[32px] lg:w-[32px]"><img className='w-full cursor-pointer' src="../user.png" alt="" /></div> <div className={`text-sm`}> <span className={`text-sm`}>Hi</span>, <span className='name font-medium'>{'tj'}</span> </div> <div className='w-[20px] md:w-[24px] cursor-pointer ' onClick={() => setToggleMenu(!toggleMenu)}><img className='w-full' src="../down-chevron.png" alt="" /></div>
          <div className={`${toggleMenu ? '': 'hidden'} bg-glass rounded py-8 px-7 absolute top-[100px] right-4 bd`}><button onClick={Logout} className={`text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white `}>Logout</button></div>        
        </div>
      </div>
      <div className="banner mt-16 w-full mx-auto flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="heading-info text-2xl md:text-3xl">Welcome <span className='name font-bold'>{'tj'}</span></div>
        <div  className="sub-inf text-sm md:text-base font-light">To get started, you can take a survey</div>
        <div ><button onClick={() => setShowSurvey(!showSurvey)} className="text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white">TAKE A SURVEY</button></div>
      </div>
      <hr className='mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow'/>
      <div className="actions grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5 md:gap-6 place-items-center md:mt-16 mt-14 text-sm text-white">
        <div onClick={() => setShowSurvey(!showSurvey)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Take Survey</div>
        <div onClick={() => setShowResult(!showResult)}  className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Result</div>
        <div onClick={() => setShowViewLearningMaterials(!showViewLearningMaterials)} className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Learning Material</div>
      </div>

      
        
        
        <QuestionProvider>
          <div className={` ${showSurvey ? 'fixed top-0 w-screen h-screen bg-white ' : 'hidden opacity-0'}`}>
            <SurveyPage/>
          </div>
        </QuestionProvider>

        {/* <QuestionProvider> */}
          <ResultShowProvider value={[showResult, setShowResult]}>
            {
              showResult &&
              <div className={`fixed  top-0 w-screen h-screen bg-white flex justify-center items-start`}>
                <div onClick={() => {
                      setShowResult(!showResult)
                      
                    }}
                className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
                <ViewResult/>
              </div>

            }
          </ResultShowProvider>
        {/* </QuestionProvider> */}
        
        {
          showViewLearningMaterials &&
          <div className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll`}>
            <div onClick={() => {
                  setShowViewLearningMaterials(!showViewLearningMaterials)
                  
                }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "><img className='w-full h-full' src="../close.png" alt="" /></div>
            <ViewLearningMaterials/>
          </div>
        }
      
    </div>
  )
      
}

export default DashboardPage