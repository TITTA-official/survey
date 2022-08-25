import axios from "axios";
import React, { useEffect, useState } from "react";

function Question({
  className,
  question,
  index,
  options,
  allAnswered = false,
  setChoice,
  Prev,
  Next,
  Finish,
}) {
  const [disabled, setDisabled] = useState(true);
  const [prevChoiceOption, setPrevChoiceOption] = useState("");
  const [changed, setChanged] = useState(false);
  const optionNames = ["option1", "option2", "option3", "option4"];
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    if (prevChoiceOption) {
      setChanged(true);
    } else {
      getOption(e.target.value);
    }
    setDisabled(false);
    setChoice(e.target.value);
  };

  const getOption = (value) => {
    Object.entries(options).forEach((key) => {
      if (key[1]?.toString().toLowerCase() === value.toLowerCase()) {
        setPrevChoiceOption(optionNames[Number(key[0])]);
      }
    });
  };

  useEffect(() => {
    if (changed && prevChoiceOption) {
      setChanged(false);
      setPrevChoiceOption("");
      const updatePrevChoiceResponse = async () => {
        let token = localStorage.getItem("token");
        try {
          const res = await axios.patch(
            `/user/response/update_responseOption/${question.questionID}`,
            {
              ["response_" + prevChoiceOption]: --question[
                "response_" + prevChoiceOption
              ],
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
          // console.log(error);
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      };
      updatePrevChoiceResponse();
    }
  }, [changed, prevChoiceOption, question]);

  return (
    <form className={className} onSubmit={Finish}>
      <div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {message && <p className="text-sm text-green-500">{message}</p>}
      </div>
      <div className="flex flex-col max-w-screen-md gap-8">
        <span className="text-lg font-bold leading-loose md:text-2xl md:mb-6">
          <span className="font-bold">{`Q${index + 1}`}:</span>{" "}
          {`${question.question}`}
        </span>
        <div className="flex flex-col w-full gap-4 text-sm md:text-base">
          {options.map((opt, id) => {
            return (
              <label key={id} htmlFor={opt + index} className="label">
                <div
                  // onClick={handleYesChoiceClick}
                  className="flex items-center w-full gap-4 px-3 py-4 font-semibold border border-gray-400 rounded cursor-pointer radio-grp"
                >
                  <input
                    name="option"
                    id={opt + index}
                    type="radio"
                    value={opt}
                    onChange={handleChange}
                  />
                  <span className="">{opt}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <div
        className={`flex items-center ${
          index > 0 ? "justify-between" : "justify-end"
        } w-full md:max-w-screen-md`}
      >
        {index > 0 && (
          <button
            type="button"
            onClick={Prev}
            className="border-2 border-teal-500 text-[#000]  py-3 px-4 text-sm md:text-base rounded"
          >
            <span></span> Previous
          </button>
        )}
        <button
          type="button"
          onClick={Next}
          className={`bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded ${
            disabled ? "opacity-40 cursor-not-allowed " : ""
          }`}
          disabled={disabled}
        >
          Next
        </button>
        {allAnswered && (
          <button
            type="submit"
            className={`bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded ${
              disabled ? "opacity-40 cursor-not-allowed " : ""
            }`}
            disabled={disabled}
          >
            Finish
          </button>
        )}
      </div>
    </form>
  );
}

export default Question;
