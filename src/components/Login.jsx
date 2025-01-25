import React, { useState } from "react";
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogin = () => {
   


      navigate('/sign-up');
      

    
  };

  const handleContact = () => {
    alert("Contact Us button clicked! Add your contact functionality here.");
  };

  return (
    <div>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <img
              src="logo-placeholder.png" // Replace with your logo image
              alt="Logo"
              className="logo"
            />
            <h1>Grow your Business Exponentially!</h1>
            <p>Pay less on each transaction you make with our App.</p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <button className="btn login-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="btn contact-btn" onClick={handleContact}>
              Contact Us
            </button>
            <p className="terms">
              By clicking, you agree to our{" "}
              <a href="/terms" className="link">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="link">
                Privacy Policy
              </a>.
            </p>
            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      {!isModalOpen && (
        <button className="open-btn" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
      )}
    </div>
  );
};

export default Login;
