import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "../Banner/Banner.css";
import banner2 from "../../../images/Departments/pediatrics-img.jpg";

const AboutHospital = () => {
  return (
    <div className="row">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="banner-2" src={banner2} alt="" />
          </div>
        </div>
    <div className="col-sm-7">
      <div className="p-3">
        <h1 className="fw-extrabold AboutOurHospital mx-3">
          About Our Hospital
        </h1>
        <p className="fs-5">
          Naruvi Hospitals is a destination for world class health care, with
          the latest in medical technology, the best equipment to facilitate
          quick and accurate diagnosis, and the expertise and equipment to
          provide effective treatment that compares with hospitals anywhere in
          the world.
        </p>
        <p className="fs-5">
          The motto of Naruvi is that human care is more than healthcare. We
          prefer quality over anything.
        </p>
      </div>
      <ol className="ol-about">
        <li className="li-about">
          <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
          Browse Our Website
        </li>
        <li className="li-about">
          <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
          Choose Service
        </li>
        <li className="li-about">
          <AiOutlineCheckCircle className="AiOutlineCheckCircle" />
          Send Message
        </li>
      </ol>
    </div>
    </div>
  );
};

export default AboutHospital;
