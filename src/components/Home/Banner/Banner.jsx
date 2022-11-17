import React from "react";
import "./Banner.css";
import img from "../../../images/hero-bg.png";
import AboutHospital from "../About Hospital/AboutHospital";

const Banner = () => {
  return (
    <>
      <div className="head">
        <img src={img} alt="img" className="head-image"></img>
        <div className="Description">
          <div className="header-1">
            <strong>Welcome to Naruvi Hospital</strong>
          </div>
          <div className="header-2">
            <span className="we_are_here">We are here</span>
            <span className="for_your_care">For Your Care</span>
          </div>
          <div>
            <button>
              <a href="/about">Read More</a>
            </button>
          </div>
        </div>
      </div>
      <AboutHospital />
    </>
  );
};

export default Banner;
