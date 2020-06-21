import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0e2255", color: "white" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-3 col-sm-3"
            style={{ textAlign: "left" }}
          >
            <p className="lead">
              <b>Our Latest Work</b>
              <hr className="new2" />
            </p>
            <img
              src="/assets/images/26.PNG"
              alt="work"
              height="150"
              width="150"
              className="image-sizing"
            />
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-3"
            style={{ textAlign: "left" }}
          >
            <p className="lead">
              <b>Navigate</b>
              <hr className="new2" />
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Sectors</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Specialist</Link>
                </li>
                <li>
                  <Link to="#">Training</Link>
                </li>
                <li>
                  <Link to="#">Projects</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </p>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-3"
            style={{ textAlign: "left" }}
          >
            <p className="lead">
              <b>Contact Us</b>
            </p>
            <hr className="new2" />
            <p className="lead" style={{ color: "orange", marginTop: "-2%" }}>
              <b>Office</b>
            </p>
            <p>
              Emilia 11, Primewater View Gardens 2, Oba Saheed Elegushi Street,
              Off Freedom way, Lekki Phase 1, Lagos.
            </p>
            <p>
              33 Skene Crescent, Westhill. AB32 6BN. Aberdeenshire, Scotland.
            </p>
            <p>Email: info@otkltd.com</p>
            <p>
              Tel: 234 (0) 8093563356, +234(0) 8060156326 UK: +44(0)1224966159;
              +447869107574
            </p>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-3"
            style={{ textAlign: "left" }}
          >
            <p className="lead">
              <b>Stay Connected</b>
              <hr className="new2" />
              <ul>
                <li>
                  <Link to="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
