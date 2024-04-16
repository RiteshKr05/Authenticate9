
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredEmail = localStorage.getItem("userEmail");
    if (registeredEmail && registeredEmail === email.trim()) {
      
      navigate("/home");
    } else {
      alert("Please register first or enter a valid email");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email);
  };

  const redirectToSignUp = () => {
    navigate('/Register'); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <button
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4 hover:bg-gray-300"
          onClick={redirectToSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
