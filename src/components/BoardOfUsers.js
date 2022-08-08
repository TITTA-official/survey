import React from 'react'

function BoardOfUsers() {
  return (
    <div className="bg-white py-6 px-4 w-[80%] max-w-screen-lg  mx-auto rounded-lg mt-24 ">
      <h1 className='font-bold text-lg text-center md:text-2xl mb-14'>Users Board</h1>
      <table className="w-full rounded table border-none table-auto">
        <thead className="text-left">
          <tr className="px-5 pb-3">
            <th className="px-5 pb-3">#</th>
            <th className="border-b pb-3 px-5">User Name</th>
            <th className="px-5 pb-3">Email</th>
            <th className="px-5 pb-3">Role</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b">
            <td>1</td>
            <td className="flex items-center border-none gap-x-4 justify-start  ">
              <div className=" w-[36px] prof-icon">
                <img src="../user.png" className="w-full" alt="" />
              </div>
              tj
            </td>
            <td>tj@gmail.com</td>
            <td>
              <select name="roles" id="roles">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {/* User */}
            </td>
          </tr>
          <tr className="border-b">
            <td>2</td>
            <td className="flex items-center border-none gap-x-4 justify-start  ">
              <div className=" w-[36px] prof-icon">
                <img src="../user.png" className="w-full" alt="" />
              </div>
              tj
            </td>
            <td>tj@gmail.com</td>
            <td>
            <select name="roles" id="roles">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
          <tr className="border-b">
            <td>3</td>
            <td className="flex items-center border-none gap-x-4 justify-start ">
              <div className=" w-[36px] prof-icon">
                <img src="../user.png" className="w-full" alt="" />
              </div>
              tj
            </td>
            <td>tj@gmail.com</td>
            <td>
            <select name="roles" id="roles">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
          <tr className="border-b-[1.4px]">
            <td>4</td>
            <td className="flex items-center border-none gap-x-4 justify-start ">
              <div className=" w-[36px] prof-icon">
                <img src="../user.png" className="w-full" alt="" />
              </div>
              tj
            </td>
            <td>tj@gmail.com</td>
            <td>
            <select name="roles" id="roles">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BoardOfUsers