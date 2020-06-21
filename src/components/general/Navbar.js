import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      // style={{ backgroundColor: "aliceblue" }}
    >
      <Link className="navbar-brand" to="/">
        <img
          src="/assets/images/logonew.png"
          alt="..."
          height="100"
          width="200"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: "#0e2255" }}>
              <b>Home</b> <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "#0e2255" }}
            >
              <b>About</b>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                to="./company.html"
                style={{ color: "#0e2255" }}
              >
                The Company
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="./expertise.html"
                style={{ color: "#0e2255" }}
              >
                Fields of Expertise
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="#"
                style={{ color: "#0e2255" }}
              >
                Management
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "#0e2255" }}
            >
              <b>Our Services</b>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                to="/services/processEngineering"
                style={{ color: "#0e2255" }}
              >
                Process Engineering
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="/services/eciEngineering"
                style={{ color: "#0e2255" }}
              >
                EC&I Engineering
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="/services/mechanicalEngineering"
                style={{ color: "#0e2255" }}
              >
                Mechanical Engineering
              </Link>
            </div>
          </li>
          {/* <li className="nav-item active">
            <Link className="nav-link" to="#" style={{ color: "#0e2255" }}>
              <b>Our Services</b>
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="#" style={{ color: "#0e2255" }}>
              <b> Specialist Softwares</b>
            </Link>
          </li>
          {/* <li className="nav-item active">
            <Link className="nav-link" to="#" style={{ color: "#0e2255" }}>
              <b>Training</b>
            </Link>
          </li> */}
          {/* <li className="nav-item active">
            <Link className="nav-link" to="#" style={{ color: "#0e2255" }}>
              <b>Projects</b>
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="#" style={{ color: "#0e2255" }}>
              <b>Contact Us</b>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "#0e2255" }}
            >
              News and Case Study
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" to="#" style={{ color: "#0e2255" }}>
                News
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" to="#" style={{ color: "#0e2255" }}>
                Case Study
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
