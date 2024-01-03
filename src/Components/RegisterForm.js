import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Form, Container } from 'react-bootstrap';
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
        // <div className="reg-heading"><h1>Registration Form</h1>
        //     <div className="d-flex flex-direction justify-content-center w-50" >
        //       <h3>Student Registration</h3>
        //     <Container>
        //   <Form onSubmit={handleSubmit}  >
        //     <Form.Group controlId="Name">
        //       <Form.Label>Name</Form.Label>
        //       <Form.Control
        //         type="text"
        //         placeholder="Enter your name"
        //         name="name"
        //         value={name}
        //         onChange={e=>setName(e.target.value)}/>
        //     </Form.Group>
    
        //     <Form.Group controlId="Email">
        //       <Form.Label>Email</Form.Label>
        //       <Form.Control
        //         type="email"
        //         placeholder="Enter your email"
        //         name="email"
        //         value={email}
        //         onChange={e=>setEmail(e.target.value)}/>  
        //     </Form.Group>
    
        //     <Form.Group controlId="Password">
        //       <Form.Label>Password</Form.Label>
        //       <Form.Control
        //         type="password"
        //         placeholder="Enter your password"
        //         name="password"
        //         value={password}
        //         onChange={e=>setPassword(e.target.value)}/>  
        //     </Form.Group>
        //     <button type="submit" variant="primary" className="register-button btn btn-primary">Register</button>
        //     {/* <p className="link">Already have an account <Link to="/login">Login</Link></p> */}

        //   </Form>
        // </Container>
        // </div> 
        // // </div>
        <div>
          <div className="reg-heading" >
            <div>
                <h3>Student Registration</h3>
            </div>
 
            {/* Calling to the methods */}
            {/* <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div> */}
              <br/> 
            <form onSubmit={handleSubmit}>
                {/* Labels and inputs for form data */}
                {/* <label className="label">Name</label> */}
                <input className="input"
                    onChange={e=>setName(e.target.value)}
                    placeholder="Enter name"
                    value={name}
                    type="text"
                />
                <br/><br/>
                {/* <label className="label">Email</label> */}
                <input className="input"
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Enter email"
                    value={email}
                    type="email"
                />
                <br/><br/>
                {/* <label className="label">Password</label> */}
                <input className="input"
                   onChange={e=>setPassword(e.target.value)}
                   placeholder="Enter password"
                    value={password}
                    type="password"
                />
                <br/><br/>
                <button id="button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    

        </div>
      );
}