import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  ChoiceContext,
  QuestionContext,
  ScoreContext,
  SurveyShowContext,
} from "../context";

function SurveyPage() {
  const [disabled, setDisabled] = useState(true);
  const [showSurvey, setShowSurvey] = useContext(SurveyShowContext);
  const [questions] = useContext(QuestionContext);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [surveyEnd, setSurveyEnd] = useState(false);
  const [choice, setChoice] = useContext(ChoiceContext);
  const [score, setScore] = useContext(ScoreContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useContext(AuthContext);

  useEffect(() => {
    if (questions.length > 0) {
      const loadQuestion = () => {
        setCurrentQuestion(questions[currentQuestionIndex].question);
      };
      loadQuestion();
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setChoice("");
    setDisabled(true);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const handleChoiceChange = (e) => {
    setChoice(e.target.value);
  };

  // const handleScore = async (id, score) => {
  //   let token = localStorage.getItem("token");
  //   let newScore = score + 1;
  //   try {
  //     const res = await axios.patch(
  //       `/users/update_score/${id}`,
  //       {
  //         score: newScore,
  //       },
  //       {
  //         headers: {
  //           authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     if (res.status === 200 && choice === "yes") {
  //       setScore(newScore);
  //       setMessage(res.data.message);
  //       setTimeout(() => {
  //         setMessage("");
  //       }, 2000);
  //     }
  //     console.log(res.data);
  //     console.log(score);
  //     console.log(choice);
  //   } catch (error) {
  //     //console.log(error);
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 2000);
  //   }
  // };

  const finishHandler = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setSurveyEnd(true);
    }
    // handleScore(user.id, score);
    setChoice("");
  };

  if (surveyEnd) {
    return (
      <div className="absolute flex items-center justify-center w-screen h-screen">
        <div
          onClick={() => setShowSurvey(!showSurvey)}
          className="close absolute top-5 left-7 w-[16px] md:w-[18px]"
        >
          <img
            className="w-full h-full cursor-pointer"
            src="../close.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-lg shadow-md md:py-20 md:px-28 bg-slate-50">
          <h3 className="text-lg font-bold md:text-4xl">Survey Complete!</h3>
          <p className="-mt-2 text-xs md:text-sm opacity-70 md:opacity-60 md:mt-2">
            Go back to view results
          </p>
          <button
            onClick={() => setShowSurvey(!showSurvey)}
            className="px-6 py-4 mt-4 text-sm text-white bg-teal-500 rounded hover:shadow-xl md:text-base"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full ">
      <div className="flex justify-between w-full px-6 py-4 text-xs font-medium s-nav bg-glass">
        <span>
          <span className="opacity-60">
            {currentQuestionIndex + 1}. Survey.{" "}
          </span>{" "}
          <span className="font-medium">{currentQuestion}</span>{" "}
        </span>{" "}
        <span className="">
          {questions.length > 1 &&
            questions[currentQuestionIndex + 1]?.question && (
              <>
                <span className="opacity-60"> Next Survey.</span>{" "}
                <span className="font-medium">
                  {questions[currentQuestionIndex + 1]?.question}
                </span>
              </>
            )}
        </span>
      </div>
      <div className="w-full border-b-2 line border-b-gray-100"></div>
      <div className="px-6 py-5 s-body">
        <div
          onClick={() => setShowSurvey(!showSurvey)}
          className="close w-[16px] md:w-[18px]"
        >
          <img
            className="w-full h-full cursor-pointer"
            src="../close.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-16 content gap-y-24">
          <div className="flex flex-col max-w-screen-md gap-8 question">
            <span className="text-lg font-bold leading-loose md:text-2xl md:mb-6">
              <span className="font-bold">
                {`Q${currentQuestionIndex + 1}`}:
              </span>{" "}
              {`${currentQuestion}`}
            </span>

            {/* return(<span className="text-sm font-medium leading-loose md:text-lg"><span className='font-bold'>{`Q${question.id}`}</span> {`${question.question}`}</span>) */}

            <div className="flex flex-col w-full gap-4 text-sm md:text-base">
              <label
                onClick={() => setDisabled(false)}
                htmlFor="yes"
                className="label"
              >
                <div
                  // onClick={handleYesChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  <input
                    name="option"
                    id="yes"
                    type="radio"
                    value="yes"
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option1"
                    checked={choice === "yes" ? true : false}
                  />{" "}
                  <span className="">Yes</span>
                </div>
              </label>
              <label
                onClick={() => setDisabled(false)}
                htmlFor="no"
                className="label"
              >
                <div
                  //  onClick={handleNoChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  {" "}
                  <input
                    name="option"
                    id="no"
                    type="radio"
                    value="no"
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option2"
                    checked={choice === "no" ? true : false}
                  />{" "}
                  <span className=""> No</span>
                </div>
              </label>
            </div>
            {/* <button className='w-1/6 py-3 text-sm text-white bg-teal-500 rounded md:text-base'>OK</button> */}
          </div>
          <div className="flex items-center justify-between w-full next-prev md:max-w-screen-md">
            {currentQuestionIndex === 0 ? (
              <button></button>
            ) : (
              <button
                onClick={handlePrevQuestion}
                className="border-2 border-teal-500 text-[#000]  py-3 px-4 text-sm md:text-base rounded"
              >
                <span></span> Previous
              </button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className={`bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded ${
                  disabled ? "opacity-40 cursor-not-allowed " : ""
                }`}
                disabled={disabled}
              >
                Next
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button
                onClick={finishHandler}
                className={`bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded ${
                  disabled ? "opacity-40 cursor-not-allowed " : ""
                }`}
                disabled={disabled}
              >
                <span></span> Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;
