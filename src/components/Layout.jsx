import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Store, CreditCard, Package, User, Settings } from 'lucide-react';
import '../styles/Layout.css';

const  Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <h1 className="logo">REWARDIFY</h1>
          
          <div className="store-info">
            <img 
              src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=100&h=100&fit=crop" 
              alt="Store" 
              className="store-image"
            />
            <div className="store-details">
              <h2>
                Kannan departmental
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </h2>
              <p className="store-id">Shop ID: 123456789</p>
            </div>
          </div>
          
          <nav className="nav-list">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Store size={18} />
              Dashboard
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <CreditCard size={18} />
              Orders
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Package size={18} />
              My Products
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
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
              <h1>Welcome, Rajesh</h1>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;