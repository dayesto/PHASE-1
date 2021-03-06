import React from "react";

const carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "50vh" }}>
        <div className="carousel-item active">
          <img
            src="/assets/images/24.PNG"
            className="d-block w-100"
            alt="..."
            style={{ backgroundPosition: "50% -50%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/4.PNG"
            className="d-block w-100"
            alt="..."
            style={{ backgroundPosition: "-80% -80%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/13.PNG"
            className="d-block w-100"
            alt="..."
            style={{ backgroundPosition: "50% -50%" }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default carousel;
