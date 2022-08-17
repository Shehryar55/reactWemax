import React, { useState } from "react";
import Footer from "./AppFooter/Footer";

import img from "../component/f2.jpg";
import "../App.css";
import{HiOutlineLocationMarker} from 'react-icons/hi';
import {TbTruckDelivery} from "react-icons/tb";
import {TbCashBanknote} from "react-icons/tb";
import {Link} from "react-router-dom";
function Order() {
  const [Count, setCount] = useState(0);
  const IncNum = () => {
    setCount(Count + 1);
  };

  const DecNum = () => {
    if (Count > 0) {
      setCount(Count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "10vh", backgroundColor: "#FAF8CC" }}
      ></div>
      <div className="container pt-3 " >
        <div className="row pb-5">
          <div className="col-md-4">
            <div
              id="carouselExampleControls"
              className="carousel slide "
              data-bs-ride="carousel"
              style={{ border: "1px solid black" }}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col-md-4 "
            style={{ borderRight: "1px solid black", height: "auto" }}
          >
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quia
            </p>

            <div className="ratings">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              &nbsp;&nbsp; 5 Rating
              <br />
              Rs. 159
              <br />
              Rs. <del>299-47%</del>
              <br />
              <p
                className="fw-bold"
                style={{ position: "relative", left: "115px", top: "45px" }}
              >
                {Count}
              </p>
              Quantity: &nbsp;
              <button
               onClick={DecNum}
                className="btn btn-dark"
                style={{
                  padding: "5px",
                  width: "30px",
                  outline: "none",
                  border: "none",
                }}
              >
                -
              </button>
              <button
                 onClick={IncNum}
              
                className="btn btn-dark"
                style={{
                  padding: "5px",
                  outline: "none",
                  width: "30px",
                  border: "none",
                  marginLeft: "30px",
                }}
              >
                +
              </button>

         
              <br />
             <div className="mt-5 d-flex  justify-content-between">
             <Link to="/BuyNow"> <button type="button" className="btn btn-dark">
                  Buy Now
                </button></Link>
               <Link to="/AddToCart"> <button type="button" className="btn btn-dark">
                  Add to Cart
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container mt-4">
            <h6 className="fw-bold">Delivery</h6>
            <HiOutlineLocationMarker/>  &nbsp;
           Gulshan Iqbal Town Lahore
           < br/>
           <br/>
           <TbTruckDelivery/> &nbsp;<b> Home Delivery</b>
           <p className="mx-4">2&nbsp; - &nbsp;3 &nbsp;day(s)</p>
           <br/>
           <TbCashBanknote/> &nbsp;  <b>Cash On Delivery Available</b> 
           <div className="container mx-2">
            <h6 className="fw-bold">Service</h6>
            <h6 className="fw-bold">7 Days Returns</h6>
            <p>Change of mind is not applicable</p>
            <br/>
            
            <p>Warranty Not Available</p>
            </div>
           </div>
            </div>
        
        </div>
      </div>
    
     
   <Footer/>
   
    </>
  );
}

export default Order;
