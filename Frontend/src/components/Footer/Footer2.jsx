import React from 'react'
import './footer2.css'
import logo2 from '../assets/logo2.jpg'


const Footer2 = () => {
  return (
    
<footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo2} alt="BuyItAll Logo" />
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Explore</h3>
          <a href="#">All</a>
          <a href="#">Rated</a>
          <a href="#">Stories</a>
          <a href="#">Made From</a>
          <a href="#">Tips & Guides</a>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-section">
          <h3>Terms & Conditions</h3>
          <a href="#">Privacy Police</a>
          <a href="#">FAQs</a>
          <a href="#">SpecialCredits</a>
          <a href="#">Made From</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 - BuyItAll</p>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer2
