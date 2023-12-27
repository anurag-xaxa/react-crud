import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';


const UpdateData = () => {   
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
         axios.get(`http://localhost:5000/getUser/${id}`)
            .then(result => {
                setName(result.data[0].name)
                setEmail(result.data[0].email)
                setPassword(result.data[0].password)
            }).catch(err => console.log(err));
    }, [id]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, {name, email, password})
        .then(() => {
            navigate("/")
        })
        
      }

      return (
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
    
            <Button variant="primary" type="submit">
             UPDATE DATA
            </Button>
          </Form>
        </Container>
        </div>
      );
}

export default UpdateData;