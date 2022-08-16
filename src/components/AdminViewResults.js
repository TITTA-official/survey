import React, {useContext, useState} from 'react'
import {ResultShowContext, ResultShowProvider} from '../context'
import { ShowAdminUsersListContext,  QuestionContext, ScoreContext} from "../context";

function ViewResults() {
  
  const [showResult, setShowResult] = useContext(ResultShowContext)
  const [data] = useContext(ShowAdminUsersListContext);
  const [questions] = useContext(QuestionContext);
  // const [score, setScore] = useContext(ScoreContext);
    // const [newshowResult, setShowResult] = useState(showResult)

  return (
    <div className={`text-[#000]   px-4`}>
      
    <div className="mt-32 md:max-w-screen-lg">
    <div className="heding font-medium">Results for <span className='font-bold'>all users</span></div>
    {/* <hr className='mt-5 border border-gray-300'/> */}
    <div className="table mt-6 ">
    <table className="table w-full border-none rounded table-auto">
        <thead className="text-left">
          <tr className="">
            <th>#</th>
            <th className="border-b">User Name</th>
            <th className="">Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className="">
          {data &&
            data.map((user, index) => {
              return (
                user.type !== "admin" && (
                  <tr className="border-b" key={user.id}>
                    <td>{index + 1}</td>
                    <td className="flex items-center justify-start border-none gap-x-4 ">
                      <div className=" w-[36px] prof-icon">
                        <img src="../user.png" className="w-full" alt="" />
                      </div>
                      {user.username}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      {/* <select name="roles" id="roles">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select> */}
                      {(user.score/questions.length) * 100}%
                    </td>
                  </tr>
                )
              );
            })}
        </tbody>
      </table>

    </div>
    {/* <div className="info bg-teal-600 text-white max-w-md py-5 px-6 mx-auto mt-14 rounded text-center fixed left-0 right-0 bottom-24">
      <h2 className='font-medium mb-5 text-lg'>Summary</h2>
      <p className='text-sm mb-4'>Based on the above details, we figured out that you are </p>
      <div className="result-info font-bold text-base mt-3">Not Secure</div>
    </div> */}
  </div>

    </div>
  )
}

export default ViewResults