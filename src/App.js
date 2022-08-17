import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "./component/p.png";
import img4 from "./component/m1.jpg";
import img01 from "./component/g1.jpg"
import img44 from "./component/w1.jpg"
import img5 from "./component/g3.jpg";

import img10 from "./component/k2.png";
import img11 from "./component/k.png";
import img12 from "./component/k1.png";
import img13 from "./component/a.png";

import img91 from "./component/c1.jpg";
import img92 from "./component/c2.jpg";
import img93 from "./component/c3.jpg"
import "./App.css";
import Footer from "./component/AppFooter/Footer";
import Header from "./component/AppHeader/Header";
import {Link} from 'react-router-dom'
import {Carousel} from "react-bootstrap";


function App() {
  return (
    <>
      <Header />
      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "#FAF8CC" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 py-5">
            <h1>
              <span>Buy Best Product From </span>
              <br></br> <span className="sp2">All Over The</span>{" "}
              <span className="sp3">World</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              assumenda minima neque doloribus maxime fugit voluptas voluptate
              id harum officiis aperiam excepturi, rerum exercitationem vitae
              laboriosam quasi velit praesentium consequuntur quos ducimus cum?
              Nisi suscipit.
            </p>

            <button type="button" className="btn btn-dark ">
              Products
            </button>
           <Link to="/SignUp"> <button type="button" className="btn btn-dark mx-4">
              SignUp
            </button></Link>
          </div>

          <div className="col-sm-12 col-md-6 py-5 ">
            <img srcSet={img2} alt="" className="img-fluid w-50 mx-5 " />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="container  shadow rounded "
          style={{
            backgroundColor: "white",
            position: "relative",
            bottom: "40px",
          }}
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="row pt-3">
                <div className="col-md-6 w-50 ">
                  <img srcSet={img12} alt="" className="img-fluid w-50 mx-5" />
                </div>
                <div className="col-md-6   w-50  ">
                  <p className="fw-bold pt-4 m-0">Product Discount</p>
                  <p className="w-100">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="row pt-3">
                <div className="col-md-6 w-50">
                  <img srcSet={img10} alt="" className="img-fluid w-50  mx-5" />
                </div>
                <div className="col-md-6  w-50 ">
                  <p className="fw-bold pt-4 m-0">Shipping Discount</p>
                  <p className="w-100">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="row pt-3">
                <div className="col-md-6 col-sm-6 w-50">
                  <img srcSet={img11} alt="" className="img-fluid w-50  mx-5" />
                </div>
                <div className="col-md-6  w-50 ">
                  <p className="fw-bold pt-4 m-0">Logistic Discount</p>
                  <p className="w-100">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container  dx">
          <h1 className="mx-4 pb-3 ">Latest Product</h1>
          <div className="row">
            <div className="col-sm-6 col-md-3 col-6 ">
              <div className="thumbnail">
                <div className="text-center">
                <Link to="/WomenProduct">  <img
                    src={img44}
                    className="rounded img-thumbnail img-fluid w-75"
                    
                    alt="..."
                  /></Link>
                  <h5>Women</h5>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-md-3 col-6">
              <div className="thumbnail">
                <div className="text-center">
                  <img
                    src={img4}
                    className="rounded img-thumbnail img-fluid w-75"
                  
                    alt="..."
                  />
                  <h5>Kids</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <div className="thumbnail">
                <div className="text-center">
                  <img
                    src={img4}
                    className="rounded img-thumbnail img-fluid w-75"
                    
                    alt="..."
                  />
                  <h5>Mens</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <div className="thumbnail">
                <div className="text-center">
                  <img
                    src={img01}
                    className="rounded img-thumbnail img-fluid w-75"
                  
                    alt="..."
                  />
                  <h5>Kids</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container dx">
        <div className="row">
          <div className="col-md-5 py-5 ">
            <img
              src={img5}
              alt=""
              srcset=""
              className="img-fluid w-100  rounded"
            />
          </div>
          <div className="col-md-7 py-5 ">
            <nav
              className="navbar navbar-expand-lg navbar-light fw-bold"
              style={{ backgroundColor: "#FAF8CC" }}
            >
              <div className="container ">
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item dropdown active ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shoes
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Gents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ladies
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Cloths
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Gents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ladies
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Kurta
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Gents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ladies
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pent
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Gents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ladies
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        T-Shirt
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Gents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ladies
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="row">
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100"
                     
                      alt="..."
                    />
                    <br />
                    <Link to="/order">
                      <button
                        type="button"
                        className="btn  btn-sm"
                        style={{
                          width: "50%",
                          borderRadius: "15px",
                          backgroundColor: "#FFFEBE",
                          position: "relative",
                          bottom: "35px",
                        }}
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100"
                   
                      alt="..."
                    />
                    <br />
                    <button
                      type="button"
                      className="btn  btn-sm"
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                        backgroundColor: "#FFFEBE",
                        position: "relative",
                        bottom: "35px",
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100"

                      alt="..."
                    />
                    <br />
                    <button
                      type="button"
                      className="btn  btn-sm"
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                        backgroundColor: "#FFFEBE",
                        position: "relative",
                        bottom: "35px",
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100"
                  
                      alt="..."
                    />
                    <br />
                    <button
                      type="button"
                      className="btn  btn-sm"
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                        backgroundColor: "#FFFEBE",
                        position: "relative",
                        bottom: "35px",
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100 "
                  
                      alt="..."
                    />
                    <br />
                    <button
                      type="button"
                      className="btn  btn-sm"
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                        backgroundColor: "#FFFEBE",
                        position: "relative",
                        bottom: "35px",
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="thumbnail">
                  <div className="text-center">
                    <img
                      src={img4}
                      className="rounded img-thumbnail img-fluid w-100"
                     
                      alt="..."
                    />
                    <br />
                    <button
                      type="button"
                      className="btn  btn-sm"
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                        backgroundColor: "#FFFEBE",
                        position: "relative",
                        bottom: "35px",
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img91}
          alt="First slide"
        />
        <Carousel.Caption>
         
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img92}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img93}
          alt="Third slide"
        />

        <Carousel.Caption>
        
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      {/* ccccccccccccccccccccccccccccccccc */}
       <div className="container dx">
        <h1 className="py-5">Our Best Selling Products</h1>
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
                 
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
               
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
                
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
                
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
             
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
           
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
                  
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="thumbnail">
              <div className="text-center">
                <img
                  src={img4}
                  className="rounded img-thumbnail img-fluid w-75"
                  
                  alt="..."
                />
                <h5>Kids</h5>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="container py-5">
        <div className="row ">
          <div className="col-md-4  mx-auto">
            <div>
            <div
              className="line"
              style={{
             
                height: "120px",
                width: "120px",
                border: "2px solid red",
              }}
            ></div>
            </div>
            <img src={img13} alt="" className="img-fluid ptx w-100" />
            <div>
            <div
              className="line1"
              style={{
                height: "120px",
                width: "120px",
                border: "2px solid red",
              }}
            ></div>
            </div>
          </div>

          <div className="col-md-6 py-5 mx-auto">
            <h1 className="display-2">About Us</h1>
            <p className="py-5 pp">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              natus doloribus dolorem nulla a aliquam! Dignissimos consequatur
              iste aliquam quam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur beatae perferendis illo! Totam sed
              placeat rerum explicabo possimus nihil odit magni quibusdam.
              Soluta tempore incidunt reprehenderit, iste, repudiandae voluptate
              tempora asperiores accusamus, commodi sunt illo nam optio cum vel
              ea sint aspernatur in quas illum numquam? Ut maxime dolor cum.
            </p>
          </div>
        </div>
      </div>

      <div className="container   shadow rounded ">
        <div className="row py-3">
          <div className="col-md-6 ">
            <h4 className="text-uppercase text-center my-3 fw-bold">
              Subscribe Our Newsletter
            </h4>
          </div>
          <div className="col-md-6">
            <div className="newslatter mx-5">
              <form autocomplete="off">
                <input
                  type="email"
                  name="email"
                  id="mail"
                  placeholder="Search here"
                  className="fw-bold"
                />
                <input type="submit" name="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* fffffffffff */}
     

      <Footer />
    </>
  );
}

export default App;
