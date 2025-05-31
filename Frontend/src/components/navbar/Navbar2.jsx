import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import './Navbar2.css'
import { Link } from 'react-router-dom'
import Logo2 from "../assets/logo23.png";
import { ShopContext } from "../../context/ShopContext";
import { useLocation } from 'react-router-dom';
import AdminNavbar from '../../Components2/Navbar/AdminNavbar';

const Navbar2 = () => {
 const {getTotalCartItems} = useContext(ShopContext);
//////added role based navbar
 const location = useLocation();
 const adminRoutes = ['/admin', '/addproduct', '/listproduct', '/orders'];
  const isAdmin = adminRoutes.some(route => location.pathname.startsWith(route));

if (isAdmin) {
    // Hide the global navbar on admin pages
    return <AdminNavbar/>;
  }
  return (
    <div>
        <header className="d-flex align-items-center">

            <div className="menu">
                    <input className="d-none m-2" id="check" type="checkbox"/>
                    <label  for="check"><i  className="ham-menu bi bi-list"></i></label>
                    
                    
                    <div className="side-bar ">
                        <label className="close-icon" for="check"><i className="bi bi-x-lg"></i></label>   
                        <div className="menu-items">
                            <Link className="link" to={"/"}>
                                <a>HOME</a>
                             </Link>
                                
                            <Link className="link" to={"/men"}>
                                <a>Men</a>
                             </Link>
                            <Link className="link" to={"/women"}>
                                <a>Women</a>
                            </Link>
                            <Link className="link" to={"/kids"}>
                                <a>Kids</a>
                            </Link>
                            
                            
                        </div>
                    </div>
                    <label className="dark" for="check"></label>
                    <div className="logo">
                        <img className="nav-logo" src={Logo2} alt="image not found..."/>
                    </div>
            </div>

        

            <div className="search-bar d-flex justify-content-space-between;">
                <input type="text" placeholder="Search..."/>
                <button className="search-button"><i className="bi bi-search"></i></button>
            </div>
        
      
           
            <div className="righ ">
                <a href="">Home</a>
                
                {localStorage.getItem('auth-token')
                    ?<button className='logout-button' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                    :<Link to='/login'><button className='login-button'>Login</button></Link>}
                
                <Link className="link" to={"/cart"}>
                   <div className='cart'>
                     <button className="cart-button">Cart <i className="bi bi-cart-fill"></i></button>
                     <div className='cartCount'><p>{getTotalCartItems()}</p></div>
                   </div>
                </Link>
                
            </div>
            
        
        </header>
        <div className='category'>
            <Link className="link" to={"/"}>
            <a>HOME</a>
            </Link>
            
            <Link className="link" to={"/men"}>
                <a>Men</a>
                </Link>
            <Link className="link" to={"/women"}>
                <a>Women</a>
            </Link>
            <Link className="link" to={"/kids"}>
                <a>Kids</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar2
