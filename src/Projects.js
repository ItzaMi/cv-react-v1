import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="contentBox">
        <h4>Projects</h4>
        <div className="infoBox">
          <p>
            <a
              className="linkPage"
              href="https://github.com/ItzaMi/cv-react-v1"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS Curriculum Vitae
            </a>
            <br></br>
            Project created using <span className="blackText">ReactJS</span> and
            it looks neat, right?
          </p>
          <p>
            <a
              className="linkPage"
              href="https://github.com/ItzaMi/weather-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather Website
            </a>
            <br></br>
            Project created using{" "}
            <span className="blackText">OpenWeather API</span> and{" "}
            <span className="blackText">JavaScript</span>
          </p>
          <p>
            <a
              className="linkPage"
              href="https://itzami.github.io/Dynamic-Greeting-Landing-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dynamic Landing Page
            </a>{" "}
            <a
              className="github"
              href="https://github.com/ItzaMi/Dynamic-Greeting-Landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br></br>
            Customized greeting and background according to browser's time and
            input fields with local storage using{" "}
            <span className="blackText">JavaScript</span>
          </p>
          <p>
            <a
              className="linkPage"
              href="https://itzami.github.io/JavaScript-TypeWriter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeWriter Landing Page{" "}
            </a>{" "}
            <a
              className="github"
              href="https://github.com/ItzaMi/JavaScript-TypeWriter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br></br>
            Project showcasing a typewriter effect using{" "}
            <span className="blackText">JavaScript</span>
          </p>
          <p>
            <a
              className="linkPage"
              href="https://github.com/ItzaMi/medieval-adventure-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Text Adventure Game
            </a>
            <br></br>
            Ongoing project developed using{" "}
            <span className="blackText">JavaScript</span>
          </p>
          <p>
            <a
              className="linkPage"
              href="https://itzami.github.io/Simple/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simple
            </a>{" "}
            <a
              className="github"
              href="https://github.com/ItzaMi/Simple"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br></br>
            After designing this website and posting it on{" "}
            <a
              className="linkPage"
              href="https://dribbble.com/shots/7127114-SIMPLE-Interactive-Full-Page-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
            , I decided to develop it with{" "}
            <span className="blackText">JavaScript, Sass and CSS Grid</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
