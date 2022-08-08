import React, {useContext, useState} from 'react'
import {ResultShowContext, ResultShowProvider} from '../context'

function ViewResults() {
  
  const [showResult, setShowResult] = useContext(ResultShowContext)
  
    // const [newshowResult, setShowResult] = useState(showResult)

  return (
    <div className={`text-[#000]  overflow-x-hidden  px-4`}>
      
    <div className="mt-32 md:max-w-screen-lg max-h-[500px] overflow-x-scroll-cm  overflow-y-scroll">
    <div className="heding font-medium">Results for <span className='font-bold'>all users</span></div>
    {/* <hr className='mt-5 border border-gray-300'/> */}
    <div className="table mt-6 ">
      <table className="table-auto border-y border-gray-400 w-[1500px] text-xs font-medium " >
        <thead className='font-bold'>
          <tr className='bg-teal-600 text-white'>
            <td>#</td>
            <td>Date</td>
            <td>Username</td>
            <td>Do you have a laptop?</td>
            <td>Is your laptop ok?</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>Result</td>
          
            {/* UNIBEN - 130 */}
            {/* CREATE CHAPTER PAGE ON FACEBOOK */}

          </tr>
        </thead>
        <tbody className='text-sm'>
          <tr >
          <td>1</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>tj</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
          <tr >
          <td>2</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>john</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
          <tr >
          <td>3</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>jim</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
          <tr >
          <td>4</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>paul</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
          <tr >
          <td>5</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>tj</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
          <tr >
          <td>6</td>
          <td className='w-1/12'>June 23</td>
          <td className=''>tj</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>60% - Fairly secure</td>
        </tr>
        
        </tbody>
        
       
      </table>

    </div>
    {/* <div className="info bg-teal-600 text-white max-w-md py-5 px-6 mx-auto mt-14 rounded text-center fixed left-0 right-0 bottom-24">
      <h2 className='font-medium mb-5 text-lg'>Summary</h2>
      <p className='text-sm mb-4'>Based on the above details, we figured out that you are </p>
      <div className="result-info font-bold text-base mt-3">Not Secure</div>
    </div> */}
  </div>

    </div>
  )
}

export default ViewResults