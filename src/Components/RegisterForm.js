import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import '../assets/Style/RegistrationForm.css';


export default function RegisterForm() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()  
    

    const handleSubmit = (event) =>{
       event.preventDefault();

      axios.post("http://localhost:5000/users", {
        name:name,
        email:email,
        password:password
      }).then((response) => {
        // console.log(response);
        console.log(response.data);
        navigate("/")
        }); 
    }

    return (
        <div className="reg-heading"><h1>Registration Form</h1>
            <div className="registration-form">
            <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={e=>setName(e.target.value)}/>
            </Form.Group>
    
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}/>  
            </Form.Group>
    
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}/>  
            </Form.Group>
            <button type="submit" variant="primary" className="register-button btn btn-primary">Register</button>
            <p className="link">Already have an account <Link to="/login">Login</Link></p>

          </Form>
        </Container>
        </div> 
        </div>
      );
}