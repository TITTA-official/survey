import React, { useContext, useEffect, useState } from "react";
import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import axios from "axios";
import {
  AuthContext,
  AuthContextProvider,
  ResultShowProvider,
  ShowAdminUsersListProvider,
  ShowAdminViewStatisticsProvider,
  ShowBoardOfUsersProvider,
  ShowCreateQuestionsProvider,
  ShowUploadLearningMaterialsProvider,
  SurveyShowProvider,
  ViewLearningMaterialsProvider,
} from "./context";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SuperAdminDashboardPage from "./pages/SuperAdminDashboardPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  let token = localStorage.getItem("token");
  const [user, setUser] = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      const authenticateUser = () => {
        axios
          .get("/authenticate", {
            headers: {
              authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            setUser(res?.data?.user);
          })
          .catch((err) => console.error(err));
      };
      authenticateUser();
    }
  }, [token, setUser]);


  return (
    <div className="">
      <Routes>
        <Route
          index
          path="/"
          element={
            <PublicRoute user={user}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute user={user}>
              <SignupPage />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user}>
              <SurveyShowProvider>
                <ResultShowProvider>
                  <ViewLearningMaterialsProvider>
                    <DashboardPage user={user} />
                  </ViewLearningMaterialsProvider>
                </ResultShowProvider>
              </SurveyShowProvider>
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard-admin"
          element={
            <PrivateRoute user={user}>
              <ShowCreateQuestionsProvider>
                <ShowUploadLearningMaterialsProvider>
                  <ViewLearningMaterialsProvider>
                    <ResultShowProvider>
                      <ShowAdminUsersListProvider>
                        <ShowAdminViewStatisticsProvider>
                          <AdminDashboardPage user={user} />
                        </ShowAdminViewStatisticsProvider>
                      </ShowAdminUsersListProvider>
                    </ResultShowProvider>
                  </ViewLearningMaterialsProvider>
                </ShowUploadLearningMaterialsProvider>
              </ShowCreateQuestionsProvider>
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard-superadmin"
          element={
            <PrivateRoute user={user}>
              <ShowBoardOfUsersProvider>
                <SuperAdminDashboardPage user={user} />
              </ShowBoardOfUsersProvider>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
