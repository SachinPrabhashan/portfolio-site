import React from "react";

function Skillset({ skillimage, skillname }) {
  return (
    <div>
      <div className="skilltile">
        <div className="skilllogo">
          <img src={skillimage} />
        </div>
        <div className="skillname">
          <h3>{skillname}</h3>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
