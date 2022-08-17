import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./Order";
import App from '../App'
import AboutUs from "./AboutUs";
import AddToCart from "./AddToCart";
import BuyNow from "./BuyNow";
import OrderHome from "./OrderHome";
import RegisterForm from "./RegisterForm";
// import RegForm2 from "./RegForm2";
import SignUp from "./SignUp";
import WomenProduct from "./WomenProduct";
function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/About" element={<AboutUs/>}></Route>
        <Route path="/AddToCart" element={<AddToCart/>}></Route>
        <Route path="/BuyNow" element={<BuyNow/>}></Route>
        <Route path="/OrderHome" element={<OrderHome/>}></Route>
        <Route path="/RegisterForm" element={<RegisterForm/>}></Route>
        {/* <Route path="/RegForm2" element={<RegForm2/>}></Route> */}
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/WomenProduct" element={<WomenProduct/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
