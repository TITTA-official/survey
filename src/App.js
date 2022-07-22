import React from 'react'
import './App.css';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    
    <div className="">
    
        <Routes>
          <Route path ="/" element={<LoginPage/>}/>
          <Route path ="/signup" element={<SignupPage/>}/>
          <Route path ="/dashboard" element={<DashboardPage/>}/>

        </Routes>
    </div>

   
  );
}

export default App;
