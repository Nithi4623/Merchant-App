import React from 'react'
  import Login from './components/Login'
import SignUp from './components/SignUp'

import Modal from './components/accountdetail'
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout'
import Orders from './layout/Orders'
import Products from './layout/Products'
import Profile from './layout/Profile'
import Dashboard from './layout/Dashboard'
import { Toaster } from "react-hot-toast";
import OTPModal from './components/OTPModal';
import StoreDetail from './components/StoreDetail';
import SelectDetail from './components/SelectDetail';

  
  const App = () => {
    return (
      //  <>
      //  <Layout/> 
      //  <StoreDetail/> 
      //  <SelectDetail />
        
      //   </>

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
        <Route path="/Layout" element={<Layout />} />
         <Route path="/StoreDetail" element={<StoreDetail />} /> 
         <Route path="/SelectDetail" element={<SelectDetail/>} />

     </Routes> 
     </>

    )
  };
  
  export default App