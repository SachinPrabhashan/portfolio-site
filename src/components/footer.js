import React from "react";
import heart from "../assets/images/heart-svgrepo-com.svg";
import reactlogo from "../assets/images/icons8-react-native.svg";

function Footer() {
  return (
    <div className="FooterNote">
      <p class="love">
        Made with <img src={heart} /> by Sachin
      </p>
      <p className="powered">Powered by <img src={reactlogo} /> React Js</p>
    </div>
  );
}

export default Footer;
