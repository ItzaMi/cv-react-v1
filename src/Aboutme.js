import React, { Component } from "react";
import { aboutMeInfo } from "./contentInfo";

class AboutMe extends Component {
  render() {
    return (
      <div className="contentBox" id="boxInfo">
        {aboutMeInfo.map((info, i) => (
          <div key={i}>
            <h4>{info.title}</h4>
            <div className="infoBox" id="aboutMeParagraphs">
              {info.paragraphs.map((text, index) => (
                <p>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AboutMe;
