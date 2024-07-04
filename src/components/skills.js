import React from "react";
import Skillset from "./skillset";

import Skill01 from "../assets/images/icons8-html.svg";
import Skill02 from "../assets/images/icons8-css.svg";
import Skill03 from "../assets/images/icons8-js.svg";
import Skill04 from "../assets/images/icons8-bootstrap.svg";
import Skill05 from "../assets/images/icons8-laravel-96.png";
import Skill06 from "../assets/images/icons8-adobe-photoshop.svg";
import Skill07 from "../assets/images/icons8-adobe-lightroom.svg";
import Skill08 from "../assets/images/icons8-react-native.svg";
import Skill09 from "../assets/images/icons8-git.svg";

function Skills() {
  return (
    <div className="skillsection">
      <div>
        <h1>Skills</h1>
      </div>
      <div className="skillsetsection">
        <Skillset skillimage={Skill01} skillname={"HTML"} />
        <Skillset skillimage={Skill02} skillname={"CSS"} />
        <Skillset skillimage={Skill03} skillname={"JavaScript"} />
        <Skillset skillimage={Skill04} skillname={"Bootstrap 5"} />
        <Skillset skillimage={Skill05} skillname={"Laravel"} />
        <Skillset skillimage={Skill08} skillname={"React.JS"} />
        <Skillset skillimage={Skill06} skillname={"Photoshop"} />
        <Skillset skillimage={Skill07} skillname={"Lightroom"} />
        <Skillset skillimage={Skill09} skillname={"Git"} />
      </div>
    </div>
  );
}

export default Skills;
