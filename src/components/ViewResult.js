import React, {useContext, useState} from 'react'
import {ResultShowContext} from '../context'
// import {SurveyShowContext, ResultShowContext} from '../context'

// import { QuestionProvider, ResultShowProvider } from '../context';

function ViewResult() {
  
  const [showResult, setShowResult] = useContext(ResultShowContext)
  
    // const [newshowResult, setShowResult] = useState(showResult)

  return (
    <div className={`text-[#000] overflow-x-scroll-cm px-4`}>
      
      <div className="mt-32 md:max-w-screen-lg">
      <div className="heding font-medium">Results for <span className='font-bold'>tj</span></div>
      {/* <hr className='mt-5 border border-gray-300'/> */}
      <div className="table mt-6 ">
        <table className="table-auto border-y border-gray-400 w-[1500px] text-xs font-medium " >
          <thead className='font-bold'>
            <tr className='bg-teal-600 text-white'>
              
              <td>Date</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            
              {/* UNIBEN - 130 */}
              {/* CREATE CHAPTER PAGE ON FACEBOOK */}

            </tr>
          </thead>
          <tbody className='text-sm'>
            <tr >
            <td className='w-1/12'>June 23</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          
          </tbody>
          
         
        </table>

      </div>
      <div className="info bg-teal-600 text-white max-w-md py-5 px-6 mx-auto mt-14 rounded text-center fixed left-0 right-0 bottom-24">
        <h2 className='font-medium mb-5 text-lg'>Summary</h2>
        <p className='text-sm mb-4'>Based on the above details, we figured out that you are </p>
        <div className="result-info font-bold text-base mt-3">Not Secure</div>
      </div>
    </div>

      </div>
  )
}

export default ViewResult