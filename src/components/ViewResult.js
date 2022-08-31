import React, { useContext } from "react";
import { AuthContext, QuestionContext, ScoreContext } from "../context";
function ViewResult() {
  const [score, , surveyEnd] = useContext(ScoreContext);
  const [questions] = useContext(QuestionContext);
  const [user] = useContext(AuthContext);

  return (
    <div className={`text-[#000] px-4`}>
      <div className="mt-32 md:max-w-screen-lg">
        <div className="font-medium heding">
          Results for <span className="font-bold">{user.username}</span>
        </div>
        <div className="max-w-screen-md px-8 py-6 mx-auto text-center text-white bg-teal-600 rounded info mt-14 ">
          {surveyEnd && (
            <>
              <h2 className="mb-5 text-lg font-medium">Summary</h2>
              <p className="mb-4 text-sm">
                Based on the above details, we figured out that you are{" "}
              </p>
            </>
          )}
          <div className="mt-3 text-base font-bold result-info">
            {surveyEnd ? (
              <>{Math.round((score / (questions.length * 4)) * 100)}% Secure</>
            ) : (
              "No Result Yet"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResult;
