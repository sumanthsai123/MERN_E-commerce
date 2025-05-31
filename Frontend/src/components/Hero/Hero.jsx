import React from "react";
import "./Hero.css";
import { Link } from 'react-router-dom'
import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";
import heroImg from "../assets/hero3.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>NEW ARRIVALS</h1>
        <div className="hero-left-text-part">
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <Link className="link" to={"/Men"}>
         <div className="hero-latest-btn">
             <div>Latest Collection</div>
             <img src={arrowIcon} alt="" />
         </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
