import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Register() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()  

    const handleChangeName = (e) => {
        setName(e.target.value)
        console.log(name)
         
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handleSubmit = () =>{
      axios.post("http://localhost:5000/users", {
        name:name,
        email:email
      }).then((response) => {
        // console.log(response);
        console.log(response.data);
        navigate("/")
        }); 
    }

return(
    
    <div className="card"> 
        <div className="form">
            <div className="title">
                <p>Register Form</p>
            </div>
            <div className="space"></div>
            <div>
                <label>Name : </label>
                <input type="text" name="name" value={name} onChange={handleChangeName}/>
            </div>
            <div>
                <label>Email : </label>
                <input type="text" name="email" value={email} onChange={handleChangeEmail}/>
            </div>
            
            <div className="space"></div>
            <div>
                <button onClick={handleSubmit}>Register</button>
                
            </div>
            <div className="space"></div>
        </div>

    </div>
);

}