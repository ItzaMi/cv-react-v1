import React, { Component } from "react";
import Github from "./img/github.png";
import Linkedin from "./img/linkedin.png";
import Dribbble from "./img/dribbble.png";
import Instagram from "./img/instagram.png";

class Header extends Component {
  render() {
    return (
      <div id="leftSide">
        <div className="profilePhoto"></div>
        <div id="info">
          <div>
            <h1>Hey, I'm Rui</h1>
            <p>I'm a Web Developer & Designer from Porto, Portugal</p>
            <p>
              Web Developer @{" "}
              <a
                href="https://antisocial.agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                antisocial
              </a>
            </p>
            <div className="socialIcons">
              <a
                href="https://github.com/ItzaMi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="GitHub logo" src={Github}></img>
              </a>
              <a
                href="https://www.linkedin.com/in/rui-sousa-b842598b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="LinkedIn logo" src={Linkedin}></img>
              </a>
              <a
                href="https://dribbble.com/ItzaMi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Dribbble logo" src={Dribbble}></img>
              </a>
              <a
                href="https://www.instagram.com/hey.i.m.tom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Instagram logo" src={Instagram}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
