// import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import BlogPost from './Components/BlogPost.js';
import DisplayData from './Components/DisplayData.js';
import UpdateData from './Components/updateData.js';



import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<DisplayData/>}></Route>
          <Route path="/posts" element={<BlogPost/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/update/:id" element={<UpdateData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;