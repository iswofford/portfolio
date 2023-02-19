import React from "react";
import "./Footer.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FaPhoneAlt size={20} aria-hidden="true" />
            <span className="phone">
                <label htmlFor="phone" className="phone">Phone number:</label>
                <a href="tel:+18152600835" id="phone">
                  +1 815 260 0835
                </a>
              </span>
            </div>
            <div className="col-md-6 container-mail">
              <FaEnvelope size={20} aria-hidden="true" />
              <span className="mail">
                <label htmlFor="email" className="email">Email:</label>
                <a href="mailto:irinaswofford@gmail.com" id="email">
                  irinaswofford@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
