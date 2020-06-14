import React, { Fragment } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Expertise = () => {
  const description = (text) => {
    return (
      <Fragment>
        <h2>
          <b>{text}</b>
        </h2>
        <Link to="#">Learn More</Link>
      </Fragment>
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <b>Fields of Expertise</b>
        <div className="container-fluid" style={{ textAlign: "center" }}>
          <div className="row">
            <Card
              style={{ width: 300, margin: "20px" }}
              cover={<img alt="example" src="/assets/images/DYNSIM_13.PNG" />}
              hoverable={true}
            >
              <Meta
                description={description(
                  "Process Engineering (Modeling & Simulation)"
                )}
              />
            </Card>
            <Card
              style={{ width: 300, margin: "20px" }}
              cover={<img alt="example" src="/assets/images/EC&I.png" />}
              hoverable={true}
            >
              <Meta
                description={description(
                  "Electrical, Control & Instrumentation Engineering"
                )}
              />
            </Card>
            <Card
              style={{ width: 300, margin: "20px" }}
              cover={<img alt="example" src="/assets/images/19.PNG" />}
              hoverable={true}
            >
              <Meta description={description("Mechanical Engineering")} />
            </Card>
            <Card
              style={{ width: 300, margin: "20px" }}
              cover={<img alt="example" src="/assets/images/15.PNG" />}
              hoverable={true}
            >
              <Meta description={description("Process Safety")} />
            </Card>
          </div>
        </div>
      </h1>
    </div>
  );
};
export default Expertise;
