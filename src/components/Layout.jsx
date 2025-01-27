import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Store, CreditCard, Package, User, Settings } from 'lucide-react';
import '../styles/Layout.css';
import Dashboard from '../layout/Dashboard';
import ApiClient from '../apiclient/apiConfig';
import toast from 'react-hot-toast';

const  Layout = () => {

   const [userDetails,setUserDetails]=useState([])
   const [storeDetail,setStoreDetails]=useState([])
 

   useEffect(()=>{
    ShopDetails()
    Getstore()
   },[])
   const Authtoken = localStorage.getItem('UserToken')
   const Authheader =JSON.parse(Authtoken) 
    const token = Authheader?.token
  

    const ShopDetails = ()=>{
      const endPoint = 'https://rewardify.dotcod.in/api/v1/store-user/store/user/'
      const headers  ={
       "Authorization": `Bearer ${token}`,
       "device":`{"device" : "Nexus Phone","app":"web","device_type":2,"OS":"unknown","ip_address":"103.28.246.86","browser":"Chrome"}`,
       // "Content-Type":"application/json"
      
      }
 
      ApiClient.get(endPoint ,{headers} ).then((res)=>{
        setUserDetails([res?.data])
       console.log(res?.data ,"jhjhgjgjh")
      }).catch((err)=>{
       toast.error(err.response.data.message)
 
      })
 



    }
    
     
    
       
      const Getstore = ()=>{
    
        
         const endPoint = 'https://rewardify.dotcod.in/api/v1/store-user/store/'
         const headers  ={
          "Authorization": `Bearer ${token}`,
          "device":`{"device" : "Nexus Phone","app":"web","device_type":2,"OS":"unknown","ip_address":"103.28.246.86","browser":"Chrome"}`,
          // "Content-Type":"application/json"
         
         }
    
         ApiClient.get(endPoint ,{headers} ).then((res)=>{
          setStoreDetails([res?.data])
         
         }).catch((err)=>{
          toast.error(err.response.data.message)
    
         })
    
    
    
      }

  return (
    <div className="layout">
      
      <div className="sidebar">
        <div className="sidebar-content">
          <h1 className="logo">REWARDIFY</h1>
          
          <div className="store-info">
            <img 
              src={storeDetail[0]?.images[0]}
              alt="Store" 
              className="store-image"
            />
            <div className="store-details">
              <h2>
                {storeDetail[0]?.name}
           
              </h2>
              <p className="store-id">Store ID = {storeDetail[0]?.storeId}</p>
            </div>
          </div>
          
          <nav className="nav-list">
            <NavLink to="" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Store size={18} />
              Dashboard
            </NavLink>
            <NavLink to="" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <CreditCard size={18} />
              Orders
            </NavLink>
            <NavLink to="" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Package size={18} />
              My Products
            </NavLink>
            <NavLink to="" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <User size={18} />
              Profile
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <div className="welcome">
              <h1> Welcome ,{userDetails[0]?.name}</h1>
              <span>👋</span>
            </div>
            <div className="header-actions">
              <div className="xcoins">
                <span>XCoins: 300</span>
                <span className="star">⭐</span>
              </div>
              <Settings className="cursor-pointer" size={20} />
              <User className="cursor-pointer" size={20} />
            </div>
          </div>
        </header>
        <main className="main">
        
          <Dashboard/>
        </main>
      </div>
    </div>
  );
}

export default Layout;