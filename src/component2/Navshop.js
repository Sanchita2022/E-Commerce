import "./NavShopStyles.css";
import {CiMenuBurger, CiSearch, CiUser} from "react-icons/ci";
import {AiOutlineShoppingCart} from "react-icons/ai"
import React,{useState} from 'react';
import {FaBars, FaBell, FaTimes, FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavShop = () => {
  return (
    <div className="navShop">
      <div className='nav'>
        <div className='drawyer'><FaBars/></div>
        <div className='logo'><h3>Constructor</h3></div>
        <div className='routes'>
          <ul>
            <li>
            <Link to="/">Dashboard</Link>
            </li>

            <li>
            <Link to="/gallery">About Us</Link>
            </li>

            <li>
            <Link to="/shop">News</Link>
            </li>

            <li>
            <Link to="/contact">User Policy</Link>
            </li>

            <li>
            <Link to="/contact">Contacts</Link>
            </li>

            <li style={{fontSize:"larger"}}>
              ...
            </li>
          </ul>
        </div>

        <div className='sidecontent'>
          <CiSearch/>
          <input type="text" placeholder="Search Transactions and Documents" style={{textDecoration:"none",color:"#4D4D4D"}}/>
        </div>

        <div className="sideicons">
          <FaUser className="uicon icons"/>
          <div style={{margin: "auto 15px", textDecoration:"none",color:"#4D4D4D"}}>Sanchita Sharma</div>
          <div className='icons notification'><FaBell/></div>
          <div className='icons'><FaTimes/></div>
        </div>

      </div>
    </div>
  )
}

export default NavShop
