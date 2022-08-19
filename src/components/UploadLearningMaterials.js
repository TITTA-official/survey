import axios from "axios";
import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ShowUploadLearningMaterialsContext,VideoUrlContext } from "../context.js";

function UploadLearningMaterials() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [videoMessage, setVideoMessage] = useState("");
  const [error, setError] = useState("");
  const [videoError, setVideoError] = useState("");
  const [videoUrl, setVideoUrl] = useContext(VideoUrlContext);
  const[inputUrl, setInputUrl] = useState('')
  // const [, setShowFUploadLearningMaterials] =
  // useContext(ShowUploadLearningMaterialsContext);
  

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: "text/html",
    // maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
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
        <img src="pdf.png" alt="" className="w-[16px]" /> {file.name}
      </div>
    </div>
  ));
  const [showUploadLearningMaterials, setShowUploadLearningMaterials] =
    useContext(ShowUploadLearningMaterialsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length !== 0) {
      setLoading(true);
      let token = localStorage.getItem("token");

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onerror = (error) => new Error(error);
      reader.onload = async () => {
        try {
          const res = await axios.post(
            "/admin/upload",
            { file: reader.result, filename: files[0].name },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          console.log(res);
          setFiles([]);
          setLoading(false);
          setMessage(res.data.message);
        } catch (error) {
          setLoading(false);
          setError(error.response.data.error);
          console.error(error);
        }
      };
    }
  };

  const SubmitVideoUrl = async (e) => {
    e.preventDefault();

    if (videoUrl === '') {
      setLoading(true);
      let token = localStorage.getItem("token");
        try {
          const res = await axios.post(
            "/admin/upload/videoUrl",
            { videoUrl: videoUrl },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          setVideoUrl(inputUrl)
          console.log(res);
          setLoading(false);
          setVideoMessage(res.data.message);
          // setShowFUploadLearningMaterials(false);
        } catch (error) {
          setLoading(false);
          setVideoError(error.response.data.error);
          console.error(error);
        }
        console.log(videoUrl)
    }
    

    
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-auto">
    <form
      onSubmit={handleSubmit}
      className="cardd bg-white w-[80%] md:max-w-lg h-[30ch] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg "
      {...getRootProps()}
    >
      <div className="mb-4 text-base font-bold md:text-lg">
        <p>Upload</p>
        {message && <p className="text-xs font-medium capitalize">{message}</p>}
        {error && (
          <p className="text-xs font-medium text-red-500 capitalize">{error}</p>
        )}
      </div>
      <div className=" bg-gray-100 w-full flex justify-center items-center py-12 border-dashed  border-4 border-gray-300 rounded-lg hover:scale-[1.015] transition-transform cursor-pointer">
        <input
          type="file"
          name="file"
          {...getInputProps({ className: "dropzone" })}
        />
        <p>Drop your files here or click to browse </p>
      </div>
      
      {/* <p className='text-red-800'>Rejected files</p>
      <div className="text-red-800">{rejectedPdfFiles}</div> */}
      <div className="flex items-center justify-between w-full mt-7">
        <div className="grid grid-cols-3 text-xs place-items-start">
          {pdfFiles}
        </div>
        <button
          disabled={loading}
          className={`px-5 py-3 text-white bg-teal-600 rounded hover:shadow-xl`}
          type="submit"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </form>
    <form  onSubmit={SubmitVideoUrl} className="bg-glass mt-5 w-[80%] md:max-w-lg py-5 px-6 flex flex-col gap-5">
    <div>For video upload place the url in the field below:</div>
    {videoMessage && <p className="text-xs font-medium capitalize">{videoMessage}</p>}
        {videoError && (
          <p className="text-xs font-medium text-red-500 capitalize">{videoError}</p>
        )}
    <input type="text" className="py-2 px-3 bg-glass " value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
    <button className='border-2 rounded py-2 px-4 border-teal-600' type='submit'>{loading ? "Uploading..." : "Upload"}</button>
  </form>
  </div>
  );
}

export default UploadLearningMaterials;
