import React from 'react';
import { CreditCard, History, Gift, RefreshCw, User } from 'lucide-react';
import '../styles/Dashboard.css';

function Dashboard() {

   const Data = [1,2,3,4];
  return (
    <div className="dashboard">
   
      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-button">
            <CreditCard className="action-icon" />
            <span>Make Payment</span>
          </button>
          <button className="action-button">
            <History className="action-icon" />
            <span>Settlements</span>
          </button>
          <button className="action-button">
            <RefreshCw className="action-icon" />
            <span>Transaction History</span>
          </button>
          <button className="action-button">
            <Gift className="action-icon" />
            <span>Gift Cards</span>
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Recent Transactions */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title">Recent Transaction</h2>
            <div className="transaction-tabs">
              <button className="tab active">All Transaction</button>
              <button className="tab">Settlements</button>
              <RefreshCw size={18} className="cursor-pointer" />
            </div>
          </div>
          
          <div className="transaction-list">
            {Data.map((i) => (
              <div key={i} className="transaction-item">
                <div className="transaction-user">
                  <div className="user-avatar">
                    <User size={16} />
                  </div>
                  <div className="user-info">
                    <p className="user-phone">+919956598562</p>
                    <p className="payment-method">Paid via UPI</p>
                  </div>
                </div>
                <span className="amount">+₹500.00</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Orders */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title">My Orders</h2>
            <div className="last-update">
              <span>Last Update on June 02, 2024 | 11:25 PM</span>
              <RefreshCw size={18} className="cursor-pointer" />
            </div>
          </div>

          <div className="status-tabs">
            <button className="status-tab active">Confirmation (6)</button>
            <button className="status-tab">Processing (2)</button>
            <button className="status-tab">Packed Orders (2)</button>
          </div>

          <div className="order-list">
            {Data.map((i) => (
              <div key={i} className="order-card">
                <div className="order-header">
                  <div>
                    <span className="order-id">Order ID: 12345</span>
                    <span className="payment-status">PAID - UPI</span>
                  </div>
                  <p className="order-date">Date:Apr 09, 2024</p>
                </div>
                <div className="order-items">
                  <div className="order-item">
                    <span>1 x Daily apple</span>
                    <span>₹100.00</span>
                  </div>
                  <div className="order-item">
                    <span>5 x White Egg</span>
                    <span>₹50.00</span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;