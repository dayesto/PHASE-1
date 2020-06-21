import React from "react";

const eci = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "70vh" }}>
          <div className="carousel-item active">
            <img
              src="/assets/images/15.PNG"
              className="d-block w-100"
              alt="..."
              style={{ backgroundPosition: "center" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/EC&I.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/17.PNG"
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
      <div style={{ textAlign: "center" }}>
        <h1>Electrical, Control & Instrumentation Engineering</h1>
        <h3>Electrical Control and Instrumentation System Designs</h3>
        <p className="lead">
          Our services cover all life cycle phases from design and development
          through to commissioning and modification. With a highly experience
          workforce, we uphold the highest standards of safety and quality.
        </p>
      </div>
    </div>
  );
};
export default eci;
