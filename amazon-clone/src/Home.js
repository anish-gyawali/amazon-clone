import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/TV/Originals/HNNA/SMLL_S1_02375_DigitalROSStatic_ARDSE_1500x600_AmazonGateway_v4_01_Mockup._CB414912120_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="13252525"
            title="Black hat for winter"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51P0+YMzJVL._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="43567892"
            title="Bluetooth Hat, Bluetooth Beanie Stocking Stuffer for Men Women Gifts for Men Teenage Boys Winter Knitted Beanie with Wireless Stereo Headphone for Running Hiking, Birthday Day"
            price={69.99}
            image="https://m.media-amazon.com/images/I/51vnH625ScL._AC_SR160,160_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="32410927"
            title="adidas Performance Mens Samba Classic Indoor Soccer Shoe"
            price={100.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vSfqv5LSL._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
          <Product
            id="10926271"
            title="adidas Men's Gazelle"
            price={55.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TDq7w4wwL._AC_UL320_SR294,320_.jpg"
            rating={2}
          />
          <Product
            id="98254132"
            title="adidas Originals Men's Superstar Sneaker"
            price={85.0}
            image="https://m.media-amazon.com/images/I/4167riFqAGL._AC_SR160,160_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="09725251"
            title="Gildan Men's Fleece Crewneck Sweatshirt, Style G18000"
            price={34.95}
            image="https://m.media-amazon.com/images/I/41FdcCKiosL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
