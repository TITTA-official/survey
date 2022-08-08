import React from 'react'
import {Link}  from 'react-router-dom'

function AdminViewLearningMaterials() {
  return (
    <div>
        <div className="mt-24 w-full md:max-w-screen-xl px-6 mx-auto min-h-fit mb-20">
            <div className="heding font-bold text-lg w-full text-center md:text-2xl mb-12"><h2>View Learning Materials</h2></div>
            <div className="resources mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                    <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
                        <div className="icon w-[64px]"><img src="../pdf.png" alt="" /></div>
                        <div className="nameofcontent font-semibold">How to Be Aware</div>
                        <div className="delete-icon w-[50px] h-[50px] rounded-full absolute -bottom-0 left-1 bg-red-600 flex justify-center items-center"><img className='w-[24px]' src="../delete.png" alt="" /></div>
                        <Link to="/files/myfile.pdf" target="_blank" download><div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center"><img className='w-[16px]' src="../downloads.png" alt="" /></div></Link>
                    </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default AdminViewLearningMaterials