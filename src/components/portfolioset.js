import React from "react";

function Portfolioset({ PortImage, PortName, PortDesc, PortLinks }) {
  return (
    <div className="portfoliotile">
      <div className="portfoliotileimage">
        <img src={PortImage} />
      </div>
      <div className="portfoliotileinfosection">
        <div className="portfoliotileinfo">
          <h3>{PortName}</h3>
          <p>{PortDesc}</p>
          <a href={PortLinks} alt="githublink">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolioset;
