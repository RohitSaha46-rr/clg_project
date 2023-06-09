import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Multipleinputs from './Multipleinputs';
import Signup from './SignUp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path='/login' element={<Multipleinputs/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);