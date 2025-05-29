import React, { useEffect, useState } from 'react';
import './Orders.css'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);
  return (
  <div className="main-list">
    <h2>All Orders</h2>
      <div className="order">
       
        {orders.map((order, idx) => (
        <div key={idx} /*style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}*/>
           <hr />
          <div className='date'><h4>Date:</h4> <p>{new Date(order.date).toLocaleString()}</p></div>
          <div className='user-details'>
            <ul>User Detail : 
              <li>Username: {order.user.username}</li>
              <li>User Email: {order.user.email}</li>
            </ul>
          </div>
          <div className='total'><h4>Total:</h4> <p> ${order.total}</p></div>
          <div className='product-details'>
            <h4>Products:</h4>
            <ul>
              {order.products.map((p, i) => (
                <li key={i}>{p.name} x {p.quantity} = ${p.price * p.quantity}</li>
              ))}
            </ul>
          </div>
         
        </div>
      ))}
    </div>
  </div>
  );
};

export default Orders;