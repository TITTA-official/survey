import React from 'react'

function CreateQuestions() {
  return (
    <div className="cardd bg-white w-[80%] md:max-w-lg h-[45%] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg" >
      <div className="font-bold text-base md:text-lg mb-4"><p>Upload</p></div>
      <div className="  w-full flex justify-center items-center  cursor-pointer">
      
      <input type="text" className='w-full border-2 border-gray-500 rounded py-4 px-3' placeholder='Create Survey Question'/>
      </div>
 
      <div className="w-full mt-7 text-right">
      <button className='bg-teal-600 text-white py-3 px-5 rounded hover:shadow-xl' type='submit'>Upload</button>
      </div>
    </div>
  )
}

export default CreateQuestions