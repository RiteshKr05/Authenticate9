
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    if (email.trim() !== "") {
      localStorage.setItem("userEmail", email);
      navigate("/login");
    } else {
      alert("Please enter your email");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">SignUp</h2>
      <form onSubmit={handleRegister}>
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
          SignUp
        </button>
      </form>
      <button
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4 hover:bg-gray-300"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
    </div>
  </div>
  );
};

export default Register;
