import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const SurveyShowContext = createContext();
export const ShowUploadLearningMaterialsContext = createContext();
export const ResultShowContext = createContext();
export const QuestionContext = createContext();
export const ViewLearningMaterialsContext = createContext();
export const ShowCreateQuestionsContext = createContext();
export const ShowAdminUsersListContext = createContext();
export const ShowAdminViewStatisticsContext = createContext();
export const ShowBoardOfUsersContext = createContext();

//authencation and users details
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const SurveyShowProvider = (props) => {
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <SurveyShowContext.Provider value={[showSurvey, setShowSurvey]}>
      {props.children}
    </SurveyShowContext.Provider>
  );
};
export const ShowBoardOfUsersProvider = (props) => {
  const [showBoardOfUsers, setShowBoardOfUsers] = useState(false);

  return (
    <ShowBoardOfUsersContext.Provider
      value={[showBoardOfUsers, setShowBoardOfUsers]}
    >
      {props.children}
    </ShowBoardOfUsersContext.Provider>
  );
};
export const ShowCreateQuestionsProvider = (props) => {
  const [showCreateQuestions, setShowCreateQuestions] = useState(false);

  return (
    <ShowCreateQuestionsContext.Provider
      value={[showCreateQuestions, setShowCreateQuestions]}
    >
      {props.children}
    </ShowCreateQuestionsContext.Provider>
  );
};

export const ViewLearningMaterialsProvider = (props) => {
  const [showViewLearningMaterials, setShowViewLearningMaterials] =
    useState(false);

  return (
    <ViewLearningMaterialsContext.Provider
      value={[showViewLearningMaterials, setShowViewLearningMaterials]}
    >
      {props.children}
    </ViewLearningMaterialsContext.Provider>
  );
};
export const ShowAdminViewStatisticsProvider = (props) => {
  const [showAdminViewStatistics, setShowAdminViewStatistics] = useState(false);

  return (
    <ShowAdminViewStatisticsContext.Provider
      value={[showAdminViewStatistics, setShowAdminViewStatistics]}
    >
      {props.children}
    </ShowAdminViewStatisticsContext.Provider>
  );
};

export const ResultShowProvider = (props) => {
  const [showResult, setShowResult] = useState(false);

  return (
    <ResultShowContext.Provider value={[showResult, setShowResult]}>
      {props.children}
    </ResultShowContext.Provider>
  );
};

export const ShowUploadLearningMaterialsProvider = (props) => {
  const [showUploadLearningMaterials, setShowUploadLearningMaterials] =
    useState(false);

  return (
    <ShowUploadLearningMaterialsContext.Provider
      value={[showUploadLearningMaterials, setShowUploadLearningMaterials]}
    >
      {props.children}
    </ShowUploadLearningMaterialsContext.Provider>
  );
};

export const ShowAdminUsersListProvider = (props) => {
  const [AdminUsersList, setShowAdminUsersList] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const getAllUsers = async () => {
        let res = await axios.get("/users", {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        setShowAdminUsersList(res?.data?.results);
      };
      getAllUsers();
    }
  }, [token]);

  return (
    <ShowAdminUsersListContext.Provider value={[AdminUsersList]}>
      {props.children}
    </ShowAdminUsersListContext.Provider>
  );
};

export const QuestionProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const getSurvey = async () => {
        let res = await axios.get("/admin/survey", {
          headers: {
            authorization: "Bearer " + token,
          },
        });

        setQuestions(res.data.results);
      };
      getSurvey();
    }
  }, [token]);

  return (
    <QuestionContext.Provider value={[questions]}>
      {props.children}
    </QuestionContext.Provider>
  );
};
