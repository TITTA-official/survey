import React, {useState, useContext, useEffect} from 'react'
import {SurveyShowContext} from '../context'
import {QuestionContext} from '../context'

function SurveyPage() {
  const [showSurvey, setShowSurvey] = useContext(SurveyShowContext)
  const [questions, setQuestions] = useContext(QuestionContext)
  // const [questions, setQuestions] = useContext(QuestionContext)
  // let currentQuestion = 0;
  const [currentQuestion, setCurrentQuestion] = useState()
  const [surveyEnd, setSurveyEnd] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  let filteredQuestion
  filteredQuestion = questions.filter( (question,index) => {
    return index === currentQuestionIndex
    
})
const loadQuestion =() => {
  setCurrentQuestion(filteredQuestion[currentQuestionIndex].question)
}
useEffect(() => {
  loadQuestion()
  
}, []);




const handleNextQuestion=() => {
  setCurrentQuestionIndex(currentQuestionIndex+1)
  // console.log(filteredQuestion)
}
const handlePrevQuestion=() => {
  setCurrentQuestionIndex(currentQuestionIndex-1)
  // console.log(filteredQuestion)
}
console.log(currentQuestionIndex)

const finishHandler=() => {
  if(currentQuestionIndex === questions.length -1) {
    setSurveyEnd(true)
  }
}

if(surveyEnd) {
  return (
      <div className="absolute w-screen h-screen flex justify-center items-center">
      <div onClick={() => setShowSurvey(!showSurvey)} className="close absolute top-5 left-7 w-[16px] md:w-[18px]"><img className='w-full h-full cursor-pointer' src="../close.png" alt="" /></div>
      <div className='py-6 px-8 md:py-20 md:px-28 bg-slate-50 shadow-md rounded-lg flex justify-center items-center gap-3 flex-col'>
          <h3 className='text-lg font-bold md:text-4xl'>Survey Complete!</h3>
          <p className='text-xs md:text-sm opacity-70 md:opacity-60 md:mt-2 -mt-2'>Click the button below to view results</p>
          <button className='bg-teal-500 text-white hover:shadow-xl  py-4 px-6  text-sm md:text-base rounded mt-4'>View Result</button>
      </div>

      </div>
  )
}

  return (
    <div className=' w-full '>
      {console.log(currentQuestion)}
        <div className="s-nav px-6 py-4 font-medium w-full bg-glass flex justify-between text-xs"><span ><span className='opacity-60'>1. Survey. </span> <span className='font-medium'>Web Security and Awareness</span> </span>  <span className=''><span className='opacity-60'> Next Survey.</span> <span className='font-medium'>question question blah blah blah..</span></span></div>
        <div className="line border-b-2 w-full border-b-gray-100"></div>
        <div className="s-body py-5 px-6">
          <div onClick={() => setShowSurvey(!showSurvey)} className="close w-[16px] md:w-[18px]"><img className='w-full h-full cursor-pointer' src="../close.png" alt="" /></div>
            <div className="content flex justify-center flex-col items-center mt-16 gap-y-24">
              <div className="question max-w-screen-md flex flex-col gap-8">
                <span className="font-medium text-sm md:text-lg leading-loose"><span className='font-bold'>{`Q${currentQuestionIndex+1}`}</span> {`${currentQuestion}`}</span>
                  
                {/* return(<span className="font-medium text-sm md:text-lg leading-loose"><span className='font-bold'>{`Q${question.id}`}</span> {`${question.question}`}</span>) */}
                  
                  <div className="text-sm md:text-base">
                    <input type="text" className='w-full border-b border-gray-300 py-3 px-2' placeholder='Type your answer here'/>
                  </div>
                    <button className='bg-teal-500 text-white w-1/6 py-3 text-sm md:text-base rounded'>OK</button>
              </div>
              <div className="next-prev flex w-full items-center justify-between md:max-w-screen-md">
                  {currentQuestionIndex === 0 ? <button></button> : <button onClick={handlePrevQuestion}  className='border-2 border-teal-500 text-[#000]  py-3 px-4 text-sm md:text-base rounded'><span></span> Previous</button>}
                  {
                    currentQuestionIndex < questions.length -1 && <button onClick={handleNextQuestion} className='bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded'><span></span> Next</button>
                  }
                  {
                    currentQuestionIndex === questions.length -1 &&
                  <button onClick={finishHandler} className='bg-teal-500 text-[#fff] py-3 px-4 text-sm md:text-base rounded'><span></span> Finish</button>
                  }
              </div>

            </div>
        </div>
    </div>
  )
}

export default SurveyPage