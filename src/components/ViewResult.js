import React, { useContext } from "react";
import { AuthContext, QuestionContext, ScoreContext } from "../context";
function ViewResult() {
  const [score] = useContext(ScoreContext);
  const [questions] = useContext(QuestionContext);
  const [user] = useContext(AuthContext);

  return (
    <div className={`text-[#000] px-4`}>
      <div className="mt-32 md:max-w-screen-lg">
        <div className="heding font-medium">
          Results for <span className="font-bold">{user.username}</span>
        </div>
        <div className="info bg-teal-600 text-white max-w-screen-md py-6 px-8 mx-auto mt-14 rounded text-center ">
          <h2 className="font-medium mb-5 text-lg">Summary</h2>
          <p className="text-sm mb-4">
            Based on the above details, we figured out that you are{" "}
          </p>
          <div className="result-info font-bold text-base mt-3">
            {Math.round((score / (questions.length * 4)) * 100)}% Secure
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResult;
