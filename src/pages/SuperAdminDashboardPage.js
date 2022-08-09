import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardOfUsers from "../components/BoardOfUsers";
import DashboardActions from "../components/DashboardActions";
import DashboardBanner from "../components/DashboardBanner";
import DashboardNavbar from "../components/DashboardNavbar";

import { AuthContext, ShowBoardOfUsersContext } from "../context";

function SuperAdminDashboardPage({ user }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [, setUser] = useContext(AuthContext);
  const Logout = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/");
  };

  const [showBoardOfUsers, setShowBoardOfUsers] = useContext(
    ShowBoardOfUsersContext
  );
  return (
    <div className="relative">
      <div className="sticky top-0 flex items-center justify-between px-4 py-3 navbar bg-glass md:px-6 md:py-4">
        <div className="flex items-center gap-2">
          <div className="logo w-[64px] md:w-[72px]">
            <img className="w-full" src="../logo.png" alt="" />{" "}
          </div>{" "}
          <span className="text-xl font-bold sp md:text-3xl">Survey</span>
        </div>
        <div className="flex items-center gap-3 info md:gap-4">
          <div className="p-icon w-[24px] md:w-[32px] lg:w-[32px]">
            <img className="w-full cursor-pointer" src="../user.png" alt="" />
          </div>{" "}
          <div className={`text-sm`}>
            {" "}
            <span className={`text-sm`}>Hi</span>,{" "}
            <span className="font-medium name">{user.username}</span>{" "}
          </div>{" "}
          <div
            className="w-[20px] md:w-[24px] cursor-pointer "
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img className="w-full" src="../down-chevron.png" alt="" />
          </div>
          <div
            className={`${
              toggleMenu ? "" : "hidden"
            } bg-glass rounded py-8 px-7 absolute top-[100px] right-4 bd`}
          >
            <button
              onClick={Logout}
              className={`text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white `}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 mx-auto mt-16 banner md:gap-4">
        <div className="text-2xl heading-info md:text-3xl">
          Welcome <span className="font-bold name">{user.username}</span>
        </div>
        <div className="text-sm font-light sub-inf md:text-base">
          View all participants
        </div>
        <div>
          <button className="px-5 py-3 mt-3 text-sm text-white bg-teal-600 rounded">
            View Participants
          </button>
        </div>
      </div>
      <hr className="mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow" />
      <div className="grid grid-cols-1 gap-5 px-4 text-sm text-white actions md:grid-cols-3 md:px-6 md:gap-6 place-items-center md:mt-16 mt-14">
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          Take survey
        </div>
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          View result
        </div>
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          View Learning Material
        </div>
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          View Statistics
        </div>
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          Generate Report
        </div>
        <div className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14">
          Upload Learning Materials
        </div>
        <div
          onClick={() => setShowBoardOfUsers(!showBoardOfUsers)}
          className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14"
        >
          Board of Users
        </div>
      </div>

      {showBoardOfUsers && (
        <div
          className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll flex justify-center `}
        >
          <div
            onClick={() => {
              setShowBoardOfUsers(!showBoardOfUsers);
            }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "
          >
            <img className="w-full h-full" src="../close.png" alt="" />
          </div>
          <BoardOfUsers />
        </div>
      )}
    </div>
  );
}

export default SuperAdminDashboardPage;
