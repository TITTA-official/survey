import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context";

function CreateQuestions() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let token = localStorage.getItem("token");
    // const myJSON = JSON.stringify(data)
    try {
      const res = await axios.post(
        "/admin/survey/post_question",
        {
          question,
      // options:["yes", "bye", "ok"],
          admnID: user.id
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // const res = await axios.get(
      //   "/admin/survey",
      //   {
      //       headers: {
      //            Authorization: "Bearer " + token,
      //          },
      //   },
      // )
      console.log(res);
      console.log(res.data.results)
      setMessage(res.data.message);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      console.error(error);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
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
            console.log(question)
           }}
           value={question}
        />
        <input
          type="text"
          className="w-[60%] mt-8 text-sm px-2 py-3 border-2 border-gray-500 rounded"
          placeholder="Option 1"
          // onChange={(e) => {
          //   setOption1(e.target.value);
          // }}
          // value={question}
        />
        <input
          type="text"
          className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
          placeholder="Option 2"
          // onChange={(e) => {
          //   setOption2(e.target.value);
          // }}
          // value={question}
        />
        <input
          type="text"
          className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
          placeholder="Option 3"
          // onChange={(e) => {
          //   setOption3(e.target.value);
          // }}
          // value={question}
        />
        <input
          type="text"
          className="w-[60%] mt-5 text-sm px-2 py-3 border-2 border-gray-500 rounded"
          placeholder="Option 4"
          // onChange={(e) => {
          //   setOption4(e.target.value);
          // }}
          // value={question}
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
  );
}

export default CreateQuestions;
