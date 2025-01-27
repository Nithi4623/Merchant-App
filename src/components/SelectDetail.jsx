import React, { useEffect, useState } from "react";
import "../styles/selectstore.css";
import ApiClient from "../apiclient/apiConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SelectDetail = () => {

   const navigate = useNavigate()
  const [selectedStore, setSelectedStore] = useState(null);
   const [storeDetail , setStoreDetails]=useState([])
   const [selected , setSelected]=useState(false)
   console.log(selected,"hjjgk")
   

  
 useEffect(()=>{
  Getstore()
 },[])
 const Authtoken = localStorage.getItem('UserToken')
 const Authheader =JSON.parse(Authtoken) 
  const token = Authheader?.token
  
   
  const Getstore = ()=>{

    
     const endPoint = 'https://rewardify.dotcod.in/api/v1/store-user/store/'
     const headers  ={
      "Authorization": `Bearer ${token}`,
      "device":`{"device" : "Nexus Phone","app":"web","device_type":2,"OS":"unknown","ip_address":"103.28.246.86","browser":"Chrome"}`,
     
     
     }

     ApiClient.get(endPoint ,{headers} ).then((res)=>{
      setStoreDetails([res?.data])
      console.log(res?.data ,"jhjhgjgjh")
     }).catch((err)=>{
      toast.error(err.response.data.message)

     })



  }

  const handleContinue = () => {
    navigate('/Layout')

 
  };

  return (
    <div className="store-modal-overlay">
      <div className="store-modal-container">
        <div className="store-modal-header">
          <button className="back-button">←</button>
          <h2>Select Your Store</h2>
          <p>Your number is connected with {storeDetail.length} stores</p>
        </div>

        <div className="store-list">
          {storeDetail.map((store) => (
            <div
              key={store.storeId}
              className={`store-item ${
                storeDetail === store.storeId ? "selected" : ""
              }`}
              onClick={() => setSelectedStore(store.storeId)}
            >
              <img  src="logo.png" alt={store.name} className="store-image" />
              <div className="store-details">
                <h3>{store.name}</h3>
                <p>{store.address.city} , {store.address.state}</p>
                
                <p className="store-id">Store ID: {store.storeId}</p>
              </div>
              <input
                type="radio"
                // value={selected}
                checked={selectedStore === store.storeId}
               
              />
            </div>
          ))}
        </div>

        {selectedStore  && (
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      )}
      </div>
    </div>
  );
};

export default SelectDetail;
