
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import "./NavHomeStyles.css";
import {CiSearch} from "react-icons/ci";
import {AiOutlineShoppingCart} from "react-icons/ai"





const Navbar = () => {


  return (


    <div className='nav'>
        <div className='logo'>
         {/* logo here */}
         <img src="/images/logo icon.png"/>
            <h3>
                BIZPUSH
            </h3>
        </div>

        <div className='routes'>
            <ul>
             <li>
             <Link style={{textDecoration:"none",color:"#4D4D4D"}} to="/">Home</Link>
             </li>

             <li>
             <Link  style={{textDecoration:"none",color:"#4D4D4D"}}to="/gallery">Gallery</Link>
             </li>

             <li>
             <Link  style={{textDecoration:"none",color:"#4D4D4D"}}to="/shop">Shop</Link>
             </li>

             <li>
             <Link   style={{textDecoration:"none",color:"#4D4D4D"}}to="/contact">Contact</Link>
             </li>

            </ul>
        </div>

        <div className='side-content'>
            <CiSearch />
            <AiOutlineShoppingCart/>
            {/* shopping cart count here  */}
            {/* account person pic here  */}
        </div>
       
    </div>
  )
}

export default Navbar
