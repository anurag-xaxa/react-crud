import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GetToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('jwtToken');

    token ? navigate("/home") :"invalid token";

  }, [navigate]);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default GetToken;
