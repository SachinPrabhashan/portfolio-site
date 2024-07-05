import React from "react";
import Phone from '../assets/images/SocialIcon/icons8-phone-35.png';
import Email from '../assets/images/SocialIcon/icons8-email-35.png';
import Facebook from '../assets/images/SocialIcon/icons8-facebook-35.png';
import Instagram from '../assets/images/SocialIcon/icons8-instagram-35.png';
import Linkedin from '../assets/images/SocialIcon/icons8-linkedin-35.png';
import Github from '../assets/images/SocialIcon/icons8-github-35.png';
import X from '../assets/images/SocialIcon/icons8-x-35.png';
import Reddit from '../assets/images/SocialIcon/icons8-reddit-35.png';

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
      <div className="socialicon">
        <img src={Linkedin} />
        <h3>sachinrathnayake</h3>
      </div>
      <div className="socialicon">
        <img src={X} />
        <h3>@spxcviii</h3>
      </div>
      <div className="socialicon">
        <img src={Facebook} />
        <h3>Sachin Prabhashan</h3>
      </div>
      <div className="socialicon">
        <img src={Instagram} />
        <h3>sachin_xcviii</h3>
      </div>
      <div className="socialicon">
        <img src={Reddit} />
        <h3>SachinPrabhashan</h3>
      </div>
      <div className="socialicon">
        <img src={Github} />
        <h3>SachinPrabhashan</h3>
      </div>
    </div>
  );
}

export default Contacts;
