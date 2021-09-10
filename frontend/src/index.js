import React from 'react';
import ReactDOM from 'react-dom';
// botswatch slate:
import './bootstrap.min.css'
import './style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './Root'

ReactDOM.render(
  <Root >
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Root>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
