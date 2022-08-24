import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext, QuestionContext } from "../context";

function ViewSurveyQuestions() {
  const [questions] = useContext(QuestionContext);
  const[loadedQuestions, setLoadedQuestions] = useState(questions)
  const [questionID, setQuestionID] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  // const loadQuestions = () => {
  //   }

  const handleDelete = async (e) => {
    // e.preventDefault();
    // window.location.reload();
    console.log(user)
    let token = localStorage.getItem("token")
    try {
      // console.log(questionID)
      const res = await axios.delete(
        `/admin/survey/delete_question/${questionID}`,
        {
          questionID
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      // console.log(res.data);
      setMessage(res.data.message);
      setQuestion('')
      setDeleteClicked(true)
      setLoading(false);
      // console.log(res.data.results)
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    // window.location.reload();
    e.preventDefault();
    // window.location.reload();
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
      // console.log(res.data);
      setMessage(res.data.message);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setTimeout(() =>  setQuestion(question), 1000)

  // }, [questions])
  useEffect(() => {
    const loadQuestions = async(e) => {
      setLoading(true);
      let token = localStorage.getItem("token");
      try {
        // console.log(questionID)
        let res = await axios.get(
          `/admin/survey`,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        // console.log(res.data);
        setMessage(res.data.message);
        console.log(res.data.message)
        setLoadedQuestions(res?.data?.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.error);
        console.error(error);
      }
    }
    loadQuestions()

  }, [question]);
  // /update_question/:id route
  return (
    <div className="relative w-full  mt-28">
      
          <div className=" overflow-x-scroll md:overflow-x-hidden w-[90%] mx-auto px-6 py-6 mb-4 bg-white rounded">
          <table>
              <thead>
                <th>S/N</th>
                <th>Questions</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
              </thead>
              
              <tbody>
                {
                  
                  loadedQuestions.map((questionObj, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="flex items-center">
                        {questionObj.question}
                        <div className="flex flex-col gap-y-4">
                          <div
                            onClick={() => {
                              setEditClicked(!editClicked);
                              setQuestionID(questionObj.questionID)
                              setQuestion(questionObj.question);
                              setOption1(questionObj.option1)
                              setOption2(questionObj.option2)
                              setOption3(questionObj.option3)
                              setOption4(questionObj.option4)
                              
                              console.log(questionObj);
                            }}
                            className="icon w-[16px] cursor-pointer"><img className="w-full" src="../pencil.png" alt="d" /></div>
                          <div
                            onClick={(e) => {
                              setDeleteClicked(!deleteClicked);
                              handleDelete(e)
                              
                              console.log(questionObj);
                            }}
                          className="icon w-[16px] cursor-pointer"><img className="w-full" src="../delete2.png" alt="d" /></div>
                        </div>
                      </td>
                      <td>
                        {questionObj.option1}
                      </td>
                      <td>
                        {questionObj.option2}
                      </td>
                      <td>
                        {questionObj.option3}
                      </td>
                      <td>
                        {questionObj.option4}
                      </td>
                    </tr>
                  ))
                  
                }
              </tbody>
            </table>


            {/* <div className="text-xs text-[#3A3A3A]">Question {index + 1}</div>
            <div className="max-w-sm mt-4 text-base md:text-lg">
              {questionObj.question}
            </div>
            <div className="flex items-center justify-start w-full gap-5 mt-5 actions">
              <div
                onClick={() => {
                  setEditClicked(!editClicked);
                  setQuestion(questionObj.question);

                  setQuestionID(questionObj.questionID);
                  console.log(questionObj);
                }}
                className="px-3 py-1 text-white bg-teal-600 cursor-pointer e"
              >
                Edit
              </div>
              <div
                onClick={() => {
                  setQuestion("");
                  handleDelete(questionObj.questionID);
                }}
                className="px-3 py-1 text-white bg-red-600 cursor-pointer e"
              >
                Delete
              </div>
            </div> */}
          </div>
        




      {editClicked ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setQuestion(question);
          }}
          className={`cardd bg-white w-[80%] md:max-w-lg shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg absolute top-5 left-5`}
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
            {error && (
              <p className="text-xs font-medium text-red-500 capitalize">
                {error}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-center w-full cursor-pointer ">
            <input
              type="text"
              className="w-full px-3 py-4 border-2 border-gray-500 rounded"
              placeholder="Create Survey Question"
              onChange={(e) => {
                // setQuestion(question);
                setQuestion(e.target.value);
              }}
              value={question}
            />
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
        />
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
