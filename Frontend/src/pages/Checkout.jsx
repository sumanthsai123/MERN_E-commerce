import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/Checkout.css'; // Assuming you have a CSS file for styling

const Checkout = () => {
  const { all_product, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const cartProducts = all_product.filter(item => cartItems[item.id] > 0);

 const user = JSON.parse(localStorage.getItem('user')); // { username, email }

const handlePayment = async () => {
  setLoading(true);
  const order = {
    products: cartProducts.map(item => ({
      id: item.id,
      name: item.name,
      quantity: cartItems[item.id],
      price: item.new_price,
    })),
    total: getTotalCartAmount(),
    date: new Date(),
    user: {
      username: user?.username,
      email: user?.email,
    },
  };
  const res = await fetch('http://localhost:4000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token'),
    },
    body: JSON.stringify(order),
  });
    if (res.ok) {
      alert('Order placed successfully!');
      navigate('/'); // or to an order success page
    } else {
      alert('Order failed!');
    }
    setLoading(false);
  };

  return (
    <div className="main">
      <div className='sub-div' style={{ padding: 32 }}>
        <div className='mb-4'>
          <h2>Checkout</h2>
        </div>
        <div className="checkout-div">
            <div className='summary-div'>
              <h4>Order Summary</h4>
              <ul>
              {cartProducts.map(item => (
                <li key={item.id}>
                  {item.name} x {cartItems[item.id]} = ${item.new_price * cartItems[item.id]}
                </li>
              ))}
              </ul>
              <Link  to={'/cart'}>
              <button className='view'>View Products</button></Link>
           </div>
           <div className='payment-div'>
            <h4>Payment</h4>
            <h6>Subtotal: ${getTotalCartAmount()}</h6>
            <hr />
            <h6>Shipping Fee: $0.00</h6>
            <hr />
            <h6>Total: ${getTotalCartAmount()}</h6>
            <hr />
            <h6>Payment method: </h6>
            <select name="" id="">
              <option value="">Cash on delivery</option>
            </select>
            <hr />
            <button className='place-order' onClick={handlePayment} disabled={loading}>
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
       </div>
      </div>
    </div>
    
  );
};

export default Checkout;