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
          <Route path ="/dashboard">
            <DashboardPage/>
          </Route>
          
        </Switch>
    </div>

   
  );
}

export default App;
