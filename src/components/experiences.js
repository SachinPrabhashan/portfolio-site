import React from "react";
import Experiencesset from "./experiencesset";

function Experiences() {
  return (
    <div className="expsection">
        <div>
            <h1>Experiences</h1>
        </div>
      <div className="expsets">
        <Experiencesset
          JobRole={"Software Developer (Intern)"}
          CompanyName={"SENSKA (Pvt) Ltd."}
          JobDesc={"Develop Web Appplication using Laravel framework"}
        />
      </div>
    </div>
  );
}

export default Experiences;
