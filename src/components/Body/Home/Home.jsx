import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/bannerxr.png").default}
            alt="Third slide"
          />
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/banneroneplus.jpg").default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/banneroneplus2.jpg").default}
            alt="Second slide"
          />
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/google.jpg").default}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/bannerashsan.jpg").default}
            alt="Third slide"
          />
        </Carousel.Item>
       
      </Carousel>
    </>
  );
};

export default Home;
