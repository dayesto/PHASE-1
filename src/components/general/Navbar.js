import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      // style={{ backgroundColor: "aliceblue" }}
    >
      <Link className="navbar-brand" href="index.html">
        <img
          src="/assets/images/logonew.png"
          alt="..."
          height="50"
          width="100"
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
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b>Home</b> <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              <b>About</b>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                href="./company.html"
                style={{ color: "black" }}
              >
                The Company
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                href="./expertise.html"
                style={{ color: "black" }}
              >
                Fields of Expertise
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                href="#"
                style={{ color: "black" }}
              >
                Management
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              <b>Sectors</b>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                href="./cosultancy.html"
                style={{ color: "black" }}
              >
                Consultancy
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                href="#"
                style={{ color: "black" }}
              >
                Innovation
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                href="#"
                style={{ color: "black" }}
              >
                Projects
              </Link>
            </div>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b>Our Services</b>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b> Specialist Software</b>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b>Training</b>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b>Projects</b>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="#" style={{ color: "black" }}>
              <b>Contact</b>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              News and Case Study
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                News
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
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
