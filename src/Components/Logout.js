import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate()
    const onClickLogout = () => {
        Cookies.set('jwtToken', " " ,{
            expires: 30, 
            path: "/"
           });
        Cookies.remove("jwtToken")
        navigate("/login")
}

    return (
        <div>
            {/* <h1>Welcome to Home Page</h1> */}
            <button className='btn-logout' onClick={onClickLogout}>Logout</button>
        </div>
    )
}

export default Logout;