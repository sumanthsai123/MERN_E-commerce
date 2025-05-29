import React from 'react'
import './Navbar.css'
// import navlogo from '/src/assets/logo2.png'
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="/src/assets/logo23.png" alt="not found" className='nav-logo' />
        <i className=' bi bi-person-circle'></i>
    </div>
  )
}

export default Navbar