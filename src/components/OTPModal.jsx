import React, { useState, useEffect, useRef } from "react";
import "../styles/otp.css";

const OTPModal = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(55);

 
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    if (otp.includes("")) {
      alert("Please enter the complete OTP.");
      return;
    }
    alert(`OTP Verified: ${otp.join("")}`);

  };

  
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const resendOTP = () => {
    setOtp(["", "", "", ""]);
    setResendTimer(55);
    alert("OTP resent!");
  
  };

  return (
    <div className="overlay">
      <div className="modal">
        <img
          src="logo-placeholder.png" 
          alt="Logo"
          className="logo"
        />
        <h1>Verify your details</h1>
        <p>Enter OTP number below</p>
        <div className="otp-input-container">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)} 
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onFocus={(e) => e.target.select()}
              className="otp-input"
            />
          ))}
        </div>
        <button
          className={`btn verify-btn ${
            otp.includes("") ? "disabled" : ""
          }`}
          onClick={handleVerify}
          disabled={otp.includes("")}
        >
          Verify and Continue
        </button>
        <p className="resend-text">
          Didn’t receive OTP?{" "}
          {resendTimer > 0 ? (
            <span>
              Resend in 0:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}
            </span>
          ) : (
            <span onClick={resendOTP} className="resend-link">
              Resend now
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default OTPModal;
