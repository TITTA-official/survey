import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../context";

function ViewSurveyQuestions() {
  const [questions] = useContext(QuestionContext);
  const [loadedQuestions, setLoadedQuestions] = useState(questions);
  const [questionID, setQuestionID] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [linkageError, setLinkageError] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [linkageOption1, setLinkageOption1] = useState("");
  const [linkageOption2, setLinkageOption2] = useState("");
  const [linkageOption3, setLinkageOption3] = useState("");
  const [linkageOption4, setLinkageOption4] = useState("");
  const [linkages, setLinkages] = useState([]);

  const handleDelete = async (id) => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`/admin/survey/delete_question/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      setMessage(res.data.message);
      // setQuestion("");
      setDeleteClicked(true);
      setLoading(false);
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setDeleted(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    handleSubmitLinkage();
    let token = localStorage.getItem("token");
    try {
      // console.log(questionID)
      const res = await axios.patch(
        `/admin/survey/update_question/${questionID}`,
        {
          questionID,
          question,
          option1,
          option2,
          option3,
          option4,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      setMessage(res.data.message);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  const handleSubmitLinkage = async () => {
    let token = localStorage.getItem("token");
    let exist = linkages.find((linkage) => linkage.questionID === questionID);
    try {
      const res = exist
        ? await axios.patch(
            `/admin/survey/update_linkage/${questionID}`,
            {
              option1: linkageOption1,
              option2: linkageOption2,
              option3: linkageOption3,
              option4: linkageOption4,
            },
            {
              headers: {
                authorization: "Bearer " + token,
              },
            }
          )
        : await axios.post(
            `/admin/survey/post_linkage/`,
            {
              questionID,
              option1: linkageOption1,
              option2: linkageOption2,
              option3: linkageOption3,
              option4: linkageOption4,
            },
            {
              headers: {
                authorization: "Bearer " + token,
              },
            }
          );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadQuestions = async (e) => {
      setLoading(true);
      let token = localStorage.getItem("token");

      try {
        let res = await axios.get(`/admin/survey/linkage`, {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        // console.log(res.data);
        setLinkages(res?.data?.results);
      } catch (error) {
        setLinkageError(error.response.data.error);
        // console.error(error);
      }

      try {
        // console.log(questionID)
        let res = await axios.get(`/admin/survey`, {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        // console.log(res.data);
        setMessage(res.data.message);
        // console.log(res.data.message);
        setLoadedQuestions(res?.data?.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.error);
        // console.error(error);
      }
    };
    loadQuestions();
  }, [question, deleted]);

  return (
    <div className="relative w-full mt-28">
      <div className=" overflow-x-scroll md:overflow-x-hidden w-[90%] mx-auto px-6 py-6 mb-4 bg-white rounded">
        <table>
          <thead>
            <th>IDs</th>
            <th>Questions</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
          </thead>

          <tbody>
            {loadedQuestions.map((questionObj, index) => (
              <tr key={index}>
                <td>{questionObj.questionID}</td>
                <td className="flex items-center">
                  {questionObj.question}
                  <div className="flex flex-col gap-y-4">
                    <div
                      onClick={() => {
                        setEditClicked(!editClicked);
                        setQuestionID(questionObj.questionID);
                        setQuestion(questionObj.question);
                        setOption1(questionObj.option1);
                        setOption2(questionObj.option2);
                        setOption3(questionObj.option3);
                        setOption4(questionObj.option4);
                        setLinkageOption1(linkages[index]?.option1);
                        setLinkageOption2(linkages[index]?.option2);
                        setLinkageOption3(linkages[index]?.option3);
                        setLinkageOption4(linkages[index]?.option4);
                        console.log(linkages[index]?.option1);
                      }}
                      className="icon w-[16px] cursor-pointer"
                    >
                      <img className="w-full" src="../pencil.png" alt="d" />
                    </div>
                    <div
                      onClick={(e) => {
                        setDeleteClicked(!deleteClicked);
                        handleDelete(questionObj.questionID);
                      }}
                      className="icon w-[16px] cursor-pointer"
                    >
                      <img className="w-full" src="../delete2.png" alt="d" />
                    </div>
                  </div>
                </td>
                <td>{questionObj.option1}</td>
                <td>{questionObj.option2}</td>
                <td>{questionObj.option3}</td>
                <td>{questionObj.option4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editClicked ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={`cardd bg-white w-[80%] md:max-w-lg shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg fixed top-2 right-5`}
        >
          <div
            onClick={() => {
              setEditClicked(!editClicked);
            }}
            className="close  w-[10px] md:w-[12px] -ml-3 cursor-pointer mb-5"
          >
            <img className="w-full h-full" src="../close.png" alt="" />
          </div>
          <div className="mb-4 text-base font-bold md:text-lg">
            <p>Question</p>
            {message && (
              <p className="text-xs font-medium capitalize">{message}</p>
            )}
            {(error || linkageError) && (
              <p className="text-xs font-medium text-red-500 capitalize">
                {error || linkageError}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-center w-full cursor-pointer ">
            <input
              type="text"
              className="w-full px-3 py-4 border-2 border-gray-500 rounded"
              placeholder="Create Survey Question"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              value={question}
            />
            <div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 1"
                  onChange={(e) => {
                    setOption1(e.target.value);
                  }}
                  value={option1}
                />
                <input
                  type="text"
                  className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 1 Linkage"
                  onChange={(e) => {
                    setLinkageOption1(e.target.value);
                  }}
                  value={linkageOption1 || ""}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 2"
                  onChange={(e) => {
                    setOption2(e.target.value);
                  }}
                  value={option2}
                />
                <input
                  type="text"
                  className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 2 Linkage"
                  onChange={(e) => {
                    setLinkageOption2(e.target.value);
                  }}
                  value={linkageOption2 || ""}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 3"
                  onChange={(e) => {
                    setOption3(e.target.value);
                  }}
                  value={option3}
                />
                <input
                  type="text"
                  className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 3 Linkage"
                  onChange={(e) => {
                    setLinkageOption3(e.target.value);
                  }}
                  value={linkageOption3 || ""}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 4"
                  onChange={(e) => {
                    setOption4(e.target.value);
                  }}
                  value={option4}
                />
                <input
                  type="text"
                  className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
                  placeholder="Option 4 Linkage"
                  onChange={(e) => {
                    setLinkageOption4(e.target.value);
                  }}
                  value={linkageOption4 || ""}
                />
              </div>
            </div>
            {/* <input
              type="text"
              className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
              placeholder="Option 1"
              onChange={(e) => {
                setOption1(e.target.value);
              }}
              value={option1}
            />
            <input
              type="text"
              className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
              placeholder="Option 2"
              onChange={(e) => {
                setOption2(e.target.value);
              }}
              value={option2}
            />
            <input
              type="text"
              className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
              placeholder="Option 3"
              onChange={(e) => {
                setOption3(e.target.value);
              }}
              value={option3}
            />
            <input
              type="text"
              className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
              placeholder="Option 4"
              onChange={(e) => {
                setOption4(e.target.value);
              }}
              value={option4}
            /> */}
          </div>

          <div className="w-full text-right mt-7">
            <button
              disabled={loading}
              className="px-5 py-3 text-white bg-teal-600 rounded hover:shadow-xl"
              type="submit"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default ViewSurveyQuestions;
