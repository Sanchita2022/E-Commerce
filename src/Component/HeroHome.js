import HeroHomeStyles from "./HeroHomeStyles.css";
import Group from "../assets/Group 3359.svg";
import star from "../assets/Vector.png";
import verticle from "../assets/Ellipse 24.png";
import horizontal from "../assets/Ellipse 25.png";
import round from "../assets/Ellipse 26.png";
import arrow from "../assets/arrow.jpg";
import React from "react";

const HeroHome = () => {
  return (<>

   <div className="container">
      <div className="middle-left">
        <div className="heading">
          <h1>
            PURCHASE YOUR <br />
            <u>SHOES</u> NOW.
          </h1>
        </div>
        <p>
          {" "}
          lorem ipsum dolor sit amet,consectetur adipiscing elit.Dolor morbi
          velit <br />
          turpis et dolor sit morbi odio id.Aliquam ultricies tortor ac
        </p>
        <div className="button">
          <button style={{width:"10rem"}}>Shop Now</button>
        </div>
        <div style={{transform:"rotate(12deg)",mixBlendMode:"darken"}}>
        <img className="arrow" style={{width:"400px"}} src={arrow} alt="arrow" />  
        </div>
        <div className="rating">
          <p className="number">4.3 </p>
          <img className="star1" src={star} alt="star" />
          <img className="star2" src={star} alt="star" />
          <img className="star3" src={star} alt="star" />
          <img className="star4" src={star} alt="star" />
          <img className="star5" src={star} alt="star" />
          <p className="para" >(11.6k Total Review)</p>
        </div>
      
      </div>

      <div className="middle-right">
        <div className="bigshoe">
          <img
            className="whiteshoe-img"
            src={Group}
            alt="whiteshoe-img"
          />
        </div>
    
      </div>
      
    </div>
   <div className="coupon">
   <div className="discount">
          <h3>GET UPTO 30% OFF</h3>
          <p>You can get 30% off this product if you are buying now.</p>
        </div>
   </div>
  </>
   
    
  );
};

export default HeroHome;
