import React from 'react'
  import Login from './components/Login'
import SignUp from './components/SignUp'

import Modal from './components/accountdetail'
import { Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import Orders from './layout/Orders'
import Products from './layout/Products'
import Profile from './layout/Profile'
import Dashboard from './layout/Dashboard'
import { Toaster } from "react-hot-toast";
import OTPModal from './components/OTPModal';

  
  const App = () => {
    return (
      // <>
      // <Layout/>
      
        
      //  </>
      <>
     
     <Toaster position="top-right" />
      <Routes>
        
      <Route path="/" element={ <Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/Otp-Submission" element={<OTPModal/>} />
        <Route path="/order" element={<Orders/>} />
        <Route path="/Products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </>
    )
  };
  
  export default App