import React, { useState } from "react";
import Header from "./AppHeader/Header";
import img from "./kd1.jpg";
import{Link} from "react-router-dom";

function OrderHome() {
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
      <div className="container-fluid ">
        <div className="row">
          <div
            className="col-md-8"
            style={{ border: "1px solid rgb(207, 205, 205)" }}
          >
            <div className="container itm">
              <div className="row">
                <div className="col-md-4">
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
                  <div>
                    <div className="row">
                      <div className="col-md-4">
                        Rs.159
                        <br />
                        Rs.<del>299-47%</del>
                        <br />
                      </div>
                      <div className="col-md-8 fw-bold pt-4">
                        Quantity:&nbsp;
                        <button
                          onClick={DecNum}
                          style={{
                            padding: "0px 10px ",
                            border: "1px solid rgb(184, 179, 179)",
                          }}
                        >
                          -
                        </button>
                        &nbsp;&nbsp;
                        {Count}
                        &nbsp;&nbsp;
                        <button
                          onClick={IncNum}
                          style={{
                            padding: "0px 10px ",
                            border: "1px solid rgb(184, 179, 179)",
                          }}
                        >
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
          <div
            className="col-md-4 pt-5 "
            style={{ border: "1px solid rgb(207, 205, 205)" }}
          >
            <div className="container">
            <ul className="list-group mb-3  ">
              <li className=" d-flex justify-content-between lh-condensed">
                <div>
                  <p className=" fw-bold p-4">
                    My Shopping Cart
                    <small className="text-muted">&nbsp; (2 items)</small>
                  </p>
                </div>
              </li>
              <li className=" d-flex justify-content-between p-3">
                <span>Subtotal</span>
                <strong>Rs.00</strong>
              </li>
              <li className=" d-flex justify-content-between p-3">
                <span>Total</span>
                <strong className="text-danger">Rs.00</strong>
              </li>
              <li className=" d-flex justify-content-between p-3">
                <span>
                 <Link to="/AddToCart"> <button
                    type="button"
                    class="btn fw-bold "
                    style={{ border: "1px solid rgb(128, 126, 126)" }}
                  >
                    Go To Cart
                  </button></Link>
                </span>
                <strong>
                  
                  <span>
                    <button
                      type="button"
                      class="btn fw-bold "
                      style={{ backgroundColor: "#F7D6B0" }}
                    >
                      Check Out
                    </button>
                  </span>
                </strong>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3 pb-5">
        <h4 className="fw-bold">Just For You</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-3 pt-4">
              <img src={img} alt="" srcset="" className="img-fluid w-75" />
              <p className="w-75">
                Lorem ipsum, dolor sit amet consectetur is a adipisicing.
              </p>
              Rs.159
              <br />
              Rs.<del>299-47%</del>
              <br />
              <div className="pt-3">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 Rating
              </div>
            </div>
            <div className="col-md-3 pt-4">
              <img src={img} alt="" srcset="" className="img-fluid w-75" />
              <p className="w-75">
                Lorem ipsum, dolor sit amet consectetur is a adipisicing.
              </p>
              Rs.159
              <br />
              Rs.<del>299-47%</del>
              <br />
              <div className="pt-3">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 Rating</div>
            </div>
            <div className="col-md-3 pt-4">
              <img src={img} alt="" srcset="" className="img-fluid w-75" />
              <p className="w-75">
                Lorem ipsum, dolor sit amet consectetur is a adipisicing.
              </p>
              Rs.159
              <br />
              Rs.<del>299-47%</del>
              <br />
              <div className="pt-3">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 Rating</div>
            </div>
            <div className="col-md-3 pt-4">
              <img src={img} alt="" srcset="" className="img-fluid w-75" />
              <p className="w-75">
                Lorem ipsum, dolor sit amet consectetur is a adipisicing.
              </p>
              Rs.159
              <br />
              Rs.<del>299-47%</del>
              <br />
              <div className="pt-3">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHome;
