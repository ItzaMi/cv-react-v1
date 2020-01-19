import React, { Component } from "react";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

class Content extends Component {
  render() {
    return (
      <div id="rightSide">
        <div id="container">
          <Aboutme />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <div id="resume">
            <a
              href="https://drive.google.com/file/d/1hiWZXG8KO7VV8Q32SI60veNtS4pauTud/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="funkyGradient"
            >
              Get a pdf of my full resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
