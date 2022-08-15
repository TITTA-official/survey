import axios from "axios";
import React, { useEffect, useState } from "react";

function BoardOfUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [roleChanged, setRoleChanged] = useState(false);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    setRoleChanged(false);
    setDeleted(false);
    let token = localStorage.getItem("token");
    const getAllUsers = async () => {
      const res = await axios.get("/users", {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      setUsers(res.data.results);
    };
    getAllUsers();
  }, [roleChanged, deleted]);

  const changeUserRole = async (id, type) => {
    let token = localStorage.getItem("token");
    let newType = type === "admin" ? "user" : "admin";
    try {
      const res = await axios.patch(
        `/users/change_role/${id}`,
        {
          type: newType,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      if (res.status === 200) {
        setRoleChanged(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      //console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  const deleteUser = async (id) => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`/users/delete/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      if (res.status === 200) {
        setDeleted(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setError("Error deleting user");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div className="bg-white py-6 px-4 w-[80%] max-w-screen-lg  mx-auto rounded-lg mt-24">
      <h1 className="font-bold text-lg text-center md:text-2xl mb-14">
        Users Board
      </h1>
      {message && <p className="text-sm mb-5 capitalize">{message}</p>}
      {error && <p className="text-sm text-red-500 mb-5 capitalize">{error}</p>}
      <table className="w-full rounded table border-none table-auto">
        <thead className="text-left">
          <tr className="px-5 pb-3">
            <th className="px-5 pb-3">#</th>
            <th className="border-b pb-3 px-5">User Name</th>
            <th className="px-5 pb-3">Email</th>
            <th className="px-5 pb-3">Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((user, index) => (
            <tr className="border-b" key={user.id}>
              <td>{index + 1}</td>
              <td className="flex items-center border-none gap-x-4 justify-start  ">
                <div className=" w-[36px] prof-icon">
                  <img src="../user.png" className="w-full" alt="" />
                </div>
                {user.username}
              </td>
              <td>{user.email}</td>
              <td className="capitalize">{user.type}</td>
              <td className="flex justify-items-between gap-3">
                <button
                  type="button"
                  className="text-xs bg-blue-600 text-white rounded-md px-3 py-2"
                  onClick={() => changeUserRole(user.id, user.type)}
                >
                  Change role
                </button>
                <button
                  type="button"
                  className="text-xs bg-red-600 text-white rounded-md px-3 py-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* <tr className="border-b">
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default BoardOfUsers;
