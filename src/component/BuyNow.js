import React from "react";
import Header from "./AppHeader/Header";
import "../App.css";
import Footer from "./AppFooter/Footer";

function BuyNow() {
    
    
  return (
    <>
      <div>
        <Header />
        
        <div className="firstDiv pb-5">
    
        <div className="container">
          <div className="py-3">
            <h2>Delivery Information</h2>
          </div>

          <div className="row">
            <div className="col-md-4 order-md-2 mb-4 pt-4  rightDiv ">
              
              <ul className="list-group mb-3 ">
              <button type="button" className="btn  btn-block " style={{backgroundColor:"#E3E3E2"}}>Processed To Pay</button>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    
                  <div>
                    <h5 className="my-0 fw-bold">Order Summary</h5>
                    <small className="text-muted">Subtotal (2 items)</small>
                  </div>
                  <span className="text-muted">Rs.00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Shipping Fee</h6>
                   
                  </div>
                  <span className="text-muted">Rs.00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between ">
                  
                    <h6 className="my-0">Promotion</h6>
                    
                  
                  <span className="text-muted">-Rs.6</span>
                </li>
                <li  className="list-group-item d-flex justify-content-between">

                
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter voucher code"
                  />
                 
                    <button type="submit" className="btn mx-2 text-white" style={{backgroundColor:"#F7D6B0"}}>
                      Apply
                    </button>
                 
                </div>
              
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong className="text-danger">Rs.00</strong>
                </li>
                <button type="button" className="btn   btn-block " style={{backgroundColor:"#E3E3E2"}}>Processed To Pay</button>
              </ul>

              
            </div>
            <div className="col-md-8 order-md-1 innerDiv ">
              <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName ">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name and last name"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName ">Province</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please choose your province"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName ">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please enter your phone number"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName ">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please choose your city"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName ">Building / House No / Street / Floor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please enter"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please choose your area"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="firstName">Colony / Suburb / locality / Street</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please enter"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3 fw-bold">
                  <label htmlFor="lastName">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Please enter your address"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
              </div>
              <p className="fw-bold">Select a lable for effectively Delivery:</p>
              <div >
                
              <button type="button" style={{padding:"3px 12px ", border:"1px solid rgb(184, 179, 179)"}}>Office</button>
              <button type="button" className=" mx-5"  style={{padding:"3px 12px", border:"1px solid rgb(184, 179, 179)"}}>Home</button>
              </div>
              <div className="pt-5 text-center ">
              <button type="button" className="btn w-25" style={{backgroundColor:"#F7D6B0"}}>Save</button>
              </div>
              </form>
            </div>
            
          </div>
         
        </div>
        
      </div>
      </div> 




    
   
      
      <Footer/>
   
    </>
  );
}

export default BuyNow;
