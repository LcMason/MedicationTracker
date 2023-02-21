// import React from 'react';
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <BrowserRouter>
//   {/* <React.StrictMode> */}
//     <App />
//   {/* </React.StrictMode> */}
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// const container = document.getElementById("root");
// render(
//   <React.StrictMode> 
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>
//   </React.StrictMode> ,
//   container
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
const container = document.getElementById("root");
render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  container
);