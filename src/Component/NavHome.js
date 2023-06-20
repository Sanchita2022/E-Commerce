
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
            <h3>
                BIZPUSH
            </h3>
        </div>

        <div className='routes'>
            <ul>
             <li>
             <Link to="/">Home</Link>
             </li>

             <li>
             <Link to="/gallery">Gallery</Link>
             </li>

             <li>
             <Link to="/shop">Shop</Link>
             </li>

             <li>
             <Link to="/contact">Contact</Link>
             </li>

            </ul>
        </div>

        <div className='side-content'>
            <CiSearch/>
            <AiOutlineShoppingCart/>
            {/* shopping cart count here  */}
            {/* account person pic here  */}
        </div>
       
    </div>
  )
}

export default Navbar
