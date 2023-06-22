import "./HomeCardStyles.css";
import shoe2 from "../assets/shoe-2.jpeg";
import shoe3 from "../assets/shoe-3.jpeg";
import shoe4 from "../assets/shoe-4.jpeg";
import round from "../assets/Ellipse 26.png";
import { HeartIcon } from '@heroicons/react/24/outline'
import React from "react";

const HomeCards = () => {
  return (
    <div className="main-card">
      <div className="footer">
        <h2>POPULAR PRODUCTS</h2>
      </div>

      <div className="card">
        <div className="items">
          <div className="photo1">
            <img className="shoe1" src="/images/whiteshoe.jpeg" alt="shoe1" />
              
              <div className="round1">
                <img style={{height:"25px"}} src={round} alt="round1" />
              </div>

              <div className="heart1">
              <HeartIcon style={{width:"18px"}} />
              </div>
            
              </div>
          <div className="description">
            <div></div>
            <p></p>
            <div>
              <h1></h1>
              <h1></h1>
              <button></button>
            </div>
          </div>
        </div>
        <div className="items">
        <div className="photo2">
            <img className="shoe2"src={shoe2} alt="shoe2" />
           
              <div className="round2">
                <img  style={{height:"25px"}}  src={round} alt="round1" />
              </div>

              <div className="heart2">
              <HeartIcon  style={{width:"18px"}}/>

              </div>
            
              </div>
          <div className="description">
            <div></div>
            <p></p>
            <div>
              <h1></h1>
              <h1></h1>
              <button></button>
            </div>
          </div>
        </div>
        <div className="items">
        <div className="photo3">
            <img className="shoe3" src={shoe3} alt="shoe3" />

              <div className="round3">
                <img  style={{height:"25px"}}  src={round} alt="round3" />
              </div>
              <div className="heart3">
              <HeartIcon  style={{width:"18px"}}/>

              </div>
             
              
              </div>
          <div className="description">
            <div></div>
            <p></p>
            <div>
              <h1></h1>
              <h1></h1>
              <button></button>
            </div>
          </div>
        </div>
        <div className="items">
        <div className="photo4">
            <img className="shoe4" src={shoe4} alt="shoe4" />

             <div className="round4">
                <img style={{height:"25px"}} src={round} alt="round4" />
              </div>
              <div className="heart4">
              <HeartIcon style={{width:"18px"}} />

              </div>
             
              </div>
          <div className="description">
            <div></div>
            <p></p>
            <div>
              <h1></h1>
              <h1></h1>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
