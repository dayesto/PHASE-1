import React from "react";
import Navbar from "../general/Navbar";
import Carousel from "./carousel";
import Welcome from "./Welcome";
import Expertise from "./Expertise";
import CaseStudy from "./caseStudy";
import Footer from "../general/Footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <br />
      <br />
      <Welcome />
      <br />
      <br />
      <Expertise />
      <br />
      <br />
      <CaseStudy />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default index;
