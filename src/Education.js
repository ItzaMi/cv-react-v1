import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="contentBox">
        <h4>Education</h4>
        <div className="infoBox">
          <p>
            <strong>FreeCodeCamp & Udemy</strong>
            <br></br>
            The Complete JavaScript Course 2019 - Udemy
            <br></br>
            Responsive Web Design Certification (300 hours) - FCC
            <br></br>
            <span className="year">2019</span>
          </p>
          <p>
            <strong>StudioWeb</strong>
            <br></br>
            Full Stack (HTML, CSS, JS, PHP, MySQL) online course
            <br></br>
            <span className="year">2018</span>
          </p>
          <p>
            <strong>Faculty of Psychology and Education Sciences</strong>
            <br></br>
            <strong>Porto University</strong>
            <br></br>
            Master’s Degree in Psychology of Deviant Behaviour and Justice
            <br></br>
            <span className="year">2011 - 2017</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
