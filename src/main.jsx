import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Care from './pages/Care.jsx';
import Hire from './pages/Hire.jsx';
import About from './pages/About.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/register/care' element={<Care />}/>
          <Route path='/register/hire' element={<Hire />}/>
          <Route path='/about' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
