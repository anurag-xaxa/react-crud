import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


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

    
    
    // const fetchData =  () => {
    //  const url = "http://localhost:5000/getUser" + id;
    //  const options = {
    //     method : "get",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
        
    //  }
    //     const response =  fetch(url, options)
    //     console.log(response.data)
    //     //  const datta =  response.json()
    //     //  console.log(datta)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    


        // const response =  axios.get(`http://localhost:5000/users/${id}`)
        // .then(() => {
        //     console.log(response.data)
            
        //     setData({...data, name: response.data.name, email: response.data.email})
        // }).catch((error)=> {
        //     console.log(error)
        // })
   

        
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, {name, email})
        .then(() => {
            navigate("/")
        })
        
      }

    return(
        <div className="card">
            <div className="form">
                <div className="title">
                    <p>Update Form</p>
                </div>
                <div className="space"></div>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" value={name} 
                    onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" name="email"  value={email} 
                    onChange={e=>setEmail(e.target.value)}/>
                </div>
                
                <div className="space"></div>
                <div>
                <button onClick ={handleSubmit}>update</button>
                </div>
                <div className="space"></div>
            </div>
    
        </div>
    );
}

export default UpdateData;