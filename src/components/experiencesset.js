import React from "react";

function Experiencesset({JobRole , CompanyName , JobDesc}) {
  return (
    <div>
      <div className="jobrole">
        <h3>{JobRole}</h3>
      </div>
      <div className="companyname">
        <h4>{CompanyName}</h4>
      </div>
      <div className="jobdesc">
        <p>{JobDesc}</p>
      </div>
    </div>
  );
}

export default Experiencesset;
