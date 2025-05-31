import React from 'react'
import './Navbar.css'
import Logo2 from '../../components/assets/logo23.png';
import { Link } from 'react-router-dom'



const AdminNavbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo2} alt="not found" className='nav-logo' />
       
        {localStorage.getItem('auth-token')
          ?<button className='logout-button' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
          :<Link to='/login'><button className='login-button'>Login</button></Link>}
    </div>
  )
}

export default AdminNavbar