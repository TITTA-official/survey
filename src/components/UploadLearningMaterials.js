import React, {useState}  from 'react'
import {useDropzone} from 'react-dropzone'
import {ShowUploadLearningMaterialsContext} from '../context.js'

function  UploadLearningMaterials() {
  const [files, setFiles] = useState([])

  const {getRootProps, getInputProps, fileRejections} = useDropzone({
    accept: "application/pdf",
    // maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }
  })
  // const rejectedPdfFiles = fileRejections.map(({file, errors}) => {
  //   return (
  //     <li key={file.path}>
  //       {file.name} - {file.size} bytes
  //       <ul>
  //         {errors.map(e => <li key={e.code}>{e.message}</li>)}
  //       </ul>
  //     </li>
  //   )
  // })
  const pdfFiles = files.map((file) => (
    <div key={file.name} className="">
      <div className="flex items-center gap-4">
        <img src="pdf.png" alt="" className='w-[16px]' /> {file.name}
      </div>
    </div>
  ))
  const [showUploadLearningMaterials, setShowUploadLearningMaterials] = React.useContext(ShowUploadLearningMaterialsContext)
  return (
    <div className="cardd bg-white w-[80%] md:max-w-lg h-[45%] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg" {...getRootProps()}>
      <div className="font-bold text-base md:text-lg mb-4"><p>Upload</p></div>
      <div className=" bg-gray-100 w-full flex justify-center items-center py-12 border-dashed  border-4 border-gray-300 rounded-lg hover:scale-[1.015] transition-transform cursor-pointer">
      <input type="text" {...getInputProps({className: 'dropzone'})}/>
      <p>Drop your files here or click to browse </p>
      </div>
      {/* <p className='text-red-800'>Rejected files</p>
      <div className="text-red-800">{rejectedPdfFiles}</div> */}
      <div className="w-full mt-7 flex items-center justify-between">
      <div className=" place-items-start grid grid-cols-3  text-xs">{pdfFiles}</div>
      <button className='bg-teal-600 text-white py-3 px-5 rounded hover:shadow-xl' type='submit'>Upload</button>
      </div>
    </div>
  )
}

export default  UploadLearningMaterials


