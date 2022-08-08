import React from "react";

function AdminUsersList() {
  return (
    <div className="bg-white py-6 px-4 w-[80%] max-w-screen-lg  mx-auto rounded-lg ">
      <table className="w-full rounded table border-none table-auto">
        <thead className="text-left">
          <tr className="">
            <th>#</th>
            <th className="border-b">User Name</th>
            <th className="">Email</th>
            <th>Role</th>
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
              {/* <select name="roles" id="roles">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select> */}
              User
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
            User
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
            User
            </td>
          </tr>
          <tr className="border-b">
            <td>4</td>
            <td className="flex items-center border-none gap-x-4 justify-start ">
              <div className=" w-[36px] prof-icon">
                <img src="../user.png" className="w-full" alt="" />
              </div>
              tj
            </td>
            <td>tj@gmail.com</td>
            <td>
            User
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsersList;
