// import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm.js';
import LoginForm from './Components/LoginForm';
import BlogPost from './Components/BlogPost.js';
import DisplayData from './Components/DisplayData.js';
import UpdateData from './Components/UpdateData.js';
import Home from './Components/Home.js';
import ProtectComponent from './Components/ProtectComponents.js';



import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {< ProtectComponent/> } >  
          <Route path="/" element={<DisplayData/>}></Route>
          <Route path="/posts" element={<BlogPost/>}></Route>
          <Route path="/update/:id" element={<UpdateData/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          </Route>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/register" element={<RegisterForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
