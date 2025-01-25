import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import '../styles/Orders.css';

const mockOrders = [
  {
    id: '12345',
    status: 'confirmation',
    paymentMethod: 'UPI',
    date: 'Apr 09, 2024',
    items: [
      { name: 'Daily apple', quantity: 1, price: 100 },
      { name: 'White Egg', quantity: 5, price: 50 }
    ],
    total: 150
  },
  {
    id: '12346',
    status: 'processing',
    paymentMethod: 'UPI',
    date: 'Apr 10, 2024',
    items: [
      { name: 'Organic Banana', quantity: 6, price: 60 },
      { name: 'Whole Wheat Bread', quantity: 1, price: 40 }
    ],
    total: 100
  }
];

function Orders() {
  const [activeStatus, setActiveStatus] = useState('confirmation');
  const [orders] = useState(mockOrders);

  const filteredOrders = orders.filter(order => order.status === activeStatus);

  const statusCounts = {
    confirmation: orders.filter(o => o.status === 'confirmation').length,
    processing: orders.filter(o => o.status === 'processing').length,
    packed: orders.filter(o => o.status === 'packed').length,
  };

  return (
    <div className="orders">
      <div className="orders-header">
        <h2 className="section-title">Orders</h2>
        <div className="last-update">
          <span>Last Update on June 02, 2024 | 11:25 PM</span>
          <RefreshCw size={18} className="cursor-pointer" />
        </div>
      </div>

      <div className="status-filters">
        <button 
          onClick={() => setActiveStatus('confirmation')}
          className={`status-filter ${activeStatus === 'confirmation' ? 'active' : ''}`}
        >
          Confirmation ({statusCounts.confirmation})
        </button>
        <button 
          onClick={() => setActiveStatus('processing')}
          className={`status-filter ${activeStatus === 'processing' ? 'active' : ''}`}
        >
          Processing ({statusCounts.processing})
        </button>
        <button 
          onClick={() => setActiveStatus('packed')}
          className={`status-filter ${activeStatus === 'packed' ? 'active' : ''}`}
        >
          Packed Orders ({statusCounts.packed})
        </button>
      </div>

      <div className="orders-list">
        {filteredOrders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-header">
              <div>
                <span className="order-id">Order ID: {order.id}</span>
                <span className="payment-status">PAID - {order.paymentMethod}</span>
              </div>
              <p className="order-date">Date: {order.date}</p>
            </div>
            <div className="order-details">
              {order.items.map((item, index) => (
                <div key={index} className="order-row">
                  <span>{item.quantity} x {item.name}</span>
                  <span>₹{item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="order-footer">
              <span className="total">Total: ₹{order.total.toFixed(2)}</span>
              <div className="order-actions">
                <button className="btn btn-danger">Reject Order</button>
                <button className="btn btn-primary">
                  {activeStatus === 'confirmation' ? 'Confirm Order' : 
                   activeStatus === 'processing' ? 'Mark as Packed' : 
                   'Mark as Shipped'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;