import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SurveyPage from "../components/SurveyPage";

import {
  AuthContext,
  ResultShowContext,
  SurveyShowContext,
  ViewLearningMaterialsContext,
} from "../context";

import ViewLearningMaterials from "../components/ViewLearningMaterials";
import ViewResult from "../components/ViewResult";
import {
  QuestionProvider,
  ResultShowProvider,
  ViewLearningMaterialsProvider,
} from "../context";

function DashboardPage({ user }) {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [, setUser] = useContext(AuthContext);

  const [showSurvey, setShowSurvey] = useContext(SurveyShowContext);

  const [showResult, setShowResult] = useContext(ResultShowContext);
  const [showViewLearningMaterials, setShowViewLearningMaterials] = useContext(
    ViewLearningMaterialsContext
  );

  //     useEffect(() => {
  //       refreshToken();
  //       getUsers();
  //   }, []);

  //   const refreshToken = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:8080/token');
  //         setToken(response.data.accessToken);
  //         const decoded = jwt_decode(response.data.accessToken);
  //         setName(decoded.name);
  //         setExpire(decoded.exp);
  //     } catch (error) {
  //         if (error.response) {
  //             navigate("/");
  //         }
  //         console.log(error)
  //     }
  // }

  // const axiosJWT = axios.create();

  //     axiosJWT.interceptors.request.use(async (config) => {
  //         const currentDate = new Date();
  //         if (expire * 1000 < currentDate.getTime()) {
  //             const response = await axios.get('http://localhost:8080/token');
  //             config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //             setToken(response.data.accessToken);
  //             const decoded = jwt_decode(response.data.accessToken);
  //             setName(decoded.name);
  //             setExpire(decoded.exp);
  //         }
  //         return config;
  //     }, (error) => {
  //         return Promise.reject(error);
  //     });

  //     const getUsers = async () => {
  //         const response = await axiosJWT.get('http://localhost:8080/users', {
  //             headers: {
  //                 Authorization: `Bearer ${token}`
  //             }
  //         });
  //         setUsers(response.data);
  //     }

  //     console.log(users)
  const Logout = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/");
  };
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
          To get started, you can take a survey
        </div>
        <div>
          <button
            onClick={() => setShowSurvey(!showSurvey)}
            className="px-5 py-3 mt-3 text-sm text-white bg-teal-600 rounded"
          >
            TAKE A SURVEY
          </button>
        </div>
      </div>
      <hr className="mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow" />
      <div className="grid grid-cols-1 gap-5 px-4 text-sm text-white actions md:grid-cols-3 md:px-6 md:gap-6 place-items-center md:mt-16 mt-14">
        <div
          onClick={() => setShowSurvey(!showSurvey)}
          className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14"
        >
          Take Survey
        </div>
        <div
          onClick={() => setShowResult(!showResult)}
          className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14"
        >
          View Result
        </div>
        <div
          onClick={() =>
            setShowViewLearningMaterials(!showViewLearningMaterials)
          }
          className="flex items-center justify-center w-3/6 px-6 text-center bg-teal-600 rounded-full cursor-pointer action py-14"
        >
          View Learning Material
        </div>
      </div>

      <QuestionProvider>
        <div
          className={` ${
            showSurvey
              ? "fixed top-0 w-screen h-screen overflow-auto bg-white "
              : "hidden opacity-0"
          }`}
        >
          <SurveyPage />
        </div>
      </QuestionProvider>

      {/* <QuestionProvider> */}
      <ResultShowProvider value={[showResult, setShowResult]}>
        {showResult && (
          <div
            className={`fixed  top-0 w-screen h-screen bg-white flex justify-center items-start`}
          >
            <div
              onClick={() => {
                setShowResult(!showResult);
              }}
              className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "
            >
              <img className="w-full h-full" src="../close.png" alt="" />
            </div>
            <ViewResult />
          </div>
        )}
      </ResultShowProvider>
      {/* </QuestionProvider> */}

      {showViewLearningMaterials && (
        <div
          className={`fixed  top-0 w-screen h-screen bg-white overflow-y-scroll`}
        >
          <div
            onClick={() => {
              setShowViewLearningMaterials(!showViewLearningMaterials);
            }}
            className="close absolute top-5  left-7 w-[16px] md:w-[18px] cursor-pointer "
          >
            <img className="w-full h-full" src="../close.png" alt="" />
          </div>
          <ViewLearningMaterials />
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
