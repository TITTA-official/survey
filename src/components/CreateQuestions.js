import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context";

function CreateQuestions() {
  const [question, setQuestion] = useState("");
  const [linkageOption1, setLinkageOption1] = useState("");
  const [linkageOption2, setLinkageOption2] = useState("");
  const [linkageOption3, setLinkageOption3] = useState("");
  const [linkageOption4, setLinkageOption4] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmitLinkage = async (id) => {
    setLoading(true);
    let token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "/admin/survey/post_linkage",
        {
          questionID: id,
          option1: linkageOption1,
          option2: linkageOption2,
          option3: linkageOption3,
          option4: linkageOption4,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
      console.log(res.data.results);
      setMessage(res.data.message);
      setLinkageOption1("");
      setLinkageOption2("");
      setLinkageOption3("");
      setLinkageOption4("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    let token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "/admin/survey/post_question",
        {
          question,
          option1,
          option2,
          option3,
          option4,
          adminID: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setMessage(res.data.message);
      if (res.data.questionID) {
        handleSubmitLinkage(res.data.questionID);
      }
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };

  const handleAllSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form
      onSubmit={handleAllSubmit}
      className="cardd bg-white w-[80%] md:max-w-lg h-[83vh] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg"
    >
      <div className="mb-4 text-base font-bold md:text-lg">
        <p>Question</p>
        {message && <p className="text-xs font-medium capitalize">{message}</p>}
        {error && (
          <p className="text-xs font-medium text-red-500 capitalize">{error}</p>
        )}
      </div>
      <div className="flex flex-col items-start justify-center w-full cursor-pointer ">
        <input
          type="text"
          className="w-full px-3 py-4 border-2 border-gray-500 rounded"
          placeholder="Enter Survey Question Here"
          onChange={(e) => {
            setQuestion(e.target.value);
            console.log(question);
          }}
          value={question}
        />
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
            value={linkageOption1}
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
            placeholder="Option 1 Linkage"
            onChange={(e) => {
              setLinkageOption2(e.target.value);
            }}
            value={linkageOption2}
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
            placeholder="Option 1 Linkage"
            onChange={(e) => {
              setLinkageOption3(e.target.value);
            }}
            value={linkageOption3}
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
            placeholder="Option 1 Linkage"
            onChange={(e) => {
              setLinkageOption4(e.target.value);
            }}
            value={linkageOption4}
          />
        </div>
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
  );
}

export default CreateQuestions;
