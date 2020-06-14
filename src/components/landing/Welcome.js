import React from "react";

const Welcome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-6"
          style={{ textAlign: "left" }}
        >
          <h1>
            <b>Welcome</b>
          </h1>
          <p className="lead">
            Fedem Consulting is an independent Design and Engineering
            Consultancy specialising in Process; Electrical, Control &
            Instrumentation; Mechanical Engineering and Safety in the Oil and
            Gas, Nuclear, Water, Power, Marine and Fine Chemical.
          </p>
          <p className="lead">
            We offer our clients cost effective consultancy services worldwide
            through all phases of Engineering from Conceptual Studies through
            Detailed Design Engineering support to Decommissioning activities.
          </p>
          <p className="lead">
            Our core skills are in Design of Processes, Plant & Equipment;
            Electrical, Instrumentation and Control; Technical and Economic
            Evaluation; Process Simulation (steady state and dynamic
            simulation); Mechanical; R&D; Health, safety & risk aspect; and
            project management.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" style={{ height: "60vh" }}>
              <div className="carousel-item active">
                <img
                  src="/assets/images/7.PNG"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/images/8.PNG"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/images/9.PNG"
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
export default Welcome;
