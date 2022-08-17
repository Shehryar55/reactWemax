import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBell } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../../App.css";
import image from "../w.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
     <header>
        <input type="checkbox" name="" id="chk1" />
        <div className="logo">
         <Link to="/"> <img srcSet={image} alt="" className="img-fluid" /></Link>
        </div>
        <div className="search-box">
          <form>
            <input type="text" name="search" id="srch" placeholder="Search" />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <ul>
          <li>
           <Link to="/OrderHome"> <a href="#">Order</a></Link>
          </li>
          <li>
            <Link to="/About" href="#">About Us</Link>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          
          <li>
            <Link to="/AddToCart"><a href="#" className="f">
              <AiOutlineShoppingCart />
            </a></Link>
            <a href="#" className="f">
              <TbBell />
            </a>
          <Link to="/RegisterForm"> <a href="#" className="f">
              <RiUserLine />
            </a></Link> 
          </li>
        </ul>
        <div className="menu">
          <label htmlFor="chk1">
            <FaBars />
          </label>
        </div>
      </header>
    
    </>
  )
}

export default Header