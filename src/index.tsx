import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rute from './route/Route';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = "http://13.212.68.27:80";
axios.defaults.headers.common["Authorization"] =
  `Bearer ${localStorage.getItem("loginToken")}`;

ReactDOM.render(
  <React.StrictMode>
    <Rute />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
