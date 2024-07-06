import React from "react";
import Portfolioset from "./portfolioset";

import PortImg01 from "../assets/images/Portfolio/teamtrek.com_(720p Monitor).png";
import PortImg02 from "../assets/images/Portfolio/portfolio-1.jpg";

function Portfolio() {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className="portfoliosection01">
        <Portfolioset
          PortImage={PortImg02}
          PortName={"Secure Spot"}
          PortDesc={"University Locker Booking System"}
          PortLinks={"https://github.com/SachinPrabhashan/SecureSpot"}
        />
      </div>

      <div className="portfoliosection01">
        <Portfolioset
          PortImage={PortImg01}
          PortName={"TeamTrek"}
          PortDesc={"Employee Tracking Management System"}
          PortLinks={"https://github.com/SachinPrabhashan/TeamTrek"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
