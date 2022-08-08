import React from 'react'
import './App.css';


import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import SuperAdminDashboardPage from './pages/SuperAdminDashboardPage';
import { SurveyShowProvider, ResultShowProvider, ViewLearningMaterialsProvider, ShowUploadLearningMaterialsProvider, ShowCreateQuestionsProvider, ShowAdminUsersListProvider, ShowAdminViewStatisticsProvider } from './context';


function App() {
 
  
  return (
    <div className="">
      
        <Switch>
          <Route exact path ="/">
            <LoginPage/>
          </Route>
          <Route  path ="/register">
            <SignupPage/>
          </Route>
          <Route exact path ="/dashboard">
            
            <SurveyShowProvider>
              <ResultShowProvider>
                <ViewLearningMaterialsProvider>
                  <DashboardPage/>

                </ViewLearningMaterialsProvider>
              </ResultShowProvider>
            </SurveyShowProvider>
          </Route>
          <Route path ="/dashboard-admin">
            <ShowCreateQuestionsProvider>
            <ShowUploadLearningMaterialsProvider>
            <ViewLearningMaterialsProvider>
            <ResultShowProvider>
              <ShowAdminUsersListProvider>
                <ShowAdminViewStatisticsProvider>
                  <AdminDashboardPage/>
                </ShowAdminViewStatisticsProvider>
              </ShowAdminUsersListProvider>
            </ResultShowProvider> 
              </ViewLearningMaterialsProvider>
            </ShowUploadLearningMaterialsProvider>

            </ShowCreateQuestionsProvider>
          </Route>
          <Route path="/dashboard-superadmin">
            <SuperAdminDashboardPage/>
          </Route>
          
        </Switch>
    </div>

   
  );
}

export default App;
