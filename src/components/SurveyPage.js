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
  const [questions, linkages] = useContext(QuestionContext);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [surveyEnd, setSurveyEnd] = useState(false);
  const [choice, setChoice] = useContext(ChoiceContext);
  const [score, setScore] = useContext(ScoreContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [prevQuestionIndex, setPreviousQuestionIndex] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [user] = useContext(AuthContext);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (questions.length > 0) {
      const loadQuestion = () => {
        setCurrentQuestion(questions[currentQuestionIndex]?.question);
      };
      loadQuestion();
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    setResponses((prev) => [
      ...prev,
      {
        questionID: currentQuestion.questionID,
        question: currentQuestion,
        response: choice,
      },
    ]);
    setPreviousQuestionIndex(currentQuestionIndex);
    let question = questions[currentQuestionIndex];
    Object.entries(question).forEach((key) => {
      if (key[1]?.toString().toLowerCase() === choice.toLowerCase()) {
        setScore((prev) => {
          if (key[0]?.toLocaleLowerCase() === "option1") {
            return prev + 4;
          }
          if (key[0]?.toLocaleLowerCase() === "option2") {
            return prev + 3;
          }
          if (key[0]?.toLocaleLowerCase() === "option3") {
            return prev + 2;
          }
          if (key[0]?.toLocaleLowerCase() === "option4") {
            return prev + 1;
          }
        });
        let linkageExist = linkages.find(
          (linkage) => linkage?.questionID === question.questionID
        );
        if (linkageExist) {
          let idToGoto = linkageExist[key[0]];
          let index = questions.findIndex(
            (question) => question.questionID === idToGoto
          );
          if (index > -1) {
            setCurrentQuestionIndex(index);
          } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }
    });
    setChoice("");
    setDisabled(true);
  };
  const handlePrevQuestion = () => {
    console.log(prevQuestionIndex);
    if (prevQuestionIndex > 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
      setTimeout(() => {
        setPreviousQuestionIndex(0);
      }, 500);
      return false;
    }
    return setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const handleChoiceChange = (e) => {
    setChoice(e.target.value);
  };

  const handleScore = async (id, score) => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `/users/update_score/${id}`,
        {
          score,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );

      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      console.log(res.data);
    } catch (error) {
      //console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleResponse = async () => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `/users/response/post_response`,
        {
          data: [...new Set(responses)],
          userID: user.id,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );

      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      console.log(res.data);
    } catch (error) {
      //console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const finishHandler = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setSurveyEnd(true);
    }
    handleScore(user.id, score);
    handleResponse();
    setChoice("");
  };

  console.log(responses);

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
    <div className="w-full">
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
            <div className="flex flex-col w-full gap-4 text-sm md:text-base">
              <label
                onClick={() => setDisabled(false)}
                htmlFor={questions[currentQuestionIndex]?.option1}
                className="label"
              >
                <div
                  // onClick={handleYesChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  <input
                    name="option"
                    id={questions[currentQuestionIndex]?.option1}
                    type="radio"
                    value={questions[currentQuestionIndex]?.option1}
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option1"
                  />{" "}
                  <span className="">
                    {questions[currentQuestionIndex]?.option1}
                  </span>
                </div>
              </label>
              <label
                onClick={() => setDisabled(false)}
                htmlFor={questions[currentQuestionIndex]?.option2}
                className="label"
              >
                <div
                  //  onClick={handleNoChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  {" "}
                  <input
                    name="option"
                    id={questions[currentQuestionIndex]?.option2}
                    type="radio"
                    value={questions[currentQuestionIndex]?.option2}
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option2"
                  />{" "}
                  <span className="">
                    {questions[currentQuestionIndex]?.option2}
                  </span>
                </div>
              </label>
              <label
                onClick={() => setDisabled(false)}
                htmlFor={questions[currentQuestionIndex]?.option3}
                className="label"
              >
                <div
                  // onClick={handleYesChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  <input
                    name="option"
                    id={questions[currentQuestionIndex]?.option3}
                    type="radio"
                    value={questions[currentQuestionIndex]?.option3}
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option3"
                  />{" "}
                  <span className="">
                    {questions[currentQuestionIndex]?.option3}
                  </span>
                </div>
              </label>
              <label
                onClick={() => setDisabled(false)}
                htmlFor={questions[currentQuestionIndex]?.option4}
                className="label"
              >
                <div
                  //  onClick={handleNoChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  {" "}
                  <input
                    name="option"
                    id={questions[currentQuestionIndex]?.option4}
                    type="radio"
                    value={questions[currentQuestionIndex]?.option4}
                    onChange={(e) => {
                      handleChoiceChange(e);
                    }}
                    className="option4"
                  />{" "}
                  <span className="">
                    {questions[currentQuestionIndex]?.option4}
                  </span>
                </div>
              </label>
            </div>
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
