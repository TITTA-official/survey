import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import {QuestionContext} from '../context'
import axios from "axios";

function ViewSurveyQuestions() {
  const [questions] = useContext(QuestionContext);
  const [questionID, setQuestionID] = useState('')
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editClicked, setEditClicked] = useState(false)
  const [deleteClicked, setDeleteClicked] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `/admin/survey/update_question/${questionID}`,
        {
          question,
          questionID
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data.results);
      setMessage(res.data.message);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };
  // /update_question/:id route
  return (
    <div className='w-full md:max-w-md mt-28 relative'>
       
      {
        questions.map((question, index) =>
        <div key={index} className='bg-white rounded w-full py-6 px-6 mb-4'>
          <div  className="text-xs text-[#3A3A3A]">Question {index+1}</div>
          <div className="text-base md:text-lg mt-4 max-w-sm">{question.question}</div>
          <div className="actions w-full flex gap-5 mt-5 justify-start items-center">
            <div onClick={() => {
              setEditClicked(!editClicked)
              setQuestion(question.question)
              setQuestionID(question.questionID)
              console.log(question)
            }} className="e bg-teal-600 text-white py-1 px-3 cursor-pointer">Edit</div>
            <div className="e bg-red-600 text-white py-1 px-3 cursor-pointer">Delete</div>
          </div>
        </div>
        )
      }
      {
        editClicked ? (
          <form
      onSubmit={handleSubmit}
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
        {message && <p className="text-xs font-medium capitalize">{message}</p>}
        {error && (
          <p className="text-xs font-medium text-red-500 capitalize">{error}</p>
        )}
      </div>
      <div className="flex items-center justify-center w-full cursor-pointer ">
        <input
          type="text"
          className="w-full px-3 py-4 border-2 border-gray-500 rounded"
          placeholder="Create Survey Question"
          onChange={(e) => {
            setQuestion(question);
            setQuestion(e.target.value)
          }}
          value={question}
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
        ) : null
      }
    </div>
  )
}

export default ViewSurveyQuestions