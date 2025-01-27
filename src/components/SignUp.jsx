import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ApiClient from "../apiclient/apiConfig";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleSendOTP = () => {
   
    if (!inputValue) {
      toast.error("Please enter a Shop ID or Mobile Number.");
      return;
    }

    const endpoint = "v1/store-user/auth/generate-otp/";
    const Payloads = {
      dialCode: "91",
      contactNo: `${inputValue}`,
    };

    ApiClient.post(endpoint, Payloads, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.message)
        toast.success(res?.data?.message);
        navigate('/Otp-Submission')
        localStorage.setItem('userData' , JSON.stringify(Payloads))
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.error(err);
      });
  };

  return (
    <div>
      {isModalOpen && (
        <div className="overlay">
         
          <div className="modal">
          <img
          src="logo.png"
          alt="Logo"
          className="logo"
        />
            <h1>Get started with REWARDIFY</h1>
            <p>Enter your mobile number or Shop ID to get started</p>
            <input
              type="text"
              placeholder="Enter Shop ID / Mobile Number"
              className="input"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setInputValue(value);
                }
              }}
              maxLength={10}
            />
            <button className="btn send-otp-btn" onClick={handleSendOTP}>
              Send OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
