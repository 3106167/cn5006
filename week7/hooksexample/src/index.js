import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmojeeCounter from './emoji_counter';
import Hook_ControlledButtonState from './counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <EmojeeCounter pic='sad'/>  
  <EmojeeCounter pic='Like'/>   
  <EmojeeCounter pic='Love'/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
