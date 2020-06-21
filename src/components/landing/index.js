import React from "react";

import Carousel from "./carousel";
import Welcome from "./Welcome";
import Expertise from "./Expertise";
import CaseStudy from "./caseStudy";

const index = () => {
  return (
    <div>
      <Carousel />
      <br />
      <br />
      <Welcome />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <Expertise />
      </div>

      <br />
      <br />
      <CaseStudy />
      <br />
      <br />
    </div>
  );
};
export default index;
