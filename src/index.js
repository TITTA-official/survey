import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "bulma/css/bulma.css";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

//axios.defaults.withCredentials = true;
axios.defaults.headers = { "Access-Control-Allow-Credentials": "*" };
axios.defaults.baseURL = "http://localhost:8080/api/v1/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
