import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_d_slideshow_GCLP_EN_1024x180_v2_20200918.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
        </div>
        
      </div>
      <div className="checkout_left">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
