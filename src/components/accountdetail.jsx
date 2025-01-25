import React from "react";
import "../styles/account.css"; // Create a CSS file for the styles

const Modal = ({ onRegister, onLogin, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-icon">
          <img src="/path/to/your/icon.png" alt="Store Icon" />
        </div>
        <h2>No stores are linked to this account</h2>
        <p>
          Enter your account details correctly or register your store with us.
        </p>
        <button className="btn btn-primary" onClick={onRegister}>
          Register your store with us
        </button>
        <button className="btn btn-secondary" onClick={onLogin}>
          Login with different account
        </button>
      </div>
    </div>
  );
};

export default Modal;
