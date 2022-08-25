import React, { useContext } from "react";
import { QuestionContext, ShowAdminUsersListContext } from "../context";

function ViewResults() {
  const [data] = useContext(ShowAdminUsersListContext);
  const [questions] = useContext(QuestionContext);

  return (
    <div className=" h-screen overflow-auto text-[#000] px-4">
      <div className="mt-32 md:max-w-screen-lg">
        <div className="font-medium heding">
          Results for <span className="font-bold">all users</span>
        </div>
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
                          {Math.round(
                            (user.score / (questions.length * 4)) * 100
                          )}
                          %
                        </td>
                      </tr>
                    )
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* <div className="fixed left-0 right-0 max-w-md px-6 py-5 mx-auto text-center text-white bg-teal-600 rounded info mt-14 bottom-24">
      <h2 className='mb-5 text-lg font-medium'>Summary</h2>
      <p className='mb-4 text-sm'>Based on the above details, we figured out that you are </p>
      <div className="mt-3 text-base font-bold result-info">Not Secure</div>
    </div> */}
      </div>
    </div>
  );
}

export default ViewResults;
