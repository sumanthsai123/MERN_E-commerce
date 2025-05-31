

import React, { useEffect, useState } from 'react';
import './Orders.css';
import emptyOrderImage from '../../components/assets/empty-orders.png';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="main-list">
          <div><h2>All Orders</h2></div>
      
      <div className="order">
        {orders.length === 0 ? (
          <div className="no-orders">
            <img src={emptyOrderImage} alt="" />
            <h2>No Orders yet</h2>
          </div>
        ) : (
          
          orders.map((order, idx) => (
            <>
            
            <div key={idx}>
              <hr />
              <div className='order-number' style={{fontWeight: 'bold', marginBottom: '8px'}}>
                Order Number: {idx + 1}
              </div>
              <div className='date'>
                <h4>Date:</h4> <p>{order.date ? new Date(order.date).toLocaleString() : 'N/A'}</p>
              </div>
              <div className='user-details'>
                <ul>User Detail : 
                  <li>Username: {order.user?.username || 'N/A'}</li>
                  <li>User Email: {order.user?.email || 'N/A'}</li>
                </ul>
              </div>
              <div className='total'>
                <h4>Total:</h4> <p> ${order.total}</p>
              </div>
              <div className='product-details'>
                <h4>Products:</h4>
                <ul>
                  {(order.products || []).map((p, i) => (
                    <li key={i}>{p.name} x {p.quantity} = ${p.price * p.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
            </>
          ))
        )}
      </div>
    </div>
    
  );
};

export default Orders;