import React from "react";
import Phone from "../assets/images/SocialIcon/phone-svgrepo-com.svg";
import Email from "../assets/images/SocialIcon/mail-svgrepo-com.svg";
import Facebook from "../assets/images/SocialIcon/facebook-svgrepo-com.svg";
import Instagram from "../assets/images/SocialIcon/instagram-svgrepo-com.svg";
import Linkedin from "../assets/images/SocialIcon/linkedin-svgrepo-com.svg";
import Github from "../assets/images/SocialIcon/github-142-svgrepo-com.svg";
import X from "../assets/images/SocialIcon/twitter-svgrepo-com.svg";
import Reddit from "../assets/images/SocialIcon/reddit-svgrepo-com.svg";

function Contacts() {
  return (
    <div>
      <div>
        <h1>Contact Me</h1>
      </div>
      <div className="socialicon">
        <img src={Phone} />
        <h3>0760300001</h3>
      </div>
      <div className="socialicon">
        <img src={Email} />
        <h3 className="emailtext">sachinprabhashan@gmail.com</h3>
      </div>
      <div className="socialiconbtn">
        <a href="https://www.linkedin.com/in/sachinrathnayake">
          <img src={Linkedin} />
        </a>
        <a href="https://twitter.com/SPXCVIII">
          <img src={X} />
        </a>
        <a href="https://www.facebook.com/Sachinxcviii?mibextid=ZbWKwL">
          <img src={Facebook} />
        </a>
        <a href="https://www.instagram.com/sachin_xcviii?igsh=OTEwaDBtdG5nenU2">
          <img src={Instagram} />
        </a>
        <a href="https://www.reddit.com/user/SachinPrabhashan/">
          <img src={Reddit} />
        </a>
        <a href="https://github.com/SachinPrabhashan">
          <img src={Github} />
        </a>
      </div>
    </div>
  );
}

export default Contacts;
