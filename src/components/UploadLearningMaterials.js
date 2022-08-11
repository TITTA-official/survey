import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ShowUploadLearningMaterialsContext } from "../context.js";

function UploadLearningMaterials() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: "application/pdf",
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
    React.useContext(ShowUploadLearningMaterialsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length !== 0) {
      setLoading(true);
      let token = localStorage.getItem("token");
      const form = new FormData();
      form.append("file", files[0], files[0].name);
      setLoading(false);
      try {
        const res = await axios.post("/admin/upload", form, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="cardd bg-white w-[80%] md:max-w-lg h-[45%] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg"
      {...getRootProps()}
    >
      <div className="mb-4 text-base font-bold md:text-lg">
        <p>Upload</p>
      </div>
      <div className=" bg-gray-100 w-full flex justify-center items-center py-12 border-dashed  border-4 border-gray-300 rounded-lg hover:scale-[1.015] transition-transform cursor-pointer">
        <input
          type="text"
          {...getInputProps({ className: "dropzone" })}
          name="file"
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
          className="px-5 py-3 text-white bg-teal-600 rounded hover:shadow-xl"
          type="submit"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </form>
  );
}

export default UploadLearningMaterials;
