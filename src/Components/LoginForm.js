import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import '../assets/Style/LoginForm.css';
import Cookies from 'js-cookie';

import axios from "axios";



const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: ""
  })


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/login", data)
      .then((res) => {
        const { token } = res.data
        console.log(res.data);
       Cookies.set('jwtToken', token ,{
        expires: 30, 
        path: "/"
       });
       navigate("/home")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token !== undefined) {
      navigate("/home")
    }
  }, [navigate]);

  return (
    
    <div className="reg-heading">
      
     {/* <div className='register'>
        <Link className='reg-heading' to={'/register'} >
          New Registration 
        </Link>
      </div> */}
      <div className="login-form">
        <h3>Student Login</h3>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={data.name}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={handleChange} />
            </Form.Group>
            <button
              type="submit"
              variant="primary"
              className="register-button btn btn-primary">
              Login
            </button>
            {/* <p className="link">Don't have an account  <Link to="/register">SignUp</Link></p> */}
            
          </Form>
        </Container>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <h1>Login Form</h1>
  //     <form onSubmit = {handleSubmit}>
  //     <div className="card">
  //       <div className="form">
  //         <div className="space"></div>
  //         <div>
  //           <label>Name: </label>
  //           <input
  //             type="name"
  //             name="name"
  //             value={data.name}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <label>Password: </label>
  //           <input
  //             type="password"
  //             name="password"
  //             value={data.password}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <button>Login</button>
  //         </div>
  //       </div>
  //     </div>
  //     </form>
  //   </div>
  // );
};

export default LoginForm;
