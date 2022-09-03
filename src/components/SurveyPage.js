import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  ChoiceContext,
  QuestionContext,
  ScoreContext,
  SurveyShowContext,
} from "../context";
import Question from "./Question";

function SurveyPage() {
  const [showSurvey, setShowSurvey] = useContext(SurveyShowContext);
  const [questions, linkages] = useContext(QuestionContext);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [choice, setChoice] = useContext(ChoiceContext);
  const [score, setScore, surveyEnd, setSurveyEnd] = useContext(ScoreContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [prevQuestionIndex, setPreviousQuestionIndex] = useState("");
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
    setPreviousQuestionIndex(currentQuestionIndex);
    let question = questions[currentQuestionIndex];
    let choiceAlt = "";
    if (!choice) {
      let res = responses.filter(
        (res) => res.questionID === question.questionID
      )[0];
      choiceAlt = res?.response;
    }
    // console.log(choiceAlt);

    Object.keys(question).forEach((key) => {
      if (
        question[key].toString().toLowerCase() === choice.toLowerCase() ||
        question[key].toString().toLowerCase() === choiceAlt.toLowerCase()
      ) {
        setResponses((prev) => {
          let state = prev.filter(
            (res) => res.questionID !== question.questionID
          );
          return [
            ...state,
            {
              questionID: questions[currentQuestionIndex].questionID,
              question: currentQuestion,
              response: choice !== "" ? choice : choiceAlt,
            },
          ];
        });
        UpdateObj(key.toLocaleLowerCase());
        setScore((prev) => {
          if (key.toLocaleLowerCase() === "option1") {
            return prev + 4;
          }
          if (key.toLocaleLowerCase() === "option2") {
            return prev + 3;
          }
          if (key.toLocaleLowerCase() === "option3") {
            return prev + 2;
          }
          if (key.toLocaleLowerCase() === "option4") {
            return prev + 1;
          }
        });
        let linkageExist = linkages.find(
          (linkage) => linkage?.questionID === question.questionID
        );
        if (linkageExist) {
          let idToGoto = linkageExist[key];
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
  };
  const UpdateObj = (option) => {
    updateQuestionOptionResponse({
      ["response_" + option]: ++questions[currentQuestionIndex][
        "response_" + option
      ],
    });
  };
  const handlePrevQuestion = () => {
    // console.log(prevQuestionIndex);
    if (prevQuestionIndex || prevQuestionIndex === 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
      setTimeout(() => {
        setPreviousQuestionIndex("");
      }, 500);
      return false;
    }
    return setCurrentQuestionIndex(currentQuestionIndex - 1);
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
      // console.log(res.data);
    } catch (error) {
      //console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const updateQuestionOptionResponse = async (data) => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `/user/response/update_responseOption/${questions[currentQuestionIndex].questionID}`,
        {
          ...data,
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
      // console.log(res.data);
    } catch (error) {
      // console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const finishHandler = (e) => {
    e.preventDefault();
    if (currentQuestionIndex === questions.length - 1) {
      setSurveyEnd(true);
    }
    handleScore(user.id, score);
    setChoice("");
  };

  // console.log(responses);

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
      {/* <div className="flex justify-between w-full px-6 py-4 text-xs font-medium s-nav bg-glass">
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
      </div> */}
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
        <div className="hidden">
          {error && <p className="text-sm text-red-500">{error}</p>}
          {message && <p className="text-sm text-green-500">{message}</p>}
        </div>
        <div className="m-auto w-fit h-fit">
          {questions.map((question, index) => {
            let options = [
              question?.option1,
              question?.option2,
              question?.option3,
              question?.option4,
            ];
            return (
              <Question
                index={index}
                key={question.questionID}
                question={question}
                options={options}
                className={`flex-col items-center justify-center mt-16 content gap-y-16 question transition-all duration-200 ${
                  index === currentQuestionIndex
                    ? "flex opacity-1"
                    : "hidden opacity-0"
                }`}
                setChoice={setChoice}
                Finish={finishHandler}
                Next={handleNextQuestion}
                Prev={handlePrevQuestion}
                allAnswered={index === questions.length - 1 ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;
