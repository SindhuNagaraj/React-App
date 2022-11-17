import React from "react";
import "./Footer.css";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPhone,
  BsLinkedin,
} from "react-icons/bs";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import footerBg from "../../images/footer-bg.png";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="footer-image">
        <img src={footerBg} width="100%" alt=""></img>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <h3>Contact Us</h3>
                <ol>
                  <li className="footer-list-1">
                    <HiMail className="HiMail" />
                    <a href="mailto:NaruviHospital@gmail.com" className="mail">
                      NaruviHospital@gmail.com
                    </a>
                  </li>
                  <li className="footer-list-2">
                    <BsPhone className="HiMail" />
                    <a href="callto:" className="mail">
                      Call: 044-1092380182
                    </a>
                  </li>
                  <li className="footer-list-3">
                    <HiLocationMarker className="HiMail" />
                    <strong className="mail">Vellore, TamilNadu</strong>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <h3>Quick links</h3>
                <ol>
                  <li className="quick-list-1">
                    <a href="/about" className="mail">
                      About Us
                    </a>
                  </li>
                  <li className="quick-list-2">
                    <a href="/departments" className="mail">
                      Departments
                    </a>
                  </li>
                  <li className="quick-list-3">
                    <a href="/home" className="mail">
                      Home
                    </a>
                  </li>
                  <li className="quick-list-4">
                    <a href="/contact" className="mail">
                      Contact Us
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <h3>Feedback</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer mb-3">
        <div>
          <strong className="copyright">CopyRight@2022 Design & Developed By Subsy Creations</strong>
          <h4>Follow us</h4>
        </div>
        <div className="icons">
          <BsInstagram className="social-icons" />
          <BsFacebook className="social-icons" />
          <BsTwitter className="social-icons" />
          <BsLinkedin className="social-icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
