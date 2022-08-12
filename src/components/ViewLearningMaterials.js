import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewLearningMaterials() {
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    const getAllResources = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/resources/all", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        //console.log(res);
        if (res) {
          setResources(res.data.results);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getAllResources();
  }, [token]);
  return (
    <div>
      <div className="w-full px-6 mx-auto mt-24 mb-20 md:max-w-screen-xl min-h-fit">
        <div className="w-full mb-12 text-lg font-bold text-center heding md:text-2xl">
          <h2>View Learning Materials</h2>
          {(resources.length && !loading) === 0 && (
            <p className="mt-3 text-xs font-medium">No resources.</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 resources md:grid-cols-3 place-items-center">
          {resources.map((r, id) => {
            return (
              <div
                key={r.name + id}
                className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden"
              >
                <div className="icon w-[64px]">
                  <img src="../pdf.png" alt="" />
                </div>
                <div className="font-semibold nameofcontent">{r.filename}</div>
                <a
                  href={r.file}
                  target="_blank"
                  rel="noreferrer noopener"
                  download
                >
                  <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                    <img className="w-[16px]" src="../downloads.png" alt="" />
                  </div>
                </a>
              </div>
            );
          })}
          {/* <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="resource cursor-pointer border-2 border-gray-100 transition-all hover:scale-105 rounded shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 w-[70%] md:w-[100%] relative px-4 py-4 h-[19ch] overflow-hidden">
            <div className="icon w-[64px]">
              <img src="../pdf.png" alt="" />
            </div>
            <div className="font-semibold nameofcontent">How to Be Aware</div>
            <Link to="/files/myfile.pdf" target="_blank" download>
              <div className="download-icon w-[50px] h-[50px] rounded-full absolute -bottom-3 -right-2 bg-teal-600 flex justify-center items-center">
                <img className="w-[16px]" src="../downloads.png" alt="" />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewLearningMaterials;
