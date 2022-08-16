import React from 'react'
import {QuestionContext, ScoreContext} from '../context'

function AdminViewStatistics() {
    const [questions] = React.useContext(QuestionContext);
    const [score, setScore] = React.useContext(ScoreContext)
    
  return (
    <div className="flex justify-center">
        <div className="">
            <div className="headingg font-bold text-lg mt-24 md:text-2xl px-6 mb-8 md:mb-12 text-center">Survey Statistics</div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {console.log(questions)} */}
                {
                    questions.map((question,i) => 
                        
                            <div key={i} className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                                <div className="question-number text-sm -mb-3 font-bold sp">#{i+1}</div>
                                <div className="card-content flex items-center gap-6 ">
                                    <div className="question text-sm max-w-sm">
                                        {`${question.question}`}
                                        {/* {console.log(question.question)} */}
                                    </div>
                                    <div className="stats font-extrabold">
                                        {score}/{questions.length}
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                                    <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                                </div>
                            </div>
                        
                    )
                }
                

                {/* <div className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                <div className="question-number text-sm -mb-3 font-bold sp">#2</div>
                <div className="card-content flex items-center gap-6 ">
                    <div className="question text-sm max-w-sm">
                        Lorem ipsum dolor sit amet...
                    </div>
                    <div className="stats font-extrabold">
                        23/60
                    </div>

                </div>
                
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                </div>

                </div>
                <div className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                <div className="question-number text-sm -mb-3 font-bold sp">#3</div>
                <div className="card-content flex items-center gap-6 ">
                    <div className="question text-sm max-w-sm">
                        Lorem ipsum dolor sit amet...
                    </div>
                    <div className="stats font-extrabold">
                        23/60
                    </div>

                </div>
                
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                </div>

                </div>
                <div className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                <div className="question-number text-sm -mb-3 font-bold sp">#4</div>
                <div className="card-content flex items-center gap-6 ">
                    <div className="question text-sm max-w-sm">
                        Lorem ipsum dolor sit amet...
                    </div>
                    <div className="stats font-extrabold">
                        23/60
                    </div>

                </div>
                
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                </div>

                </div>
                <div className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                <div className="question-number text-sm -mb-3 font-bold sp">#5</div>
                <div className="card-content flex items-center gap-6 ">
                    <div className="question text-sm max-w-sm">
                        Lorem ipsum dolor sit amet...
                    </div>
                    <div className="stats font-extrabold">
                        23/60
                    </div>

                </div>
                
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                </div>

                </div>
                <div className="card flex flex-col  gap-y-5 items-start relative bg-glass py-6 px-5">
                <div className="question-number text-sm -mb-3 font-bold sp">#6</div>
                <div className="card-content flex items-center gap-6 ">
                    <div className="question text-sm max-w-sm">
                        Lorem ipsum dolor sit amet...
                    </div>
                    <div className="stats font-extrabold">
                        23/60
                    </div>

                </div>
                
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className="bg-teal-600 h-2.5 w-[45%] rounded-full"></div>
                </div>

                </div> */}
            </div>

        </div>
    </div>
  )
}

export default AdminViewStatistics