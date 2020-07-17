import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import Colabore from './Pages/Colabore/Colabore'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Colabore/>
    </ BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


