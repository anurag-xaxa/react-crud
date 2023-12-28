import React from 'react';
import { useNavigate } from 'react-router-dom';

    
const Logout= () => {
        const navigate = useNavigate()
        const onClickLogout = () =>{
        
        localStorage.removeItem("jwtToken")
        
            navigate("/login")    
    }
    

return(
    <div>
        <h1>Welcome to Home Page</h1>
        <button onClick={onClickLogout}>Logout</button>
    </div>
    )
}

export default Logout;