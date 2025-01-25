// import React from "react";
// import "../styles/dashboard.css";
// import { FaWhatsapp, FaUser, FaBoxOpen, FaMoneyCheckAlt, FaGift } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="profile-section">
//           <img
//             src="/assets/profile-placeholder.jpg"
//             alt="Profile"
//             className="profile-image"
//           />
//           <h3 className="shop-name">Kannan Departmental</h3>
//           <p className="shop-id">Shop ID: 123456789</p>
//         </div>
//         <ul className="sidebar-menu">
//           <li className="menu-item active">Dashboard</li>
//           <li className="menu-item">Orders</li>
//           <li className="menu-item">My Products</li>
//           <li className="menu-item">Profile</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Top Header */}
//         <header className="header">
//           <h1 className="brand-title">REWARDIFY</h1>
//           <p className="welcome-message">Welcome, Rajesh 👋</p>
//           <div className="coins-info">XCoins: 300</div>
//         </header>

//         {/* Content Section */}
//         <section className="dashboard-content">
//           {/* Quick Actions */}
//           <div className="quick-actions">
//             <h2>Quick Actions</h2>
//             <div className="action-buttons">
//               <button className="action-btn">
//                 <FaMoneyCheckAlt className="action-icon" /> Make Payment
//               </button>
//               <button className="action-btn">
//                 <FaBoxOpen className="action-icon" /> Settlements
//               </button>
//               <button className="action-btn">
//                 <FaUser className="action-icon" /> Transaction History
//               </button>
//               <button className="action-btn">
//                 <FaGift className="action-icon" /> Gift Cards
//               </button>
//             </div>
//           </div>

//           {/* Recent Transactions */}
//           <div className="recent-transactions">
//             <h2>Recent Transactions</h2>
//             <ul className="transaction-list">
//               {[1, 2, 3].map((item, index) => (
//                 <li className="transaction-item" key={index}>
//                   <div className="transaction-info">
//                     <p className="transaction-title">+919855685852 Sent a Payment</p>
//                     <p className="transaction-method">Paid via QR Scan</p>
//                   </div>
//                   <div className="transaction-meta">
//                     <span className="transaction-amount">+₹500.00</span>
//                     <span className="transaction-time">2 hrs ago</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Orders */}
//           <div className="orders-section">
//             <h2>My Orders</h2>
//             <div className="order-tabs">
//               <button className="tab active">Confirmation (6)</button>
//               <button className="tab">Preparing (2)</button>
//               <button className="tab">Packed Orders (2)</button>
//             </div>

//             <div className="orders-list">
//               {[1, 2].map((order, index) => (
//                 <div className="order-card" key={index}>
//                   <h3 className="order-id">Order ID: 12345</h3>
//                   <p className="order-details">For: Rajesh Kannan</p>
//                   <p className="order-items">Items: 1 x Apple, 5 x White Egg</p>
//                   <p className="order-total">Total: ₹150 (Paid - UPI)</p>
//                   <div className="order-actions">
//                     <button className="reject-btn">Reject Order</button>
//                     <button className="confirm-btn">Confirm Order</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* WhatsApp Floating Button */}
//       <button className="whatsapp-btn">
//         <FaWhatsapp />
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
