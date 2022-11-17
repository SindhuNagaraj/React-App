import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="col-12 header">
      <h2 className="title">Naruvi Hospital</h2>
      <ul className="fs-5 fw-bold link">
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/departments">DEPARTMENTS</Link>
        </li>
        <li>
          <Link to="/admin">ADMIN</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li>
          <Link to="/Login">LOGIN</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
