import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {SiGoogle} from "react-icons/si";
import {IoLogoYoutube} from "react-icons/io";
import {GrInstagram} from "react-icons/gr"
import {GrLinkedin} from "react-icons/gr"
import {Link} from "react-router-dom";
import "../App.css";

 
function SignUp() {
  return (
    <>
    


<div className="container pt-5 pb-5">
        
        <div className=" pt-5 m-auto w-50">
        <h2 className='fw-bold'>Welcome! Please Login to continue.</h2>
            <h5 className='fw-bold'>New member? Register here.</h5>
          <form className="needs-validation mt-5" noValidate>
           
              
              

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              
              
        
          </form>
          <div id="" className="form-text fw-bold sinF">
           
            <a href="">Forget Password</a>
          </div>
            <div className='pt-3 d-flex justify-content-between w-100'>
            <button type="button" class="btn  btn-lg  "style={{backgroundColor:"#FBF8CD"}}>Login</button>
            <Link to="/RegisterForm"><button type="button" class="btn  btn-lg  "style={{backgroundColor:"#FBF8CD"}}>Register</button></Link>
         
     
          </div>
          <h5 className='fw-bold pt-2'>Or, Login with</h5> 
        <div className="d-flex justify-content-between siIcon sinF">
        <a href=""><BsFacebook/></a>
        <a href=""><SiGoogle/></a>
        <a href=""><IoLogoYoutube/></a>
        <a href=""><GrInstagram/></a>
        <a href=""><GrLinkedin/></a>

        </div>
      
       
        </div>
       
       
       
        
        </div>
        

       

     
       
       
      




    </>
  )
}

export default SignUp