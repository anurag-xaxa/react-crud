import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Container } from 'react-bootstrap';
import "../Style/UpdateData.css";


const UpdateData = () => {   
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
         axios.get(`http://localhost:5000/getUser/${id}`)
            .then(result => {
                setName(result.data[0].name)
                setEmail(result.data[0].email)
            }).catch(err => console.log(err));
    }, [id]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, {name, email})
        .then(() => {
            navigate("/")
        })
        
      }

      return (
        <div>
          <div className="update-form">
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

            <button type="submit" variant="primary" className="update-button btn btn-primary">Update</button>
            {/* <Button variant="primary" type="submit">
             Update Data
            </Button> */}
          </Form>
        </Container>
        </div>
        </div>
      );
}

export default UpdateData;