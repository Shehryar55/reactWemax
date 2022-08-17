import React from 'react';
import image from "../w.png";

import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "../../App.css";
import {Link} from 'react-router-dom'


function Footer() {
  return (
 <>
 <div className="container-fluid ftx mt-3">
        <footer
          className="text-center text-lg-start "
          style={{ backgroundColor: "#FAF8CC" }}
        >
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className=" col-md-4 col-12 col-lg-4  ">
                  <img
                    src={image}
                    alt=""
                    srcset=""
                    className="img-fluid w-50"
                    style={{ position: "relative", bottom: "40px" }}
                  />

                  <p style={{ position: "relative", bottom: "50px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                    eaque? Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>

                <div className="col-md-4 col-12 col-lg-2 ">
                  <p className="text-uppercase fw-bold">Customer Services</p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!">Contract</a>
                    </li>
                    <li>
                      <a href="#!">Track Order</a>
                    </li>
                    <li>
                      <a href="#!">Delivery & Return</a>
                    </li>
                    <li>
                      <a href="#!">Payment</a>
                    </li>
                    <li>
                      <a href="#!">Make a return</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12 col-lg-2 ">
                  <p className="text-uppercase fw-bold">Info</p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#!">Size Guide</a>
                    </li>
                    <li>
                      <a href="#!">Careers at Wemax</a>
                    </li>
                    <li>
                      <Link to="/About"><a href="#!">About Us</a></Link>
                    </li>
                    <li>
                      <a href="#!">Legal Policies</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12 col-lg-2 ">
                  <p className="text-uppercase fw-bold">Contact Us</p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="">
                        <AiOutlineMail style={{ fontSize: "20px" }} />{" "} &nbsp;
                        hello@info.com
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <FiPhoneCall style={{ fontSize: "20px" }} /> &nbsp; +1234456671
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <HiOutlineLocationMarker style={{ fontSize: "20px" }} />{" "}&nbsp;
                        Visit us at Lahore
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12 col-lg-2   ">
                  <p className="text-uppercase fw-bold">Follow</p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!">
                        <BsInstagram
                          className="ins"
                          style={{ fontSize: "20px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <BsFacebook
                          className="fb"
                          style={{ fontSize: "20px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
 
 
 </>
  )
}

export default Footer