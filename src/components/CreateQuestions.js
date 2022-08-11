import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context";

function CreateQuestions() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "/admin/post_survey",
        {
          survey: [
            {
              question,
            },
          ],
          adminID: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="cardd bg-white w-[80%] md:max-w-lg h-[45%] shadow-2xl flex flex-col justify-center px-6 py-4 rounded md:rounded-lg"
    >
      <div className="mb-4 text-base font-bold md:text-lg">
        <p>Question</p>
      </div>
      <div className="flex items-center justify-center w-full cursor-pointer ">
        <input
          type="text"
          className="w-full px-3 py-4 border-2 border-gray-500 rounded"
          placeholder="Create Survey Question"
          onChange={(e) => {
            setQuestion(e.target.value);
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
  );
}

export default CreateQuestions;
