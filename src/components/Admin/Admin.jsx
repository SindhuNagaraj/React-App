import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/Banner/banner1.jpg";
import banner2 from "../../images/Banner/banner2.jpg";
import banner3 from "../../images/Banner/banner3.jpg";

const Admin = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
  <>
    <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="caption rounded-3">
            <h3>Naruvi Hospital</h3>
            <p>We ensures the best health care as well as clinical service</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3>Naruvi Hospital</h3>
            <p>We ensures the best health care as well as clinical service</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>Naruvi Hospital</h3>
            <p>We ensures the best health care as well as clinical service</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
};

export default Admin;
