import React from "react";
import "../styles/storedetail.css";

const StoreDetail = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon">
          <img
            src="logo.png"
            alt="Icon"
          />
        </div>
        <h2 className="modal-title">No stores are linked to this account</h2>
        <p className="modal-description">
          Enter your account details correctly or register your store with us.
        </p>
        <div className="modal-buttons">
          <button className="button register-button">Register your store with us</button>
          <button className="button login-button">Login with different account</button>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
