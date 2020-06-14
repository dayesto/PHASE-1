import React from "react";
import { Link } from "react-router-dom";
const caseStudy = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-6"
          style={{ textAlign: "left" }}
        >
          <h1>
            <b>Case Study</b>
          </h1>
          <p className="lead">
            Using dynamic simulation, we can test and size the recycle valve on
            a compressor train
          </p>
          <Link to="#">Some More Video Case Studies</Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div
            id="carouselExampleControls3"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" style={{ height: "40vh" }}>
              <div className="carousel-item active">
                <img
                  src="/assets/images/6.PNG"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/images/25.PNG"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/images/IMG-20200123-WA0002.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default caseStudy;
