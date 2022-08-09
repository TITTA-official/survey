import React, { useContext } from "react";
import { ShowAdminUsersListContext } from "../context";

function AdminUsersList() {
  const [data] = useContext(ShowAdminUsersListContext);
  return (
    <div className="bg-white py-6 px-4 w-[80%] max-w-screen-lg  mx-auto rounded-lg ">
      <table className="table w-full border-none rounded table-auto">
        <thead className="text-left">
          <tr className="">
            <th>#</th>
            <th className="border-b">User Name</th>
            <th className="">Email</th>
            <th>Role</th>
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
                      {user.type !== "admin" ? "user" : user.type}
                    </td>
                  </tr>
                )
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsersList;
