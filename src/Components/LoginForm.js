import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        password:"" 
    })
   

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/login", data)
      .then((res) => {
        console.log(res);
        navigate('/Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit = {handleSubmit}>
      <div className="card">
        <div className="form">
          <div className="space"></div>
          <div>
            <label>Name: </label>
            <input
              type="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
