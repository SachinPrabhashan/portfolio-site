import React from "react";
import Portfolioset from "./portfolioset";

import PortImg01 from "../assets/images/Portfolio/portimages (1).jpg";

function Portfolio() {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className="portfoliosection01">
        <Portfolioset
          PortImage={PortImg01}
          PortName={"Secure Spot"}
          PortDesc={"University Locker Booking System"}
          PortLinks={"www.github.com"}
        />
      </div>

      <div className="portfoliosection01">
        <Portfolioset
          PortImage={PortImg01}
          PortName={"TeamTrek"}
          PortDesc={"Employee Tracking Management System"}
          PortLinks={"www.github.com"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
