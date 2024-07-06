import React, { useEffect, useRef } from "react";
import ProfileImg from "../assets/images/dgsgd.webp";

function Hero() {

  const imageRef = useRef(null);

  useEffect(() =>{
    const imageElement = imageRef.current;

    setTimeout(() =>{
      imageElement.classList.add('active');
    },100);
  }, []);

  const dot9Ref = useRef(null);

  useEffect(() =>{
    const dot9Element = dot9Ref.current;

    setTimeout(() =>{
      dot9Element.classList.add('active');
    },100);
  },[]);

  return (
    <div>
      <div className="herosectioncom">
        <div>
          <h1>
            I'am <b>Sachin</b>
          </h1>
        </div>
        <div>
          <h3>Web Developer & Frontend Developer</h3>
        </div>

        <div className="profileimage">
          <img src={ProfileImg} className="slide-in" ref={imageRef}/>
        </div>

        <span className="backgrounddots1" ref={dot9Ref}>
          <div class="dot-container">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </span>
      </div>
      <div className="aboutsection">
        <h1>About</h1>
        <p>
          Experienced developer skilled in software and web development,
          proficient in HTML, CSS and JavaScript. Specializes in creating
          responsive web apps and robust software systems. Manages projects from
          conception to deployment, ensuring efficiency and user satisfaction.
          Detail-oriented problem-solver adept at adapting to new technologies
          and collaborating within teams to deliver projects on time and within
          budget.
        </p>
      </div>
    </div>
  );
}

export default Hero;
