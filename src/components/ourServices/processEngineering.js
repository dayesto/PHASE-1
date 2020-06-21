import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const processEngineering = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            style={{ width: "150px", textAlign: "center" }}
          >
            <br />
            <br />
            <br />
            <h1>Process Engineering</h1>
            <h3>Expert Guidance</h3>
            <p className="lead">
              My clients are my number one priority, and my services prove just
              how committed I am to their success. Book an introductory meeting
              today to learn more about how I can make your business thrive.
            </p>
            <Link to="#!">Learn More</Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img
              src="/assets/images/A.PNG"
              alt="..."
              height="400"
              width="100%"
              style={{ backgroundPosition: "-80% center" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </Fragment>
  );
};

export default processEngineering;
