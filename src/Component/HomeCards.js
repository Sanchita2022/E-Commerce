import "./HomeCardStyles.css";
import shoe2 from "../assets/shoe-2.jpeg";
import shoe3 from "../assets/shoe-3.jpeg";
import shoe4 from "../assets/shoe-4.jpeg";
import round from "../assets/Ellipse 26.png";
import { HeartIcon } from "@heroicons/react/24/outline";
import star from "../assets/Vector.png";
import React from "react";

const HomeCards = () => {
  return (
    <div className="main-card">
      <div className="footer">
        <h2>POPULAR PRODUCTS</h2>
      </div>

      <div className="card">
      <div style={{display:"flex",flexDirection:"column"}}>
      <div className="items">
          <div className="photo1">
            <img className="shoe1" src="/images/whiteshoe.jpeg" alt="shoe1" />

            <div className="round1">
              <img style={{ height: "25px" }} src={round} alt="round1" />
            </div>

            <div className="heart1">
              <HeartIcon style={{ width: "18px" }} />
            </div>
          </div>
         
        </div>
        <div className="description" >
            <div className="review-star1">
              <img className="star1" src={star} alt="star" />

            </div>
            <p className="reviews"> (11.6k Reviews) </p>
            <div className="name">
            <h1>Nike Running Shoe</h1>
            </div>
            <div className="money">
              <h1 className="price">$100</h1>
              <h1 className="sold"> <strike>500 Sold Out </strike></h1>
              <div>
              <button className="btn"> Buy Now</button>
              </div>
            </div>
           
          </div>
      </div>
      
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="items">
          <div className="photo2">
            <img className="shoe2" src={shoe2} alt="shoe2" />

            <div className="round2">
              <img style={{ height: "25px" }} src={round} alt="round1" />
            </div>

            <div className="heart2">
              <HeartIcon style={{ width: "18px" }} />
            </div>
          </div>
          
        </div>
        <div className="description">
            <div className="review-star1">
              <img className="star1" src={star} alt="star" />

            </div>
            <p className="reviews"> (11.6k Reviews) </p>
            <div className="name">
            <h1>Nike Shoe Airmax</h1>
            </div>
            <div className="money">
              <h1 className="price">$115</h1>
              <h1 className="sold"> <strike>100 Sold Out </strike></h1>
              <div>
              <button className="btn"> Buy Now</button>
              </div>
            </div>
           
          </div>
        </div>
     
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="items">
          <div className="photo3">
            <img className="shoe3" src={shoe3} alt="shoe3" />

            <div className="round3">
              <img style={{ height: "25px" }} src={round} alt="round3" />
            </div>
            <div className="heart3">
              <HeartIcon style={{ width: "18px" }} />
            </div>
          </div>
         
        </div>
        <div className="description">
            <div className="review-star1">
              <img className="star1" src={star} alt="star" />

            </div>
            <p className="reviews"> (11.6k Reviews) </p>
            <div className="name">
            <h1>Jordan Sneaker</h1>
            </div>
            <div className="money">
              <h1 className="price">$50</h1>
              <h1 className="sold"> <strike>1500 Sold Out </strike></h1>
              <div>
              <button className="btn"> Buy Now</button>
              </div>
            </div>
           
          </div>
        </div>
       
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="items">
          <div className="photo4">
            <img className="shoe4" src={shoe4} alt="shoe4" />

            <div className="round4" >
              <img style={{ height: "25px"  }} src={round} alt="round4" />
            </div>
            <div className="heart4">
              <HeartIcon style={{ width: "18px" }} />
            </div>
          </div>
          
        </div>
        <div className="description">
            <div className="review-star1">
              <img className="star1" src={star} alt="star" />

            </div>
            <p className="reviews"> (11.6k Reviews) </p>
            <div className="name">
            <h1>Nike Running Shoe 2</h1>
            </div>
            <div className="money">
              <h1 className="price">$220</h1>
              <h1 className="sold"> <strike>210 Sold Out </strike></h1>
              <div>
              <button className="btn" style={{marginLeft:"35px"}}> Buy Now</button>
              </div>
            </div>
           
          </div>
          </div>
      </div>
    </div>
  );
};

export default HomeCards;
