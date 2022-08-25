import React from "react";
import { QuestionContext, ScoreContext } from "../context";

function AdminViewStatistics() {
  const [questions] = React.useContext(QuestionContext);
  const [score, setScore] = React.useContext(ScoreContext);

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="headingg font-bold text-lg mt-24 md:text-2xl px-6 mb-8 md:mb-12 text-center">
          Survey Statistics
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((question, i) => {
            let data = [
              {
                option: question?.option1,
                response: question?.response_option1,
              },
              {
                option: question?.option2,
                response: question?.response_option2,
              },
              {
                option: question?.option3,
                response: question?.response_option3,
              },
              {
                option: question?.option4,
                response: question?.response_option4,
              },
            ];
            let totalResponse =
              question?.response_option1 +
              question?.response_option2 +
              question?.response_option3 +
              question?.response_option4;
            return (
              <div
                key={i}
                className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5"
              >
                <div className="question-number text-sm -mb-3 font-bold sp">
                  #{i + 1}
                </div>
                <div className="card-content flex items-center gap-6 ">
                  <div className="question text-sm max-w-sm">
                    {`${question.question}`}
                    {/* {console.log(question.question)} */}
                  </div>
                  <div className="stats font-extrabold">
                    {i + 1}/{questions.length}
                  </div>
                </div>
                {data.map((d, id) => {
                  return (
                    <div key={d?.option + id} className="w-full">
                      <span className="flex justify-between items-center w-full">
                        <p className="text-sm capitalize">{d?.option}</p>
                        <p className="text-sm capitalize">
                          {d?.response}/{totalResponse}
                        </p>
                      </span>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full">
                        <div
                          style={{
                            width: `${(d?.response / totalResponse) * 100}%`,
                          }}
                          className="bg-teal-600 h-2.5 rounded-full"
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminViewStatistics;
