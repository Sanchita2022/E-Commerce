import HeroHomeStyles from "./HeroHomeStyles.css";
import whiteshoeimg from "../assets/main white shoe.jpeg"

import React from 'react'

const HeroHome = () => {
  return (
    <div className="container">
       <div className="middle-left">
            <h6>PURCHASE YOUR SHOES NOW.</h6>
            <p> lorem ipsum dolor sit amet,consectetur adipiscing elit.Dolor morbi velit
            turpis et dolor sit morbi odio id.Aliquam ultricies tortor ac</p>
            <button>Shop Now</button>
            <div className="rating">
                <p>4.3 </p>
                <p>(11.6k Total Reviews)</p>
            </div>
       </div>

       <div className="middle-right">
       <img className="whiteshoe-img" 
            src={whiteshoeimg} alt="whiteshoe-img" style={{width: "611.83px",height: "611.83px"}}/>
            

       </div>
    </div>
  )
}

export default HeroHome
