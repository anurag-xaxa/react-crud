import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Token = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('jwtToken');
    // console.log("token", token)

    // Use ternary operator to navigate if the token exists, else perform other logic
    // token ? navigate("/home") : "invalid";
    // if(token){
    //     navigate('/home')
    // }

  }, [navigate]);

//   const otherLogic = () => {
//     // Other logic related to getting the token goes here...
//   };

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default Token;
