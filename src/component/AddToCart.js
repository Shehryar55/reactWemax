import React, { useState } from "react";
import Header from "./AppHeader/Header";
import { RiDeleteBin6Line } from "react-icons/ri";
import img from "./f2.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "./AppFooter/Footer";
function AddToCart() {
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
      <Header />

      <div className="container-fluid ava0">
        <div className="row">
          <div className="col-md-8  pt-5 mb-5">
            <div className="container ava2 pb-4 pt-3">
              <h5 className="fw-bold">Preferred Delivery Option</h5>
              <div className="pt-2 ava">
                <p className="fw-bold">Please select item(s)</p>
                <p>Availability and promotion will be show here</p>
              </div>
            </div>
            <div className="d-flex justify-content-between chkAva ">
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
              </div>
              <div className="fit-content dele">
                <RiDeleteBin6Line /> Delete
              </div>
            </div>
            <div className="itm">
              <div className="row">
                <div className="col-md-4">
                  <input type="checkbox" name="" id="" />
                  <img src={img} alt="" srcset="" className="img-fluid " />
                </div>
                <div className="col-md-8">
                  <p className="w-75 pt-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat, accusamus, tenetur enim culpa possimus dolores
                    placeat doloremque architecto numquam!
                  </p>
                  <br />
                  <br />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        Rs.159
                        <br />
                        Rs.<del>299-47%</del>
                        <br />
                        <div className="heaDe">
                          <AiOutlineHeart />
                          &nbsp; &nbsp;
                          <RiDeleteBin6Line />
                        </div>
                      </div>
                      <div className="col-md-8 fw-bold pt-4">
                        
                        Quantity:&nbsp;
                        <button onClick={DecNum}style={{padding:"0px 10px ", border:"1px solid rgb(184, 179, 179)"}}>
                          -
                        </button>
                        &nbsp;&nbsp;
                        {Count}
                        &nbsp;&nbsp;
                        <button onClick={IncNum}  style={{padding:"0px 10px ", border:"1px solid rgb(184, 179, 179)"}}>
                          +
                        </button>
                     
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-5 pb-4">
            <ul className="list-group mb-3 ">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h5 className="my-0 fw-bold">Order Summary</h5>
                  <small className="text-muted">Subtotal (2 items)</small>
                </div>
                <span className="text-muted">Rs.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div className="input-group p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter voucher code"
                  />

                  <button
                    type="submit"
                    className="btn mx-2 text-white"
                    style={{ backgroundColor: "#F7D6B0" }}
                  >
                    Apply
                  </button>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong className="text-danger">Rs.00</strong>
              </li>
              <button
                type="button"
                className="btn   btn-block  fw-bold"
                style={{ backgroundColor: "#F7D6B0" }}
              >
                Processed To Checkout
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AddToCart;
