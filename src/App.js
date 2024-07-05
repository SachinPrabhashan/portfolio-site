import "./App.css";
import "./components/skills.css";
import "./components/portfolio.css";
import "./components/experiences.css";
import "./components/contacts.css";
import "./components/footer.css";
import "./components/hero.css";

import React from "react";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Experiences from "./components/experiences";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <div className="herosection">
        <Hero />
      </div>
      <div className="skillsetsection">
        <Skills />
      </div>
      <div className="portfoliosection">
        <Portfolio />
      </div>
      <div className="experiencessection">
        <Experiences />
      </div>
      <div className="contactssection">
        <Contacts />
      </div>
      <div className="footersection">
        <Footer />
      </div>
    </div>
  );
}

export default App;
