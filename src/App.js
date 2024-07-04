import "./App.css";
import "./components/skills.css";
import "./components/portfolio.css";
import React from "react";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Experiences from "./components/experiences";

function App() {
  return (
    <div className="container">
      <Hero />
      <div className="skillsetsection">
        <Skills />
      </div>
      <Portfolio />
      <Experiences />
    </div>
  );
}

export default App;
