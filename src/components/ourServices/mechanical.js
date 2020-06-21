import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const mechanical = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img src="/assets/images/19.PNG" alt="..." />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            style={{ width: "150px", textAlign: "center" }}
          >
            <br />
            <br />
            <br />
            <h1>Mechanical Engineering</h1>
            <h3>A Comprehensive Approach</h3>
            <p className="lead">
              Do you have a project or idea that you’d love to bring to life?
              Since founding my business, I’ve provided my clients with a wide
              range of consulting services such as this one. To find out more,
              get in touch.
            </p>
            <Link to="#!">Learn More</Link>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Fragment>
  );
};

export default mechanical;
