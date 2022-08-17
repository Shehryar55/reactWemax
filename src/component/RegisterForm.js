import React from "react";
import "../App.css";
function RegisterForm() {
  return (
    <>
      <div className="container pt-5 pb-5">
        <h3 className="text-center display-4 fw-bold pt-5">Register</h3>
        <div className="container pt-5" style={{ width: "80%" }}>
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
                  type="password"
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
          <div className="pt-5">
          <button type="button" className="btn  btn-lg  fw-bold w-25 " style={{backgroundColor:"#FED5BD",padding:"8px 10px 8px 10px"}}>Register</button>
          </div>
        </div>
       
        
       
       
      </div>
    </>
  );
}

export default RegisterForm;
