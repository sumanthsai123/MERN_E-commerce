import React from 'react'
import "./Offers.css"
import { Link } from 'react-router-dom'
import exclusiveImage from '../assets/hero4.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers For You</h1>
            <p>ONLY ON OUR WEBSITE</p>
            <Link className="link" to={"/Women"}>
              <button>Check Now</button>
            </Link>
        </div>
        <div className="offers-right">
            <img src={exclusiveImage} alt="" />
        </div>
    </div>
  )
}

export default Offers