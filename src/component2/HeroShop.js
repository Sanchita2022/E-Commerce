import React from 'react';
import "./HeroShopStyles.css";
import { IoCompassSharp } from "react-icons/io5";
import {BiSolidStar} from "react-icons/bi";
import {FaFacebookMessenger} from "react-icons/fa"
import {SlGraph} from "react-icons/sl";
import {BsGlobeAmericas} from "react-icons/bs";
import {BsFillBuildingsFill} from "react-icons/bs";
import {GrFormAdd} from "react-icons/gr";
import {RiHandbagFill} from "react-icons/ri"

const HeroShop = () => {
  return (
    <div className='container'>
      <div className='left-side'>
      <div className='compass'>
      <IoCompassSharp style={{height:"40px",width:"29px",marginLeft:"5px",marginTop:"2px"}}/>
      </div>
      <div className='star'>
        <BiSolidStar style={{height:"40px",width:"28px",marginLeft:"5px"}}/>
      </div>
      <div className='messenger'>
        <FaFacebookMessenger style={{height:"40px",width:"27px",marginLeft:"6px",marginTop:"2px"}}/>
      </div>
      <div className='graph'>
        <SlGraph style={{height:"40px",width:"28px",marginLeft:"5px"}}/>
      </div>
      <div className='globe'>
        <BsGlobeAmericas style={{height:"40px",width:"28px",marginLeft:"6px",marginTop:"2px"}}/>
      </div>
      <div className='building'>
        <BsFillBuildingsFill style={{height:"40px",width:"26px",marginLeft:"5px",marginTop:"2px"}}/>
      </div>
      <div className='plus'>
        <GrFormAdd style={{height:"40px",width:"30px",marginLeft:"5px",marginTop:"2px"}}/>
      </div>
        <div className='photo'>
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </div>
        <div className='photo'>
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </div>
        <div className='photo'>
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </div>
        <div className='photo'>
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </div>
      </div>
      <div className='body'>
        <div className='sub-body'>
            <div className='first-box'>
                <div className='left-content'>
                    <RiHandbagFill style={{}}/>
                </div>
                <div className='middle-content'>

                </div>
                <div className='right-content'>

                </div>
            </div>
            <div className='2nd-box'>

            </div>
            <div className='3rd-box'>

            </div>
        </div>
      </div>
      <div>
      <div className='rightArea'>
        
        <div className='cards sales'>
          <div className="top">
            <span>Total Sales</span>
            <h2>$281.90</h2>
            <svg style={{stroke:"#60dfc0", fill: "#a0ffa055"}} viewBox="5 0 490 490" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 111.084 L 49.784 177.123 L 111.084 194.397 L 166.626 249.939 L 249.939 222.168 L 277.71 249.939 L 305.481 222.168 L 361.023 194.397 L 388.794 249.939 L 444.336 222.168 L 500 150.371 L 500 499.878 L 0 499.878 L 0 111.084 Z"/>
            </svg>
          </div>
          <div className='bottom'>
            <span>6 total orders</span>
            <span>View report</span>
          </div>
        </div>

        <div className='cards session'>
          <div className="top">
            <span>Total Sessions</span>
            <h2>456</h2>
            <svg style={{fill:"#ee220022", stroke:"#ee220088"}} viewBox="5 0 490 490" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 111.084 L 49.784 177.123 L 111.084 194.397 L 166.626 249.939 L 249.939 222.168 L 277.71 249.939 L 305.481 222.168 L 361.023 194.397 L 388.794 249.939 L 444.336 222.168 L 500 150.371 L 500 499.878 L 0 499.878 L 0 111.084 Z"/>
            </svg>
          </div>
          <div className='bottom'>
            <button>Live</button>
            <span>4 visitors</span>
            <span>View Report</span>
          </div>
        </div>

        <div className='cards rate'>
          <div className="top">
            <span>Customer Rate</span>
            <h2>5.43%</h2>
            <svg style={{fill:"#a022a022", stroke:"#a022a088"}} viewBox="5 0 490 490" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 111.084 L 49.784 177.123 L 111.084 194.397 L 166.626 249.939 L 249.939 222.168 L 277.71 249.939 L 305.481 222.168 L 361.023 194.397 L 388.794 249.939 L 444.336 222.168 L 500 150.371 L 500 499.878 L 0 499.878 L 0 111.084 Z"/>
            </svg>
          </div>
          <div className='bottom'>
            <span><div className='circle' style={{background:"#a022a066"}}></div> First Time</span>
            <span><div className='circle' style={{background:"#ee220066"}}></div> Returning</span>
          </div>
        </div>

        <div className='cards orders'>
          <div className="top">
            <span>Actions</span>
            <span style={{color:"purple"}}>Orders</span>
            <span className='omenu'>...</span>
          </div>
          <div className="bottom">
            <div></div>
            <ul>
              <li><span>11:32</span><span>New Category Added (Mobile Phones)</span></li>
              <li><span>11:32</span><span>New Product Added (Apples IPhone 9)</span></li>
              <li><span>11:32</span><span>New Product Added (Apples IPad Pro+)</span></li>
              <li><span>11:32</span><span>New Product Added (Google Pixel)</span></li>
              <li><span>11:32</span><span>New Category Added (Smart Watches)</span></li>
              <li><span>11:32</span><span>New Category Added (Smart Watches)</span></li>
              <li><span>11:32</span><span>New Category Added (Smart Watches)</span></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroShop
