import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, '', '/');
  }, []);

  const handleRedirect = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Logging you out...</p>
      
      {handleRedirect()}
    </div>
  );
};

export default Logout;
