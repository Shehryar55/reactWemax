import React from 'react'
import img from "./rp.jpg";
import "../App.css";

function RegForm2() {
  return (
    <div className='container'>
<div className="row">
    <div className="col-md-6">
        <img src={img} alt="" srcset="" className='img-fluid w-100' />
    </div>
    <div className="col-md-6">
    <h3 className="text-center display-4 fw-bold pt-5">Register</h3>
        <div className="container pt-5">
          <form className="needs-validation " noValidate>
            <div className="row">
              <div className="col-md-6 mb-3 fw-bold">
                <label htmlFor="firstName ">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
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
                  className="form-control form-control-lg"
                  id="firstName"
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="col-md-6 mb-3 fw-bold">
                <label htmlFor="firstName ">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="firstName"
                  required
                />
                
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3 fw-bold">
                <label htmlFor="firstName">Confirm Password</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
            </div>
          </form>
          <div id="" className="form-text fw-bold">
           
            <input type="checkbox" name="" id="" /> Creating an account means
            you're okay with our <u> Terms and Condition</u> and our
            <u> Privacy Policy</u>
          </div>

        </div>
       
        <div className="container d-flex justify-content-center pt-5">
        <button type="button" className="btn  btn-lg  fw-bold w-25 " style={{backgroundColor:"#FED5BD",padding:"8px 10px 8px 10px"}}>Register</button>
        </div>
       
    </div>
</div>



    </div>
  )
}

export default RegForm2